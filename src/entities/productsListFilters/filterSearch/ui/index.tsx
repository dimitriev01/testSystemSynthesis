import React, { useState } from 'react';
import style from './style.module.scss';
import searchIcon from './icon/assets/search.svg';
import { setSearchQuery } from '../model/filterSearch';

export const FilterSearch = () => {
  const [searchQuery, setSearchQueryState] = useState('');

  const handleSearchChange = (value: string) => {
    const changedValue = value.replace(/[^0-9a-zA-Z\s]+$/, '');
    setSearchQueryState(changedValue);
    setSearchQuery(changedValue);
  };

  return (
    <div className={style.filterSearch}>
      <input
        className={style.filterSearchInput}
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSearchChange(e.target.value)
        }
        placeholder="Search"
        type="text"
      />
      <img className={style.searchIcon} src={searchIcon} alt="searchIcon" />
    </div>
  );
};
