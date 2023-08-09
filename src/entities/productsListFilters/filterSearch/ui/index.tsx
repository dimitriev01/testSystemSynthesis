import React, { useEffect } from 'react';
import style from './style.module.scss';
import searchIcon from './icon/assets/search.svg';
import { $searchQuery, searchProductsFx, setSearchQuery } from '../model/filterSearch';
import { useStore } from 'effector-react';
import { $countProducts } from 'entities/productsListFilters/filterProductsCount/model';
import { $selectedCategory } from 'entities/productsListFilters/filterCategory/model/filterCategory';

export const FilterSearch = () => {
  const searchQuery = useStore($searchQuery);
  const countProducts = useStore($countProducts);
  const selectedCategoy = useStore($selectedCategory);

  const handleSearchChange = (value: string) => {
    const changedValue = value.replace(/[^0-9a-zA-Z\s]+$/, '');
    setSearchQuery(changedValue);
  };

  useEffect(() => {
    if (countProducts || searchQuery || selectedCategoy) {
      searchProductsFx({ limit: countProducts, query: searchQuery, });
    }
  }, [countProducts, searchQuery, selectedCategoy]);

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
