import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import convertToCurrency from "../../../helper/convertToCurrency";
import "./budgetTable.scss";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import LinearWithValueLabel from "../../Reusable/ProgressBar";
import ApiCall from "../../../helper/Api";
import { toast } from "react-toastify";

export default function index({ tableHead, tableData }) {
  const deleteBudget = (id) => {
    // Alert
    ApiCall.deleteCall(`budget/${id}`).then(
      (res) => {
        console.log({ res });
        toast.success("Budget Deleted");
      },
      (err) => {
        console.log({ err });
        toast.error("Something went wrong");
      }
    );
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
                  <TableCell>{data.category}</TableCell>
                  <TableCell>{convertToCurrency(data.budget)}</TableCell>
                  <TableCell>{convertToCurrency(data.actual)}</TableCell>
                  <TableCell>
                    <Box width="12rem">
                      {convertToCurrency(data.remaining)}
                      <LinearWithValueLabel
                        value={(data.actual / data.budget) * 100}
                      />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" justifyContent="flex-start">
                      <EditIcon fontSize="small" />
                      <DeleteIcon
                        fontSize="small"
                        onClick={() => deleteBudget(data.id)}
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
