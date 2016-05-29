#!/bin/bash -xv

NODE_CWD=./node_modules/.bin
JSPM_CMD=${NODE_CWD}/jspm

BABEL_PLUGIN_TRANSFORM_REGENERATOR_VERSION=^6.9.0
BUILD_DIR=build-babel
JSPM_VERSION=beta
REGENERATOR_VERSION=^0.9.5

#

function getLatestVersionFromRange
{
  local LATEST_VERSIONS=$(npm v $1 version)
  local LATEST_VERSION
  if [ $(echo $LATEST_VERSIONS | wc -l) = "1" ];then
    LATEST_VERSION=$LATEST_VERSIONS
  else
    LATEST_VERSION=$(echo $LATEST_VERSIONS | tail -n 1 | awk '{print $2}' | tr -d "'")
  fi

  echo $LATEST_VERSION
}

function verifyLatestVersionOverrides
{
  local OVERRIDDEN_PACKAGE_DIR="$BUILD_DIR/jspm_packages_override/$1"
  if [ ! -d "$OVERRIDDEN_PACKAGE_DIR" ];then
    echo "Expect $OVERRIDDEN_PACKAGE_DIR to be found" 1>&2
    exit 1
  fi
}

#

LATEST_REGENERATOR_VERSION=$(getLatestVersionFromRange regenerator-runtime@$REGENERATOR_VERSION)
LATEST_BABEL_PLUGIN_TRANSFORM_REGENERATOR_VERSION=$(getLatestVersionFromRange babel-plugin-transform-regenerator@$BABEL_PLUGIN_TRANSFORM_REGENERATOR_VERSION)

#

verifyLatestVersionOverrides "npm/babel-plugin-transform-regenerator@$LATEST_BABEL_PLUGIN_TRANSFORM_REGENERATOR_VERSION"

#

cd $BUILD_DIR
rm -rf jspm_packages node_modules

npm install jspm@${JSPM_VERSION} --cache-min=Infinity
${JSPM_CMD} install --quick --log err
cp -r jspm_packages_override/* jspm_packages

${JSPM_CMD} build systemjs-babel.js ../systemjs-babel-browser.js --format amd --skip-source-maps --skip-rollup --minify --log ok
${JSPM_CMD} build systemjs-babel.js ../systemjs-babel-node.js --format amd --node --skip-source-maps --skip-rollup --log ok
${JSPM_CMD} run systemjs-build-babel-helpers.js > ../babel-helpers.js
${JSPM_CMD} run systemjs-build-modular-babel-helpers.js
(
  echo "export default (function(module) {" ;
  cat jspm_packages/npm/regenerator-runtime@$LATEST_REGENERATOR_VERSION/runtime.js
  echo "return module.exports; })({exports:{}});"
) > ../regenerator-runtime.js
cd ..
