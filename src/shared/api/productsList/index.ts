import { IProduct } from 'features/product/model';
import { API_URL } from '../base';

export const getAllProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(
    API_URL + '?select=title,price,thumbnail,category'
  );
  const data = await response.json();
  return data.products;
};
