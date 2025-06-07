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
    price_sale: number;
    rating_number: number;
    slug: string;
    // ... các trường khác
}

export default function Products() {
    const [data, setData] = useState<Product[]>([]);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [visibleProducts, setVisibleProducts] = useState(12);
    const [showLessButton, setShowLessButton] = useState(false);

    const formatNumber = (number?: number | null) => {
        if (number || number === 0) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
        return "0";
    };

    const handleFilterChange = (filteredData: Product[]) => {
        setData(filteredData); // Cập nhật danh sách sản phẩm khi có kết quả lọc
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get<{ data: Product[] }>('https://nextstore-be.onrender.com/api/v1/fridges/showProduct');
                const response = await axios.get<{ data: Product[] }>('http://localhost:8000/api/v1/fridges/showProduct');
                setAllProducts(response.data.data);
                setData(response.data.data);
            } catch (error) {
                console.error('Error:', error);
                // Handle errors
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (visibleProducts >= data.length) {
            setShowLessButton(true);
        } else {
            setShowLessButton(false);
        }
    }, [visibleProducts, data.length]);


    return (
        <div className={styles['content']}>
            <Filter category="Fridge" onFilterChange={handleFilterChange} />
            <div className={styles['list']}>
                {data.slice(0, visibleProducts).map((product) => (
                    <Link key={product._id} href="/home/tu_lanh/[productName]" as={`/home/tu_lanh/${encodeURIComponent(product.slug)}`} className={styles['product']}>
                        <div className={styles['productImg']}>
                            <Image width={512} height={747} src={product.product_img} alt={product.name} />
                        </div>
                        <div className={styles['heart']}>
                            <Image width={24} height={24} src="/image/sale/Sevimli.png" alt="" />
                        </div>
                        <div className={styles['price']}>{formatNumber(product.price_sale)} VND</div>
                        <div className={styles['detail']}>{product.name}</div>
                        <div className={styles['quantity']}>{formatNumber(product.rating_number)} Lượt đánh giá</div>
                        <div className={styles['cart-button']}>
                            <div className={styles['cart-text']}>Mua Ngay</div>
                        </div>
                        <div className={styles['shopping-cart']}>
                            <Image width={40} height={40} src="/image/sale/shopping_cart.png" alt="" />
                        </div>
                    </Link>
                ))}
                <button className={styles['loadMoreDiv']}>
                    {showLessButton ? (
                        <div className={styles['showLess']} onClick={() => setVisibleProducts(12)}>
                            <Image src='/image/less.png' alt='' width={52} height={52} />
                        </div>
                    ) : (
                        <div className={styles['loadMore']} onClick={() => setVisibleProducts(prev => prev + 12)}>
                            <Image src='/image/more.png' alt='' width={52} height={52} />
                        </div>
                    )}
                </button>
            </div>

        </div>
    )
}