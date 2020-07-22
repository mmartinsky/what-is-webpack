import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
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
        Looking at this CSS, there's a pretty clear violation of DRY principles
        in the styling for the Rock, Paper, and Scissors buttons; the only
        difference for each is the color. It would be great if we could specify
        these as functions, but pure CSS doesn't allow user created functions.
        To handle this, there are a number of{" "}
        <b>preprocessors that allow you to write enhanced CSS</b>, and then
        compile it down for final distribution.
      </p>
      <p>
        In this example we'll use{" "}
        <a href="http://lesscss.org/" target="_blank">
          LESS
        </a>
        , but other popular options are{" "}
        <a href="https://sass-lang.com/" target="_blank">
          SASS
        </a>{" "}
        or{" "}
        <a href="https://stylus-lang.com/" target="_blank">
          Stylus
        </a>
        . All have some form of <b>mixins</b>, which allow you to parameterize
        and reuse blocks of styles. You can even nest mixins within other
        mixins!
      </p>
      <CodeViewer tabs={tabs} />
      <p>
        Now, when we want to add the options Lizard and Spock in the Rock Paper
        Scissors sequel, all we'd have to do is add
      </p>
      <SyntaxHighlighter language="css" style={atomDark} showLineNumbers>
        {`#lizard {
  .option-button-mixin(#456789);
}`}
      </SyntaxHighlighter>
      <p>
        This is cool, <b>but now we're going to need a build step</b> - the
        browser can't understand LESS syntax, so we need to compile it down to
        CSS, and then re-compile it on every change with a command like:
      </p>
      <SyntaxHighlighter language="bash" style={atomDark} showLineNumbers>
        {"lessc index.less index.css"}
      </SyntaxHighlighter>
      <p>
        It would certainly be nice to have a way to automate this process...
      </p>
    </div>
  );
}
