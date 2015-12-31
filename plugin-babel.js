var babel = require('systemjs-babel-build').babel;

// the SystemJS babel build includes standard presets
var es2015 = require('systemjs-babel-build').presetES2015;
var es2015Register = require('systemjs-babel-build').presetES2015Register;
var modulesRegister = require('systemjs-babel-build').modulesRegister;
var stage3 = require('systemjs-babel-build').presetStage3;

var externalHelpers = require('systemjs-babel-build').externalHelpers;
var runtimeTransform = require('systemjs-babel-build').runtimeTransform;

var babelRuntimePath = stripBaseURL(System.decanonicalize('babel-runtime/', module.id));
var externalHelpersPath = stripBaseURL(System.decanonicalize('./babel-helpers.js', module.id));

function stripBaseURL(path) {
  if (path.substr(0, System.baseURL.length) == System.baseURL)
    return path.substr(System.baseURL.length);
}

// disable SystemJS runtime detection
SystemJS._loader.loadedTranspilerRuntime_ = true;

function prepend(a, b) {
  for (var p in b)
    if (!(p in a))
      a[p] = b[p];
  return a;
}

/*
 * babelOptions:
 *   modularRuntime: true / false (whether to use babel-runtime or babel/external-helpers respectively)
 *   sourceMaps: true / false (defaults to true) Not working pending https://phabricator.babeljs.io/T6903
 *   es2015: true / false (defaults to true)
 *   stage3: true / false (defaults to true)
 *   plugins: array of custom plugins (objects or module name strings)
 *   presets: array of custom presets (objects or module name strings)
 *   moduleName: true / false (whether to set __moduleName, defaults to false) needed pending https://phabricator.babeljs.io/T6899
 *
 * babelOptions can be set at SystemJS.babelOptions OR on the metadata object for a given module
 */
var defaultBabelOptions = {
  modularRuntime: true,
  sourceMaps: true,
  es2015: true,
  stage3: true,
  moduleName: false
};

exports.translate = function(load) {
  var loader = this;

  var babelOptions = {};

  if (load.metadata.babelOptions)
    prepend(babelOptions, load.metadata.babelOptions);

  if (loader.babelOptions)
    prepend(babelOptions, loader.babelOptions);

  prepend(babelOptions, defaultBabelOptions);

  // determine any plugins or preset strings which need to be imported as modules
  var pluginAndPresetModuleLoads = [];

  if (babelOptions.presets)
    babelOptions.presets.forEach(function(preset) {
      if (typeof preset == 'string')
        pluginAndPresetModuleLoads.push(loader['import'](preset, module.id));
    });

  if (babelOptions.plugins)
    babelOptions.plugins.forEach(function(plugin) {
      if (typeof plugin == 'string')
        pluginAndPresetModuleLoads.push(loader['import'](plugin, module.id));
    });

  return Promise.all(pluginAndPresetModuleLoads)
  .then(function(pluginAndPresetModules) {
    var curPluginOrPresetModule = 0;

    var presets = [];
    var plugins = [];

    if (babelOptions.stage3)
      presets.push(stage3);

    if (babelOptions.modularRuntime) {
      presets.push(runtimeTransform);
    }
    else {
      load.source = 'import * as babelHelpers from "' + externalHelpersPath + '";' + load.source;
      presets.push(externalHelpers);
    }
    
    if (babelOptions.es2015)
      presets.push(loader.builder ? es2015 : es2015Register);
    else 
      presets.push(modulesRegister);

    if (babelOptions.presets)
      babelOptions.presets.forEach(function(preset) {
        if (typeof preset == 'string')
          presets.push(pluginAndPresetModules[curPluginOrPresetModule++]);
        else
          presets.push(preset);
      });

    if (babelOptions.plugins)
      babelOptions.plugins.forEach(function(plugin) {
        if (typeof plugin == 'string')
          plugins.push(pluginAndPresetModules[curPluginOrPresetModule++]);
        else
          plugins.push(plugin);
      });

    var output = babel.transform(load.source, {
      plugins: plugins,
      presets: presets,
      filename: load.address,
      sourceMap: babelOptions.sourceMap,
      inputSourceMap: load.metadata.sourceMap,
      code: true,
      ast: false,
      resolveModuleSource: function(m) {
        if (m.substr(0, 14) == 'babel-runtime/') {
          if (babelRuntimePath == 'babel-runtime/')
            throw new Error('The babel-runtime module must be mapped to support modular helpers and builtins. If using jspm run jspm install npm:babel-runtime.');
          m = babelRuntimePath + m.substr(14);
        }
        return m;
      }
    });

    // add babelHelpers as a dependency for non-modular runtime
    if (!babelOptions.modularRuntime)
      load.metadata.deps.push(externalHelpersPath);

    // set output module format
    // (in builder we output modules as esm)
    if (!load.metadata.format || load.metadata.format == 'detect')
      load.metadata.format = loader.builder ? 'esm' : 'register';

    load.metadata.sourceMap = output.map;

    if (loader.builder || !babelOptions.moduleName)
      return output.code;
    else
      return '(function(__moduleName){' + output.code + '\n})("' + load.name + '");';
  });
};

