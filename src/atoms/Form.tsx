import * as React from 'react';
import { Grid, makeStyles, Theme, Toolbar, Button  } from '@material-ui/core';

type FormProps = {
  children: React.ReactNode,
  handleCancel?: React.ReactEventHandler;
  handleSave?: React.ReactEventHandler;
};

const useStyle = makeStyles((theme:Theme) => ({
  root: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'stretch' as 'stretch',
    justifyContent: 'stretch' as 'stretch'
  },
  scroll: {
    height: 'calc(100% - 48px)',
    position: 'relative' as 'relative',
    overflow: 'hidden auto',
  },
  layout: {
    padding: theme.spacing(3),
  }
}));


const Form: React.SFC<FormProps> = ({ children, handleCancel, handleSave }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.scroll}>
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
      <Toolbar variant="dense" style={{justifyContent: 'flex-end', height: 48}}>
        <Button size="small" color="primary" onClick={handleCancel}>Cancel</Button>
        <Button size="small" color="primary" onClick={handleSave}>Save</Button>
      </Toolbar>
    </div>
  );
}

export default Form;