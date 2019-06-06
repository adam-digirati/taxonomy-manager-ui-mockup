import * as React from "react";
import TextField from "../atoms/TextField";
import FormFieldLabel from '../atoms/FormFieldLabel';
import FromGroup from '../atoms/FormGroup';

type MultilingualTextPropertyProps = {
  name: string;
  value: Array<string>;
  label: string;
  multiline?: boolean;
};

const MultilingualTextProperty: React.SFC<MultilingualTextPropertyProps> = ({
  value,
  label,
  ...props
}) => (
  <FromGroup>
    <FormFieldLabel label={label} />
    {value.map((val, index) => (
      <TextField {...props} value={val} name={`${name}_${index}`} />
    ))}
  </FromGroup>
);

export default MultilingualTextProperty;
