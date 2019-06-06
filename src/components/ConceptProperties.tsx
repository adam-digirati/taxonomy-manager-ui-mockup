import * as React from "react";
import TextProperty from "../molecules/TextProperty";
import MultilingualTextProperty from "../molecules/MultilingualTextProperty";
import MultiValueTextProperty from "../molecules/MultiValueTextProperty";
import Form from '../atoms/Form';
import ItemIdEditor from '../atoms/ItemIdEditor';
import FormHeader from '../atoms/FormHeader';
import MultiForeignObjectProperty from "../molecules/MultiForeignObjectProperty";
import ForeignObjectProperty from "../molecules/ForeignObjectProperty";
import TwoColumnLayout from '../atoms/TwoColumnLayout';
import ColumnBreak from '../atoms/ColumnBreak';

type ConceptPropertiesProps = {
  data: any,
}
const ConceptProperties:React.SFC<ConceptPropertiesProps> = () => (
  <Form>
    <FormHeader>Aluminium [Concept]</FormHeader>
    <ItemIdEditor itemId="https://crutaxonomy.poolparty.biz/CRUvocabularies/b1c4d353-7058-4931-9629-7b2972463f44" itemIdBase="https://crutaxonomy.poolparty.biz/CRUvocabularies/" />
    <TwoColumnLayout>
      
    <MultiForeignObjectProperty 
       name="http://www.w3.org/2004/02/skos/core#broader"
       label="Broader Concepts"
       value={['Albanina']}
    />
    <MultiForeignObjectProperty 
       name="http://www.w3.org/2004/02/skos/core#narrower"
       label="Narrower Concepts"
       value={['Albanina']}
    />
    <MultiForeignObjectProperty 
       name="http://www.w3.org/2004/02/skos/core#related"
       label="Related Concepts"
       value={['Albanina']}
    />
    <ForeignObjectProperty 
       name="http://www.w3.org/2004/02/skos/core#topConceptOf"
       label="Top Concept of Concept Schemes"
       value={'Albanina'}
    />
    <ColumnBreak />
    <MultilingualTextProperty
      name="http://www.w3.org/2004/02/skos/core#prefLabel"
      label="Preferred Label"
      value={[{ lang: "en", value: "Aluminium" }]}
    />
    <MultilingualTextProperty
      name="http://www.w3.org/2004/02/skos/core#altLabel"
      label="Alternative Labels"
      value={[{ }]}
    />
    <MultilingualTextProperty
      name="http://www.w3.org/2004/02/skos/core#hiddenLabel"
      label="Hidden Labels"
      value={[]}
    />
    <MultiValueTextProperty
      name="http://www.w3.org/2004/02/skos/core#scopeNote"
      label="Scope Notes"
      value={[]}
    />
    <MultilingualTextProperty
      name="div_http://www.w3.org/2004/02/skos/core#definition"
      label="Definitions"
      multiline
      value={[]}
    />
    <MultiValueTextProperty 
      name="http://purl.org/dc/terms/contributor"
      label="Contributor" 
      value={["Clair Honeywill"]} />
    </TwoColumnLayout>
  </Form>
);


export default ConceptProperties;
