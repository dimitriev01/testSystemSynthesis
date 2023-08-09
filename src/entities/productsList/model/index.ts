import { combine, createEffect, createStore, restore } from 'effector';
import { IProduct } from 'features/product/model';
import { getAllProducts } from 'shared/api/productsList';

export const fetchProductsFx = createEffect(getAllProducts);

export const $fetchProductsError = restore<Error>(fetchProductsFx.failData, null);

export const $products = createStore<IProduct[]>([]).on(
  fetchProductsFx.doneData,
  (_, products) => products
);

export const $productsCombined = combine({
  loading: fetchProductsFx.pending,
  error: $fetchProductsError,
  products: $products,
});
