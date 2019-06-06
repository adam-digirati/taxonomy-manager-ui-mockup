import * as React from "react";
import TextProperty from "../molecules/TextProperty";
import MultilingualTextProperty from "../molecules/MultilingualTextProperty";
import MultiValueTextProperty from "../molecules/MultiValueTextProperty";
import Form from '../atoms/Form';
import ItemIdEditor from '../atoms/ItemIdEditor';
import FormHeader from '../atoms/FormHeader';
import MultiForeignObjectProperty from "../molecules/MultiForeignObjectProperty";
import TwoColumnLayout from '../atoms/TwoColumnLayout';
import ColumnBreak from '../atoms/ColumnBreak';


type ConceptSchemePropertiesProps = {
  data: any,
}

const ConceptSchemeProperties: React.SFC<ConceptSchemePropertiesProps> = ({ data }) => (
  <Form>
    <FormHeader>CRU Commodity and Nutrient [Concept Scheme]</FormHeader>
    <ItemIdEditor itemId="https://crutaxonomy.poolparty.biz/CRUvocabularies/b1c4d353-7058-4931-9629-7b2972463f44" itemIdBase="https://crutaxonomy.poolparty.biz/CRUvocabularies/" />
    <TwoColumnLayout>
      <MultiForeignObjectProperty 
          name="http://www.w3.org/2004/02/skos/core#hasTopConcept"
          label="Top Concepts"
          value={['Albanina']}
      />
      <ColumnBreak/>
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
          value={[]}
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
          value={["Clair Honeywill"]}
      />
    </TwoColumnLayout>
  </Form>
);

export default ConceptSchemeProperties;
