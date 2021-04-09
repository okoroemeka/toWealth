import React from "react";
import convertToCurrency from "../../../../helper/convertToCurrency";
import "./info.scss";

const InfoItem = ({ title, amount, children }) => {
  return (
    <div className="info__item">
      <div className="item__detail__area">
        <h5 className="item__title">{title}</h5>
        <h5 className="item__amount">{convertToCurrency(amount)}</h5>
      </div>
      <div className="icon__container">{children}</div>
    </div>
  );
};

export default InfoItem;
