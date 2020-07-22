import React from "react";
import Link from "next/link";
import CodeViewer from "../../src/components/CodeViewer";
import { Content, Iframe } from "../../src/components/Styled";

export default function Step1(props) {
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
</html>`;
  const tabs = [{ name: "index.html", lang: "html", code: codeString }];
  return (
    <div>
      <h1>What is a website?</h1>
      <p>
        At its core, a website starts with plain HTML. The web browser parses
        this text and is responsible for rendering it.
      </p>
      <p>Let's use a skeleton for a Rock Paper Scissors game as our example.</p>
      <Content>
        <CodeViewer tabs={tabs} />
        <Iframe srcDoc={codeString} height={400} width="100%" />
      </Content>
      <p>
        Not very exciting, but it's a start. Let's add some styling to jazz it
        up
      </p>
    </div>
  );
}
