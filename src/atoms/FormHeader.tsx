import * as React from 'react';
import { Typography } from '@material-ui/core';

type FromHeaderProps = {
  children: React.ReactNode;
}

const FormHeader: React.SFC<FromHeaderProps> = ({ children }) => (
  <Typography variant="h3">{children}</Typography>
);

export default FormHeader;
