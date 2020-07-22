import React from "react";
import "react-tabs/style/react-tabs.css";
import "./index.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { useRouter } from "next/router";

const steps = [
  "HTML",
  "CSS",
  "JS",
  "Files",
  "Breather",
  "LESS",
  "React",
  "Global Scope",
  "Webpack",
  "Config",
  "Tree Shaking",
  "Loaders",
  "Plugins",
];

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let pageNum = +router.pathname.split("/")[2];
  if (router.pathname === "/") {
    pageNum = 0;
  } else if (router.pathname === "/recap") {
    pageNum = 14;
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
            <Step key={step} onClick={() => router.push(`/step/${i + 1}`)}>
              <StepLabel style={{ cursor: "pointer" }}>{step}</StepLabel>
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
