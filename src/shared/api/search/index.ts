import { IProduct } from 'features/product/model';
import { API_URL } from '../base';

export const searchProducts = async (query: string): Promise<IProduct[]> => {
  const response = await fetch(API_URL + `/search?q=${query}`);
  const data = await response.json();
  return data.products;
};
