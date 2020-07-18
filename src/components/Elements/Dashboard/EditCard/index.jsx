import React, { useReducer, useState } from 'react';

import goalIcon from '../../../../assets/images/chat.svg';
import totalSavedIcon from '../../../../assets/images/totalSavedIcon.svg';
import calenderIcon from '../../../../assets/images/calenderIcon.svg';
import description from '../../../../assets/images/description.svg';
import plane from '../../../../assets/images/plane.svg';
import jet from '../../../../assets/images/jet.svg';
import computer from '../../../../assets/images/computer.svg';
import tick from '../../../../assets/images/tick1.svg';

import Card from '../../../UI/Card';
import ColorBar from '../../../UI/ColorBar';
import Button from '../../../UI/Button';
import staticData from '../../../../utils/data/staticData';
import CardHeader from '../../../UI/CardHeader';
import './editCard.scss';

const { colors: colorsInitialState } = staticData;

function reducer(state, { type, payload }) {
  switch (type) {
    case 'SELECT__COLOR':
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

const EditCard = ({ handleCancel, cardRef, handleBlur }) => {
  const [colorsState, dispatchUpdateColorState] = useReducer(
    reducer,
    colorsInitialState
  );
  const [chosedColor, setChosedColor] = useState('');

  const handleSelectColor = (data) => {
    setChosedColor(data.payload.color);
    return dispatchUpdateColorState(data);
  };

  return (
    <Card classname='col-sm-12 col-l-4 edit__goal__card'>
      <div ref={cardRef} className='card__content' onBlur={() => null}>
        <CardHeader handleCancel={handleCancel} cardTitle='Edit goal' />
        <form>
          <fieldset className='fieldset'>
            <div className='wrap__input'>
              <label htmlFor='goal name' className='lable'>
                <h6 className='label__text'>Goal name</h6>
                <div className='input__wrapper'>
                  <img
                    src={goalIcon}
                    alt='goalIcon'
                    className='icon goal__icon'
                  />
                  <input type='text' name='goalName' className='input' />
                </div>
              </label>
              <label htmlFor='goal value' className='lable'>
                <h6 className='label__text'>Goal value</h6>
                <div className='input__wrapper'>
                  <img
                    className='icon goal__icon'
                    src={totalSavedIcon}
                    alt='goalIcon'
                  />
                  <input type='text' name='goalValue' className='input' />
                </div>
              </label>
            </div>
            <div className='wrap__input'>
              <label htmlFor='total saved' className='lable'>
                <h6 className='label__text'>Total saved</h6>
                <div className='input__wrapper'>
                  <img
                    src={totalSavedIcon}
                    alt='goalIcon'
                    className='icon goal__icon'
                  />
                  <input type='text' name='totalSaved' className='input' />
                </div>
              </label>
              <label htmlFor='timeline' className='lable'>
                <h6 className='label__text'>Timeline</h6>
                <div className='input__wrapper'>
                  <img
                    className='icon goal__icon'
                    src={calenderIcon}
                    alt='goalIcon'
                  />
                  <input type='date' name='calenderIcon' className='input' />
                </div>
              </label>
            </div>
            <div className='wrap__input'>
              <label htmlFor='timeline' className='lable lable__description'>
                <h6 className='label__text'>Description</h6>
                <div className='input__wrapper input__wrapper__description'>
                  <img
                    className='icon delete__icon'
                    src={description}
                    alt='goalIcon'
                  />
                  <input type='text' name='description' className='input' />
                </div>
              </label>
            </div>
          </fieldset>
          <div className='color__tool'>
            <div className='color__bar'>
              <h4>Color</h4>
              <div className='color__area'>
                {colorsState.map(({ colorId, color, active }) => (
                  <ColorBar
                    key={colorId}
                    color={color}
                    handleClick={() =>
                      handleSelectColor({
                        type: 'SELECT__COLOR',
                        payload: { colorId, color },
                      })
                    }
                  >
                    {active && <img src={tick} alt='mark' className='mark' />}
                  </ColorBar>
                ))}
                <ColorBar color='#d8d8d8' className='others__button'>
                  <span className='others__text'>Others</span>
                </ColorBar>
              </div>
            </div>
            <div className='color__icon'>
              <h4>Icon</h4>
              <div className='icon'>
                <ColorBar color='#b620e0' />
                <ColorBar color='#979797'>
                  <img src={plane} alt='plane' className='bar__icon' />
                </ColorBar>
                <ColorBar color='#979797'>
                  <img src={jet} alt='jet' className='bar__icon' />
                </ColorBar>
                <ColorBar color='#979797'>
                  <img src={computer} alt='computer' className='bar__icon' />
                </ColorBar>
                <ColorBar color='#d8d8d8' className='others__button'>
                  <span className='others__text'>Others</span>
                </ColorBar>
              </div>
            </div>
          </div>
          <div className='button__wrapper'>
            <Button className='submit__button'>Save</Button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default EditCard;
