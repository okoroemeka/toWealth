import React, { useEffect, useState } from "react";

import Savings from "../../../UI/Icons/Savings";
import Networth from "../../../UI/Icons/Networth";
import Target from "../../../UI/Icons/Target";
import BudgetCard from "../../../Reusable/BudgetCard";
import WorthCard from "../../../Reusable/WorthCard";
import WorthCardUI from "../../../Reusable/WorthCardUI";
import ActiveGoalCard from "./ActiveGoalCard";
import UserDashboardButton from "./UserDashboardButton";
import DashboardWrapper from "../../../Reusable/DashboardWrapper";

import incomeArrow from "../../../../assets/images/incomeArrow.svg";
import expensesIcon from "../../../../assets/images/expensesIcon.svg";
import addIcon from "../../../../assets/images/addIcon.svg";
import cancelIcon from "../../../../assets/images/cancelIcon.svg";
import transfer from "../../../../assets/images/transfer.svg";
import assets from "../../../../assets/images/assets.svg";
import liabilities from "../../../../assets/images/liabilities.svg";
// import goals from '../../../../assets/images/goals.svg';

import "./userDashboard.scss";
import ApiCall from "../../../../helper/Api";
import { toast } from "react-toastify";
import convertToCurrency from "../../../../helper/convertToCurrency";
import { Grid, Typography } from "@material-ui/core";
import {
  InsertChartOutlined,
  MonetizationOnOutlined,
  SaveAlt,
} from "@material-ui/icons";
import { green } from "@material-ui/core/colors";

const UserDashbord = (props) => {
  const [goals, setGoals] = useState([]);
  const [settings, setSettings] = useState({});
  const [toggleSideButtons, setToggleSideButtons] = useState(false);

  useEffect(() => {
    ApiCall.getCall("settings/get-general-settings").then((res) => {
      const { payload } = res;
      setSettings(
        (prev) => {
          return { ...prev, ...payload };
        },
        (err) => {
          toast.error(err.message);
        }
      );
    });
    ApiCall.getCall("goal").then(
      (res) => {
        setGoals(res.payload);
      },
      (err) => toast.error(err.message)
    );
  }, []);

  const goalGrid = goals.map((goal, index) => (
    <div className="col-l-5" key={index} style={{ marginRight: 6 }}>
      <ActiveGoalCard
        goal={goal.goalName}
        percent={goal.completionRate + "%"}
        progressWidth={goal.completionRate + "%"}
        fraction={
          settings.currency &&
          convertToCurrency(goal.totalSaved, settings.currency) +
            "/" +
            convertToCurrency(goal.goalValue, settings.currency)
        }
      />
    </div>
  ));
  return (
    <>
      <DashboardWrapper>
        <Grid container spacing={2} style={{ marginBottom: "10px" }}>
          <Grid item md={4} sm={6} xs={12}>
            <WorthCardUI
              title="My Savings"
              value={35000}
              color="#3f51b5"
              icon={<SaveAlt />}
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <WorthCardUI
              title="My Networth"
              value={35000}
              iconColor="#3f51b5"
              icon={<MonetizationOnOutlined />}
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <WorthCardUI
              title="Target Networth"
              value={35000}
              icon={<InsertChartOutlined />}
              iconColor={green[500]}
            />
          </Grid>
        </Grid>
        <Typography variant="h5" component="h2">
          My Budget
        </Typography>
        <Grid container spacing={2} style={{ margin: "10px 0" }}>
          <Grid item xs={6} sm={4} md={4}>
            <BudgetCard
              arrowIcon={incomeArrow}
              iconButtonColor="#47b881"
              chartTitle="INCOME"
              displayTopIcon
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <BudgetCard
              arrowIcon={expensesIcon}
              iconButtonColor="#ec4c47"
              chartTitle="EXPENSES"
              displayTopIcon
            />
          </Grid>
        </Grid>
        <Typography variant="h5" component="h2">
          My Active Goals
        </Typography>
        <div className="row active__goal">
          {goalGrid.length < 1 ? <p>No Goals Found</p> : goalGrid}
        </div>
        <div className="savings__datails">
          <div className="col-l-3 toggle__button__wrapper">
            {toggleSideButtons && (
              <div className="buttons__container cls__btns">
                <UserDashboardButton
                  buttonName="Income"
                  backgroundColor="#47b881"
                  imgUrl={incomeArrow}
                />
                <UserDashboardButton
                  buttonName="expenses"
                  backgroundColor="#ec4c47"
                  imgUrl={expensesIcon}
                />
                <UserDashboardButton
                  buttonName="transfer"
                  backgroundColor="#51A553"
                  imgUrl={transfer}
                />
                <UserDashboardButton
                  buttonName="assets"
                  backgroundColor="#4B0AA4"
                  imgUrl={assets}
                />
                <UserDashboardButton
                  buttonName="liabilities"
                  backgroundColor="#0073F7"
                  imgUrl={liabilities}
                />
                <UserDashboardButton
                  buttonName="goals"
                  backgroundColor="#1070CA"
                  imgUrl={goals}
                />
              </div>
            )}
            <button
              type="button"
              className="toggle__button"
              onClick={() => setToggleSideButtons(!toggleSideButtons)}
            >
              <img src={toggleSideButtons ? cancelIcon : addIcon} alt="icon" />
            </button>
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
};

export default UserDashbord;
