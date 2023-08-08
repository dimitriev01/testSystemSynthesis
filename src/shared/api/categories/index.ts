import { API_URL } from '../base';

export const getAllCategories = async (): Promise<string[]> => {
  const response = await fetch(API_URL + '/categories');
  const data = await response.json();
  return data;
};
