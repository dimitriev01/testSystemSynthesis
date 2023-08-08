import React from 'react';
import { IProduct } from '../model';
import style from './style.module.scss';

interface ProductProps {
  product: IProduct;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className={style.product}>
      <div className={style.productImageWrapper}>
        <img
          className={style.productImage}
          src={product.thumbnail}
          alt="product image"
        />
      </div>
      <div className={style.productTitle}>{product.title}</div>
      <div className={style.productPrice}>$ {product.price}</div>
    </div>
  );
};
