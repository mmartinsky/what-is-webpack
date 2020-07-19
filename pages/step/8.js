import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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
  return (
    <div>
      <h1>Global Scope</h1>
      <p>
        One of the issues with the plain JS approach is that every function
        defined goes onto the global scope (aka the window object). In the below
        example, we've imported the React library into our app, which gets put
        onto the window object as window.React. In the next script tag, however,
        we've accidentally overwritted the React function with our own; when our
        index.js script goes to use React, it will get our useless function
        instead of the necessary imported one!
      </p>

      <Tabs>
        <TabList>
          <Tab>index.html</Tab>
        </TabList>
        <TabPanel>
          <SyntaxHighlighter language="html" style={atomDark} showLineNumbers>
            {htmlCodeString}
          </SyntaxHighlighter>
        </TabPanel>
      </Tabs>
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
      <div>
        <Link href="/step/7">
          <button>Previous</button>
        </Link>
        <Link href="/step/8">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}
