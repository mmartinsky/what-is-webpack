import React from "react";
import "react-tabs/style/react-tabs.css";
import "./index.css";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
