import React from "react";
import Link from "next/link";

export default function Step5(props) {
  return (
    <div>
      <h1>Taking a breather</h1>
      <p>
        This is certainly fully functional, and in some cases a superior way to
        build a website; frameworks like Angular can often seem like the only
        option, but writing good, semantic HTML and using the full slate of CSS
        can be pretty powerful.
      </p>
      <p>
        That said, there are some things that have been developed in recent
        years that can make our lives easier - some of the CSS we wrote was a
        little repetitive, and there are probably some pitfalls in the way we
        are loading the JavaScript files. The next few pages will walk through
        some of these pain points, and later on we'll look at how a modern build
        tool like Webpack or Rollup can help remediate them.
      </p>
      <ul>
        <li>
          <a href="/step/6">CSS Preprocessing</a>
        </li>
        <li>
          <a href="/step/7">React / JSX</a>
        </li>
        <li>
          <a href="/step/8">Code Splitting</a>
        </li>
      </ul>
      <div>
        <Link href="/step/4">
          <button>Previous</button>
        </Link>
        <Link href="/step/6">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}
