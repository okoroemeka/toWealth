import React, { useState, useEffect } from 'react';

import staticData from '../../../../utils/data/staticData';
import expensesIcon from '../../../../assets/images/expensesIcon.svg';
import incomeArrow from '../../../../assets/images/incomeArrow.svg';
import addIcon from '../../../../assets/images/addIcon.svg';
import cancelIcon from '../../../../assets/images/cancelIcon.svg';
import Networth from '../../../UI/Icons/Networth';
import Savings from '../../../UI/Icons/Savings';
import FloatingButton from '../../../Reusable/FloatingButton';
import FloatingButtonContent from '../../../Reusable/FloatingButtonContent';
import DropDown from './DropDown';
import Search from './Search';
import InfoItem from './InfoItem';
import TableHead from './TableHead';
import TableData from './TableData';
import './transaction.scss';

const { transactionDropdown, transactionTableData } = staticData;

const Transaction = (props) => {
  const [currentItem, setCurrentItem] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [date, setDate] = useState('');
  const [searchData, setSearchData] = useState('');
  const [headerColor, setHeaderColor] = useState('#47b881');
  const [showFloatingButtonContent, setShowFloatingButtonConten] = useState(
    false
  );

  /**
   * handle selecting current item
   */
  const handleSelectItem = (itemName, seletedHeaderColor) => {
    setCurrentItem(itemName);
    setHeaderColor(seletedHeaderColor);
    toggleDropdown();
  };

  /**
   * toggle dropdown
   */
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  /**
   * handle select date
   * @param {string} selectedDate
   */
  const handleSelectDate = (selectedDate) => {
    setDate(selectedDate);
  };

  /**
   * toggle floating button content
   */
  const toggleFloatingButtonContent = () => {
    setShowFloatingButtonConten(!showFloatingButtonContent);
  };
  return (
    <div className='transaction__dashboard'>
      <div className='row'>
        <div className='col-l-12'>
          <DropDown
            toggleDropdown={toggleDropdown}
            currentItem={currentItem}
            showDropdown={showDropdown}
            transactionDropdown={transactionDropdown}
            handleSelectDate={handleSelectDate}
            handleSelectItem={handleSelectItem}
            headerBackground={headerColor}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-l-8'>
          <Search searchData={searchData} handleInputChange={setSearchData} />
          <div className='row'>
            <div className='col-l-12 transaction__table'>
              <TableHead />
              {transactionTableData.map((item) => (
                <TableData
                  imageUrl={
                    item.transactionType == 'income'
                      ? incomeArrow
                      : expensesIcon
                  }
                  backgroundColor={
                    item.transactionType == 'income' ? '#75BF72' : '#DF5060'
                  }
                  date='04/02/2020'
                  description='monthly salary'
                  category='salary'
                  account='savings'
                  amount='$12,000.00'
                />
              ))}
            </div>
          </div>
        </div>
        <div className='col-l-3 info'>
          <div className='info__wrapper'>
            <InfoItem
              title='income'
              amount='3,189.90'
              backgroundColor='#47b881'
            >
              <div className='icon__wrapper'>
                <img src={incomeArrow} alt='iocn' className='income__icon' />
              </div>
            </InfoItem>
            <InfoItem
              title='expenses'
              amount='3,189.90'
              backgroundColor='#df5060'
            >
              <div className='icon__wrapper'>
                <img src={expensesIcon} alt='iocn' className='expenses__icon' />
              </div>
            </InfoItem>
            <InfoItem
              title='savings'
              amount='3,189.90'
              backgroundColor='#3f51b5'
            >
              <Savings fill='#ffffff' className='savings__icon' />
            </InfoItem>
            <InfoItem
              title='net worth'
              amount='3,189.90'
              backgroundColor='#ec4c47'
            >
              <Networth fill='#ffffff' className='expenses__icon' />
            </InfoItem>
          </div>
        </div>
      </div>
      <div className='floating__button__area'>
        {showFloatingButtonContent && (
          <div className='button__content'>
            <FloatingButtonContent></FloatingButtonContent>
            <FloatingButtonContent></FloatingButtonContent>
          </div>
        )}

        <div className='button__area'>
          <FloatingButton onClick={toggleFloatingButtonContent}>
            <img
              src={showFloatingButtonContent ? cancelIcon : addIcon}
              alt='icon'
            />
          </FloatingButton>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
