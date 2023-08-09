import style from './style.module.scss';
import { useStore } from 'effector-react';
import { Product } from 'features/product';
import { $searchQuery, $searchedProductsCombined } from 'entities/productsListFilters/filterSearch/model/filterSearch';
import { $filteredProducts } from 'entities/productsListFilters';
import { $selectedCategory } from 'entities/productsListFilters/filterCategory/model/filterCategory';
import { $countProducts } from 'entities/productsListFilters/filterProductsCount/model';
import { useEffect } from 'react';
import { $productsCombined, fetchProductsFx } from '../model';
import Message from 'widgets/message/ui';

export const ProductsList = () => {
  const { loading, error, products } = useStore($productsCombined);
  const { loadingFiltredProducts, errorFiltredProducts } = useStore($searchedProductsCombined);
  const filteredProducts = useStore($filteredProducts);
  const searchQuery = useStore($searchQuery);
  const selectedCategory = useStore($selectedCategory);
  const countProducts = useStore($countProducts);

  useEffect(() => {
    fetchProductsFx(10);
  }, []);

  if (!selectedCategory && !searchQuery && !countProducts) {
    if (loading) {
      return <Message text="Загрузка..." />;
    }

    if (error) {
      return <Message text="Произошла ошибка загрузки продуктов" />;
    }

    if (!products.length) {
      return <Message text="Нет продуктов" />;
    }

    return (
      <div className={style.productsList}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }

  if (loadingFiltredProducts) {
    return <Message text="Идёт фильтрации продкутов..." />;
  }

  if (errorFiltredProducts) {
    return <Message text="Произошла ошибка при фильтрации продкутов" />;
  }

  if (!filteredProducts.length) {
    return <Message text="Нет продкутов с таким фильтром" />;
  }

  return (
    <div className={style.productsList}>
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
