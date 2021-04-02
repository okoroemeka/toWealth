import React, { useEffect, useState } from "react";

import DashboardWrapper from "../../../Reusable/DashboardWrapper";
import BudgetCard from "../../../Reusable/BudgetCard";
import WorthCard from "../../../Reusable/WorthCard";
import WalletIcon from "../../../UI/Icons/Wallet";
import Calendar from "../../../Reusable/Calendar";
import ModalUI from "../../../Reusable/ModalUI";
import BudgetTable from "../../../Reusable/BudgetTable";
import Table from "./Table";

import "./budget.scss";
import BudgetForm from "./BudgetForm";
import { Button, Grid } from "@material-ui/core";
import ApiCall from "../../../../helper/Api";
import { toast } from "react-toastify";

const BudgetDashboard = (props) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [showAddBudget, setShowAddBudget] = useState(false);
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    ApiCall.getCall(`budget/formatted?date=${selectedDate}`).then((res) => {
      console.log(res.payload);
      setBudgets(res.payload);
      if (res.payload.length < 1) {
        toast.info("No Budgets Found");
      }
    });
  }, [selectedDate]);

  const tableHead = ["Category", "Budget", "Actual", "Remaining", "Actions"];

  return (
    <DashboardWrapper>
      <div className="budget__details">
        <div className="row">
          <div className="col-l-8 top__buttons">
            <Calendar handleReturnSelectedMonth={setSelectedDate} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => setShowAddBudget(!showAddBudget)}
            >
              new budget
            </Button>
            {
              <ModalUI
                onOpen={showAddBudget}
                onClose={() => setShowAddBudget(!showAddBudget)}
                title="New Budget"
              >
                <BudgetForm onClose={() => setShowAddBudget(!showAddBudget)} />
              </ModalUI>
            }
          </div>
        </div>
        <Grid container direction="row" spacing={3}>
          <Grid md={8} sm={12} item>
            <BudgetTable tableHead={tableHead} tableData={budgets} />
          </Grid>
          <Grid
            container
            item
            direction={{ md: "column", sm: "row", xs: "row" }}
            md={4}
            spacing={2}
          >
            <Grid item md={12}>
              <BudgetCard
                className="budget__chart"
                charTitle="monthly income"
              />
            </Grid>
            <Grid item md={12}>
              <BudgetCard
                className="budget__chart"
                charTitle="monthly expenses"
              />
            </Grid>
            <Grid item md={12}>
              <WorthCard
                className="personal__savings"
                cardTitle="personal savings"
                iconButtonClassName="wallet__icon__wrapper"
                iconClassName="wallet_icon"
                Icon={WalletIcon}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </DashboardWrapper>
  );
};

export default BudgetDashboard;
