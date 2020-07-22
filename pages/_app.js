import React from "react";
import "react-tabs/style/react-tabs.css";
import "./index.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { useRouter } from "next/router";

const steps = [
  { name: "HTML", path: "html" },
  { name: "CSS", path: "css" },
  { name: "JS", path: "js" },
  { name: "Splitting", path: "splitting" },
  { name: "Breather", path: "breather" },
  { name: "LESS", path: "less" },
  { name: "React", path: "react" },
  { name: "Scope", path: "scope" },
  { name: "Webpack", path: "webpack" },
  { name: "Config", path: "config" },
  { name: "Tree Shaking", path: "tree-shaking" },
  { name: "Loaders", path: "loaders" },
  { name: "Plugins", path: "plugins" },
];

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let pageNum = steps.findIndex(
    (x) => x.path === router.pathname.split("/")[2]
  );
  if (pageNum !== -1) {
    pageNum++;
  } else if (router.pathname === "/") {
    pageNum = 0;
  } else if (router.pathname === "/recap") {
    pageNum = 15;
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Stepper alternativeLabel activeStep={pageNum}>
        <Step key={"intro"} onClick={() => router.push(`/`)}>
          <StepLabel style={{ cursor: "pointer" }}>Intro</StepLabel>
        </Step>
        {steps.map((step, i) => {
          return (
            <Step key={step} onClick={() => router.push(`/step/${step.path}`)}>
              <StepLabel style={{ cursor: "pointer" }}>{step.name}</StepLabel>
            </Step>
          );
        })}
        <Step key={"recap"} onClick={() => router.push(`/recap`)}>
          <StepLabel style={{ cursor: "pointer" }}>Recap</StepLabel>
        </Step>
      </Stepper>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
