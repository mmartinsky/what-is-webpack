import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheets } from "@material-ui/core/styles";
import { ServerStyleSheet } from "styled-components";
class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

CustomDocument.getInitialProps = async (ctx) => {
  const styledComponentsSheet = new ServerStyleSheet();
  const materialSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentsSheet.collectStyles(
            materialSheets.collect(<App {...props} />)
          ),
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          {materialSheets.getStyleElement()}
          {styledComponentsSheet.getStyleElement()}
        </React.Fragment>
      ),
    };
  } finally {
    styledComponentsSheet.seal();
  }
};

export default CustomDocument;
