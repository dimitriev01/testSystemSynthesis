import { API_URL } from '../base';

export const getAllProducts = async (limit: number) => {
  const response = await fetch(
    API_URL + `?limit=${limit}&select=title,price,thumbnail,category`
  );
  const data = await response.json();
  return data.products;
};
