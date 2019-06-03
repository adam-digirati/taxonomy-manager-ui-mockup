import * as React from "react";
import TextProperty from "../molecules/TextProperty";
import MultilingualTextProperty from "../molecules/MultilingualTextProperty";
import MultiValueTextProperty from "../molecules/MultiValueTextProperty";

const ProjectProperties = () => (
  <div>
    <MultilingualTextProperty
      label="Title"
      value={[{ lang: "en", value: "CRU Taxonomy UAT edit" }]}
    />
    <MultilingualTextProperty
      label="Subject"
      value={[{ lang: "en", value: "" }]}
    />
    <MultilingualTextProperty
      label="Description"
      value={[
        {
          lang: "en",
          value:
            "Taxonomy built for use by CRU. Exported and downgraded from v5.6.1 to v5.4.3. 20161129. editdelete"
        }
      ]}
    />
    <MultiValueTextProperty
      label="Author"
      value={["digirati", "digirati_testuser"]}
    />
    <MultilingualTextProperty
      label="Publisher (Organisation"
      value={[{ lang: "en", value: "CRU" }]}
    />
    <MultiValueTextProperty label="Contributor" value={["Clair Honeywill"]} />
    <TextProperty />
  </div>
);
// Created
// 19.04.2017 - 18:13
// License
//  add value
// Languages
// Default Language	en
// add value
// Workflow
// Disabled
// Quality Setting
// Default edit
// User Groups
// Public
// URI Generation
// URI	https://crutaxonomy.poolparty.biz/CRUvocabularies/<UUID>
// Repository Type
// Memory
// Repository Location
// Local Repository
// Project Version
"test";

export default ProjectProperties;
