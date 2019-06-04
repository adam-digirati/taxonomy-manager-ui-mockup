import * as React from "react";
import SplitPane from "react-split-pane";

type SplitPanelProps = {
  children: React.ReactNode,
}

const SplitPanel: React.SFC<SplitPanelProps> = ({ children }) => (
  <SplitPane split="vertical" minSize={250}>
    {children}
  </SplitPane>
);

export default SplitPanel;
