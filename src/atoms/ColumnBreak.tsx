import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    breakBefore: 'column' as 'column', 
    margin: 0, 
    height: 0, 
    visibility: 'hidden' as 'hidden'
  }
}));


const ColumnBreak: React.SFC = () => {
  const classes = useStyles();
  return (
    <hr className={classes.root} />
  );
};

export default ColumnBreak;
