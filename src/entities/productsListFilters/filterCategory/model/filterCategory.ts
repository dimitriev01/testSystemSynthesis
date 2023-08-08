import { createEffect, createEvent, createStore } from 'effector';
import { getAllCategories } from 'shared/api/categories';

export const fetchCategoriesFx = createEffect<void, string[], Error>({
  handler: getAllCategories,
});

export const $categories = createStore<string[]>([]).on(
  fetchCategoriesFx.doneData,
  (_, categories) => categories
);

export const setSelectedCategory = createEvent<string>();

export const $selectedCategory = createStore<string>('').on(
  setSelectedCategory,
  (_, selectedCategory) => selectedCategory
);
