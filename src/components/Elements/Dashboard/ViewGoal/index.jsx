import React from 'react';
import moment from 'moment';

import Card from '../../../UI/Card';
import CardHeader from '../../../UI/CardHeader';
import Button from '../../../UI/Button';
import RoundButton from '../../../UI/RoundButton';
import Line from '../../../UI/Line';
import Chart from '../../../UI/Chart';
import amountToSaveEachMonth from '../../../../helper/amountToSaveEachMonth';
import staticData from '../../../../utils/data/staticData';
import './viewGoal.scss';

const data = [
  {
    id: 'remaining',
    label: 'remaining',
    value: 0,
    color: 'hsl(239, 70%, 50%)',
  },
  {
    id: 'complete',
    label: 'complete',
    value: 0,
    color: 'hsl(98, 70%, 50%)',
  },
];

const { category } = staticData;
const ViewGoal = (props) => {
  const {
    handleCancel,
    cardRef,
    handleBlur,
    item,
    toggleAddDepositForm = () => null,
  } = props;

  const newData = data.map((point) => {
    if (point.id === 'remaining') {
      point.value = Math.ceil(100 - item?.completionRate);
    }
    if (point.id === 'complete') {
      point.value = Math.floor(item?.completionRate);
    }
    return point;
  });

  const selectedItem = item
    ? category.filter((categoryItem) => categoryItem.name === item?.category)[0]
    : {};

  return (
    <Card
      classname='col-sm-12 col-l-4 view__goal__card'
      // cardRef={cardRef}
      // onBlur={() => handleBlur()}
    >
      <div className='card__content'>
        <CardHeader handleCancel={handleCancel} cardTitle='Goal details' />
        <div className='card__bar'>
          <RoundButton
            width='60px'
            height='60px'
            borderRadius='30px'
            color={selectedItem?.color}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <img src={selectedItem?.img} alt={selectedItem?.name} />
          </RoundButton>
          <h5 className='goal__name'>{item?.goalName}</h5>
        </div>
        <div className='row goal__detials__wrapper'>
          <div className='col-l-6 chart__wrapper'>
            <Chart data={newData} goalValue={item?.goalValue} />
          </div>
          <div className='col-l-6 goal__details'>
            <h4 className='saved__percent'>
              {Math.floor(item?.completionRate)}%
            </h4>
            <h6 className='goal__deadline'>Goal deadline</h6>
            <h6 className='deadline__date'>
              {item ? moment(item.timeline).format('ll') : null}
            </h6>
            <Line borderColor='#b5bbc9' />
            <h4 className='saved__fraction'>
              ${item?.totalSaved?.toFixed(2)} / ${item?.goalValue?.toFixed(2)}
            </h4>
            <Line borderColor='#b5bbc9' />
            <p className='advice__text'>You need to save each month</p>
            <p className='target__amount'>{`$${
              item
                ? amountToSaveEachMonth(
                    item?.goalValue - item?.totalSaved,
                    item?.timeline?.split('T')[0]
                  )
                : null
            }`}</p>
          </div>
          <div className='row button__wrapper'>
            <Button className='submit__button' onClick={toggleAddDepositForm}>
              ADD DEPOSIT
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ViewGoal;
