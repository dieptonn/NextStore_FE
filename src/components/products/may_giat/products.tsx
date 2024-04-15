'use client'
import styles from '../styles.module.scss'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image'
import Filter from '@/components/filter/filter';

interface Product {
    _id: string;
    product_img: string;
    name: string;
    price_old: number;
    rating_number: number;
    slug: string;
    // ... các trường khác
}

export default function Products() {
    const [data, setData] = useState<Product[]>([]);

    const formatNumber = (number?: number | null) => {
        if (number || number === 0) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
        return "0";
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<{ data: Product[] }>('https://nextstore-be.onrender.com/api/v1/washingMachines/showProduct');
                // const response = await axios.get<{ data: Product[] }>('http://localhost:8000/api/v1/washingMachines/showProduct');
                console.log({
                    Response: response.data.data,
                });
                setData(response.data.data);
            } catch (error) {
                console.error('Error:', error);
                // Handle errors
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles['content']}>
            <Filter />
            <div className={styles['list']}>
                {data.map((product) => (
                    <Link key={product._id} href="/home/may_giat/[productName]" as={`/home/may_giat/${encodeURIComponent(product.slug)}`} className={styles['product']}>
                        <div className={styles['productImg']}>
                            <Image width={512} height={747} src={product.product_img} alt={product.name} />
                        </div>
                        <div className={styles['heart']}>
                            <Image width={24} height={24} src="/image/sale/Sevimli.png" alt="" />
                        </div>
                        <div className={styles['price']}>{formatNumber(product.price_old)} VND</div>
                        <div className={styles['detail']}>{product.name}</div>
                        <div className={styles['quantity']}>{formatNumber(product.rating_number)} Lượt đánh giá</div>
                        <div className={styles['cart-button']}>
                            <div className={styles['cart-text']}>Sotib olish</div>
                        </div>
                        <div className={styles['shopping-cart']}>
                            <Image width={40} height={40} src="/image/sale/shopping_cart.png" alt="" />
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}