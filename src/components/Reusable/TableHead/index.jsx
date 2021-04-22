import { Box, makeStyles } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import clsx from "clsx";
import React from "react";
import Caret from "../../UI/Icons/Caret";
import "./tableHead.scss";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "3rem",
    alignItems: "center",
    padding: "0 1rem",
    marginBottom: "0.5rem",
    borderRadius: "10px",
    fontSize: "1rem",
  },
  title: {
    color: "#ffffff",
    fontWeight: "normal",
    fontSize: "1rem",
  },
  green: {
    backgroundColor: green[500],
    color: "#ffffff",
  },
  red: {
    backgroundColor: red[500],
    color: "#ffffff",
  },
}));

const Table = (props) => {
  const {
    firstTitle,
    secondTitle,
    headerWrapperClassName,
    toggleCaret,
    handleShowTable,
    color,
  } = props;
  const classes = useStyles();
  return (
    <Box className={clsx(classes.header, classes[color])}>
      <h5 className={classes.title}>{firstTitle || "Income"}</h5>
      <Box display="flex" alignItems="center">
        <h5 className="income__amount">{`${secondTitle || "23,568.00"}`}</h5>
        <Caret
          handleClick={handleShowTable}
          fill="#ffffff"
          className={`table__custom_header__caret ${
            toggleCaret ? "toggle__caret" : ""
          }`}
        />
      </Box>
    </Box>
  );
};

export default Table;
