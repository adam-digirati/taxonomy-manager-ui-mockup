import * as React from 'react';
import AutocompleteField from '../atoms/AutocompleteField';
import FormFieldLabel from '../atoms/FormFieldLabel';
import FromGroup from '../atoms/FormGroup';

type HtmlEvent = React.ChangeEvent<HTMLInputElement>;
type ForeignObjectProperty = {
    value:string;
    handleChange?: React.EventHandler<HtmlEvent>;
    name:string;
    label:string;
}

const ForeignObjectProperty: React.SFC<ForeignObjectProperty> = ({ value, name, label, ...props }) => (
  <FromGroup>
    <FormFieldLabel label={label} />
    <AutocompleteField {...props} value={value} name={name} />
  </FromGroup>
);

export default ForeignObjectProperty;