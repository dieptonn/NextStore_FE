'use client'
import styles from '../styles.module.scss';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Filter from '@/components/filter/filter';

interface Product {
    _id: string;
    _index: string;
    _source: {
        product_img: string;
        name: string;
        price_old: number;
        rating_number: number;
        slug: string;
        // Các trường khác trong _source nếu cần
    };
    // ... các trường khác nếu có
}

interface HitsData {
    hits: {
        hits: Product[]; // Thêm một lớp hits nữa ở đây
    };
}

interface ProductsProps {
    searchData: string;
}

export default function Products({ searchData }: ProductsProps) {
    const [data, setData] = useState<Product[]>([]);
    const [visibleProducts, setVisibleProducts] = useState(12);
    const [showLessButton, setShowLessButton] = useState(false);


    const formatNumber = (number?: number | null) => {
        if (number || number === 0) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
        return "0";
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post<{ data: HitsData }>('http://localhost:8000/api/v1/home/search', {
                    query: searchData,
                });
                console.log({
                    Response: response.data.data.hits.hits,
                });
                const products = response.data.data.hits.hits.map(hit => ({
                    _id: hit._id,
                    _index: hit._index,
                    _source: {
                        product_img: hit._source.product_img,
                        name: hit._source.name,
                        price_old: hit._source.price_old,
                        rating_number: hit._source.rating_number,
                        slug: hit._source.slug,
                    }
                }));
                setData(products)

            } catch (error) {
                console.error('Error:', error);
                // Xử lý các lỗi
            }
        };

        fetchData();
    }, [searchData]);


    useEffect(() => {
        if (visibleProducts >= data.length) {
            setShowLessButton(true);
        } else {
            setShowLessButton(false);
        }
    }, [visibleProducts, data.length]);


    // Tạo tên danh mục tương ứng từ _index
    const getCategoryName = (_index: string): string => {
        switch (_index) {
            case 'washing_machine':
                return 'may_giat';
            case 'television':
                return 'tivi';
            case 'fridge':
                return 'tu_lanh';
            case 'fryer':
                return 'noi_chien';
            case 'cooker':
                return 'noi_com';
            case 'robot':
                return 'robot';
            case 'air':
                return 'dieu_hoa';
            case 'freezer':
                return 'tu_dong';
            case 'water_heater':
                return 'may_loc_nuoc';
            // Thêm các trường hợp khác nếu cần
            default:
                return 'category'; // Mặc định hoặc xử lý trường hợp không xác định
        }
    };

    return (
        <div className={styles['content']}>
            <Filter />
            <div className={styles['list']}>
                {data.slice(0, visibleProducts).map((product) => {
                    const categoryName = getCategoryName(product._index);
                    const productUrl = `/home/${categoryName}/${encodeURIComponent(product._source.slug)}`;
                    return (
                        <Link key={product._id} href={`/home/${categoryName}/[productName]`} as={productUrl} className={styles['product']}>
                            <div className={styles['productImg']}>
                                <Image width={512} height={747} src={product._source.product_img} alt={product._source.name} />
                            </div>
                            <div className={styles['heart']}>
                                <Image width={24} height={24} src="/image/sale/Sevimli.png" alt="" />
                            </div>
                            <div className={styles['price']}>{formatNumber(product._source.price_old)} VND</div>
                            <div className={styles['detail']}>{product._source.name}</div>
                            <div className={styles['quantity']}>{formatNumber(product._source.rating_number)} Lượt đánh giá</div>
                            <div className={styles['cart-button']}>
                                <div className={styles['cart-text']}>Sotib olish</div>
                            </div>
                            <div className={styles['shopping-cart']}>
                                <Image width={40} height={40} src="/image/sale/shopping_cart.png" alt="" />
                            </div>
                        </Link>

                    );
                })}
                <button className={styles['loadMoreDiv']}>
                    {showLessButton ? (
                        <div className={styles['showLess']} onClick={() => setVisibleProducts(12)}>
                            <Image src='/image/less.png' alt='' width={100} height={100} />
                        </div>
                    ) : (
                        <div className={styles['loadMore']} onClick={() => setVisibleProducts(prev => prev + 12)}>
                            <Image src='/image/more.png' alt='' width={100} height={100} />
                        </div>
                    )}
                </button>

            </div>
        </div>
    );
}
