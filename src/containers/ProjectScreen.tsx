import * as React from "react";
import AppLayout from "../atoms/AppLayout";
import TopBar from "../atoms/TopBar";
import LogoutButton from "../atoms/LogoutButton";
import ProjectViewLayout from "../components/ProjectViewLayout";

const ProjectScreen: React.SFC = () => (
  <AppLayout
    topBar={
      <TopBar title="Taxonomy Manager">
        <LogoutButton />
      </TopBar>
    }
  >
    <ProjectViewLayout />
  </AppLayout>
);

export default ProjectScreen;
