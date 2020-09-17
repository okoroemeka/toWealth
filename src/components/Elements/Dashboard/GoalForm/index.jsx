import React, { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import goalIcon from '../../../../assets/images/chat.svg';
import totalSavedIcon from '../../../../assets/images/totalSavedIcon.svg';
import calenderIcon from '../../../../assets/images/calenderIcon.svg';
import description from '../../../../assets/images/description.svg';
import Card from '../../../UI/Card';
import Button from '../../../UI/Button';
import staticData from '../../../../utils/data/staticData';
import CardHeader from '../../../UI/CardHeader';
import Input from '../../../Reusable/GoalInput/Input';
import ColorTool from '../../../Reusable/ColorTool';
import { goal } from '../../../../store/actions/goal';
import './editCard.scss';

const { colors: colorsInitialState } = staticData;

const initialGoalState = {
  goalName: '',
  goalValue: null,
  totalSaved: null,
  calender: '',
  description: '',
  timeline: '',
};

const goalTypes = {
  addGoal: 'ADD__GOAL__INPUT',
  editGoal: 'EDIT__GOAL__INPUT',
  selectColor: 'SELECT__COLOR',
};

function chooseColorReducer(state = [], { type, payload }) {
  switch (type) {
    case goalTypes.selectColor:
      return state.map((colorItem) => {
        if (colorItem.colorId == payload.colorId) {
          colorItem.active = true;
        } else {
          colorItem.active = false;
        }
        return colorItem;
      });
    default:
      return state;
  }
}

function formReducer(state = {}, { type, payload }) {
  switch (type) {
    case goalTypes.addGoal:
      return {
        ...state,
        [payload.name]: payload.value,
      };

    case goalTypes.editGoal:
      return {
        ...state,
        [payload.name]: payload.value,
      };

    default:
      return state;
  }
}

const EditCard = ({
  handleCancel,
  cardRef,
  handleBlur,
  formTitle,
  handleSubmit,
  toggleModal,
  goalActivityToggler,
}) => {
  const [colorsState, dispatchUpdateColorState] = useReducer(
    chooseColorReducer,
    colorsInitialState
  );
  const [goalFormParameters, dispatchAddGoal] = useReducer(
    formReducer,
    initialGoalState
  );
  const [chosedColor, setChosedColor] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const dispatch = useDispatch();

  const handleSelectColor = (data) => {
    setChosedColor(data.payload.color);
    return dispatchUpdateColorState(data);
  };

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

  handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    try {
      setLoading(true);
      await dispatch(
        goal({
          ...goalFormParameters,
          color: chosedColor || '#b620e0',
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

  return (
    <Card classname='col-sm-12 col-l-4 edit__goal__card'>
      <div ref={cardRef} className='card__content' onBlur={() => null}>
        <CardHeader handleCancel={handleCancel} cardTitle={formTitle} />
        <form onSubmit={handleSubmit}>
          <fieldset className='fieldset' disabled={false}>
            <div className='wrap__input'>
              <Input
                labelTitle='goal name'
                icon={goalIcon}
                iconName='goal'
                iconClassName='goal__icon'
                inputType='text'
                inputName='goalName'
                inputValue={goalFormParameters.goalName}
                handleChange={handleChange}
              />
              <Input
                labelTitle='goal value'
                icon={goalIcon}
                iconName='goal value'
                iconClassName='goal__icon'
                inputType='number'
                inputName='goalValue'
                inputValue={goalFormParameters.goalValue}
                handleChange={handleChange}
              />
            </div>
            <div className='wrap__input'>
              <Input
                labelTitle='total saved'
                icon={totalSavedIcon}
                iconName='total saved'
                iconClassName='goal__icon'
                inputType='number'
                inputName='totalSaved'
                inputValue={goalFormParameters.totalSaved}
                handleChange={handleChange}
              />
              <Input
                labelTitle='timeline'
                icon={calenderIcon}
                iconName='date'
                iconClassName='goal__icon'
                inputType='date'
                inputName='timeline'
                inputValue={goalFormParameters.timeline}
                handleChange={handleChange}
              />
            </div>
            <div className='wrap__input'>
              <Input
                labelTitle='description'
                icon={description}
                labelClassName='lable__description'
                iconName='date'
                iconClassName='delete__icon'
                inputType='text'
                inputName='description'
                inputWrapperClassName='input__wrapper__description'
                inputValue={goalFormParameters.description}
                handleChange={handleChange}
              />
            </div>
          </fieldset>
          <ColorTool
            colorsState={colorsState}
            handleSelectColor={handleSelectColor}
          />
          <div className='button__wrapper'>
            <Button className='submit__button' disabled={loading}>
              {!loading ? (
                'Save'
              ) : (
                <CircularProgress color='#ffffff' size={16} />
              )}
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default EditCard;
