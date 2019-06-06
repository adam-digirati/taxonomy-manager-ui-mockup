import * as React from "react";
import TextProperty from "../molecules/TextProperty";
import MultilingualTextProperty from "../molecules/MultilingualTextProperty";
import MultiValueTextProperty from "../molecules/MultiValueTextProperty";
import Form from '../atoms/Form';
import ItemIdEditor from '../atoms/ItemIdEditor';
import FormHeader from '../atoms/FormHeader';
import TwoColumnLayout from '../atoms/TwoColumnLayout';
import ColumnBreak from '../atoms/ColumnBreak';

type ProjectPropertiesProps = {
  data: any,
}

const ProjectProperties: React.SFC<ProjectPropertiesProps> = ({ data }) => (
  <Form>
    <FormHeader>CRU Taxonomy UAT [Project]</FormHeader>
    <ItemIdEditor itemId="https://crutaxonomy.poolparty.biz/CRUvocabularies" itemIdBase="https://crutaxonomy.poolparty.biz/" />
    <TwoColumnLayout>
    <MultilingualTextProperty
      name="http://purl.org/dc/terms/title"
      label="Title"
      value={[{ lang: "en", value: "CRU Taxonomy UAT" }]}
    />
    <MultilingualTextProperty
      name="http://purl.org/dc/terms/subject"
      label="Subject"
      value={[{ lang: "en", value: "" }]}
    />
    <MultilingualTextProperty
      name="http://purl.org/dc/terms/description"
      label="Description"
      multiline={true}
      value={[
        {
          lang: "en",
          value:
            //"Taxonomy built for use by CRU. Exported and downgraded from v5.6.1 to v5.4.3. 20161129."
            ""
        }
      ]}
    />
    <ColumnBreak />
    <MultiValueTextProperty
      name="http://purl.org/dc/terms/creator"
      label="Author"
      value={["digirati", "digirati_testuser"]}
    />
    <MultilingualTextProperty
      name="http://purl.org/dc/terms/publisher"
      label="Publisher (Organisation)"
      value={[{ lang: "en", value: "CRU" }]}
    />
    <MultiValueTextProperty 
      name="http://purl.org/dc/terms/contributor"
      label="Contributor" 
      value={["Clair Honeywill"]} />
    <TextProperty
      name="http://purl.org/dc/terms/date"
      label="Created"
      value="19.04.2017 - 18:13"
    />
    <TextProperty
      name="http://purl.org/dc/terms/license"
      label="License"
      value=""
    />
    -Placeholder language selector<br/>

    placeholder default language<br></br>

    placeholder add vocabularies
    </TwoColumnLayout>
  </Form>
);

export default ProjectProperties;
