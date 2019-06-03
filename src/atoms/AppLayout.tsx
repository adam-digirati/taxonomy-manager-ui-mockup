import * as React from "react";
import TopBar from "../atoms/TopBar";
import { Grid, CssBaseline } from "@material-ui/core";

type AppLayoutProps = {
  topBar: TopBar;
};

const AppLayout: React.SFC<AppLayoutProps> = ({ children, topBar }) => (
  <>
    <CssBaseline />
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <div style={{ height: 64 }}>{topBar}</div>
      <div
        style={{
          flex: "1 1",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "stretch",
          position: "relative"
        }}
      >
        {children}
      </div>
    </Grid>
  </>
);

export default AppLayout;
