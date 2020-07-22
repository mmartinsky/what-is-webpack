import React from "react";
import CodeViewer from "../../src/components/CodeViewer";
import { CodeBlock } from "../../src/components/Styled";

export default function Step10(props) {
  const configCodeString = `const path = require("path"); // import a utility for file traversal

module.exports = {
  // the file you want to use as the root of your dependency graph; this can even be an array to create multiple bundles!
  entry: "./index.js", 
  // the location and name of the output bundle
  output: {
    filename: "treeShakingBundle.js",
    path: path.resolve(__dirname, "..", "..", "dist"),
  },
  // development has looser standards than production, and includes things like source maps for easier debugging
  mode: "development",
  // alias paths to commonly used files to avoid deep nested imports
  resolve {
    alias: {
      DomUtilities: path.resolve(__dirname, 'src/infrastructure/utils/frontend/dom')
    }
  },
  // specify optimizations - here we say that we don't want it minified
  optimization: {
    minimize: false
  }
};`;
  const tabs = [
    { name: "webpack.config.js", lang: "js", code: configCodeString },
  ];

  return (
    <div>
      <h1>Configuration</h1>
      <p>
        Let's answer the first question - despite a high learning curve, Webpack
        has some sensible defaults. It{" "}
        <b>
          looks for an <CodeBlock>index.js</CodeBlock> file
        </b>
        , assumes that you want to minify your code for productionization, and
        outputs a file named <CodeBlock>main.js</CodeBlock>.
      </p>
      <p>
        But let's say that we wanted to customize this - maybe we want our
        output to be named differently, or end up in a specific file location?{" "}
        <b>Below is a sample config file</b>, annotated with the purpose of each
        block:
      </p>
      <CodeViewer tabs={tabs} />
      <p>
        With hundreds of options, you can tweak and customize the bundling to
        your heart's desire. Best of all,{" "}
        <b>the configuration is just JavaScript code;</b> you can use dynamic
        logic and even compose multiple webpack configs together.
      </p>
    </div>
  );
}
