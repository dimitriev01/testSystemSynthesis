import { IProduct } from 'features/product/model';
import { API_URL } from '../base';

export const searchProducts = async (params: { limit: number, query: string }): Promise<IProduct[]> => {
  const response = await fetch(API_URL + `/search?limit=${params.limit}&q=${params.query}`);
  const data = await response.json();
  return data.products;
};
