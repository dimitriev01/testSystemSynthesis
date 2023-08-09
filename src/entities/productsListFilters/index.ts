import { combine } from 'effector';
import { $selectedCategory, } from './filterCategory/model/filterCategory';
import { $searchedProductsCombined } from './filterSearch/model/filterSearch';

export const $filteredProducts = combine(
  $searchedProductsCombined,
  $selectedCategory,
  (searchedProductsCombined, selectedCategory) => {
    let filtredProducts = [...searchedProductsCombined.searchedProducts];

    if (selectedCategory) {
      filtredProducts = filtredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }
    return filtredProducts;
  }
);