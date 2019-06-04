import * as React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";

type TopBarProps = {
  title: string;
  children?: React.ReactNode;
};

const TopBar: React.SFC<TopBarProps> = ({ children, title }) => (
  <AppBar position="static">
    <Toolbar>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Typography variant="h6">{title}</Typography>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
          {children}
        </div>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default TopBar;
