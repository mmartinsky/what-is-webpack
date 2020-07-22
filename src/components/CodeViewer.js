import React from "react";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Container = styled(Tabs)`
  width: 100%;
  overflow: auto;
`;
export default function CodeViewer(props) {
  const { tabs, height } = props;
  return (
    <Container>
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
    </Container>
  );
}
CodeViewer.defaultProps = {
  height: "400px",
};
