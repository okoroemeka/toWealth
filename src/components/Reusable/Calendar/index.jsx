import React, { useEffect, useState } from 'react';
import moment from 'moment';

import ForwardIcon from '../../UI/Icons/Forward';
import BackwardIcon from '../../UI/Icons/BackwardIcon';
import utils from '../../../utils/data/staticData';
import Button from '../../UI/Button';
import carat from '../../../assets/images/carat.svg';
import './Calendar.scss';

const Calendar = (props) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [mainCurrentDate, _] = useState({ month: moment() });
  const [date, setDate] = useState('');
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState('');

  const { handleReturnSelectedMonth } = props;
  /**
   * Toggle calendar
   */
  const toggleCalendar = () => {
    return setShowCalendar(!showCalendar);
  };

  /**
   * Handles selected month
   */
  const handleSelectMonth = (event) => {
    const selectedMonth = utils.months[event.target.innerText];
    setMonth(selectedMonth);
    toggleCalendar();
    return setDate(selectedMonth + ' - ' + year);
  };

  const dateChangeHandler = () => {
    const currentDate = mainCurrentDate.month.format('MMMM YYYY').split(' ');
    setDate(currentDate[0].toUpperCase() + ' - ' + currentDate[1]);
    setYear(Number(currentDate[1]));
    setMonth(currentDate[0].toUpperCase());
  };

  useEffect(dateChangeHandler, []);

  useEffect(() => {
    if (handleReturnSelectedMonth) {
      handleReturnSelectedMonth(date);
    }
  }, [date, handleReturnSelectedMonth]);
  return (
    <div className='month__picker'>
      <div className='month__picker__wrapper' onClick={() => toggleCalendar()}>
        <h5 className='selected__month'>{date}</h5>
        <img src={carat} alt='dropdown icon' className='caret' />
      </div>
      {showCalendar && (
        <div className='calendar'>
          <div className='year'>
            {year >= 2000 && (
              <BackwardIcon
                className='decrease__date'
                handleClick={() => setYear((prevYear) => prevYear - 1)}
              />
            )}
            <h5 className='selected__month'>{year}</h5>
            <ForwardIcon
              className='increase__date'
              handleClick={() => setYear((prevYear) => prevYear + 1)}
            />
          </div>
          <div className='months'>
            {Object.keys(utils.months).map((item, index) => (
              <div
                key={index}
                className={`months__item ${
                  utils.months[item] == month ? 'months__active' : ''
                }`}
                onClick={(e) => handleSelectMonth(e)}
              >
                {item}
              </div>
            ))}

            <div className='buttons__container'>
              <Button
                className='cancel__button'
                type='button'
                onClick={() => toggleCalendar()}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
