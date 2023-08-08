import ProductsFilters from 'entities/productsListFilters/ui';
import style from '../../app/style.module.scss';
import Header from 'widgets/header/ui';
import { ProductsList } from 'entities/productsList';

export const ProductsPage = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <ProductsFilters />
        <ProductsList />
      </div>
    </>
  );
};
