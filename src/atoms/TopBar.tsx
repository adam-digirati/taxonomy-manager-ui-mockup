import * as React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import DigiratiLogo from '../atoms/DigiratiLogo';

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
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
          <span style={{display: 'inline-block', width: 90, marginBottom: -10, marginRight: 16}}><DigiratiLogo color="#fff" /></span>
          <Typography variant="h6">
            {title}
          </Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row'}}>
          {children}
        </div>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default TopBar;
