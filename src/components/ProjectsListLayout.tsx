import * as React from "react";
import ProjectList from "../atoms/ProjectList";
import ProjectListItem from "../atoms/ProjectListItem";
import SearchField from "../atoms/SearchField";
import AddNewProjectButton from "../atoms/AddNewProjectButton";

// TODO: this should be component.
type ProjectsListLayoutProps = {
  projects: Array<any>;
};

const dummyDelete = project => () => {
  console.log("delete", project.id);
};
const dummyOpen = project => () => {
  console.log("open", project.id);
};

const ProjectsListLayout: React.SFC<ProjectsListLayoutProps> = ({
  projects = []
}) => (
  <ProjectList
    toolbarItems={
      <>
        <SearchField placeholder="Search Projects" searchIconLabel="Search" />
        <AddNewProjectButton />
      </>
    }
  >
    {projects.map((project: any) => (
      <ProjectListItem
        name={project.name}
        description={project.description}
        handleOpen={dummyOpen(project)}
        handleDelete={dummyDelete(project)}
      />
    ))}
  </ProjectList>
);

export default ProjectsListLayout;
