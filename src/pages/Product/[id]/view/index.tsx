import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Product } from '../../../../components/ProductCard';
import styles from './styles.module.scss';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product>()

    const getProduct = async () => {
        const { data } = await axios.get('https://jersey-market-api-production.up.railway.app/product/list');
        let idNumber = id ? parseInt(id) : -1;
        let filteredProduct = data.filter((item: Product) => item.id === idNumber);
        console.log(data)
        setProduct(filteredProduct[0]);
    };

    useEffect(() => {
        getProduct();
    }, []);
    return (
        <div className='ml-4 mt-10 flex flex-row items-center'>
            <div className='flex flex-col flex-grow items-center'>
                <span className='text-xl mb-4'>{product?.name}</span >
                <div className='flex w-1/2 h-fit flex-col items-center space-y-8 shadow-lg border-t-2 bg-zinc-100 rounded-lg p-12'>
                    <div className='flex-1 ml-4'>
                        <span>{product?.description}</span>
                    </div>
                </div>
                <div className='mt-4 border bg-green-500 rounded-lg p-2'>
                    <button>
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage