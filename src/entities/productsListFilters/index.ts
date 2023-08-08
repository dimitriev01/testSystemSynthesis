import { createEvent, combine } from 'effector';
import { $products, $productsGetStatuses, fetchProductsFx } from 'entities/productsList/model';
import { $searchQuery } from './filterSearch/model/filterSearch';
import { $categories, $selectedCategory, fetchCategoriesFx } from './filterCategory/model/filterCategory';
import { $countProducts } from './filterProductsCount/model';

export const $filteredProducts = combine(
  $productsGetStatuses,
  $searchQuery,
  $selectedCategory,
  $countProducts,
  (products, searchQuery, selectedCategory, countProducts) => {
    let filteredProducts = [...products.data];

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // if (searchQuery) {
    //   filteredProducts = filterSearchFx(searchQuery);
    // }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    filteredProducts = filteredProducts.slice(0, countProducts);

    return filteredProducts;
  }
);

export const initialize = createEvent<void>();
initialize.watch(() => {
  fetchProductsFx();
  fetchCategoriesFx();
});

$searchQuery.reset(initialize);
$selectedCategory.reset(initialize);
$countProducts.reset(initialize);
$products.reset(initialize);
$categories.reset(initialize);
