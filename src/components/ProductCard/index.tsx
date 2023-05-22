import styles from './styles.module.scss';

import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ProductController } from '../ProductController';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  imageSrc: string;
  amount: number;
};
interface ProductCardProps {
  product: Product;
  pageType: string;
}

export const ProductCard = ({ product, pageType }: ProductCardProps) => {
  const productTag = (text: string) => <span key={text}>{text}</span>;
  const { name, description, price, tags } = product;

  const formataDescricao = (descricao: string) => {
    if (descricao.length > 40) {
      return descricao.substring(0, 100) + '...';
    }
    return descricao;
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <img src={product.imageSrc} alt="Nao carregou" className={styles.productImage} />

        <div className={styles.productInfo}>
          <div className={styles.productTag}>{tags && tags.map((tag) => productTag(tag))}</div>
          <h3>{name}</h3>
          <p>{formataDescricao(description)}</p>
        </div>

        <div className={styles.priceContainer}>
          <span>
            R$ <b>{price}</b>
          </span>
          <ProductController product={product} pageType={pageType} />
        </div>
      </div>
    </div>
  );
};
