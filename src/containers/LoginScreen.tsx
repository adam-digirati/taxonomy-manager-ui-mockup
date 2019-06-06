import * as React from "react";
import {Typography, Grid, Button } from '@material-ui/core';
import LoginScreenLayout from '../molecules/LoginScreenLayout';

type LoginScreenProps = {
	handleLogin: React.ReactEventHandler;
}

const LoginScreen: React.SFC<LoginScreenProps> = ({ handleLogin }) => 
	<LoginScreenLayout>
		<Button variant="contained" size="large" color="secondary" onClick={handleLogin}>Login</Button>
	</LoginScreenLayout>;

export default LoginScreen;
