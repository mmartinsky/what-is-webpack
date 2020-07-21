import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CodeViewer from "../../src/components/CodeViewer";

export default function Step6(props) {
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
  const lessCodeString = `.highlight-on-hover(@brightness) {
  cursor: pointer;
  filter: brightness(@brightness);
}
.option-button-mixin(@color) {
  border-radius: 3px;
  font-weight: bold;
  margin: 0.5rem 0;
  padding: 5px 10px;
  color: #fff;
  background-color: @color;
  border: 2px solid @color;
  
  &:hover {
    .highlight-on-hover(1.2)
  }
  
}
#rock {
    .option-button-mixin(#118bee);
}
#paper {
    .option-button-mixin(#e311ee);
}
#scissors {
    .option-button-mixin(#ee7411);
}
`;
  const compiledCodeString = `#rock {
  border-radius: 3px;
  font-weight: bold;
  margin: 0.5rem 0;
  padding: 5px 10px;
  color: #fff;
  background-color: #118bee;
  border: 2px solid #118bee;
}
#rock:hover {
  cursor: pointer;
  filter: brightness(1.2);
}
#paper {
  border-radius: 3px;
  font-weight: bold;
  margin: 0.5rem 0;
  padding: 5px 10px;
  color: #fff;
  background-color: #e311ee;
  border: 2px solid #e311ee;
}
#paper:hover {
  cursor: pointer;
  filter: brightness(1.2);
}
#scissors {
  border-radius: 3px;
  font-weight: bold;
  margin: 0.5rem 0;
  padding: 5px 10px;
  color: #fff;
  background-color: #ee7411;
  border: 2px solid #ee7411;
}
#scissors:hover {
  cursor: pointer;
  filter: brightness(1.2);
}
`;
  const tabs = [
    { name: "starting.css", lang: "css", code: cssCodeString },
    { name: "index.less", lang: "less", code: lessCodeString },
    { name: "compiled-index.css", lang: "css", code: compiledCodeString },
  ];
  return (
    <div>
      <h1>CSS Preprocessing</h1>
      <p>
        Looking at this CSS, there's a pretty clear break of DRY principles in
        the styling for the Rock, Paper, and Scissors buttons; the only
        difference for each is the color. It would be great if we could specify
        these as functions, but pure CSS doesn't allow user created functions.
        To handle this, there are a number of preprocessors that allow you to
        write enhanced CSS, and then compile it down for final distribution.
      </p>
      <p>
        In this example we'll use <b>LESS</b>, but other popular options are
        SASS or Stylus. All have some form of mixins, which allow you to
        parameterize and reuse blocks of styles. You can even nest mixins within
        other mixins! In a toy example like below, the savings are minimal, but
        you can start to see significant benefits in larger applications.
      </p>
      <CodeViewer tabs={tabs} height={"400px"} />
      <p>
        Now, when we want to sell the options Lizard and Spock as pay to win
        downloadable content, all we'd have to do is add
      </p>
      <SyntaxHighlighter language="css" style={atomDark} showLineNumbers>
        {`#lizard {
  .option-button-mixin(#456789);
}`}
      </SyntaxHighlighter>
      <p>
        This is cool, but now we're going to need a build step - the browser
        can't understand LESS syntax, so we need to compile it down to CSS, and
        then re-compile it on every change with a command like:
        <SyntaxHighlighter language="bash" style={atomDark} showLineNumbers>
          {"lessc index.less index.css"}
        </SyntaxHighlighter>
        It would certainly be nice to have a way to automate this process...
      </p>
      <div>
        <Link href="/step/5">
          <button>Previous</button>
        </Link>
        <Link href="/step/7">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}
