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
    <div style={{margin: '24px 0'}}><Typography variant="h2">Available Projects</Typography></div>
    <div style={{margin: '24px 0', width: 420 }}><Toolbar>{toolbarItems}</Toolbar></div>
    <List dense={false}>{children}</List>
  </Grid>
);

export default ProjectList;
