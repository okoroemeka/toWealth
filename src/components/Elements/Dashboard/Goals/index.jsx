import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../../../UI/Card';
import plusIcon from '../../../../assets/images/plus.svg';
import GoalCard from '../../../UI/GoalCard';
import Modal from '../../../Reusable/Modal/Modal';
import GoalForm from '../GoalForm';
import ViewGoal from '../ViewGoal';
import ActiveGoalDropDown from './ActiveGoalDropDown';
import { getAllGoal } from '../../../../store/actions/goal';
import GetGoal from '../../../hooks/GetGoal';

import './Goals.scss';

const Goals = (props) => {
  const [goals, setGoals] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentItem, setCurrentItem] = useState([
    'ACTIVE GOALS',
    'PAUSED GOALS',
    'REACHED GOALS',
  ]);
  const [displayModal, setDispalyModal] = useState(false);
  const [clickedIconName, setClickedIconName] = useState('');
  const [goalActivity, setGoalActivity] = useState(false);
  const { darkMode } = useSelector((state) => state.darkMode);
  const [goalId, setGoalId] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState({});
  const editCardRef = useRef(null);

  const dispatch = useDispatch();

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
  const handleSelectModalContent = (iconName, goalIdParam) => {
    setClickedIconName(iconName);
    if (goalIdParam && !Number.isNaN(goalIdParam)) {
      setGoalId(goalIdParam);
    }
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

  useEffect(() => {
    async function fetchGoals() {
      const userGoals = await dispatch(getAllGoal());
      setGoals(userGoals);
    }
    fetchGoals();
    if (goalActivity) {
      setGoalActivity(false);
    }
  }, [dispatch, goalActivity]);

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
          {Boolean(goals)
            ? goals
                .slice(0, 5)
                .map((goal) => (
                  <GoalCard
                    id={goal.id}
                    goal={goal.goalName}
                    deadLine={goal.timeline}
                    rate={`${goal.completionRate}%`}
                    progress={`${goal.completionRate}%`}
                    targetFraction={`$${goal.totalSaved}/$${goal.goalValue}`}
                    isDarkMode={darkMode}
                    toggleModal={handleSelectModalContent}
                  />
                ))
            : null}
        </div>
      </div>
      {displayModal && (
        <Modal>
          {clickedIconName == 'edit' ? (
            <GetGoal itemId={goalId} url='/goal/'>
              {(err, loading, item) => {
                if (err) {
                  return 'An error occured';
                }
                if (loading) {
                  return 'loading...';
                }
                return (
                  <GoalForm
                    edit
                    itemId={goalId}
                    handleCancel={() => setDispalyModal(!displayModal)}
                    cardRef={editCardRef}
                    handleBlur={toggleModal}
                    formTitle='Edit Goal'
                    toggleModal={toggleModal}
                    goalActivityToggler={setGoalActivity}
                    initialStateAsProps={item}
                  />
                );
              }}
            </GetGoal>
          ) : clickedIconName == 'addGoal' ? (
            <GoalForm
              handleCancel={() => setDispalyModal(!displayModal)}
              cardRef={editCardRef}
              handleBlur={toggleModal}
              formTitle='Add Goal'
              toggleModal={toggleModal}
              goalActivityToggler={setGoalActivity}
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
