import React, { useState } from 'react';

import Calendar from '../../../Reusable/Calendar';
import WorthCard from '../../../Reusable/WorthCard';
import SavingsIcon from '../../../UI/Icons/Savings';
import FloatingButton from '../../../Reusable/FloatingButton';
import addIcon from '../../../../assets/images/addIcon.svg';
import cancelIcon from '../../../../assets/images/cancelIcon.svg';
import TableHead from '../../../Reusable/TableHead';
import TableData from '../../../Reusable/TableData';
import './Savings.scss';

const Savings = (props) => {
  const [showFloatingContent, setShowFloatingContent] = useState(false);
  const [displayMore, setDisplayMore] = useState(false);

  return (
    <div className='savings'>
      <div className='col-l-10'>
        <div className='row calender__wrapper'>
          <div className='col-l-4 '>
            <Calendar />
          </div>
        </div>
        <div className='row savings__details__area'>
          <div className='col-l-8 savings__table'>
            <div className='savings__table__wrapper'>
              <TableHead />

              <div className='table__body'>
                <TableData
                  displayMore={displayMore}
                  handleClickMore={() => setDisplayMore(!displayMore)}
                />
                <TableData
                  displayMore={displayMore}
                  handleClickMore={() => setDisplayMore(!displayMore)}
                />
              </div>
            </div>
            <div className='income__wrapper'>
              <div className='table__body'>
                <TableHead
                  headerWrapperClassName='expenditure__table'
                  firstTitle='Expenditure'
                  secondTitle='6,365.87'
                />
              </div>
            </div>
          </div>
          <div className='col-l-3 savings__details__card'>
            <WorthCard
              cardTitle='MY SAVINGS'
              className='savigns__card'
              amountToDisPlay='2,0050'
              iconClassName='savings__icon'
              Icon={SavingsIcon}
              iconColor='#000000'
            />
          </div>
        </div>
      </div>
      <div className='floating__action'>
        {showFloatingContent && <div className='content'></div>}
        <FloatingButton
          onClick={() => setShowFloatingContent(!showFloatingContent)}
        >
          <img src={showFloatingContent ? cancelIcon : addIcon} alt='icon' />
        </FloatingButton>
      </div>
    </div>
  );
};

export default Savings;
