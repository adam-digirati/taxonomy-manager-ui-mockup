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

type ProjectScreenProps = {
  handleSelectProject: React.ReactEventHandler;
  handleLogout: React.ReactEventHandler;
}

const ProjectScreen: React.SFC<ProjectScreenProps> = ({ handleSelectProject, handleLogout }) => {
  const [projects, setProjects] = React.useState(DUMMY_PROJECTS);
  return (
    <AppLayout
      topBar={
        <TopBar title="Taxonomy Manager">
          <LogoutButton onClick={handleLogout}/>
        </TopBar>
      }
    >
      <ProjectsListLayout 
        projects={projects}
        handleSelectProject={handleSelectProject}
        handleDeleteProject={(project:any)  => {
          setProjects(
            projects.filter(proj=>proj.id !== project.id)
          )
        }}
      />
    </AppLayout>
  );
}

export default ProjectScreen;
