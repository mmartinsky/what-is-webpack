import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CodeViewer from "../../src/components/CodeViewer";

export default function Step12(props) {
  const loaderConfigCodeString = ` const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // convert Typescript files to JavaScript
        use: 'ts-loader',
        exclude: /node_modules/, // don't compile anything in the node_modules folder
      },
      {
        test: /\.css$/, 
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',  // copies the file into the output directory and loads the path to the file when you import it in code
        ],
      },
      {
        test: /\.json$/,
        use: [
          'json-loader',  // load json files as JavaScript objects
        ],
      },
    ],
  },
};
  `;
  const tabs = [
    { name: "webpack.config.js", lang: "js", code: loaderConfigCodeString },
  ];

  return (
    <div>
      <h1>Loaders</h1>
      <p>
        In the CSS Preprocessing section, we explored how we can accelerate our
        styling output at the cost of adding a build step; with Webpack, we can
        add loaders to convert code from one type into another. There are
        loaders for pretty much anything you can think of: Typescript to
        JavaScript, ES6 JavaScript to legacy style JavaScript, LESS to CSS, and
        even loaders that allow you to import SVG images as first class React
        components.
      </p>
      <CodeViewer tabs={tabs} />
      <p>
        One interesting thing to note is the precedence order of the loaders
        used in a given rule - it works from right to left, meaning that{" "}
        <code>['style-loader', 'css-loader']</code> is equivalent to{" "}
        <code>style-loader(css-loader(file))</code>
      </p>
    </div>
  );
}
