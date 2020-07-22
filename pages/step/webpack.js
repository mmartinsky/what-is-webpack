import React from "react";
import CodeViewer from "../../src/components/CodeViewer";
import { CodeBlock } from "../../src/components/Styled";

export default function Step9(props) {
  const indexJsCodeString = `import { cube } from "./math";
const cube3 = cube(3);
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
    const n = (o = 3) * o * o;
    var o;
    console.log("Cube of 3 = ", n);
  },
]);`;
  const tabs = [
    { name: "index.js", lang: "js", code: indexJsCodeString },
    { name: "math.js", lang: "js", code: mathJsCodeString },
    { name: "main.js", lang: "js", code: bundleJsCodeString },
  ];
  return (
    <div>
      <h1>Webpack</h1>
      <p>
        To address some of these issues, we can introduce a tool called Webpack.
        At its core, <b>Webpack is a module bundler</b>. It functions like a
        compiler, <b>analyzing and transforming the code we write</b> into a
        more effective version for the JavaScript interpreter.
      </p>
      <p>
        Running the <CodeBlock>webpack</CodeBlock> command on the following
        directory results in the main.js file.
      </p>
      <CodeViewer tabs={tabs} />
      <p>
        It's certainly not recognizable until the very end -{" "}
        <b>you can see our cube function listed at the bottom</b>, underneath a
        lot of minified code. Keen readers might also note that it's also
        encapsulated everything in a wrapper function to avoid the scoping
        issues from <a href="/step/scope">Global Scope</a> too.
      </p>
      <p>
        We've shown now that we can write our code using modern JavaScript
        syntax (importing from modules), and have it output into a chunk of code
        that is compatible with any browser.{" "}
        <b>
          But how did Webpack know which file to start with - and where did the
          square function go?
        </b>
      </p>
    </div>
  );
}
