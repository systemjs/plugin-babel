var babel = require('babel');
var babelRuntimePath = System.normalizeSync('babel-runtime', module.id);
var externalHelpersPath = System.normalizeSync('babel/external-helpers', module.id);

// disable SystemJS runtime detection
System.loadedTranspilerRuntime_ = true;

function prepend(a, b) {
  for (var p in b)
    if (!(p in a))
      a[p] = b[p];
  return a;
}

exports.translate = function(load) {
  var options = {
    modules: 'system',
    sourceMap: true,
    inputSourceMap: load.metadata.sourceMap,
    filename: load.address,
    code: true,
    ast: false,
    keepModuleIdExtensions: true,
    resolveModuleSource: function(m) {
      if (m.substr(0, 14) == 'babel-runtime/')
        m = babelRuntimePath + m.substr(13);
      return m;
    }
  };

  if (load.metadata.babelOptions)
    prepend(options, load.metadata.babelOptions);

  options.plugins = options.plugins.concat(this.babelOptions && this.babelOptions.plugins || []);

  if (this.babelOptions)
    prepend(options, this.babelOptions);

  options.optional = options.optional || [];
  options.optional.push('runtime');

  if (options.blacklist && options.blacklist.indexOf('runtime') != -1)
    options.externalHelpers = true;

  // add the externalHelpers as a dependency of this module
  if (options.externalHelpers)
    load.metadata.deps.push(externalHelpersPath);

  // load any plugins configured
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
    load.metadata.format = 'register';

    // __moduleName wrapping needed until we have a module context specification
    return '(function(__moduleName){' + output.code + '\n})("' + load.name + '");';
  });
};

