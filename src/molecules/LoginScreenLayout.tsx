import * as React from "react";
import {Typography, makeStyles, Theme, CssBaseline } from '@material-ui/core';
import DigiratiLogo from '../atoms/DigiratiLogo';

type LoginScreenLayoutProps = {
  children: React.ReactNode,
}

const useStyle = makeStyles((theme:Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#00d0b8'
  },
  logoSizer: {
    width: 200, 
  },
  contentPadding: {
    padding: theme.spacing(6),
  },
  title: {
    color: '#fff',
  }
}));


const LoginScreenLayout: React.SFC<LoginScreenLayoutProps> = ({ children }) => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.logoSizer}>
        <DigiratiLogo color="#fff"/>
      </div>
      <Typography variant="h1" color="textSecondary" className={classes.title}>Taxonomy Mananger</Typography>
      <div className={classes.contentPadding}>
      {children}
      </div>
      
    </div>
  )
}
	
export default LoginScreenLayout;
