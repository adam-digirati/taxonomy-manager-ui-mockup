import * as React from "react";
import TextField from "../atoms/TextField";
import FromGroup from '../atoms/FormGroup';

type HtmlEvent = React.ChangeEvent<HTMLInputElement>;
type TextPropertyProps = {
    value:string;
    handleChange?: React.EventHandler<HtmlEvent>;
    name:string;
    label?:string;
}

const TextProperty: React.SFC<TextPropertyProps> = props => (
  <FromGroup>
    <TextField {...props} />
  </FromGroup>
);

export default TextProperty;
