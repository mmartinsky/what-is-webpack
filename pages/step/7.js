import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Step7(props) {
  const pureJsCodeString = `const React = require('react');
const ReactDOM = require('react-dom');
const {determineResult, getRandomInt} = require('./utils');

const e = React.createElement;

// Reusable Option Button Component
function OptionButton(props) {
  return e(
    "button",
    { onClick: () => props.onClick(props.value), id: props.name },
    props.name
  );
}

function App() {
  // set up our app state
  const [playerChoice, setPlayerChoice] = React.useState(null);
  const [aiChoice, setAiChoice] = React.useState(null);
  const [result, setResult] = React.useState(null);

  // each time player makes a choice, run the below code
  React.useEffect(() => {
    const aiChoice = getRandomInt(3);
    const result = determineResult(playerChoice, aiChoice);
    setAiChoice(aiChoice);
    setResult(result);
  }, [playerChoice]);

  return e(
    'div',
    null,
    [
      e('h1', null, 'Play Rock Paper Scissors'),
      e('h2', null, 'Make a selection'),
      e('div', null, [
        e(OptionButton, {name: 'rock', value: 0, onClick: setPlayerChoice}),
        e(OptionButton, {name: 'paper', value: 1, onClick: setPlayerChoice}),
        e(OptionButton, {name: 'scissors', value: 2, onClick: setPlayerChoice}),
      ]),
      e('h2', null, 'Opponent Selection'),
      e('p', null, aiChoice),
      e('h2', null, 'Result'),
      e('p', null, result),
    ]
  )
}

// render the app to an element with ID = 'root' in the HTML document
ReactDOM.render(e(App), document.getElementById('root'));
  `;
  const jsxCodeString = `const React = require('react');
const ReactDOM = require('react-dom');
const {determineResult, getRandomInt} = require('./utils');

// Reusable Option Button Component
function OptionButton(props) {
  return (
    <button id={props.name} onClick={() => props.onClick(props.value)}>{props.name}</button>
  )
}

function App() {
  // set up our app state
  const [playerChoice, setPlayerChoice] = React.useState(null);
  const [aiChoice, setAiChoice] = React.useState(null);
  const [result, setResult] = React.useState(null);

  // each time player makes a choice, run the below code
  React.useEffect(() => {
    const aiChoice = getRandomInt(3);
    const result = determineResult(playerChoice, aiChoice);
    setAiChoice(aiChoice);
    setResult(result);
  }, [playerChoice]);

  return (
    <div>
      <h1>Play Rock Paper Scissors</h1>
      <h2>Make a selection</h2>
      <div>
        <OptionButton name='rock' value={0} onClick={setPlayerChoice} />
        <OptionButton name='paper' value={1} onClick={setPlayerChoice} />
        <OptionButton name='scissors' value={2} onClick={setPlayerChoice} />
      </div>
      <h2>OpponentSelection</h2>
      <p>{aiChoice}</p>
      <h2>Result</h2>
      <p>{result}</p>
    </div>
  )
}

// render the app to an element with ID = 'root' in the HTML document
ReactDOM.render(<App />, document.getElementById('root'));
  `;
  const compiledJs = `const React = require('react');
const ReactDOM = require('react-dom');

const {
  determineResult,
  getRandomInt
} = require('./utils');

function OptionButton(props) {
  return /*#__PURE__*/React.createElement("button", {
    id: props.name,
    onClick: () => props.onClick(props.value)
  }, props.name);
}

function App() {
  // set up our app state
  const [playerChoice, setPlayerChoice] = React.useState(null);
  const [aiChoice, setAiChoice] = React.useState(null);
  const [result, setResult] = React.useState(null); // each time player makes a choice, run the below code

  React.useEffect(() => {
    const aiChoice = getRandomInt(3);
    const result = determineResult(playerChoice, aiChoice);
    setAiChoice(aiChoice);
    setResult(result);
  }, [playerChoice]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Play Rock Paper Scissors"), /*#__PURE__*/React.createElement("h2", null, "Make a selection"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OptionButton, {
    name: "rock",
    value: 0,
    onClick: setPlayerChoice
  }), /*#__PURE__*/React.createElement(OptionButton, {
    name: "paper",
    value: 1,
    onClick: setPlayerChoice
  }), /*#__PURE__*/React.createElement(OptionButton, {
    name: "scissors",
    value: 2,
    onClick: setPlayerChoice
  })), /*#__PURE__*/React.createElement("h2", null, "OpponentSelection"), /*#__PURE__*/React.createElement("p", null, aiChoice), /*#__PURE__*/React.createElement("h2", null, "Result"), /*#__PURE__*/React.createElement("p", null, result));
} // render the app to an element with ID = 'root' in the HTML document


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));`;
  return (
    <div>
      <h1>React and JSX</h1>
      <p>
        Looking at our app, we can see some discrete components forming - the
        banner, option buttons, and result sections. In the future, we might
        want to add a Tic Tac Toe game to our site; if that's the case, we would
        want to reuse some of these building blocks in that module. Component
        based libraries and frameworks like React, Vue, and Angular are built on
        this ideal - turning imperative script files into more functional,
        reusable pieces of code.
      </p>
      <p>
        While each have their own idiosyncracies, all are primarily used to
        build single page applications, relying on the concept of components and
        a virtual DOM, in which the framework tracks the state of the
        application and can selectively re-render only the portions that need
        updating. In contrast, each time you navigate to a new page on this site
        (built using Next.js), it triggers a full page reload.
      </p>
      <p>
        Each of the below files is equivalent functionally - the first is using
        plain Javascript, but it seems difficult to deal with. The second is
        probably the most familiar, it uses a syntax called JSX that allows us
        to write components in a manner that resembles HTML, using our custom
        components like <code>OptionButton</code>. Finally, the last tab holds
        the transpiled version - using a build step, the JSX gets converted into
        plain Javascript for the browser.
      </p>
      <Tabs>
        <TabList>
          <Tab>index-with-react.js</Tab>
          <Tab>index-with-jsx.js</Tab>
          <Tab>compiled.js</Tab>
        </TabList>
        <TabPanel>
          <SyntaxHighlighter language="js" style={atomDark} showLineNumbers>
            {pureJsCodeString}
          </SyntaxHighlighter>
        </TabPanel>
        <TabPanel>
          <SyntaxHighlighter language="jsx" style={atomDark} showLineNumbers>
            {jsxCodeString}
          </SyntaxHighlighter>
        </TabPanel>
        <TabPanel>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            showLineNumbers
          >
            {compiledJs}
          </SyntaxHighlighter>
        </TabPanel>
      </Tabs>
      <p>
        Now, when we want to add a button into our new Tic Tac Toe game, we can
        just add:
        <SyntaxHighlighter language="jsx" style={atomDark} showLineNumbers>
          {`<OptionButton name='X' onClick={setTicTacToeOption} />`}
        </SyntaxHighlighter>
      </p>
      <p>
        We've again added in a build step for our app, and we also now run the
        risk of introducing extra code into our project that can slow down our
        page load times.
      </p>
      <div>
        <Link href="/step/6">
          <button>Previous</button>
        </Link>
        <Link href="/step/8">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}
