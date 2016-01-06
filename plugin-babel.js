var babel = require('systemjs-babel-build').babel;

// the SystemJS babel build includes standard presets
var es2015 = require('systemjs-babel-build').presetES2015;
var es2015Register = require('systemjs-babel-build').presetES2015Register;
var modulesRegister = require('systemjs-babel-build').modulesRegister;
var stage3 = require('systemjs-babel-build').presetStage3;

var externalHelpers = require('systemjs-babel-build').externalHelpers;
var runtimeTransform = require('systemjs-babel-build').runtimeTransform;

var babelRuntimePath = System.decanonicalize('babel-runtime/', module.id);
var modularHelpersPath = System.decanonicalize('./babel-helpers/', module.id);
var externalHelpersPath = System.decanonicalize('./babel-helpers.js', module.id);
var regeneratorRuntimePath = System.decanonicalize('./regenerator-runtime.js', module.id);

// in builds we want to embed canonical names to helpers
if (System.getCanonicalName) {
  babelRuntimePath = System.getCanonicalName(babelRuntimePath);
  modularHelpersPath = System.getCanonicalName(modularHelpersPath);
  externalHelpersPath = System.getCanonicalName(externalHelpersPath);
  regeneratorRuntimePath = System.getCanonicalName(regeneratorRuntimePath);
}

// disable SystemJS runtime detection
SystemJS._loader.loadedTranspilerRuntime = true;

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
  // we don't transpile anything other than CommonJS or ESM
  if (load.metadata.format == 'global' || load.metadata.format == 'amd' || load.metadata.format == 'json')
    throw new TypeError('plugin-babel cannot transpile ' + load.metadata.format + ' modules. Ensure "' + load.name + '" is configured not to use this loader.');

  var loader = this;
  var pluginLoader = loader.pluginLoader || loader;

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
        pluginAndPresetModuleLoads.push(pluginLoader['import'](preset, module.id));
    });

  if (babelOptions.plugins)
    babelOptions.plugins.forEach(function(plugin) {
      if (typeof plugin == 'string')
        pluginAndPresetModuleLoads.push(pluginLoader['import'](plugin, module.id));
    });

  return Promise.all(pluginAndPresetModuleLoads)
  .then(function(pluginAndPresetModules) {
    var curPluginOrPresetModule = 0;

    var presets = [];
    var plugins = [];

    if (babelOptions.stage3)
      presets.push(stage3);

    if (babelOptions.modularRuntime) {
      if (load.metadata.format == 'cjs')
        throw new TypeError('plugin-babel does not support modular runtime for CJS module transpilations. Set babelOptions.modularRuntime: false if needed.');
      presets.push(runtimeTransform);
    }
    else {
      if (load.metadata.format == 'cjs')
        load.source = 'var babelHelpers = require("' + externalHelpersPath + '");' + load.source;
      else
        load.source = 'import babelHelpers from "' + externalHelpersPath + '";' + load.source;
      presets.push(externalHelpers);
    }
    
    if (babelOptions.es2015)
      presets.push((loader.builder || load.metadata.format == 'cjs') ? es2015 : es2015Register);
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
        if (m.substr(0, 22) == 'babel-runtime/helpers/') {
          m = modularHelpersPath + m.substr(22) + '.js';
        }
        else if (m == 'babel-runtime/regenerator') {
          m = regeneratorRuntimePath;
        }
        else if (m.substr(0, 14) == 'babel-runtime/') {
          if (babelRuntimePath == 'babel-runtime/')
            throw new Error('The babel-runtime module must be mapped to support modular helpers and builtins. If using jspm run jspm install npm:babel-runtime.');
          m = babelRuntimePath + m.substr(14) + '.js';
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

