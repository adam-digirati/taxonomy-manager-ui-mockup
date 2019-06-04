import * as React from "react";
import SplitPanel from "../atoms/SplitPanel";
import TaxonomyTree from "../atoms/TaxonomyTree";
import ProjectProperties from "./ProjectProperties";
import ConceptSchemeProperties from './ConceptSchemeProperties';

// TODO: this should be component.
const ProjectViewLayout: React.SFC = () => (
  <SplitPanel>
    <TaxonomyTree />
    <ConceptSchemeProperties />
  </SplitPanel>
);

export default ProjectViewLayout;
