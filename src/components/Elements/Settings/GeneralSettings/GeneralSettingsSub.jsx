import React from 'react';

import Select from '../../../UI/Select';
import Button from '../../../UI/CustomButton';
import Switch from '../../../UI/Switch';
import Line from '../../../UI/Line';

const GeneralSettingsSub = (props) => {
  const [languages, setLanguages] = React.useState('English');
  const [country, setCountry] = React.useState('US');
  const [currency, setCurrency] = React.useState('USD');
  const [darkMode, setDarkMode] = React.useState(false);

  const handleSelectLanguage = (event) => {
    const { value } = event.target;
    setLanguages(value);
  };

  const handleSelectCountry = (event) => {
    const { value } = event.target;
    setCountry(value);
  };

  const handleSelectCurrency = (event) => {
    const { value } = event.target;
    setCurrency(value);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form__item'>
        <h5 className='general__settings__item__title'>Dark mode</h5>
        <Switch
          handleChange={handleDarkMode}
          checked={darkMode}
          color={darkMode ? '#347af0' : 'primary'}
        />
        <Line borderColor='#E4E7EB' />
      </div>
      <div className='form__item'>
        <Select
          id='languages'
          handleChange={handleSelectLanguage}
          selectedValue={languages}
          label='Languages'
          options={[
            { name: 'English', value: 'English' },
            { name: 'French', value: 'French' },
            { name: 'German', value: 'German' },
          ]}
        />
      </div>
      <div className='form__item'>
        <Select
          id='country'
          selectedValue={country}
          handleChange={handleSelectCountry}
          label='Country'
          options={[
            { name: 'US', value: 'US' },
            { name: 'France', value: 'France' },
            { name: 'Germany', value: 'Germany' },
          ]}
        />
      </div>
      <div className='form__item'>
        <Select
          id='currency'
          selectedValue={currency}
          handleChange={handleSelectCurrency}
          label='Currency'
          options={[
            { name: 'USD', value: 'USD' },
            { name: 'Euro', value: 'Euro' },
          ]}
        />
      </div>
      <Button type='submit' title='Save' />
    </form>
  );
};

export default GeneralSettingsSub;
