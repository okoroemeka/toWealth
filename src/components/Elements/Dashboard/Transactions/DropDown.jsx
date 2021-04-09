import React from "react";

import caratIcon from "../../../../assets/images/carat.svg";
import Calendar from "../../../Reusable/Calendar";

const DropDown = ({
  toggleDropdown,
  currentItem,
  showDropdown,
  transactionDropdown,
  handleSelectDate,
  handleSelectItem,
  headerBackground,
}) => {
  return (
    <div className="dropdown__area">
      <div className="dropdown">
        <button
          className="dropdown__header"
          type="button"
          onClick={toggleDropdown}
          style={{ backgroundColor: headerBackground }}
        >
          <h4 className="dropdown__header__title">
            {currentItem || "Transactions"}
          </h4>
          <img
            src={caratIcon}
            alt="icon"
            className={`carat__icon ${showDropdown ? "toggle__caret" : ""}`}
          />
        </button>
        {showDropdown && (
          <ul className="dropdown__body">
            {transactionDropdown.map((item) => (
              <li
                className="dropdown__body__item"
                onClick={() => handleSelectItem(item.name, item.colorCode)}
              >
                <div
                  className="color"
                  style={{ backgroundColor: item.colorCode }}
                ></div>
                <h5 className="item__name">{item.name}</h5>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
