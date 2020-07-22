import React from "react";
import CodeViewer from "../../src/components/CodeViewer";

export default function Step13(props) {
  const loaderConfigCodeString = `const HtmlWebpackPlugin = require('html-webpack-plugin'; //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // show progress of build as it continues
    new webpack.ProgressPlugin(), 
    // generate index.html automatically and inject a reference to the built bundle
    new HtmlWebpackPlugin({template: './src/index.html'}),  
    // copy directories to output (useful for files and reference data)
    new CopyPlugin({
      patterns: [
        { from: 'source', to: 'dest' },
      ],
    }),
    // extract css to separate file rather than injecting into head of document
    new MiniCssExtractPlugin(),
    // Analyze the size each module contributes to your bundle
    new BundleAnalyzerPlugin()
  ]
}; `;
  const tabs = [
    { name: "webpack.config.js", lang: "js", code: loaderConfigCodeString },
  ];
  return (
    <div>
      <h1>Plugins</h1>
      <p>
        Webpack's rich plugin ecosystem is very powerful; much of the core
        functionality we associate with it is actually composed of plugins
        behind the scenes. Below, we'll run through a sample plugin
        configuration with a few interesting / useful highlights.
      </p>
      <CodeViewer tabs={tabs} />
      <p>
        The BundleAnalyzerPlugin in particular is a great example of a plugin
        that doesn't directly modify code, but allows you to visualize and
        identify opportunities to reduce bundle size and improve the performance
        of your app.
      </p>
      <img src="https://cloud.githubusercontent.com/assets/302213/20628702/93f72404-b338-11e6-92d4-9a365550a701.gif" />
    </div>
  );
}
