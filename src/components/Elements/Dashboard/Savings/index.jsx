import React, { useEffect, useState } from "react";

import Calendar from "../../../Reusable/Calendar";
import WorthCard from "../../../Reusable/WorthCard";
import SavingsIcon from "../../../UI/Icons/Savings";
import TableHead from "../../../Reusable/TableHead";
import TableData from "../../../Reusable/TableData";
import "./Savings.scss";
// import Modal from "../../../Reusable/Modal/Modal";
import SavingsForm from "../SavingsForm";
import ModalUI from "../../../Reusable/ModalUI";
import {
  Box,
  Fab,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  useTheme,
} from "@material-ui/core";
import { Add, ArrowDownward, ArrowUpward, Close } from "@material-ui/icons";
import { green, red } from "@material-ui/core/colors";
import ApiCall from "../../../../helper/Api";
import { toast } from "react-toastify";
import convertToCurrency from "../../../../helper/convertToCurrency";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
  header: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "75%",
    },
  },
  worth: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "0.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      width: "25%",
      marginLeft: "0.5rem",
    },
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
  iconGreen: { color: green[500] },
  iconRed: { color: red[500] },
}));

const Savings = (props) => {
  const [displayMore, setDisplayMore] = useState(false);
  const [displayIncomeTable, setDisplayIncomeTable] = useState(false);
  const [displayExpensesTable, setDisplayExpensesTable] = useState(false);
  const [clickedItem, setClickedItem] = useState("Income");
  const [displayModal, setDisplayModal] = useState(false);
  const [date, setDate] = useState({ year: "", month: "" });
  const [anchorEl, setAnchorEl] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const theme = useTheme();
  const classes = useStyles(theme);
  const handleSetDisplayContent = (item) => {
    setClickedItem(item);
    return setDisplayModal(!displayModal);
  };

  /**
   * Open Menu
   * @param {*} e
   */
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
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

  const incomeTransactions = transactions.filter(
    (trx) => trx.type === "income"
  );
  const expenseTransactions = transactions.filter(
    (trx) => trx.type === "expense"
  );

  const incomeTrx = incomeTransactions.map((trax, i) => (
    <TableData
      key={i}
      dataTitle={trax.description}
      amount={convertToCurrency(trax.amount)}
      displayMore={displayMore}
      handleClickMore={() => setDisplayMore(!displayMore)}
    />
  ));
  const expenseTrx = expenseTransactions.map((trax, i) => (
    <TableData
      key={i}
      dataTitle={trax.description}
      amount={convertToCurrency(trax.amount)}
      displayMore={displayMore}
      handleClickMore={() => setDisplayMore(!displayMore)}
    />
  ));
  const expenseTotal = expenseTransactions.reduce(
    (total, curr) => total + curr.amount,
    0
  );

  const incomeTotal = incomeTransactions.reduce(
    (total, curr) => total + curr.amount,
    0
  );

  return (
    <>
      <Box className={classes.root}>
        <Box>
          <Calendar handleReturnSelectedMonth={setDate} />
        </Box>
        <Box className={classes.flex}>
          <Box className={classes.header}>
            <TableHead
              color={"green"}
              toggleCaret={displayIncomeTable}
              secondTitle={convertToCurrency(incomeTotal)}
              handleShowTable={() => setDisplayIncomeTable(!displayIncomeTable)}
            />

            {displayIncomeTable ? (
              <div className="table__body">{incomeTrx}</div>
            ) : null}
            <div className="income__wrapper">
              <TableHead
                color="red"
                headerWrapperClassName="expenditure__table"
                firstTitle="Expense"
                secondTitle={convertToCurrency(expenseTotal)}
                toggleCaret={displayExpensesTable}
                handleShowTable={() =>
                  setDisplayExpensesTable(!displayExpensesTable)
                }
              />
              <div className="table__body">
                {displayExpensesTable ? (
                  <div className="table__body">{expenseTrx}</div>
                ) : null}
              </div>
            </div>
          </Box>
          <Box className={classes.worth}>
            <WorthCard
              cardTitle="MY SAVINGS"
              className="savigns__card"
              amountToDisPlay={convertToCurrency(incomeTotal - expenseTotal)}
              iconClassName="savings__icon"
              Icon={SavingsIcon}
              iconColor="#000000"
            />
          </Box>
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
        title={clickedItem === "income" ? "New Income" : "New Expense"}
      >
        {clickedItem === "income" ? (
          <SavingsForm
            type={clickedItem}
            onClose={() => {
              setDisplayModal(!displayModal);
              getTransactions();
            }}
          />
        ) : (
          <SavingsForm
            type={clickedItem}
            onClose={() => {
              setDisplayModal(!displayModal);
              getTransactions();
            }}
          />
        )}
      </ModalUI>
    </>
  );
};

export default Savings;
