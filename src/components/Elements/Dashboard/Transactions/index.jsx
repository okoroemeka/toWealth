import React, { useEffect, useState } from "react";

import staticData from "../../../../utils/data/staticData";
import DropDown from "./DropDown";
import Search from "./Search";
import InfoItem from "./InfoItem";
import "./transaction.scss";
import {
  Avatar,
  Box,
  Fab,
  Grid,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  useTheme,
} from "@material-ui/core";
import Calendar from "../../../Reusable/Calendar";
import TransactionTable from "./TransactionTable";
import ApiCall from "../../../../helper/Api";
import {
  Add,
  ArrowDownward,
  ArrowUpward,
  Close,
  SaveAltOutlined,
} from "@material-ui/icons";
import { green, red, purple } from "@material-ui/core/colors";
import clsx from "clsx";
import SavingsForm from "../SavingsForm";
import ModalUI from "../../../Reusable/ModalUI";
import { toast } from "react-toastify";

const { transactionDropdown, transactionTableData } = staticData;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  iconGreen: { color: green[500] },
  iconRed: { color: red[500] },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  red: {
    color: "#fff",
    backgroundColor: red[500],
  },
  purple: {
    color: "#fff",
    backgroundColor: purple[500],
  },
  fab: {
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      bottom: theme.spacing(3),
      right: theme.spacing(3),
    },
    [theme.breakpoints.up("md")]: {
      bottom: theme.spacing(5),
      right: theme.spacing(5),
    },
  },
  flex: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    justifyContent: "space-between",
    marginTop: "0.5rem",
  },
  main: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "75%",
    },
  },
  sub: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "0.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      width: "25%",
      marginLeft: "0.5rem",
    },
  },
  mb: {
    marginBottom: "0.5rem",
  },
}));

const Transaction = (props) => {
  const [currentItem, setCurrentItem] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [date, setDate] = useState("");
  const [searchData, setSearchData] = useState("");
  const [headerColor, setHeaderColor] = useState("#47b881");
  const [transactions, setTransactions] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);
  const [clickedItem, setClickedItem] = useState("");
  const [id, setId] = useState("");
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleSetDisplayContent = (item) => {
    setClickedItem(item);
    return setDisplayModal(!displayModal);
  };

  /**
   * handle selecting current item
   */
  const handleSelectItem = (itemName, seletedHeaderColor) => {
    setCurrentItem(itemName);
    setHeaderColor(seletedHeaderColor);
    toggleDropdown();
  };

  /**
   * toggle dropdown
   */
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  /**
   * handle select date
   * @param {string} selectedDate
   */
  const handleSelectDate = (selectedDate) => {
    setDate(selectedDate);
  };

  /**
   * Open Menu
   * @param {*} e
   */
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleEditClick = (id) => {
    setId(id);
    setClickedItem("editTransaction");
    setDisplayModal(true);
  };

  /**
   * Close Menu
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  const menuId = "fabMenu";

  const fabMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleClose}
    >
      <MenuItem
        onClick={() => {
          handleSetDisplayContent("income");
          handleClose();
        }}
      >
        <ListItemIcon className={classes.iconGreen}>
          <ArrowDownward />
        </ListItemIcon>
        <ListItemText>Add Income</ListItemText>
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleSetDisplayContent("expense");
          handleClose();
        }}
      >
        <ListItemIcon className={classes.iconRed}>
          <ArrowUpward />
        </ListItemIcon>
        <ListItemText>Add Expense</ListItemText>
      </MenuItem>
    </Menu>
  );

  const income = transactions
    .filter((trx) => trx.type === "income")
    .reduce((total, current) => total + current.amount, 0);

  const expense = transactions
    .filter((trx) => trx.type === "expense")
    .reduce((total, current) => total + current.amount, 0);

  const savings = income - expense;

  useEffect(() => {
    ApiCall.getCall("transaction").then(
      (res) => {
        console.log(res.payload);
        setTransactions(res.payload);
      },
      (err) => {
        toast.error("Unable to get Transactions");
      }
    );
  }, []);

  const getTransactions = () => {
    ApiCall.getCall("transaction").then(
      (res) => {
        setTransactions(res.payload);
      },
      (err) => {
        toast.error("Unable to get Transactions");
      }
    );
  };

  const tableHead = [
    "Type",
    "Date",
    "Description",
    "Category",
    "Amount",
    "Actions",
  ];
  return (
    <div className={clsx(classes.root, "transaction__dashboard")}>
      <Box className={classes.flex}>
        <Box className={classes.main}>
          <Box className={clsx(classes.flex, classes.mb)}>
            <DropDown
              toggleDropdown={toggleDropdown}
              currentItem={currentItem}
              showDropdown={showDropdown}
              transactionDropdown={transactionDropdown}
              handleSelectItem={handleSelectItem}
              headerBackground={headerColor}
            />
            <Calendar handleReturnSelectedMonth={handleSelectDate} />
          </Box>
          <Search
            className={classes.mb}
            searchData={searchData}
            handleInputChange={setSearchData}
          />
          <TransactionTable
            className={classes.mb}
            tableHead={tableHead}
            tableData={transactions}
            getTransactions={() => getTransactions()}
            setId={(id) => {
              handleEditClick(id);
            }}
          />
        </Box>
        <Box className={classes.sub}>
          <InfoItem title="income" amount={income}>
            <Avatar className={classes.green}>
              <ArrowDownward />
            </Avatar>
          </InfoItem>
          <InfoItem title="expenses" amount={expense}>
            <Avatar className={classes.red}>
              <ArrowUpward />
            </Avatar>
          </InfoItem>
          <InfoItem title="savings" amount={savings}>
            <Avatar className={classes.purple}>
              <SaveAltOutlined />
            </Avatar>
          </InfoItem>
          {/*
            <InfoItem
              title="net worth"
              amount={savings}
              backgroundColor="#ec4c47"
            >
              <Avatar className={classes.green}>
                <MonetizationOnOutlined />
              </Avatar>
            </InfoItem>*/}
        </Box>
      </Box>

      <Fab
        className={classes.fab}
        color="primary"
        aria-label="Add"
        onClick={handleClick}
      >
        {isMenuOpen ? <Close /> : <Add />}
      </Fab>
      {fabMenu}
      <ModalUI
        onOpen={displayModal}
        onClose={() => {
          setDisplayModal(!displayModal);
        }}
        title={
          clickedItem === "income"
            ? "New Income"
            : clickedItem === "expense"
            ? "New Expense"
            : "Edit Transaction"
        }
      >
        {clickedItem === "income" ? (
          <SavingsForm
            type={clickedItem}
            onClose={() => {
              getTransactions();
              setDisplayModal(!displayModal);
            }}
          />
        ) : clickedItem === "expense" ? (
          <SavingsForm
            type={clickedItem}
            onClose={() => {
              getTransactions();
              setDisplayModal(!displayModal);
            }}
          />
        ) : (
          <SavingsForm
            type={clickedItem}
            editTransaction={true}
            id={id}
            onClose={() => {
              getTransactions();
              setDisplayModal(!displayModal);
            }}
          />
        )}
      </ModalUI>
    </div>
  );
};

export default Transaction;
