import React, { useState } from 'react';

import Button from '../../../UI/CustomButton';
import Input from '../../../Reusable/Input';

const NetworthSettings = (props) => {
  const [interest, setInterest] = useState(5);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  return (
    <form>
      <div className='form__item'>
        <Input
          value={interest}
          handleChange={(e) => setInterest(e.target.value)}
          title='Annual interest rate in your country'
          inputType='number'
        />
      </div>
      <div className='form__item'>
        <Input
          value={monthlyIncome}
          handleChange={(e) => setMonthlyIncome(e.target.value)}
          title='Monthy Income'
          inputType='number'
        />
      </div>
      <Button type='submit' title='Save' />
    </form>
  );
};

export default NetworthSettings;
