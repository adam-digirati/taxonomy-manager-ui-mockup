import * as React from "react";
import SplitPane from "react-split-pane";

const SplitPanel = ({ children }) => (
  <SplitPane split="vertical" minSize={250}>
    {children}
  </SplitPane>
);

export default SplitPanel;
