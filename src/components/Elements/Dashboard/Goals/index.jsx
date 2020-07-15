import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../../../UI/Card';
import plusIcon from '../../../../assets/images/plus.svg';
import caratIcon from '../../../../assets/images/carat.svg';
import GoalCard from '../../../UI/GoalCard';
import Modal from '../../../Reuable/Modal/Modal';
import EditCard from '../EditCard';

import './Goals.scss';

const Goals = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentItem, setCurrentItem] = useState([
    'ACTIVE GOALS',
    'PAUSED GOALS',
    'REACHED GOALS',
  ]);
  const [displayModal, setDispalyModal] = useState(true);
  const { darkMode } = useSelector((state) => state.darkMode);

  const editCardRef = useRef(null);

  const handleOnchange = (e) => {
    const newCurrentItem = currentItem.filter(
      (item) => item != e.target.innerText
    );
    newCurrentItem.unshift(e.target.innerText);
    setCurrentItem(newCurrentItem);
    setShowDropdown(!showDropdown);
  };

  const toggleModal = () => {
    return setDispalyModal(!displayModal);
  };

  useEffect(() => {
    if (displayModal) {
      editCardRef.current.focus();
      console.log('editCard', editCardRef.current);
    }
  }, [displayModal]);

  return (
    <React.Fragment>
      <div className='row body'>
        <div className='col-l-12 dropdown__navigation__area'>
          <div className='dropdown__container'>
            <button
              type='submit'
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {currentItem[0]}
              <img src={caratIcon} alt='carat' className='carat__icon' />
            </button>
            <ul
              className={`dropdown__items ${
                showDropdown ? 'toggle__dropdown' : null
              }`}
            >
              {currentItem.map((item, index) => {
                if (item != currentItem[0]) {
                  return (
                    <li key={index} onClick={(e) => handleOnchange(e)}>
                      {item}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <div className='row main__content__area'>
          <Card
            classname={`add__goals__card ${darkMode && 'card__dark__mode'}`}
          >
            <button type='submit' className='add__goal__button'>
              <img src={plusIcon} alt='plus icon' className='plus__icon' />
              <h5
                className={`add__newgoal__text ${darkMode && 'darkmode__text'}`}
              >
                New Goal
              </h5>
            </button>
          </Card>
          <GoalCard
            goal='New Car'
            deadLine='Sep 30, 2020'
            rate='4.00%'
            progress='5%'
            targetFraction='$200,000.00/$500,000.00'
            isDarkMode={darkMode}
            toggleModal={toggleModal}
          />
          <GoalCard
            goal='New Car'
            deadLine='Sep 30, 2020'
            rate='4.00%'
            progress='5%'
            targetFraction='$200,000.00/$500,000.00'
            isDarkMode={darkMode}
            toggleModal={toggleModal}
          />
        </div>
      </div>
      {displayModal && (
        <Modal>
          <EditCard
            handleCancel={() => setDispalyModal(!displayModal)}
            cardRef={editCardRef}
            handleBlur={toggleModal}
          ></EditCard>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Goals;
