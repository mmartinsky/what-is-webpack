const path = require("path");

module.exports = {
  entry: "./sandbox/index.js",
  output: {
    filename: "treeShakingBundle.js",
    path: path.resolve(__dirname, "..", "..", "dist"),
  },
  mode: "production",
  optimization: {
    usedExports: true,
  },
};
