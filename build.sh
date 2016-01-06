cd build-babel
jspm install --quick --log err
jspm build systemjs-babel.js ../systemjs-babel-browser.js --format amd --skip-source-maps --minify --log ok
jspm build systemjs-babel.js ../systemjs-babel-node.js --format amd --node --skip-source-maps --log ok
jspm run systemjs-build-babel-helpers.js > ../babel-helpers.js
jspm run systemjs-build-modular-babel-helpers.js
(
  echo "export default (function(module) {" ;
  cat jspm_packages/github/facebook/regenerator@0.8.42/runtime.js
  echo "return module.exports; })({exports:{}});"
) > ../regenerator-runtime.js
cd ..
