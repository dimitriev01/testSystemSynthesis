import React, { useEffect } from 'react';
import style from './style.module.scss';
import { useStore } from 'effector-react';
import { $filteredProducts } from 'entities/productsListFilters';
import { Product } from 'features/product';
import { $productsGetStatuses, fetchProductsFx } from '../model';

export const ProductsList = () => {
  const filteredProducts = useStore($filteredProducts);
  const { loading, error } = useStore($productsGetStatuses);

  useEffect(() => {
    fetchProductsFx();
  }, []);

  if (loading) {
    return <div className={style.message}>Загрузка...</div>;
  }

  if (error) {
    return <div className={style.message}>Произошла ошибка</div>;
  }

  if (!filteredProducts.length) {
    return <div className={style.message}>Нет элементов</div>;
  }

  return (
    <div className={style.productsList}>
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
