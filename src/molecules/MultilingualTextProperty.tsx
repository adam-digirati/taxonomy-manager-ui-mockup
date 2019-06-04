import * as React from "react";
import TextFieldWithLanguage from "../atoms/TextFieldWithLanguage";
import FormFieldLabel from '../atoms/FormFieldLabel';
import FromGroup from '../atoms/FormGroup';

const DEFAULT_PROJECT_LANGUAGES = ["en", "de", "nl"];

type HtmlEvent = React.ChangeEvent<HTMLInputElement>;

type MultilingualTextPropertyProps = {
  value: any;
  handleChange?: React.EventHandler<HtmlEvent>;
  name:string;
  label:string;
}

const MultilingualTextProperty: React.SFC<MultilingualTextPropertyProps> = ({ value, label, ...props }) => (
  <FromGroup>
    <FormFieldLabel label={label} />
    {DEFAULT_PROJECT_LANGUAGES.map(language => (
      <TextFieldWithLanguage
        {...props}
        value={(value.find( (val:any) => val.lang === language) || {}).value}
        languageCode={language}
      />
    ))}
  </FromGroup>
);

export default MultilingualTextProperty;
