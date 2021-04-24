import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React from "react";
const useStyle = makeStyles(() => ({
  root: {
    width: "100%",
  },
}));

const Search = ({ searchData, handleInputChange = () => null }) => {
  const classes = useStyle();
  return (
    <>
      <TextField
        className={classes.root}
        label="Search Transaction"
        onChange={(e) => handleInputChange(e.target.value)}
        value={searchData}
        inputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default Search;
