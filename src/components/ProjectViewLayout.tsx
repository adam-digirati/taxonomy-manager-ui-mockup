import * as React from "react";
import SplitPanel from "../atoms/SplitPanel";
import TaxonomyTree from "../atoms/TaxonomyTree";
import ProjectProperties from "./ProjectProperties";

// TODO: this should be component.
const ProjectViewLayout: React.SFC = () => (
  <SplitPanel>
    <TaxonomyTree />
    <ProjectProperties />
  </SplitPanel>
);

export default ProjectViewLayout;
