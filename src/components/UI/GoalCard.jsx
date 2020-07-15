import React from 'react';

import Card from './Card';
import deleteIcon from '../../assets/images/deleteIcon.svg';
import markIcon from '../../assets/images/markIcon.svg';
import moreIcon from '../../assets/images/moreIcon.svg';
import pauseIcon from '../../assets/images/pauseIcon.svg';
import penIcon from '../../assets/images/penIcon.svg';
import { darkMode } from '../../store/actions/displayMode';

const GaolCard = ({
  goal,
  deadLine,
  rate,
  progress,
  targetFraction,
  isDarkMode,
  toggleModal,
}) => {
  return (
    <Card classname={`goal__card ${isDarkMode && 'card__dark__mode'}`}>
      <div className='row goals__container'>
        <div className='color__box'></div>
        <h5 className={`goal ${isDarkMode && 'darkmode__goal__text'}`}>
          {goal}
        </h5>
      </div>
      <div className='row goal__details__wrapper'>
        <div
          className={`col-l-4 goal__deadline ${
            darkMode && 'goal__deadline__dark'
          }`}
        >
          <h6>Goal deadline</h6>
          <h6>{deadLine}</h6>
        </div>
        <div className='col-l-4 rate'>
          <h4 className={`rate__text ${isDarkMode && 'darkmode__rate__text'}`}>
            {rate}
          </h4>
        </div>
      </div>
      <div className='progress__bar__wrapper'>
        <div
          className='progress'
          style={{
            width: progress,
          }}
        ></div>
      </div>
      <div className='target__fraction'>
        <h5 className={isDarkMode && 'target__fraction__dark'}>
          {targetFraction}
        </h5>
      </div>
      <div className='line__goal'></div>
      <div className='actions__container'>
        <div className='icons__wrapper'>
          <img src={pauseIcon} alt='pause' className='icon pause-icon' />
          <img
            src={penIcon}
            alt='edit'
            className='icon'
            onClick={toggleModal}
          />
          <img src={markIcon} alt='mark' className='icon' />
          <img src={deleteIcon} alt='delete' className='icon' />
          <img src={moreIcon} alt='more' className='icon' />
        </div>
      </div>
    </Card>
  );
};

export default GaolCard;
