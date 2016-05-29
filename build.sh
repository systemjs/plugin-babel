#!/bin/bash -xv

NODE_CWD=./node_modules/.bin

JSPM_CMD=${NODE_CWD}/jspm

JSPM_VERSION=beta
REGENERATOR_VERSION=^0.9.5 

#

LATEST_REGENERATOR_VERSIONS=$(npm v regenerator-runtime@$REGENERATOR_VERSION version)
if [ $(echo $LATEST_REGENERATOR_VERSIONS | wc -l) = "1" ];then
	REGENERATOR_VERSION=$LATEST_REGENERATOR_VERSIONS
else
	REGENERATOR_VERSION=$(echo $LATEST_REGENERATOR_VERSIONS | tail -n 1 | awk '{print $2}' | tr -d "'")
fi

#

cd build-babel
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
  cat jspm_packages/npm/regenerator-runtime@${REGENERATOR_VERSION}/runtime.js
  echo "return module.exports; })({exports:{}});"
) > ../regenerator-runtime.js
cd ..
