SystemJS Babel Plugin
===

Provides Babel transpilation in the browser and in builds when using SystemJS 0.19.12+ and SystemJS Builder 0.15+.

Compatible with the the automatic Rollup optimizations in SystemJS Builder.

## Usage

### SystemJS

The plugin can be used in SystemJS with the following configuration:

```javascript
SystemJS.config({
  map: {
    'plugin-babel': 'path/to/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'path/to/systemjs-plugin-babel/systemjs-babel-browser.js'
  },
  transpiler: 'plugin-babel'
});
```

The plugin can also be configured as a `loader` through metadata in SystemJS.

### jspm

```
jspm install plugin-babel
```

Then set `transpiler: 'plugin-babel'` in the `jspm.js` config file.

Alternatively use `jspm init -p` to set up the plugin automatically.

### Building and Bundling

Build support works with no further configuration through the standard jspm build and bundle commands.

To build with SystemJS builder manually, use the following build configuration:

```javascript
builder.config({
  map: {
    'systemjs-babel-build': 'path/to/systemjs-plugin-babel/systemjs-babel-node.js'
  }
});
builder.bundle('app.js', 'out-bundle.js'); // create a named bundle
builder.buildStatic('app.js', 'out-static.js', { format: 'cjs' }); // create a static optimized build
```

When using `builder.buildStatic`, the ES module structure will be preserved and [Rollup optimizations](https://github.com/rollup/rollup) will included automatically
allowing for static dead code removal.

## ES Features

This repo comes with its own Babel build which includes all ES6 and Stage 3 features, except for the ES6 library polyfills.

If ES6 polyfills are desired it is advisable to import core-js libraries manually as needed.


### Custom Presets and Transforms

Custom presets and transforms can be set via `babelOptions` config:

```javascript
SystemJS.config({
  map: {
    'custom-preset': 'path/to/custom-preset.js',
    'custom-plugin': 'path/to/custom-plugin.js'
  },
  babelOptions: {
    presets: ['custom-preset'],
    plugins: ['custom-plugin']
  }
});
```

This way JSX support or other features can be included as needed.

LICENSE
---

MIT