SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/",
    "canvas-webworker/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.7",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
      "EventDispatcher": "github:mrdoob/eventdispatcher.js@1.0.0",
      "worker": "github:casperlamboo/plugin-worker@master",
      "module": "github:jspm/nodelibs-module@0.2.0-alpha"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {}
      },
      "npm:core-js@1.2.7": {
        "map": {
          "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  map: {
    "babel": "npm:babel-core@5.8.38"
  },
  packages: {
    "canvas-webworker": {
      "main": "index.js",
      "format": "esm",
      "meta": {
        "*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "stage1": true
          }
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "clipper-js": "github:Doodle3D/clipper-js@0.0.2",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "dgram": "github:jspm/nodelibs-dgram@0.2.0-alpha",
    "dns": "github:jspm/nodelibs-dns@0.2.0-alpha",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "get-pixels": "npm:get-pixels@3.3.0",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jsbn": "npm:jsbn@0.1.0",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
    "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "tweetnacl": "npm:tweetnacl@0.13.3",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:Doodle3D/clipper-js@0.0.2": {
      "map": {
        "clipper-lib": "npm:clipper-lib@1.0.0"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:asn1@0.2.3": {
      "map": {
        "sys": "github:jspm/nodelibs-util@0.2.0-alpha"
      }
    },
    "npm:assert-plus@0.2.0": {
      "map": {}
    },
    "npm:assert-plus@1.0.0": {
      "map": {}
    },
    "npm:async@1.5.2": {
      "map": {}
    },
    "npm:aws-sign2@0.6.0": {
      "map": {}
    },
    "npm:aws4@1.4.1": {
      "map": {}
    },
    "npm:bl@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:bn.js@4.11.5": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "randombytes": "npm:randombytes@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.3.1",
        "inherits": "npm:inherits@2.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@2.0.6"
      }
    },
    "npm:buffer-xor@1.0.3": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:caseless@0.11.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:clipper-lib@1.0.0": {
      "map": {}
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "elliptic": "npm:elliptic@6.3.1"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "inherits": "npm:inherits@2.0.1",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:cwise-compiler@1.1.2": {
      "map": {
        "uniq": "npm:uniq@1.0.1"
      }
    },
    "npm:dashdash@1.14.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:data-uri-to-buffer@0.0.3": {
      "map": {}
    },
    "npm:delayed-stream@1.0.0": {
      "map": {}
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3",
        "inherits": "npm:inherits@2.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:extsprintf@1.0.2": {
      "map": {}
    },
    "npm:forever-agent@0.6.1": {
      "map": {}
    },
    "npm:form-data@1.0.0-rc4": {
      "map": {
        "async": "npm:async@1.5.2",
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.11"
      }
    },
    "npm:generate-function@2.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:get-pixels@3.3.0": {
      "map": {
        "data-uri-to-buffer": "npm:data-uri-to-buffer@0.0.3",
        "jpeg-js": "npm:jpeg-js@0.1.2",
        "mime-types": "npm:mime-types@2.1.11",
        "ndarray": "npm:ndarray@1.0.18",
        "ndarray-pack": "npm:ndarray-pack@1.2.0",
        "node-bitmap": "npm:node-bitmap@0.0.1",
        "omggif": "npm:omggif@1.0.8",
        "parse-data-uri": "npm:parse-data-uri@0.2.0",
        "pngjs": "npm:pngjs@2.3.1",
        "request": "npm:request@2.73.0",
        "through": "npm:through@2.3.8"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:graceful-readlink@1.0.1": {
      "map": {}
    },
    "npm:har-validator@2.0.6": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "commander": "npm:commander@2.9.0",
        "is-my-json-valid": "npm:is-my-json-valid@2.13.1",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "boom": "npm:boom@2.10.1",
        "cryptiles": "npm:cryptiles@2.0.5",
        "hoek": "npm:hoek@2.16.3",
        "sntp": "npm:sntp@1.0.9",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:hoek@2.16.3": {
      "map": {}
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "assert-plus": "npm:assert-plus@0.2.0",
        "jsprim": "npm:jsprim@1.3.0",
        "sshpk": "npm:sshpk@1.8.3"
      }
    },
    "npm:inherits@2.0.1": {
      "map": {}
    },
    "npm:is-buffer@1.1.3": {
      "map": {}
    },
    "npm:is-my-json-valid@2.13.1": {
      "map": {
        "generate-function": "npm:generate-function@2.0.0",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "jsonpointer": "npm:jsonpointer@2.0.0",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:is-typedarray@1.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:isarray@1.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:isstream@0.1.2": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:jpeg-js@0.1.2": {
      "map": {}
    },
    "npm:jsbn@0.1.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:jsonpointer@2.0.0": {
      "map": {}
    },
    "npm:jsprim@1.3.0": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2",
        "json-schema": "npm:json-schema@0.2.2",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:mime-db@1.23.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:mime-types@2.1.11": {
      "map": {
        "mime-db": "npm:mime-db@1.23.0"
      }
    },
    "npm:ndarray-pack@1.2.0": {
      "map": {
        "cwise-compiler": "npm:cwise-compiler@1.1.2",
        "ndarray": "npm:ndarray@1.0.18"
      }
    },
    "npm:ndarray@1.0.18": {
      "map": {
        "iota-array": "npm:iota-array@1.0.0",
        "is-buffer": "npm:is-buffer@1.1.3"
      }
    },
    "npm:node-bitmap@0.0.1": {
      "map": {}
    },
    "npm:node-uuid@1.4.7": {
      "map": {}
    },
    "npm:oauth-sign@0.8.2": {
      "map": {}
    },
    "npm:omggif@1.0.8": {
      "map": {}
    },
    "npm:pako@0.2.8": {
      "map": {}
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.8.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:parse-data-uri@0.2.0": {
      "map": {
        "data-uri-to-buffer": "npm:data-uri-to-buffer@0.0.3"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:pngjs@2.3.1": {
      "map": {}
    },
    "npm:process-nextick-args@1.0.7": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.5",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:punycode@1.3.2": {
      "map": {}
    },
    "npm:randombytes@2.0.3": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:request@2.73.0": {
      "map": {
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "aws4": "npm:aws4@1.4.1",
        "bl": "npm:bl@1.1.2",
        "caseless": "npm:caseless@0.11.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "extend": "npm:extend@3.0.0",
        "forever-agent": "npm:forever-agent@0.6.1",
        "form-data": "npm:form-data@1.0.0-rc4",
        "har-validator": "npm:har-validator@2.0.6",
        "hawk": "npm:hawk@3.1.3",
        "http-signature": "npm:http-signature@1.1.1",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime-types": "npm:mime-types@2.1.11",
        "node-uuid": "npm:node-uuid@1.4.7",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "qs": "npm:qs@6.2.0",
        "stringstream": "npm:stringstream@0.0.5",
        "tough-cookie": "npm:tough-cookie@2.2.2",
        "tunnel-agent": "npm:tunnel-agent@0.4.3"
      }
    },
    "npm:ripemd160@1.0.1": {
      "map": {}
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:sshpk@1.8.3": {
      "map": {
        "asn1": "npm:asn1@0.2.3",
        "assert-plus": "npm:assert-plus@1.0.0",
        "dashdash": "npm:dashdash@1.14.0",
        "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
        "getpass": "npm:getpass@0.1.6",
        "jodid25519": "npm:jodid25519@1.0.2",
        "jsbn": "npm:jsbn@0.1.0",
        "tweetnacl": "npm:tweetnacl@0.13.3"
      }
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:stringstream@0.0.5": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:supports-color@2.0.0": {
      "map": {}
    },
    "npm:through@2.3.8": {
      "map": {}
    },
    "npm:tough-cookie@2.2.2": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:tunnel-agent@0.4.3": {
      "map": {}
    },
    "npm:util-deprecate@1.0.2": {
      "map": {}
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:xtend@4.0.1": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.7.1"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:buffer@4.7.1": {
      "map": {
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-http@2.3.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@2.1.4",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.4"
      }
    },
    "npm:readable-stream@2.1.4": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.3.2"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    }
  }
});
