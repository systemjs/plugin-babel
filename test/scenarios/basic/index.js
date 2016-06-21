'use strict';

var test = require('tape');
var SystemJS = require('systemjs');

test('systemjs-plugin-babel', function (t) {
  t.plan(1);

  // given

  // when
  System.import(__dirname + '/actual.js')

  // then
  .then(function(m) {
    return m.p().then(function (message) {
      t.equal(message, 'Rocks :)');
    });
  })
  .then(t.end, t.end);
});
