import { createEffect, createEvent, createStore } from 'effector';
import { IProduct } from 'features/product/model';
import { searchProducts } from 'shared/api/search';

export const filterSearchFx = createEffect<string, IProduct[], Error>({
  handler: searchProducts,
});

export const setSearchQuery = createEvent<string>();
export const $searchQuery = createStore<string>('').on(
  setSearchQuery,
  (_, searchQuery) => searchQuery
);

// export const $searchedProducts = createStore<IProduct[]>([]).on(
//   filterSearchFx.doneData,
//   (_, products) => products
// );
