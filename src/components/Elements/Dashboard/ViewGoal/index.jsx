import React from 'react';

import Card from '../../../UI/Card';
import CardHeader from '../../../UI/CardHeader';
import Button from '../../../UI/Button';
import RoundButton from '../../../UI/RoundButton';
import Line from '../../../UI/Line';
import Chart from '../../../UI/Chart';
import './viewGoal.scss';

const data = [
  {
    id: 'make',
    label: 'make',
    value: 4,
    color: 'hsl(239, 70%, 50%)',
  },
  {
    id: 'ruby',
    label: 'ruby',
    value: 96,
    color: 'hsl(98, 70%, 50%)',
  },
];
const ViewGoal = (props) => {
  const { handleCancel, cardRef, handleBlur } = props;
  return (
    <Card classname='col-sm-12 col-l-4 view__goal__card'>
      <div ref={cardRef} className='card__content' onBlur={() => null}>
        <CardHeader handleCancel={handleCancel} cardTitle='Goal details' />
        <div className='card__bar'>
          <RoundButton
            width={60}
            height={60}
            borderRadius={30}
            color='#b620e0'
          />
          <h5 className='goal__name'>New Car</h5>
        </div>
        <div className='row goal__detials__wrapper'>
          <div className='col-l-6 chart__wrapper'>
            <Chart data={data} />
          </div>
          <div className='col-l-6 goal__details'>
            <h4 className='saved__percent'>4.00%</h4>
            <h6 className='goal__deadline'>Goal deadline</h6>
            <h6 className='deadline__date'>Sep 30,2020</h6>
            <Line borderColor='#b5bbc9' />
            <h4 className='saved__fraction'>$2,000.00 / $50,000.00</h4>
            <Line borderColor='#b5bbc9' />
            <p className='advice__text'>You need to save each month</p>
            <p className='target__amount'>$ 20,000.00</p>
          </div>
          <div className='row button__wrapper'>
            <Button className='submit__button'>ADD DEPOSIT</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ViewGoal;
