import * as React from 'react';
import { Grid, makeStyles, Theme } from '@material-ui/core';

type FormGroupProps = {
  children: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 400,
    marginBottom: theme.spacing(4)
  }
}));

const FromGroup: React.SFC<FormGroupProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        className={classes.root}
    >
      {children}
    </Grid>
  );
};

export default FromGroup;
