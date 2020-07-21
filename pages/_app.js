import React from "react";
import "react-tabs/style/react-tabs.css";
import "./index.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { useRouter } from "next/router";
import Link from "next/link";

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
  const pageNum = router.pathname.split("/")[2];
  return (
    <React.Fragment>
      <CssBaseline />
      <Stepper alternativeLabel activeStep={+pageNum - 1}>
        {steps.map((step, i) => {
          return (
            <Step
              key={step}
              onClick={() => router.push(`/step/${i + 1}`)}
              style={{ cursor: "pointer" }}
            >
              <StepLabel>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
