import * as React from "react";
import { List, Grid, Typography, Toolbar } from "@material-ui/core";

type ProjectListProps = {
  toolbarItems: React.ReactNode;
};

const ProjectList: React.SFC<ProjectListProps> = ({
  children,
  toolbarItems = []
}) => (
  <Grid container direction="column" justify="flex-start" alignItems="center">
    <Typography variant="h2">Available Projects</Typography>
    <Toolbar>{toolbarItems}</Toolbar>
    <List dense={false}>{children}</List>
  </Grid>
);

export default ProjectList;
