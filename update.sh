#!/bin/bash -xv

NODE_CWD=./node_modules/.bin
JSPM_CMD=${NODE_CWD}/jspm

JSPM_VERSION=beta

#

cd build-babel

npm install jspm@${JSPM_VERSION} --cache-min=Infinity
${JSPM_CMD} install \
  babel=npm:babel-core \
  babel-helpers=npm:babel-helpers \
  babel-plugin-check-es2015-constants=npm:babel-plugin-check-es2015-constants \
  babel-plugin-external-helpers=npm:babel-plugin-external-helpers \
  babel-plugin-transform-es2015-arrow-functions=npm:babel-plugin-transform-es2015-arrow-functions \
  babel-plugin-transform-es2015-block-scoped-functions=npm:babel-plugin-transform-es2015-block-scoped-functions \
  babel-plugin-transform-es2015-block-scoping=npm:babel-plugin-transform-es2015-block-scoping \
  babel-plugin-transform-es2015-classes=npm:babel-plugin-transform-es2015-classes \
  babel-plugin-transform-es2015-computed-properties=npm:babel-plugin-transform-es2015-computed-properties \
  babel-plugin-transform-es2015-destructuring=npm:babel-plugin-transform-es2015-destructuring \
  babel-plugin-transform-es2015-for-of=npm:babel-plugin-transform-es2015-for-of \
  babel-plugin-transform-es2015-function-name=npm:babel-plugin-transform-es2015-function-name \
  babel-plugin-transform-es2015-literals=npm:babel-plugin-transform-es2015-literals \
  babel-plugin-transform-es2015-modules-systemjs=npm:babel-plugin-transform-es2015-modules-systemjs \
  babel-plugin-transform-es2015-object-super=npm:babel-plugin-transform-es2015-object-super \
  babel-plugin-transform-es2015-parameters=npm:babel-plugin-transform-es2015-parameters \
  babel-plugin-transform-es2015-shorthand-properties=npm:babel-plugin-transform-es2015-shorthand-properties \
  babel-plugin-transform-es2015-spread=npm:babel-plugin-transform-es2015-spread \
  babel-plugin-transform-es2015-sticky-regex=npm:babel-plugin-transform-es2015-sticky-regex \
  babel-plugin-transform-es2015-template-literals=npm:babel-plugin-transform-es2015-template-literals \
  babel-plugin-transform-es2015-typeof-symbol=npm:babel-plugin-transform-es2015-typeof-symbol \
  babel-plugin-transform-es2015-unicode-regex=npm:babel-plugin-transform-es2015-unicode-regex \
  babel-plugin-transform-regenerator=npm:babel-plugin-transform-regenerator \
  babel-plugin-transform-runtime=npm:babel-plugin-transform-runtime \
  babel-preset-stage-1=npm:babel-preset-stage-1 \
  babel-preset-stage-2=npm:babel-preset-stage-2 \
  babel-preset-stage-3=npm:babel-preset-stage-3 \
  core-js=npm:core-js \
  regenerator-runtime=npm:regenerator-runtime

cd ..
