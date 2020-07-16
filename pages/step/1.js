import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";

export default function Step1(props) {
  const codeString = `<html>
  <body>
    <h1>Play Rock Paper Scissors</h1>
    <h3>Make a selection</h3>
    <div>
      <button id='rock'>Rock</button>
      <button id='paper'>Paper</button>
      <button id='scissors'>Scissors</button>
    </div>
    <h3>Opponent Selection</h3>
    <div id='opponent-selection'></div>
    <h2>Result</h2>
    <div id='result'></div>
  </body>
</html>`;
  return (
    <div>
      <h1>What is a website?</h1>
      <p>
        At its core, a website is just plain HTML. The web browser parses this
        text and is responsible for rendering it*
      </p>
      <p>Let's use a skeleton for a Rock Paper Scissors game as our example.</p>
      <SyntaxHighlighter language="html" style={atomDark} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
      <iframe srcDoc={codeString} height={300} width={400} />
      <p>
        Not very exciting, but it's a start. Let's add some styling to jazz it
        up
      </p>
      <div>
        <Link href="/">
          <button>Previous</button>
        </Link>
        <Link href="/step/2">
          <button>Next</button>
        </Link>
      </div>
      <aside>* This is how we get browser incompatibilities</aside>
    </div>
  );
}
