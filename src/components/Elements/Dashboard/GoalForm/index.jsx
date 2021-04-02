import React, { useReducer, useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import CircularProgress from "@material-ui/core/CircularProgress";

import goalIcon from "../../../../assets/images/chat.svg";
import totalSavedIcon from "../../../../assets/images/totalSavedIcon.svg";
import calenderIcon from "../../../../assets/images/calenderIcon.svg";
import description from "../../../../assets/images/description.svg";
import Card from "../../../UI/Card";
import Button from "../../../UI/Button";
// import staticData from "../../../../utils/data/staticData";
import CardHeader from "../../../UI/CardHeader";
import Input from "../../../Reusable/GoalInput/Input";
// import Modal from '../../../Reusable/Modal/Modal';
import { goal } from "../../../../store/actions/goal";
// import ColorPallete from './ColorPallete';
import GoalFormDropdown from "../../../Reusable/GoalFormDropdown";
import axios from "../../../../utils/axios";

import {
  // chooseColorReducer,
  formReducer,
  goalTypes,
} from "../../../../helper/Reducers/goal";
import "./editCard.scss";

// const { colors: colorsInitialState } = staticData;

const initialGoalState = {
  goalName: "",
  goalValue: null,
  totalSaved: null,
  description: "",
  timeline: "",
};

const GoalForm = ({
  edit,
  itemId = null,
  handleCancel,
  cardRef,
  // handleBlur,
  formTitle,
  toggleModal,
  goalActivityToggler,
  initialStateAsProps = initialGoalState,
}) => {
  // const [colorsState, dispatchUpdateColorState] = useReducer(
  //   chooseColorReducer,
  //   colorsInitialState
  // );

  const [goalFormParameters, dispatchAddGoal] = useReducer(
    formReducer,
    initialStateAsProps
  );

  const [
    // chosedColor,
    setChosedColor,
  ] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [
    // err,
    setErr,
  ] = useState("");

  const dispatch = useDispatch();

  /**
   * @returns {function} call
   * @param {object} e
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    return dispatchAddGoal({
      type: goalTypes.addGoal,
      payload: {
        name,
        value,
      },
    });
  };

  /**
   * @returns {function} call
   * @param {object} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    try {
      setLoading(true);
      await dispatch(
        goal({
          ...goalFormParameters,
          category,
        })
      );
      goalActivityToggler(true);
      setLoading(false);
      toggleModal();
    } catch ({ message }) {
      setLoading(false);
      setErr(message);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    try {
      setLoading(true);
      await axios.patch(`/goal/${itemId}`, {
        ...goalFormParameters,
        category,
      });
      goalActivityToggler(true);
      setLoading(false);
      toggleModal();
      toast.success("Goal edited successfully");
    } catch ({ message }) {
      setLoading(false);
      setErr(message);
    }
  };

  const handleSelectCategory = ({ color, category }) => {
    setCategory(category);
    setChosedColor(color);
  };

  return (
    <Card classname="col-sm-12 col-l-4 edit__goal__card">
      <div ref={cardRef} className="card__content" onBlur={() => null}>
        <CardHeader handleCancel={handleCancel} cardTitle={formTitle} />

        <form onSubmit={!edit ? handleSubmit : handleEditSubmit}>
          <fieldset className="fieldset" disabled={false}>
            <div className="wrap__input">
              <Input
                labelTitle="goal name"
                icon={goalIcon}
                iconName="goal"
                iconClassName="goal__icon"
                inputType="text"
                inputName="goalName"
                inputValue={goalFormParameters.goalName}
                handleChange={handleChange}
                required
              />
              <Input
                labelTitle="goal value"
                icon={goalIcon}
                iconName="goal value"
                iconClassName="goal__icon"
                inputType="number"
                inputName="goalValue"
                inputValue={goalFormParameters.goalValue}
                handleChange={handleChange}
                required
              />
            </div>
            <div className="wrap__input">
              <Input
                labelTitle="total saved"
                icon={totalSavedIcon}
                iconName="total saved"
                iconClassName="goal__icon"
                inputType="number"
                inputName="totalSaved"
                inputValue={goalFormParameters.totalSaved}
                handleChange={handleChange}
                required
              />
              <Input
                labelTitle="timeline"
                icon={calenderIcon}
                iconName="date"
                iconClassName="goal__icon"
                inputType="date"
                inputName="timeline"
                inputValue={goalFormParameters.timeline?.split("T")[0]}
                handleChange={handleChange}
                required
                minValue={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="wrap__input">
              <Input
                labelTitle="description"
                icon={description}
                labelClassName="lable__description"
                iconName="date"
                iconClassName="delete__icon"
                inputType="text"
                inputName="description"
                inputWrapperClassName="input__wrapper__description"
                inputValue={goalFormParameters.description}
                handleChange={handleChange}
                required
              />
            </div>
            <div className="wrap__input">
              <GoalFormDropdown handleSelectCategory={handleSelectCategory} />
            </div>
          </fieldset>
          <div className="button__wrapper">
            <Button className="submit__button" disabled={loading}>
              {!loading ? (
                "Save"
              ) : (
                <CircularProgress color="#ffffff" size={16} />
              )}
            </Button>
          </div>
        </form>
      </div>
      <Fragment>
        {/* {displayModal && (
          <Modal style={{ zIndex: 34 }}>
            <ColorPallete
              handleCancel={toggleColorPalleteModal}
              colorsState={colorsState}
              handleSelectColor={handleSelectColor}
            />
          </Modal>
        )} */}
      </Fragment>
    </Card>
  );
};

export default GoalForm;
