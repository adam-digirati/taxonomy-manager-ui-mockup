import * as React from "react";
import TextFieldWithLanguage from "../atoms/TextFieldWithLanguage";

const DEFAULT_PROJECT_LANGUAGES = ["en", "de", "nl"];

const MultilingualTextProperty = ({ value, ...props }) => (
  <div>
    {DEFAULT_PROJECT_LANGUAGES.map(language => (
      <TextFieldWithLanguage
        {...props}
        value={(value.find(val => val.lang === language) || {}).value}
        languageCode={language}
      />
    ))}
  </div>
);

export default MultilingualTextProperty;
