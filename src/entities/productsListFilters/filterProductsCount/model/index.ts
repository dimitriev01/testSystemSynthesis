import { createEvent, createStore } from 'effector';

export const setCountProducts = createEvent<number>();

export const $countProducts = createStore<number>(10).on(
  setCountProducts,
  (_, countProducts) => countProducts
);
