import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Step9(props) {
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
  return (
    <div>
      <h1>Webpack</h1>
      <p>
        To address some of these issues, we can introduce a tool called Webpack.
        Today, at v5, it offers a load of extra functionality, but at its core,
        Webpack is a module bundler. It functions like a compiler, analyzing and
        transforming the code we write into a more effective version for the
        JavaScript interpreter.
      </p>
      <p>
        Passing the following index.js into Webpack results in the output in
        bundle.js
      </p>
      <Tabs>
        <TabList>
          <Tab>index.js</Tab>
          <Tab>math.js</Tab>
          <Tab>bundle.js</Tab>
        </TabList>
        <TabPanel>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            showLineNumbers
          >
            {indexJsCodeString}
          </SyntaxHighlighter>
        </TabPanel>
        <TabPanel>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            showLineNumbers
          >
            {mathJsCodeString}
          </SyntaxHighlighter>
        </TabPanel>
        <TabPanel>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            showLineNumbers
          >
            {bundleJsCodeString}
          </SyntaxHighlighter>
        </TabPanel>
      </Tabs>
      <p>
        It's certainly not recognizable until the very end - you can see our
        cube function listed at the bottom, underneath a lot of minified code.
        Keen readers might also note that it's also encapsulated everything in a
        wrapper function to avoid the scoping issues from
        <a href="/step/8">Pitfall - Global Scope</a> too.
      </p>
      <p>
        We've shown now that we can write our code using modern JavaScript
        syntax (importing from modules), and have it output into a chunk of code
        that is compatible with any browser. But where did the square function
        go?
      </p>
      <div>
        <Link href="/step/8">
          <button>Previous</button>
        </Link>
        <Link href="/step/10">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}
