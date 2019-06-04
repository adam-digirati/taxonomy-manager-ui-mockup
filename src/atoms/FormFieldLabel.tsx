import * as React from 'react';
import { InputLabel } from '@material-ui/core';

type FormFieldLabelProps = {
  label: string;
}
const FormFieldLabel: React.SFC<FormFieldLabelProps> = ({label, ...props}) => (
  <InputLabel {...props}>{label}</InputLabel>
)

export default FormFieldLabel;
