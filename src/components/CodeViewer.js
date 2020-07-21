import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function CodeViewer(props) {
  const { tabs, height } = props;
  return (
    <Tabs>
      <TabList>
        {tabs.map((tab, i) => (
          <Tab key={"tab-" + i}>{tab.name}</Tab>
        ))}
      </TabList>

      {tabs.map((tab, i) => (
        <TabPanel key={"code-" + i}>
          <SyntaxHighlighter
            language={tab.lang}
            customStyle={{ height: height }}
            style={atomDark}
            showLineNumbers
          >
            {tab.code}
          </SyntaxHighlighter>
        </TabPanel>
      ))}
    </Tabs>
  );
}
CodeViewer.defaultProps = {
  height: "400px",
};
