import * as React from "react";
import { Grid, Paper, IconButton, InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";

type SearchFieldProps = {
  placeholder: string;
  searchIconLabel: string;
};

const SearchField: React.SFC<SearchFieldProps> = ({
  placeholder = "Search Projects",
  searchIconLabel = "Search"
}) => (
  <Paper>
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      <InputBase placeholder={placeholder} />
      <IconButton aria-label={searchIconLabel}>
        <Search />
      </IconButton>
    </Grid>
  </Paper>
);
export default SearchField;
