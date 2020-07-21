import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import CodeViewer from "../../src/components/CodeViewer";

export default function Step2(props) {
  const cssString = `<style>
  button {
      border-radius: 3px;
      font-weight: bold;
      margin: 0.5rem 0;
      padding: 5px 10px;
      color: #fff;
  }
  button:hover {
      cursor: pointer;
      filter: brightness(1.2);
  }
  #rock {
      background-color: #118bee;
      border: 2px solid #118bee;
  }
  #paper {
      background-color: #e311ee;
      border: 2px solid #e311ee;
  }
  #scissors {
      background-color: #ee7411;
      border: 2px solid #ee7411;
  }
</style>`;
  const codeString = `<html>
  <body>
    <h2>Play Rock Paper Scissors</h2>
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
  ${cssString}
</html>`;
  const tabs = [{ name: "index.html", lang: "html", code: codeString }];
  return (
    <div>
      <h1>HTML + CSS</h1>
      <p>
        We can begin to add some styling to hook the players in our quest to
        dethrone Minecraft.
      </p>
      <CodeViewer tabs={tabs} height={"400px"} />
      <iframe srcDoc={codeString} height={300} width={400} />
      <p>
        Now it's looking a little better, but it's not very fun yet. Let's add
        some interactivity.
      </p>
      <div>
        <Link href="/step/1">
          <button>Previous</button>
        </Link>
        <Link href="/step/3">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}
