import React from "react";
import Link from "next/link";
import CodeViewer from "../../src/components/CodeViewer";
import { Content, Iframe } from "../../src/components/Styled";

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
    <div id='opponent-selection'>Make a Selection</div>
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
        We can begin to <b>add some styling</b> to hook our players in.
      </p>
      <Content>
        <CodeViewer tabs={tabs} />
        <Iframe srcDoc={codeString} height={400} width="100%" />
      </Content>
      <p>
        Now it's looking a little better, but it's not very fun yet. Let's{" "}
        <b>add some interactivity.</b>
      </p>
    </div>
  );
}
