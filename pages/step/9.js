import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Step9(props) {
  return (
    <div>
      <h1>Webpack</h1>
      <p>
        To address some of these issues, we can introduce a tool called Webpack.
        Today, at v5, it offers a load of extra functionality, but at its core,
        Webpack is a module bundler. It functions like a compiler, analyzing and
        transforming the code we write into a more effective version for the
        JavaScript interpreter.
      </p>
      <div>
        <Link href="/step/8">
          <button>Previous</button>
        </Link>
        <Link href="/step/9">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}
