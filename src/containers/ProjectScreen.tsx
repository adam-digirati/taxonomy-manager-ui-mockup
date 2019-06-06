import * as React from "react";
import { Button } from '@material-ui/core';
import AppLayout from "../atoms/AppLayout";
import TopBar from "../atoms/TopBar";
import LogoutButton from "../atoms/LogoutButton";
import ProjectViewLayout from "../components/ProjectViewLayout";



type ProjectScreenProps = {
  handleLogout: React.ReactEventHandler;
  handleBackToProjects: React.ReactEventHandler;
}

const ProjectScreen: React.SFC<ProjectScreenProps> = ({handleLogout, handleBackToProjects}) => (
  <AppLayout
    topBar={
      <TopBar title="Taxonomy Manager">
        <Button color="inherit" onClick={handleBackToProjects}>Projects</Button>
        <LogoutButton onClick={handleLogout}/>
      </TopBar>
    }
  >
    <ProjectViewLayout />
  </AppLayout>
);

export default ProjectScreen;
