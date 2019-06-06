import * as React from "react";
import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel
} from "@material-ui/core";

type HtmlEvent = React.ChangeEvent<HTMLInputElement>;

type SchemaEditorTextFieldProps = {
  value: any;
  handleChange?: React.EventHandler<HtmlEvent>;
  name: string;
  label?: string;
  languageCode: string;
  multiline?:boolean;
};

const SchemaEditorTextField: React.SFC<SchemaEditorTextFieldProps> = ({
  value,
  handleChange,
  name,
  label,
  languageCode,
  multiline=false,
}) => (
  <FormControl>
    {label && <InputLabel htmlFor={`${name}_${languageCode}`}>{label}</InputLabel>}
    <Input
      id={`${name}_${languageCode}`}
      value={value}
      onChange={handleChange}
      endAdornment={
        <InputAdornment position="end">{languageCode}</InputAdornment>
      }
      multiline={multiline}
      type="display"
      inputProps={{
        "aria-label": label
      }}
    />
  </FormControl>
);

export default SchemaEditorTextField;
