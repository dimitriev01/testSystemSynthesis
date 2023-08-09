import React from 'react';
import style from './style.module.scss';
import filtersStyle from '../../ui/style.module.scss';
import arrowDropDown from './icon/assets/arrowDrop.svg';
import clsx from 'clsx';
import { $countProducts, setCountProducts } from '../model';
import { useStore } from 'effector-react';

interface FilterProductsCountProps {
  isMenuCategoryOpened: boolean;
  setMenuCategoryOpened: (isMenuCategoryOpened: boolean) => void;
  isMenuProductsCountOpened: boolean;
  setMenuProductsCountOpened: (isMenuProductsCountOpened: boolean) => void;
}

export const FilterProductsCount: React.FC<FilterProductsCountProps> = ({
  isMenuCategoryOpened,
  setMenuCategoryOpened,
  isMenuProductsCountOpened,
  setMenuProductsCountOpened
}) => {
  const selectedCountProducts = useStore($countProducts);

  const handleCountChange = (сount: number) => {
    setCountProducts(сount);
    setMenuProductsCountOpened(false);
  };

  const handleOpenMenu = () => {
    if (isMenuCategoryOpened) {
      setMenuCategoryOpened(!isMenuCategoryOpened);
      setMenuProductsCountOpened(!isMenuProductsCountOpened);
    } else {
      setMenuProductsCountOpened(!isMenuProductsCountOpened);
    }
  };

  return (
    <div onClick={handleOpenMenu} className={clsx(filtersStyle.select, style.filterProductsCount)}>
      <div>
        <div className={filtersStyle.selectedValue}>
          {selectedCountProducts || 10}
        </div>
        <img
          className={clsx(
            filtersStyle.arrowDrop,
            isMenuProductsCountOpened ? filtersStyle.arrowDropOpened : filtersStyle.arrowDrop
          )}
          src={arrowDropDown}
          alt="Arrow drop"
        />
      </div>
      {isMenuProductsCountOpened && (
        <ul
          className={filtersStyle.filterOptions}
        >
          {[10, 20, 30].map((count) => {
            return (
              <li
                className={filtersStyle.filterOption}
                key={count}
                value={count}
                onClick={() => handleCountChange(count)}
              >
                {count}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
