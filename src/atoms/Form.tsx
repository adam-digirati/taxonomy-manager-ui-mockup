import * as React from 'react';
import { Grid, makeStyles, Theme  } from '@material-ui/core';

type FormProps = {
  children: React.ReactNode,

};

const useStyle = makeStyles((theme:Theme) => ({
  root: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden scroll',
  },
  layout: {
    padding: theme.spacing(4),
  }
}));


const Form: React.SFC<FormProps> = ({ children }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        component="form"
        className={classes.layout}
      >
        {children}
      </Grid>
    </div>
  );
}

export default Form;