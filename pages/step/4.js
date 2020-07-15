import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";

export default function Step4(props) {
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
  <script>
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
  </script>
  <style>
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
  </style>
</html>`;
  return (
    <div>
      <h1>Adding Interactivity</h1>
      <p>
        Buttons that don't do anything aren't particularly fun. Using
        Javascript, we can add in some interactivity.
      </p>
      <SyntaxHighlighter language="html" style={atomDark} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
      <iframe srcDoc={codeString} height={350} width={400} />
      <p>
        We have a playable MVP! It's starting to get a bit unwieldy, so we'll
        need to start splitting up these files.
      </p>
      <div>
        <Link href="/step/4">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}
