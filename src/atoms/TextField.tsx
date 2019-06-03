import * as React from "react";
import { FormControl, Input, InputLabel } from "@material-ui/core";

const SchemaEditorTextField = ({ value, handleChange, name, label }) => (
  <FormControl>
    <InputLabel htmlFor={name}>{label}</InputLabel>
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
