import React, { useState } from "react";

import Calendar from "../../../Reusable/Calendar";
import WorthCard from "../../../Reusable/WorthCard";
import SavingsIcon from "../../../UI/Icons/Savings";
import FloatingButton from "../../../Reusable/FloatingButton";
import addIcon from "../../../../assets/images/addIcon.svg";
import cancelIcon from "../../../../assets/images/cancelIcon.svg";
import TableHead from "../../../Reusable/TableHead";
import TableData from "../../../Reusable/TableData";
import FloatingButtonContent from "../../../Reusable/FloatingButtonContent";
import ContentWrapper from "../../../Reusable/FloatingButtonContentWrapper";
import "./Savings.scss";
// import Modal from "../../../Reusable/Modal/Modal";
import SavingsForm from "../SavingsForm";
import ModalUI from "../../../Reusable/ModalUI";

const Savings = (props) => {
  const [showFloatingContent, setShowFloatingContent] = useState(false);
  const [displayMore, setDisplayMore] = useState(false);
  const [displayIncomeTable, setDisplayIncomeTable] = useState(false);
  const [displayExpensesTable, setDisplayExpensesTable] = useState(false);
  const [clickedItem, setClickedItem] = useState("Income");
  const [displayModal, setDisplayModal] = useState(false);
  const [date, setDate] = useState({ year: "", month: "" });

  const handleSetDisplayContent = (item) => {
    setClickedItem(item);
    return setDisplayModal(!displayModal);
  };
  // const handleDisplayModalContent = () => {
  //   console.log("display");
  //   let modalContent;
  //   if (clickedItem === "income") {
  //     modalContent = (
  //       <SavingsForm
  //         cardTitle="New Income"
  //         type="income"
  //         toggleModal={setDisplayModal(!displayModal)}
  //       />
  //     );
  //   } else {
  //     modalContent = (
  //       <SavingsForm
  //         cardTitle="New Expense"
  //         type="expense"
  //         toggleModal={setDisplayModal(!displayModal)}
  //       />
  //     );
  //   }
  //   return modalContent;
  // };
  console.log(date);
  return (
    <div className="savings">
      <div className="col-l-10">
        <div className="row calender__wrapper">
          <div className="col-l-4 ">
            <Calendar handleReturnSelectedMonth={setDate} />
          </div>
        </div>
        <div className="row savings__details__area">
          <div className="col-l-8 savings__table">
            <div className="savings__table__wrapper">
              <TableHead
                toggleCaret={displayIncomeTable}
                handleShowTable={() =>
                  setDisplayIncomeTable(!displayIncomeTable)
                }
              />

              {displayIncomeTable ? (
                <div className="table__body">
                  <TableData
                    displayMore={displayMore}
                    handleClickMore={() => setDisplayMore(!displayMore)}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="income__wrapper">
              <TableHead
                headerWrapperClassName="expenditure__table"
                firstTitle="Expenditure"
                secondTitle="6,365.87"
                toggleCaret={displayExpensesTable}
                handleShowTable={() =>
                  setDisplayExpensesTable(!displayExpensesTable)
                }
              />
              <div className="table__body">
                {displayExpensesTable ? (
                  <div className="table__body">
                    <TableData
                      displayMore={displayMore}
                      handleClickMore={() => setDisplayMore(!displayMore)}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="col-l-3 savings__details__card">
            <WorthCard
              cardTitle="MY SAVINGS"
              className="savigns__card"
              amountToDisPlay="2,0050"
              iconClassName="savings__icon"
              Icon={SavingsIcon}
              iconColor="#000000"
            />
          </div>
        </div>
      </div>
      <div className="floating__action">
        {showFloatingContent && (
          <div className="content">
            <FloatingButtonContent
              onClick={() => {
                handleSetDisplayContent("income");
              }}
            >
              <ContentWrapper buttonName="Income">+</ContentWrapper>
            </FloatingButtonContent>
            <FloatingButtonContent
              onClick={() => {
                handleSetDisplayContent("expense");
              }}
            >
              <ContentWrapper
                buttonName="Expenses"
                extraClassName="add__expense"
              >
                -
              </ContentWrapper>
            </FloatingButtonContent>

            <ModalUI
              onOpen={displayModal}
              onClose={() => setDisplayModal(!displayModal)}
              title={clickedItem === "income" ? "New Income" : "New Expense"}
            >
              {clickedItem === "income" ? (
                <SavingsForm
                  type={clickedItem}
                  onClose={() => setDisplayModal(!displayModal)}
                />
              ) : (
                <SavingsForm
                  type={clickedItem}
                  onClose={() => setDisplayModal(!displayModal)}
                />
              )}
            </ModalUI>
          </div>
        )}
        <FloatingButton
          onClick={() => setShowFloatingContent(!showFloatingContent)}
        >
          <img src={showFloatingContent ? cancelIcon : addIcon} alt="icon" />
        </FloatingButton>
      </div>
    </div>
  );
};

export default Savings;
