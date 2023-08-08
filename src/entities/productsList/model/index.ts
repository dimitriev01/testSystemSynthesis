import { combine, createEffect, createStore, restore } from 'effector';
import { IProduct } from 'features/product/model';
import { getAllProducts } from 'shared/api/productsList';

export const fetchProductsFx = createEffect<void, IProduct[], Error>({
  handler: getAllProducts,
});

export const $fetchError = restore<Error>(fetchProductsFx.failData, null);

export const $products = createStore<IProduct[]>([]).on(
  fetchProductsFx.doneData,
  (_, products) => products
);

export const $productsGetStatuses = combine({
  loading: fetchProductsFx.pending,
  error: $fetchError,
  data: $products,
});
