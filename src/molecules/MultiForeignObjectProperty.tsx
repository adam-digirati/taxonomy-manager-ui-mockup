import * as React from 'react';
import { MultiValueAutocompleteField } from '../atoms/AutocompleteField';
import FormFieldLabel from '../atoms/FormFieldLabel';
import FromGroup from '../atoms/FormGroup';

type HtmlEvent = React.ChangeEvent<HTMLInputElement>;
type MultiForeignObjectPropertyProps = {
    value:string[];
    handleChange?: React.EventHandler<HtmlEvent>;
    name:string;
    label: string;
}

const MultiForeignObjectProperty: React.SFC<MultiForeignObjectPropertyProps> = ({ value, name, label, ...props }) => (
  <FromGroup>
    <FormFieldLabel label={label} />
    <MultiValueAutocompleteField {...props} value={value} name={name} />
  </FromGroup>
);

export default MultiForeignObjectProperty;