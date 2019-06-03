import * as React from "react";
import TextField from "../atoms/TextField";

type MultilingualTextPropertyProps = {
  value: Array<string>;
};

const MultilingualTextProperty: React.SFC<MultilingualTextPropertyProps> = ({
  value,
  ...props
}) => (
  <div>
    {value.map(val => (
      <TextField {...props} value={val} />
    ))}
  </div>
);

export default MultilingualTextProperty;
