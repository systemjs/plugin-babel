#!/bin/bash -xv

NODE_CWD=./node_modules/.bin
JSPM_CMD=${NODE_CWD}/jspm

TMP_DIR=test
BUNDLE_DEST_DIR=test
JSPM_VERSION=beta

#

cd $TMP_DIR

npm install jspm@${JSPM_VERSION} --cache-min=Infinity

${JSPM_CMD} install tape=npm:tape --yes --quick --log err
${JSPM_CMD} build tape jspm_bundles/tape.amd-bundle.min.js --format amd --skip-source-maps --skip-rollup --minify --log ok

cd ..
