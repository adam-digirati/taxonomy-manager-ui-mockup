import * as React from "react";
import SplitPanel from "../atoms/SplitPanel";
import TaxonomyTree from "../atoms/TaxonomyTree";
import ProjectProperties from "./ProjectProperties";
import ConceptSchemeProperties from './ConceptSchemeProperties';
import ConceptProperties from './ConceptProperties';


// TODO: this should be component.
const ProjectViewLayout: React.SFC = () => {
  const [selectedItem, setSelectedItem] = React.useState();
  let form = null;
  if (selectedItem) {
    switch(selectedItem.type) {
      case 'project':
        form = (<ProjectProperties data={selectedItem} />);
        break;
      case 'conceptScheme':
        form = <ConceptSchemeProperties data={selectedItem} />
        break;
      case 'concept':
        form = <ConceptProperties data={selectedItem} />
        break;
    }
  }
  

  return (
    <SplitPanel>
      <TaxonomyTree onSelect={(data:any)=>()=>setSelectedItem(data)} />
      {form}
    </SplitPanel>
  );
}

export default ProjectViewLayout;
