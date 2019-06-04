import * as React from "react";
import TextProperty from "../molecules/TextProperty";
import MultilingualTextProperty from "../molecules/MultilingualTextProperty";
import MultiValueTextProperty from "../molecules/MultiValueTextProperty";
import Form from '../atoms/Form';
import ItemIdEditor from '../atoms/ItemIdEditor';
import FormHeader from '../atoms/FormHeader';


const ConceptSchemeProperties = () => (
  <Form>
    <FormHeader>CRU Commodity and Nutrient [Concept Scheme]</FormHeader>
    <ItemIdEditor itemId="https://crutaxonomy.poolparty.biz/CRUvocabularies/b1c4d353-7058-4931-9629-7b2972463f44" itemIdBase="https://crutaxonomy.poolparty.biz/CRUvocabularies/" />
    <MultilingualTextProperty
      name="http://purl.org/dc/terms/title"
      label="Title"
      value={[{ lang: "en", value: "CRU Commodity and Nutrient" }]}
    />
    <MultilingualTextProperty
      name="http://purl.org/dc/terms/subject"
      label="Subject"
      value={[{ lang: "en", value: "" }]}
    />
    <MultilingualTextProperty
      name="http://purl.org/dc/terms/description"
      label="Description"
      value={[
        {
          lang: "en",
          value:
            ""
        }
      ]}
    />
    <MultiValueTextProperty
      name="http://purl.org/dc/terms/creator"
      label="Author"
      value={["Dr Ian Piper"]}
    />
    <MultilingualTextProperty
      name="http://purl.org/dc/terms/publisher"
      label="Publisher (Organisation)"
      value={[{ lang: "en", value: "Tellura" }]}
    />
    <MultiValueTextProperty 
      name="http://purl.org/dc/terms/contributor"
      label="Contributor" 
      value={["Clair Honeywill"]} />
    Todo: Top concepts
    {/* <TextProperty
      name="http://purl.org/dc/terms/date"
      label="Created"
      value="19.04.2017 - 18:13"
    />
    <TextProperty
      name="http://purl.org/dc/terms/license"
      label="License"
      value=""
    />
    -Placeholder language selector

    placeholder default language

    placeholder add vocabularies */}
  </Form>
);
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
//"test";

export default ConceptSchemeProperties;
