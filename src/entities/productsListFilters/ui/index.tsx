import { useState } from 'react';
import style from './style.module.scss';
import { FilterSearch } from '../filterSearch/ui';
import { FilterCategory } from '../filterCategory';
import { FilterProductsCount } from '../filterProductsCount';

const ProductsFilters = () => {
  const [isMenuCategoryOpened, setMenuCategoryOpened] = useState(false);
  const [isMenuProductsCountOpened, setMenuProductsCountOpened] = useState(false);

  return (
    <div className={style.productsFilters}>
      <FilterSearch />
      <FilterCategory
        isMenuCategoryOpened={isMenuCategoryOpened}
        setMenuCategoryOpened={setMenuCategoryOpened}
        isMenuProductsCountOpened={isMenuProductsCountOpened}
        setMenuProductsCountOpened={setMenuProductsCountOpened} />
      <FilterProductsCount
        isMenuCategoryOpened={isMenuCategoryOpened}
        setMenuCategoryOpened={setMenuCategoryOpened}
        isMenuProductsCountOpened={isMenuProductsCountOpened}
        setMenuProductsCountOpened={setMenuProductsCountOpened} />
    </div>
  );
};

export default ProductsFilters;
