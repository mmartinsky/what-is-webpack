import React from "react";

function Recap() {
  return (
    <div>
      <h1>Recap and Further Reading</h1>
      <p>
        We've traced through the basics of the front end, and identified some
        pain points when using the bare basics. As someone who entered front end
        development as Webpack was really taking off, it's easy to get lost in
        the layers of abstraction and forget the semantics of the web, at the
        expense of things like accessibility and performance.
      </p>
      <p>
        <b>
          When we understand tools like Webpack and eliminate some of the magic
        </b>
        , we can improve both the developer experience and the end user's
        experience through more advanced functionality.
      </p>
      <hr />
      <p>
        There is a wealth of information out there regarding build tools, but
        here are a few resources to start with:
      </p>
      <ul>
        <li>
          <a
            href="https://webpack.js.org/guides/getting-started/"
            target="_blank"
          >
            Official Webpack Documentation
          </a>{" "}
          - The Guides section does a building block follow along tutorial in
          plain language
        </li>
        <li>
          <a
            href="https://create-react-app.dev/docs/getting-started/"
            target="_blank"
          >
            Create React App
          </a>
          ,{" "}
          <a href="https://cli.angular.io/" target="_blank">
            Angular CLI
          </a>{" "}
          - App Level CLI's with battle tested configurations. Will almost
          certainly have more than you need, so beware of jumping straight into
          these.
        </li>
        <li>
          <a href="https://rollupjs.org/guide/en/" target="_blank">
            RollupJS - an alternative bundler -
          </a>{" "}
          Many often lean toward Rollup for libraries, and Webpack for apps
        </li>
        <li>
          <a href="https://parceljs.org/" target="_blank">
            ParcelJS
          </a>{" "}
          - a zero configuration bundler, great for small apps
        </li>
      </ul>
    </div>
  );
}

export default Recap;
