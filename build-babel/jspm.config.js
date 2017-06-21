SystemJS.config({
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.16"
    }
  },
  transpiler: "plugin-babel"
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "babel-runtime": "npm:babel-runtime@6.23.0",
    "babel-preset-react": "npm:babel-preset-react@6.24.1",
    "babel-plugin-syntax-dynamic-import": "npm:babel-plugin-syntax-dynamic-import@6.18.0",
    "color-convert": "npm:color-convert@1.9.0",
    "debug": "npm:debug@2.6.8",
    "babel-core": "npm:babel-core@6.25.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "babel": "npm:babel-core@6.25.0",
    "babel-helpers": "npm:babel-helpers@6.24.1",
    "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.22.0",
    "babel-plugin-external-helpers": "npm:babel-plugin-external-helpers@6.22.0",
    "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0",
    "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.22.0",
    "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.24.1",
    "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.24.1",
    "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.24.1",
    "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.23.0",
    "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.23.0",
    "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.24.1",
    "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.22.0",
    "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1",
    "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.24.1",
    "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.24.1",
    "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.24.1",
    "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.22.0",
    "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.24.1",
    "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.22.0",
    "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.23.0",
    "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.24.1",
    "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.24.1",
    "babel-plugin-transform-runtime": "npm:babel-plugin-transform-runtime@6.23.0",
    "babel-preset-stage-1": "npm:babel-preset-stage-1@6.24.1",
    "babel-preset-stage-2": "npm:babel-preset-stage-2@6.24.1",
    "babel-preset-stage-3": "npm:babel-preset-stage-3@6.24.1",
    "core-js": "npm:core-js@2.4.1",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "regenerator-runtime": "npm:regenerator-runtime@0.10.5",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1"
  },
  packages: {
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:regjsparser@0.1.5": {
      "map": {
        "jsesc": "npm:jsesc@0.5.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.11"
      }
    },
    "npm:regexpu-core@2.0.0": {
      "map": {
        "regenerate": "npm:regenerate@1.3.2",
        "regjsgen": "npm:regjsgen@0.2.0",
        "regjsparser": "npm:regjsparser@0.1.5"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.6",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "randombytes": "npm:randombytes@2.0.5",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:is-finite@1.0.2": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:home-or-tmp@2.0.0": {
      "map": {
        "os-tmpdir": "npm:os-tmpdir@1.0.2",
        "os-homedir": "npm:os-homedir@1.0.2"
      }
    },
    "npm:detect-indent@4.0.0": {
      "map": {
        "repeating": "npm:repeating@2.0.1"
      }
    },
    "npm:repeating@2.0.1": {
      "map": {
        "is-finite": "npm:is-finite@1.0.2"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:babel-plugin-transform-flow-strip-types@6.22.0": {
      "map": {
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-react-jsx-self@6.22.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-react-jsx-source@6.22.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:debug@2.6.8": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:babel-core@6.25.0": {
      "map": {
        "debug": "npm:debug@2.6.8",
        "babel-helpers": "npm:babel-helpers@6.24.1",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "babel-template": "npm:babel-template@6.25.0",
        "babel-messages": "npm:babel-messages@6.23.0",
        "json5": "npm:json5@0.5.1",
        "convert-source-map": "npm:convert-source-map@1.5.0",
        "babel-code-frame": "npm:babel-code-frame@6.22.0",
        "babel-register": "npm:babel-register@6.24.1",
        "babel-traverse": "npm:babel-traverse@6.25.0",
        "minimatch": "npm:minimatch@3.0.4",
        "babel-types": "npm:babel-types@6.25.0",
        "slash": "npm:slash@1.0.0",
        "babel-generator": "npm:babel-generator@6.25.0",
        "private": "npm:private@0.1.7",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4",
        "babylon": "npm:babylon@6.17.3",
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:babel-preset-stage-2@6.24.1": {
      "map": {
        "babel-plugin-syntax-dynamic-import": "npm:babel-plugin-syntax-dynamic-import@6.18.0",
        "babel-preset-stage-3": "npm:babel-preset-stage-3@6.24.1",
        "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.24.1",
        "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.24.1"
      }
    },
    "npm:babel-preset-stage-1@6.24.1": {
      "map": {
        "babel-preset-stage-2": "npm:babel-preset-stage-2@6.24.1",
        "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.24.1",
        "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.22.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:babel-helpers@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.25.0",
        "babel-traverse": "npm:babel-traverse@6.25.0",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:babel-plugin-transform-es2015-classes@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.25.0",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.24.1",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.24.1",
        "babel-traverse": "npm:babel-traverse@6.25.0",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.24.1",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.25.0",
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-parameters@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.25.0",
        "babel-traverse": "npm:babel-traverse@6.25.0",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.24.1",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:babel-preset-react@6.24.1": {
      "map": {
        "babel-preset-flow": "npm:babel-preset-flow@6.23.0",
        "babel-plugin-transform-react-display-name": "npm:babel-plugin-transform-react-display-name@6.25.0",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.24.1",
        "babel-plugin-transform-react-jsx-self": "npm:babel-plugin-transform-react-jsx-self@6.22.0",
        "babel-plugin-transform-react-jsx-source": "npm:babel-plugin-transform-react-jsx-source@6.22.0"
      }
    },
    "npm:babel-plugin-transform-es2015-function-name@6.24.1": {
      "map": {
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.24.1": {
      "map": {
        "regexpu-core": "npm:regexpu-core@2.0.0",
        "babel-helper-regex": "npm:babel-helper-regex@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-object-super@6.24.1": {
      "map": {
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-template@6.25.0": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.25.0",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4",
        "babylon": "npm:babylon@6.17.3"
      }
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.24.1": {
      "map": {
        "babel-types": "npm:babel-types@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.24.1": {
      "map": {
        "babel-types": "npm:babel-types@6.25.0",
        "babel-helper-regex": "npm:babel-helper-regex@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-preset-stage-3@6.24.1": {
      "map": {
        "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.24.1",
        "babel-plugin-transform-async-generator-functions": "npm:babel-plugin-transform-async-generator-functions@6.24.1",
        "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.24.1",
        "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.22.0",
        "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.23.0"
      }
    },
    "npm:babel-plugin-transform-regenerator@6.24.1": {
      "map": {
        "regenerator-transform": "npm:regenerator-transform@0.9.11"
      }
    },
    "npm:babel-plugin-transform-decorators@6.24.1": {
      "map": {
        "babel-types": "npm:babel-types@6.25.0",
        "babel-template": "npm:babel-template@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
        "babel-helper-explode-class": "npm:babel-helper-explode-class@6.24.1"
      }
    },
    "npm:babel-helper-function-name@6.24.1": {
      "map": {
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-traverse": "npm:babel-traverse@6.25.0",
        "babel-template": "npm:babel-template@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-react-jsx@6.24.1": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.24.1"
      }
    },
    "npm:babel-register@6.24.1": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "babel-core": "npm:babel-core@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4",
        "home-or-tmp": "npm:home-or-tmp@2.0.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "source-map-support": "npm:source-map-support@0.4.15"
      }
    },
    "npm:babel-helper-define-map@6.24.1": {
      "map": {
        "babel-types": "npm:babel-types@6.25.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:babel-helper-optimise-call-expression@6.24.1": {
      "map": {
        "babel-types": "npm:babel-types@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-traverse@6.25.0": {
      "map": {
        "debug": "npm:debug@2.6.8",
        "babel-code-frame": "npm:babel-code-frame@6.22.0",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4",
        "babylon": "npm:babylon@6.17.3",
        "invariant": "npm:invariant@2.2.2",
        "globals": "npm:globals@9.18.0"
      }
    },
    "npm:babel-helper-replace-supers@6.24.1": {
      "map": {
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.24.1",
        "babel-traverse": "npm:babel-traverse@6.25.0",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-template": "npm:babel-template@6.25.0",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-for-of@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-external-helpers@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-check-es2015-constants@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-literals@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-runtime@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-spread@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-react-display-name@6.25.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-messages@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-types@6.25.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "lodash": "npm:lodash@4.17.4",
        "esutils": "npm:esutils@2.0.2",
        "to-fast-properties": "npm:to-fast-properties@1.0.3"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.6"
      }
    },
    "npm:babel-plugin-transform-class-constructor-call@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.18.0"
      }
    },
    "npm:regenerator-transform@0.9.11": {
      "map": {
        "babel-types": "npm:babel-types@6.25.0",
        "private": "npm:private@0.1.7",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-exponentiation-operator@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.24.1",
        "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.13.0"
      }
    },
    "npm:babel-plugin-transform-async-generator-functions@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.24.1",
        "babel-plugin-syntax-async-generators": "npm:babel-plugin-syntax-async-generators@6.13.0"
      }
    },
    "npm:babel-helper-regex@6.24.1": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-generator@6.25.0": {
      "map": {
        "lodash": "npm:lodash@4.17.4",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "source-map": "npm:source-map@0.5.6",
        "trim-right": "npm:trim-right@1.0.1",
        "detect-indent": "npm:detect-indent@4.0.0",
        "jsesc": "npm:jsesc@1.3.0"
      }
    },
    "npm:babel-helper-call-delegate@6.24.1": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.25.0",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-helper-hoist-variables@6.24.1": {
      "map": {
        "babel-types": "npm:babel-types@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-helper-get-function-arity@6.24.1": {
      "map": {
        "babel-types": "npm:babel-types@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:babel-plugin-transform-async-to-generator@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.24.1",
        "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0"
      }
    },
    "npm:babel-plugin-transform-class-properties@6.24.1": {
      "map": {
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "babel-template": "npm:babel-template@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0"
      }
    },
    "npm:babel-runtime@6.23.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.10.5"
      }
    },
    "npm:babel-code-frame@6.22.0": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@3.0.1",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:babel-plugin-transform-export-extensions@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.13.0"
      }
    },
    "npm:babel-plugin-transform-object-rest-spread@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.13.0"
      }
    },
    "npm:minimatch@3.0.4": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.8"
      }
    },
    "npm:babel-preset-flow@6.23.0": {
      "map": {
        "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.22.0"
      }
    },
    "npm:source-map-support@0.4.15": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:buffer@5.0.6": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:babel-helper-explode-class@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-traverse": "npm:babel-traverse@6.25.0",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.24.1"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8",
        "cipher-base": "npm:cipher-base@1.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.0"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.6",
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:babel-helper-builder-react-jsx@6.24.1": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.25.0"
      }
    },
    "npm:babel-helper-builder-binary-assignment-operator-visitor@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.24.1"
      }
    },
    "npm:babel-helper-remap-async-to-generator@6.24.1": {
      "map": {
        "babel-template": "npm:babel-template@6.25.0",
        "babel-types": "npm:babel-types@6.25.0",
        "babel-traverse": "npm:babel-traverse@6.25.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.23.0"
      }
    },
    "npm:brace-expansion@1.1.8": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@1.0.0"
      }
    },
    "npm:readable-stream@2.2.11": {
      "map": {
        "string_decoder": "npm:string_decoder@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.0.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8",
        "cipher-base": "npm:cipher-base@1.0.3"
      }
    },
    "npm:pbkdf2@3.0.12": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.6",
        "create-hash": "npm:create-hash@1.1.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8",
        "safe-buffer": "npm:safe-buffer@5.1.0"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.0"
      }
    },
    "npm:string_decoder@1.0.2": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.0.1"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:babel-helper-bindify-decorators@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-traverse": "npm:babel-traverse@6.25.0",
        "babel-types": "npm:babel-types@6.25.0"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:babel-helper-explode-assignable-expression@6.24.1": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.25.0",
        "babel-runtime": "npm:babel-runtime@6.23.0",
        "babel-types": "npm:babel-types@6.25.0"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.1"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "brorand": "npm:brorand@1.1.0",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:color-convert@1.9.0": {
      "map": {
        "color-name": "npm:color-name@1.1.2"
      }
    }
  }
});