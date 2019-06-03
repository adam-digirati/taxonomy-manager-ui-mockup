import * as React from "react";
import { IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const LogoutButton = props => (
  <IconButton {...props} color="inherit" title="account/logout">
    <AccountCircle />
  </IconButton>
);

export default LogoutButton;
