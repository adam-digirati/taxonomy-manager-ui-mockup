import * as React from "react";
import { IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
type LogoutButtonProps = { 
  onClick?: React.ReactEventHandler;
}

const LogoutButton: React.SFC<LogoutButtonProps> = (props) => (
  <IconButton {...props} color="inherit" title="account/logout">
    <AccountCircle />
  </IconButton>
);

export default LogoutButton;
