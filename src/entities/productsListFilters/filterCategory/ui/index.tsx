import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import style from './style.module.scss';
import filtersStyle from '../../ui/style.module.scss';
import arrowDropDown from './icon/assets/arrowDrop.svg';
import clsx from 'clsx';
import { $categories, $selectedCategory, fetchCategoriesFx, setSelectedCategory } from '../model/filterCategory';

interface FilterCategoryProps {
  isMenuCategoryOpened: boolean;
  setMenuCategoryOpened: (isMenuCategoryOpened: boolean) => void;
  isMenuProductsCountOpened: boolean;
  setMenuProductsCountOpened: (isMenuProductsCountOpened: boolean) => void;
}

export const FilterCategory: React.FC<FilterCategoryProps> = ({
  isMenuCategoryOpened,
  setMenuCategoryOpened,
  isMenuProductsCountOpened,
  setMenuProductsCountOpened
}) => {
  const categories = useStore($categories);
  const selectedCategory = useStore($selectedCategory);

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
    setMenuCategoryOpened(false);
  };

  const handleOpenMenu = () => {
    if (isMenuProductsCountOpened) {
      setMenuProductsCountOpened(!isMenuProductsCountOpened);
      setMenuCategoryOpened(!isMenuCategoryOpened);
    } else {
      setMenuCategoryOpened(!isMenuCategoryOpened);
    }
  };

  useEffect(() => {
    fetchCategoriesFx();
  }, []);

  return (
    <div onClick={handleOpenMenu} className={clsx(filtersStyle.select, style.filterCategory)}>
      <div>
        <div className={filtersStyle.selectedValue}>
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) || 'Category'}
        </div>
        <img
          className={clsx(
            filtersStyle.arrowDrop,
            isMenuCategoryOpened ? filtersStyle.arrowDropOpened : filtersStyle.arrowDrop
          )}
          src={arrowDropDown}
          alt="Arrow drop"
        />
      </div>
      {isMenuCategoryOpened && (
        <ul className={filtersStyle.filterOptions}>
          {categories.map((category) => {
            return (
              <li
                className={filtersStyle.filterOption}
                key={category}
                value={category}
                onClick={() => handleChangeCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
