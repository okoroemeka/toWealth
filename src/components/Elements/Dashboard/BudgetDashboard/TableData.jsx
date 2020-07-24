import React from 'react';
import RoundButton from '../../../UI/RoundButton';
import education from '../../../../assets/images/education.svg';
import deleteIcon from '../../../../assets/images/deleteIcon1.svg';
import editIcon from '../../../../assets/images/editIcon.svg';

const TableData = (props) => {
  const { tableData } = props;

  return (
    <div className='row table__row'>
      <div className='col-l-3 category__area'>
        <RoundButton
          className='icon__wrapper'
          color={tableData?.backgroundColor || '#FFA500'}
        >
          <img
            src={tableData?.goalAvater || education}
            alt='icon'
            className='icon__class'
          />
        </RoundButton>
        <h5 className='goal'>Education</h5>
      </div>
      <div className='col-l-1 budget '>${tableData?.budget || '177.0'}</div>
      <div className='col-l-1 actual'>${tableData?.actual || '157.0'}</div>
      <div className='col-l-1 remaining'>
        ${tableData?.remaining || '179.0'}
      </div>
      <div className='col-l-4 progress__container'>
        <div className='progress__area'>
          <div
            className='progress__bar'
            style={{
              width: tableData?.progress || '50%',
              backgroundColor: tableData?.progressColor || '#FFA500',
            }}
          ></div>
        </div>
        <h6 className='progress'>50%</h6>
      </div>
      <div className='col-l-2 action'>
        <img
          src={editIcon}
          alt='icon'
          className='action__icon'
          onClick={() => props?.handleEditGoal || null}
        />
        <img
          src={deleteIcon}
          alt='icon'
          className='action__icon'
          onClick={() => props?.handleDelete || null}
        />
      </div>
    </div>
  );
};

export default TableData;
