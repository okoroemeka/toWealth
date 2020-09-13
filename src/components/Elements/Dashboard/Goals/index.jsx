import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../../../UI/Card';
import plusIcon from '../../../../assets/images/plus.svg';
import GoalCard from '../../../UI/GoalCard';
import Modal from '../../../Reusable/Modal/Modal';
import GoalForm from '../GoalForm';
import ViewGoal from '../ViewGoal';
import ActiveGoalDropDown from './ActiveGoalDropDown';

import './Goals.scss';

const Goals = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentItem, setCurrentItem] = useState([
    'ACTIVE GOALS',
    'PAUSED GOALS',
    'REACHED GOALS',
  ]);
  const [displayModal, setDispalyModal] = useState(false);
  const [clickedIconName, setClickedIconName] = useState('');
  const { darkMode } = useSelector((state) => state.darkMode);
  const editCardRef = useRef(null);

  /**
   * Handles select goal
   * @param {object} e
   */
  const handleOnchange = (e) => {
    const newCurrentItem = currentItem.filter(
      (item) => item != e.target.innerText
    );
    newCurrentItem.unshift(e.target.innerText);
    setCurrentItem(newCurrentItem);
    setShowDropdown(!showDropdown);
  };

  /**
   * Handles which modal content to display
   * @param {string} iconName
   */
  const handleSelectModalContent = (iconName) => {
    setClickedIconName(iconName);
    return toggleModal();
  };

  /**
   * Toggles the modal
   */
  const toggleModal = () => {
    return setDispalyModal(!displayModal);
  };

  useEffect(() => {
    if (displayModal) {
      editCardRef.current.focus();
    }
  }, [displayModal]);

  return (
    <React.Fragment>
      <div className='row body'>
        <div className='col-l-12 dropdown__navigation__area'>
          <ActiveGoalDropDown
            currentItem={currentItem}
            handleShowDropDown={() => setShowDropdown(!showDropdown)}
            handleSelectItem={handleOnchange}
            showDropdown={showDropdown}
          />
        </div>
        <div className='row main__content__area'>
          <Card
            classname={`add__goals__card ${darkMode && 'card__dark__mode'}`}
          >
            <button
              type='submit'
              className='add__goal__button'
              onClick={() => handleSelectModalContent('addGoal')}
            >
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
            toggleModal={handleSelectModalContent}
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
          {clickedIconName == 'edit' ? (
            <GoalForm
              handleCancel={() => setDispalyModal(!displayModal)}
              cardRef={editCardRef}
              handleBlur={toggleModal}
              formTitle='Edit Goal'
            />
          ) : clickedIconName == 'addGoal' ? (
            <GoalForm
              handleCancel={() => setDispalyModal(!displayModal)}
              cardRef={editCardRef}
              handleBlur={toggleModal}
              formTitle='Add Goal'
            />
          ) : (
            <ViewGoal
              cardRef={editCardRef}
              handleCancel={() => setDispalyModal(!displayModal)}
              handleBlur={toggleModal}
            />
          )}
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Goals;
