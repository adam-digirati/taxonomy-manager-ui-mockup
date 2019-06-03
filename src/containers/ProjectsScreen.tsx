import * as React from "react";
import AppLayout from "../atoms/AppLayout";
import TopBar from "../atoms/TopBar";
import ProjectsListLayout from "../components/ProjectsListLayout";
import LogoutButton from "../atoms/LogoutButton";
const DUMMY_PROJECTS = [
  {
    id: 1,
    name: "Test Taxonomy one",
    description: "Test description 1"
  },
  {
    id: 2,
    name: "Test Taxonomy two",
    description: "Test description 2"
  },
  {
    id: 3,
    name: "Test Taxonomy three",
    description: "Test description 3"
  },
  {
    id: 4,
    name: "Test Taxonomy four",
    description: "Test description 4"
  }
];

const ProjectScreen: React.SFC = () => (
  <AppLayout
    topBar={
      <TopBar title="Taxonomy Manager">
        <LogoutButton />
      </TopBar>
    }
  >
    <ProjectsListLayout projects={DUMMY_PROJECTS} />
  </AppLayout>
);

export default ProjectScreen;
