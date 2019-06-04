import * as React from "react";
import { FormControl, Input, InputLabel } from "@material-ui/core";

type HtmlEvent = React.ChangeEvent<HTMLInputElement>;

type SchemaEditorTextFieldProps = { 
  value:string;
  handleChange?: React.EventHandler<HtmlEvent>;
  name:string;
  label?:string;
};

const SchemaEditorTextField: React.SFC<SchemaEditorTextFieldProps> = ({ value, handleChange, name, label }) => (
  <FormControl>
    {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
    <Input
      id={name}
      value={value}
      onChange={handleChange}
      inputProps={{
        "aria-label": label
      }}
    />
  </FormControl>
);

export default SchemaEditorTextField;
