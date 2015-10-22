var babel = require('babel');
var babelRuntimePath = stripBaseURL(System.normalizeSync('babel-runtime/', module.id));
var externalHelpersPath = stripBaseURL(System.normalizeSync('babel/external-helpers', module.id));

function stripBaseURL(path) {
  if (path.substr(0, System.baseURL.length) == System.baseURL)
    return path.substr(System.baseURL.length);
}

// disable SystemJS runtime detection
System.loadedTranspilerRuntime_ = true;

function prepend(a, b) {
  for (var p in b)
    if (!(p in a))
      a[p] = b[p];
  return a;
}

exports.translate = function(load) {
  // set module format
  // (in builder we output modules as esm)
  if (!load.metadata.format)
    load.metadata.format = this.builder ? 'esm' : 'register';

  var options = {
    // also pending https://github.com/babel/babel/issues/2514
    //modules: load.metadata.format == 'register' ? 'system' : 'ignore',
    modules: 'system',
    sourceMap: true,
    inputSourceMap: load.metadata.sourceMap,
    filename: load.address,
    code: true,
    ast: false,
    keepModuleIdExtensions: true,
    resolveModuleSource: function(m) {
      if (m.substr(0, 14) == 'babel-runtime/')
        m = babelRuntimePath + m.substr(14);
      return m;
    }
  };

  if (load.metadata.babelOptions)
    prepend(options, load.metadata.babelOptions);

  if (this.babelOptions)
    prepend(options, this.babelOptions);

  options.optional = options.optional || [];
  options.blacklist = options.blacklist || [];
  options.plugins = options.plugins || [];

  if (options.blacklist.indexOf('runtime') != -1) {
    options.externalHelpers = true;
  }
  else {
    if (options.optional.indexOf('runtime') == -1)
      options.optional.push('runtime');
  }

  // add the externalHelpers as a dependency of this module
  if (options.externalHelpers)
    load.metadata.deps.push(externalHelpersPath);

  if (load.metadata.format == 'esm' && options.optional.indexOf('optimisation.modules.system') == -1)
    options.optional.push('optimisation.modules.system');

  // in builder we output modules as esm
  if (this.builder)
    options.blacklist.push('es6.modules');

  var loader = this;
  var pluginPromises = [];

  options.plugins = options.plugins && options.plugins.map(function(plugin) {
    if (typeof plugin == 'string') {
      if (plugin.substr(plugin.length - 6, 6) == ':after')
        plugin = {
          transformer: plugin,
          position: 'after'
        };
      else if (plugin.substr(plugin.length - 7, 7) == ':before')
        plugin = {
          transformer: plugin,
          position: 'before'
        }
      else
        plugin = {
          transformer: plugin
        };
    }

    if (typeof plugin.transformer == 'string')
      pluginPromises.push(
        loader.import(plugin.transformer, module.id).then(function(transformer) {
          plugin.transformer = transformer['default'];
        })
      );

    return plugin;
  });

  return Promise.all(pluginPromises)
  .then(function() {
    var output = babel.transform(load.source, options);

    load.metadata.sourceMap = output.map;

    // __moduleName wrapping needed until we have a module context specification
    if (loader.builder)
      return output.code;
    else
      return '(function(__moduleName){' + output.code + '\n})("' + load.name + '");';
  });
};

