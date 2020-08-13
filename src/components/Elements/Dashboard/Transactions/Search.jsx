import React from 'react';
import searchIcon from '../../../../assets/images/search.svg';

const Search = ({ searchData, handleInputChange = () => null }) => {
  return (
    <div className='row'>
      <div className='col-l-4 search'>
        <div className='search__icon'>
          <img src={searchIcon} alt='icon' />
        </div>
        <input
          onChange={(e) => handleInputChange(e.target.value)}
          type='text'
          name='search'
          value={searchData}
          className='search__input'
          placeholder='Search Transaction'
        />
      </div>
    </div>
  );
};

export default Search;
