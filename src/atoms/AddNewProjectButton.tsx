import * as React from "react";
import { IconButton } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";


const AddNewProjectButton: React.SFC = props => (
  <IconButton
    color="primary"
    aria-label="Add New"
    title="Add New Project"
    {...props}
  >
    <AddBox />
  </IconButton>
);

export default AddNewProjectButton;
