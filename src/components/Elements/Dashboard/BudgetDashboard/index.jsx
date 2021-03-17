import React, { useState } from "react";

import DashboardWrapper from "../../../Reusable/DashboardWrapper";
import BudgetCard from "../../../Reusable/BudgetCard";
import WorthCard from "../../../Reusable/WorthCard";
import WalletIcon from "../../../UI/Icons/Wallet";
import Calendar from "../../../Reusable/Calendar";
import ModalUI from "../../../Reusable/ModalUI";
import Table from "./Table";

import "./budget.scss";
import BudgetForm from "./BudgetForm";
import { Button } from "@material-ui/core";

const BudgetDashboard = (props) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [showAddBudget, setShowAddBudget] = useState(false);

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
        <div className="row chart__area">
          <Table />
          <div className="col-l-4 budget__chart__wrapper">
            <BudgetCard className="budget__chart" charTitle="monthly income" />
            <BudgetCard
              className="budget__chart"
              charTitle="monthly expenses"
            />

            <WorthCard
              className="personal__savings"
              cardTitle="personal savings"
              iconButtonClassName="wallet__icon__wrapper"
              iconClassName="wallet_icon"
              Icon={WalletIcon}
            />
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default BudgetDashboard;
