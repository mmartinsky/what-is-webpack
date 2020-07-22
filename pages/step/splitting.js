import React from "react";
import CodeViewer from "../../src/components/CodeViewer";
import { Content, Iframe } from "../../src/components/Styled";

export default function Step4(props) {
  const htmlCodeString = `<html>
  <head>
    <script src='./index.js'></script>
    <link rel="stylesheet" href="./index.css" />
  </head>
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
  const cssCodeString = `button {
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
`;
  const jsCodeString = `function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function determineResult(playerChoice, aiChoice){
  if (aiChoice === playerChoice) {
    document.getElementById('result').innerHTML = 'Tie';
  } else if (aiChoice === 0){
    if (playerChoice === 1){
      document.getElementById('result').innerHTML = 'Player Wins';
    }
    else {
      document.getElementById('result').innerHTML = 'AI Wins';
    }
  } else if (aiChoice === 1){
    if (playerChoice === 2){
      document.getElementById('result').innerHTML = 'Player Wins';
    }
    else {
      document.getElementById('result').innerHTML = 'AI Wins';
    }
  } else if (aiChoice === 2){
    if (playerChoice === 0){
      document.getElementById('result').innerHTML = 'Player Wins';
    }
    else {
      document.getElementById('result').innerHTML = 'AI Wins';
    }
  }
}
var choices = [{id: 'rock', value: 0}, {id: 'paper', value: 1}, {id: 'scissors', value: 2}]
choices.forEach(function (choice) {
  document.getElementById(choice.id).addEventListener('click', function() {
    document.getElementById('opponent-selection').innerHTML = 'Choosing...';
    document.getElementById('result').innerHTML = null;
    setTimeout(function() {
      var aiChoice = getRandomInt(3);
      document.getElementById('opponent-selection').innerHTML = choices.find(function (x) {
        return x.value === aiChoice;
      }).id;
      determineResult(choice.value, aiChoice)
    }, 500);
  })
});
`;
  const splitHtmlString = htmlCodeString.split("</html>");
  const combinedString = `${splitHtmlString[0]}<style>${cssCodeString}</style><script>${jsCodeString}</script>${splitHtmlString[1]}`;
  const tabs = [
    { name: "index.html", lang: "html", code: htmlCodeString },
    { name: "index.css", lang: "css", code: cssCodeString },
    { name: "index.js", lang: "js", code: jsCodeString },
  ];
  return (
    <div>
      <h1>File Splitting</h1>
      <p>
        Splitting our files makes it easier to deal with each in isolation, as
        well as making them more portable.
      </p>
      <Content>
        <CodeViewer tabs={tabs} />
        <Iframe srcDoc={combinedString} height={400} width="100%" />
      </Content>
      <p>
        Now our files are a bit more spread out, and should make interacting
        with each much easier.
      </p>
    </div>
  );
}
