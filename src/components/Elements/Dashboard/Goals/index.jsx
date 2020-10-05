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
import axios from '../../../../utils/axios';
import { toast } from 'react-toastify';
import './Goals.scss';
import CardRemade from '../../../UI/CardRemade';
import UtilButton from '../../../UI/UtilButton';

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
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

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
  /**
   * Handles deleting of goal
   * @param {number} id
   */
  const handleDeleteGoal = async (id) => {
    setErr(null);
    try {
      setLoading(true);
      await axios.delete(`/goal/${id}`);
      setLoading(false);
      toggleModal();
      setGoalActivity(true);
    } catch ({ message }) {
      setLoading(false);
      toast.info(message);
      setErr(message);
    }
  };

  /**
   * Display modal content
   */
  const handleDispayModalContent = () => {
    let modalContent;
    if (clickedIconName == 'edit') {
      modalContent = (
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
                handleBlur={toggleModal}
                formTitle='Edit Goal'
                toggleModal={toggleModal}
                goalActivityToggler={setGoalActivity}
                initialStateAsProps={item}
              />
            );
          }}
        </GetGoal>
      );
    } else if (clickedIconName == 'addGoal') {
      modalContent = (
        <GoalForm
          handleCancel={() => setDispalyModal(!displayModal)}
          handleBlur={toggleModal}
          formTitle='Add Goal'
          toggleModal={toggleModal}
          goalActivityToggler={setGoalActivity}
        />
      );
    } else if (clickedIconName == 'delete') {
      let actionButtons = (
        <UtilButton
          buttonText='delete'
          disabled={loading}
          handleClick={!loading ? () => handleDeleteGoal(goalId) : null}
        />
      );

      modalContent = (
        <CardRemade
          cardTitle='delete goal'
          handleCloseCard={toggleModal}
          actions={actionButtons}
          cardBody='Are you sure you wnat to delete this goal.'
        />
      );
    } else {
      modalContent = (
        <ViewGoal
          handleCancel={() => setDispalyModal(!displayModal)}
          handleBlur={toggleModal}
        />
      );
    }
    return modalContent;
  };

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
                    colorBoxBackground={goal.color}
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
      {displayModal && <Modal>{handleDispayModalContent()}</Modal>}
    </React.Fragment>
  );
};

export default Goals;
