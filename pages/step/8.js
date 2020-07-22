import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import CodeViewer from "../../src/components/CodeViewer";
import { CodeBlock } from "../../src/components/Styled";

export default function Step8(props) {
  const htmlCodeString = `<html>
  <head>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script>
      function React(){
        console.log('This clobbers the React import');
      }
    </script>
    <script src=./index.js"></script>
    <link rel="stylesheet" href="./index.css" />
  </head>
</html>`;
  const tabs = [{ name: "index.html", lang: "html", code: htmlCodeString }];
  return (
    <div>
      <h1>Global Scope</h1>
      <p>
        One of the issues with the plain JS approach is that every function
        defined goes onto the global scope (aka the window object). In the below
        example, we've imported the React library into our app, which gets put
        onto the window object as <CodeBlock>window.React</CodeBlock>. In the
        next script tag, however, we've accidentally overwritten the React
        function with our own; when our index.js script goes to use React, it
        will get our useless function instead of the necessary imported one!
      </p>
      <CodeViewer tabs={tabs} height="300px" />
      <p>
        This may seem extreme, and React is well known enough that there would
        be a low risk of this occuring. But with thousands of packages in a
        midsized application, it could certainly happen. It requires more
        careful management of scope, and leads to some complex syntax and
        closures to avoid doing this to consumers of shared code.
      </p>
      <SyntaxHighlighter language="jsx" style={atomDark} showLineNumbers>
        {`var Module = (function() {
 // some code for your module
}());`}
      </SyntaxHighlighter>
    </div>
  );
}
