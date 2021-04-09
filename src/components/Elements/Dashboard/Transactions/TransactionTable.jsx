import {
  Avatar,
  Box,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from "@material-ui/core";
import React from "react";
import "../../../Reusable/BudgetTable/budgetTable.scss";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { toast } from "react-toastify";
import ApiCall from "../../../../helper/Api";
import convertToCurrency from "../../../../helper/convertToCurrency";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { green, red } from "@material-ui/core/colors";
import clsx from "clsx";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const useStyles = makeStyles((theme) => ({
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  red: {
    color: "#fff",
    backgroundColor: red[500],
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function TransactionTable({
  tableHead,
  tableData,
  getTransactions,
  setId,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const deleteTransaction = (id) => {
    // Alert
    confirmAlert({
      title: "Delete Transaction?",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            ApiCall.deleteCall(`transaction/${id}`).then(
              (res) => {
                toast.success("Transaction Deleted");
                getTransactions();
              },
              (err) => {
                toast.error("Something went wrong");
              }
            ),
        },
        {
          label: "No",
          onClick: () => null,
        },
      ],
    });
    // ConfirmAlert({
    //   title: "Delete Transaction?",
    //   onSuccess: ApiCall.deleteCall(`transaction/${id}`).then(
    //     (res) => {
    //       console.log({ res });
    //       toast.success("Transaction Deleted");
    //     },
    //     (err) => {
    //       console.log({ err });
    //       toast.error("Something went wrong");
    //     }
    //   ),
    //   onClose: () => null,
    // });
  };
  return (
    <div style={{ width: "100%" }}>
      <Table className="table">
        <TableHead className="table__header">
          <TableRow>
            {tableHead.map((head, index) => (
              <TableCell className="table__row" key={index}>
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData &&
            tableData.map((data, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    {data.type === "income" ? (
                      <Avatar className={clsx(classes.green, classes.small)}>
                        <ArrowDownward />
                      </Avatar>
                    ) : (
                      <Avatar className={clsx(classes.red, classes.small)}>
                        <ArrowUpward />
                      </Avatar>
                    )}
                  </TableCell>
                  <TableCell>
                    {new Date(data.date).toLocaleDateString("en-NG")}
                  </TableCell>
                  <TableCell>{data.description}</TableCell>
                  <TableCell>{data.transactionCategory.categoryName}</TableCell>
                  <TableCell>
                    <Box>{convertToCurrency(data.amount)}</Box>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" justifyContent="flex-start">
                      <EditIcon
                        fontSize="small"
                        onClick={() => setId(data.id)}
                      />
                      <DeleteIcon
                        fontSize="small"
                        onClick={() => deleteTransaction(data.id)}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}
