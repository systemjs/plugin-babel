var babel = require('babel');

var output = babel.transform('export var p = 5', {
  sourceMap: true
});

console.log(output.map);