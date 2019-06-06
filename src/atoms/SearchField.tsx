import * as React from "react";
import { Grid, Paper, IconButton, InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";

type SearchFieldProps = {
  placeholder: string;
  searchIconLabel: string;
  style?: any,
};

const SearchField: React.SFC<SearchFieldProps> = ({
  placeholder = "Search Projects",
  searchIconLabel = "Search",
  style={}
}) => (
  <Paper>
    <Grid container direction="row" justify="space-evenly" alignItems="center" style={style}>
      <InputBase placeholder={placeholder} style={{ marginLeft: 16, flex:1}}/>
      <IconButton aria-label={searchIconLabel}>
        <Search />
      </IconButton>
    </Grid>
  </Paper>
);
export default SearchField;
