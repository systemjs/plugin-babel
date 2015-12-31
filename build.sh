cd build-babel
jspm install --quick --log err
jspm build systemjs-babel.js ../systemjs-babel-browser.js --format amd --skip-source-maps --minify --log ok
jspm build systemjs-babel.js ../systemjs-babel-node.js --format amd --node --skip-source-maps --log ok
jspm run systemjs-build-babel-helpers.js > ../babel-helpers.js
cd ..
