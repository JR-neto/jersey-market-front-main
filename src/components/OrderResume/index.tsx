import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
// import { Product } from '../../contexts/CartContext';
import { Product } from '../ProductCard';
import { ProductController } from '../ProductController';
import './OrderResume.css'

export const OrderResume = () => {
  const { products, totalPrice, totalPriceNumber } = useContext(CartContext);

  return (
    <>
      {
        products.length > 0
          ? <div className='flex flex-row'>
            <div className='w-1/2 flex flex-col items-center'>
              <span className='text-2xl pb-4 pr-8'>Produtos</span>
              <ul className='space-y-4 text-lg overflow-y-scroll pr-8 pb-4'>
                {products.map((product: Product) => (
                  <li className='w-96 shadow-lg p-2' key={product.id}>
                    <img src={product.imageSrc} alt="" />
                    <div>
                      <span>{product.name}</span>
                      <div className='mt-2'>
                        <ProductController product={product} pageType="cart" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className='w-80 flex flex-col items-center shadow-lg p-12 rounded-lg'>
                <span className='mb-4'>Subtotal</span>
                <div className='flex items-start flex-col'>
                  <div className='flex flex-row w-48 justify-between flex-grow'>
                    <span>Produtos:  </span>
                    <span className='ml-1 text-green-600'> R$ {totalPrice}</span>
                  </div>
                  <div className='flex flex-row w-48 justify-between flex-grow'>
                    <span>Frete:  </span>
                    <span className='ml-1 text-green-600'> R$ 200,00</span>
                  </div>
                  <div className='flex flex-row w-48 mt-2 justify-between flex-grow border-t-2'>
                    <span>Total:  </span>
                    <span className='ml-1 text-green-600'>${Number(totalPriceNumber + 200).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <div className='w-80 mt-4 flex items-center'>
                <button className='flex flex-grow justify-center p-4 rounded-xl bg-green-600 text-white'>
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
          : <div>
            <h1 className='flex flex-grow items-center justify-center text-2xl'>O carrinho está vazio.</h1>
          </div>
      }
    </>
  );
};
