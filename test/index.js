'use strict';

var test = require('tape');
var SystemJS = require('systemjs');

System.config({
  map: {
    'plugin-babel': './plugin-babel.js',
    'systemjs-babel-build': './systemjs-babel-node.js'
  },
  transpiler: 'plugin-babel'
});

require('./scenarios/index.js');
