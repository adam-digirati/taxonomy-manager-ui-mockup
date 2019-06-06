import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: { 
    columnCount: 2,
    columnGap: 32 
  }
}));

type TwoColumnLayoutProps = {
  children: React.ReactNode,
}

const TwoColumnLayout: React.SFC<TwoColumnLayoutProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default TwoColumnLayout;
