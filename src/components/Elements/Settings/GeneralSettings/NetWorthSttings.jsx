import React, { useEffect, useState } from 'react';

import Button from '../../../UI/CustomButton';
import Input from '../../../Reusable/Input';
import ApiCall from '../../../../helper/Api';
import { toast } from 'react-toastify';

const NetworthSettings = (props) => {
  const [networthSettings, setNetworthSettings] = useState({
    interestRate: 0,
    monthlyIncome: 0
  });

  useEffect(() => {
    ApiCall.getCall('networth-settings/get-networth-settings').then(res => {
      setNetworthSettings(res.payload)
    }, err => {
      console.log(err);
    })
  }, [])

  const handleChange = (e, name) => {
    // console.log(e.currentTarget.value);
    const { value } = e.target
    setNetworthSettings(prev => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    ApiCall.putCall('networth-settings/update-networth-settings', networthSettings).then(() => {
      toast.success('Networth Settings Updated');
    }, err => {
      console.log(err);
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form__item'>
        <Input
          value={networthSettings.interestRate}
          handleChange={(e) => handleChange(e, 'interestRate')}
          title='Annual interest rate in your country'
          inputType='number'
        />
      </div>
      <div className='form__item'>
        <Input
          value={networthSettings.monthlyIncome}
          handleChange={(e) => handleChange(e, 'monthlyIncome')}
          title='Monthy Income'
          inputType='number'
        />
      </div>
      <Button type='submit' title='Save' />
    </form>
  );
};

export default NetworthSettings;
