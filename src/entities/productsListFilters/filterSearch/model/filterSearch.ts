import { combine, createEffect, createEvent, createStore, restore } from 'effector';
import { IProduct } from 'features/product/model';
import { searchProducts } from 'shared/api/search';

export const setSearchQuery = createEvent<string>();
export const $searchQuery = createStore<string>('').on(
  setSearchQuery,
  (_, searchQuery) => searchQuery
);

export const searchProductsFx = createEffect(searchProducts);

export const $fetchSearchError = restore<Error>(searchProductsFx.failData, null);

export const $searchedProducts = createStore<IProduct[]>([]).on(
  searchProductsFx.doneData,
  (_, products) => products
);

export const $searchedProductsCombined = combine({
  loadingFiltredProducts: searchProductsFx.pending,
  errorFiltredProducts: $fetchSearchError,
  searchedProducts: $searchedProducts,
});
