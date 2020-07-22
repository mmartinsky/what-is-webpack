import React from "react";
import CodeViewer from "../../src/components/CodeViewer";
import { Content, Iframe } from "../../src/components/Styled";

export default function Step3(props) {
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
  const jsString = `<script>
    function getRandomInt(max) {
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
  </script>`;
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
  ${jsString}
  ${cssString}
</html>`;
  const tabs = [{ name: "index.html", lang: "html", code: codeString }];
  return (
    <div>
      <h1>Adding Interactivity</h1>
      <p>
        Buttons that don't do anything aren't particularly fun. Using
        Javascript, we can add in some interactivity.
      </p>
      <Content>
        <CodeViewer tabs={tabs} />
        <Iframe srcDoc={codeString} height={400} width="100%" />
      </Content>
      <p>
        We have a playable MVP! It's starting to get a bit unwieldy, so we'll
        need to start splitting up these files.
      </p>
    </div>
  );
}
