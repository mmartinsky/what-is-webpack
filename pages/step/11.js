import React from "react";

import CodeViewer from "../../src/components/CodeViewer";
import { CodeBlock } from "../../src/components/Styled";

export default function Step11(props) {
  const indexJsCodeString = `import { cube } from "./math";
const cube3 = cube3(3);
console.log("Cube of 3 = ", cube3);`;
  const mathJsCodeString = `export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}`;
  const bundleJsCodeString = `!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 0));
})([
  function (e, t, r) {
    "use strict";
    r.r(t);
    const n = n(3);
    console.log("Cube of 3 = ", n);
  },
]);
  `;
  const developmentCodeString = `/******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId]) {
  /******/ 			return installedModules[moduleId].exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			i: moduleId,
  /******/ 			l: false,
  /******/ 			exports: {}
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.l = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function(exports, name, getter) {
  /******/ 		if(!__webpack_require__.o(exports, name)) {
  /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
  /******/ 		}
  /******/ 	};
  /******/
  /******/ 	// define __esModule on exports
  /******/ 	__webpack_require__.r = function(exports) {
  /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 		}
  /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 	};
  /******/
  /******/ 	// create a fake namespace object
  /******/ 	// mode & 1: value is a module id, require it
  /******/ 	// mode & 2: merge all properties of value into the ns
  /******/ 	// mode & 4: return value when already ns object
  /******/ 	// mode & 8|1: behave like require
  /******/ 	__webpack_require__.t = function(value, mode) {
  /******/ 		if(mode & 1) value = __webpack_require__(value);
  /******/ 		if(mode & 8) return value;
  /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
  /******/ 		var ns = Object.create(null);
  /******/ 		__webpack_require__.r(ns);
  /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
  /******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
  /******/ 		return ns;
  /******/ 	};
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function(module) {
  /******/ 		var getter = module && module.__esModule ?
  /******/ 			function getDefault() { return module['default']; } :
  /******/ 			function getModuleExports() { return module; };
  /******/ 		__webpack_require__.d(getter, 'a', getter);
  /******/ 		return getter;
  /******/ 	};
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = "./sandbox/index.js");
  /******/ })
  /************************************************************************/
  /******/ ({

  /***/ "./sandbox/index.js":
  /*!**************************!*\
    !*** ./sandbox/index.js ***!
    \**************************/
  /*! no exports provided */
  /*! all exports used */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ \"./sandbox/math.js\");\n\r\nconst cube3 = cube3(3);\r\nconsole.log(\"Cube of 3 = \", cube3);\r\n\n\n//# sourceURL=webpack:///./sandbox/index.js?");

  /***/ }),

  /***/ "./sandbox/math.js":
  /*!*************************!*\
    !*** ./sandbox/math.js ***!
    \*************************/
  /*! exports provided: square, cube */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {

  "use strict";
  eval("/* unused harmony export square */\n/* unused harmony export cube */\nfunction square(x) {\r\n  return x * x;\r\n}\r\n\r\nfunction cube(x) {\r\n  return x * x * x;\r\n}\r\n\n\n//# sourceURL=webpack:///./sandbox/math.js?");

  /***/ })

  /******/ });`;
  const tabs = [
    { name: "index.js", lang: "js", code: indexJsCodeString },
    { name: "math.js", lang: "js", code: mathJsCodeString },
    { name: "prod-bundle.js", lang: "js", code: bundleJsCodeString },
    { name: "development-bundle.js", lang: "js", code: developmentCodeString },
  ];
  return (
    <div>
      <h1>Tree Shaking and Code Splitting</h1>
      <p>
        One of the coolest things about webpack is that it creates a dependency
        graph of your application, starting from an entry point. It will
        traverse the imports required by that piece of code, and recursively do
        the same until it identifies what exactly is needed to run the app.
      </p>
      <p>
        In the previous example, the square function was removed from the output
        bundle, because Webpack determined that we weren't using it based on the
        dependency graph. If we instead run Webpack in development mode,{" "}
        <CodeBlock>webpack --mode development</CodeBlock> tree shaking will be
        disabled.
      </p>
      <CodeViewer tabs={tabs} />
      <p>
        A common optimization is to use multiple entrypoints or dynamic imports
        to create separate bundles for each portion of your app - if only one
        page uses a heavy dependency like ag-grid or a charting library, you can
        defer loading of that dependency until that portion is requested.
      </p>
    </div>
  );
}
