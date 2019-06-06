import * as React from "react";
import ProjectList from "../atoms/ProjectList";
import ProjectListItem from "../atoms/ProjectListItem";
import SearchField from "../atoms/SearchField";
import AddNewProjectButton from "../atoms/AddNewProjectButton";
import ConfirmPopup from '../atoms/ConfirmPopup';

// TODO: this should be component.
type ProjectsListLayoutProps = {
  projects: Array<any>;
  handleSelectProject: React.ReactEventHandler;
  handleDeleteProject: Function;
};

const dummyDelete = (project:any, handleDeleteProject: Function) => () => handleDeleteProject(project);


const ProjectsListLayout: React.SFC<ProjectsListLayoutProps> = ({
  projects = [],
  handleSelectProject,
  handleDeleteProject
}) => {
  const [confirmModal, setConfirmModal] = React.useState({
    isOpen: false,
    deleteCallback: ()=>{}
  });
  
  return (
    <ProjectList
      toolbarItems={
        <>
          <SearchField placeholder="Search Projects" searchIconLabel="Search" style={{width: 320}} />
          <AddNewProjectButton />
        </>
      }
    >
      {projects.map((project: any) => (
        <ProjectListItem
          name={project.name}
          description={project.description}
          handleOpen={() => {
            handleSelectProject(project)
          }}
          handleDelete={()=>{
            setConfirmModal({
              isOpen: true,
              deleteCallback: dummyDelete(project, handleDeleteProject),
            });
          }}
        />
      ))}
      <ConfirmPopup
        isOpen={confirmModal.isOpen}
        title="Confirmation required"
        description="The project will be permanently deleted, are you sure?"
        handleNo={()=>setConfirmModal({
          isOpen: false,
          deleteCallback: ()=>{}
        })}
        handleYes={()=>{
          confirmModal.deleteCallback();
          setConfirmModal({
            isOpen: false,
            deleteCallback: ()=>{}
          })
        }}
      />
    </ProjectList>
  );
}

export default ProjectsListLayout;
