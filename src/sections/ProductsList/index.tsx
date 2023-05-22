import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProductCard, Product } from '../../components/ProductCard';
import styles from './styles.module.scss';


export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const retrieveProducts = async () => {
    const { data } = await axios.get('https://jersey-market-api-production.up.railway.app/product/list');
    setProducts(data);
  };

  useEffect(() => {
    retrieveProducts();
  }, []);
  return (
    <section className={styles.productListContainer}>
      <h2>Nossos Produtos</h2>
      <ul className={styles.productList}>
        {products && products.length > 0 && products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} pageType='' />
          </li>
        ))}
      </ul>
    </section>
  );
};