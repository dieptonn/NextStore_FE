'use client'

import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import axios from 'axios'

interface Product {
    _id: string
    name: string
    price_sale: string
    rating: any
    product_img: string
}

export default function Recommended() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const storedUser = localStorage.getItem('user');
                const user = storedUser ? JSON.parse(storedUser) : null;

                if (!user || !user._id) {
                    console.warn('Không tìm thấy userId');
                    return;
                }

                const res = await axios.post(`http://localhost:8000/api/v1/home/showProduct?userId=${user._id}`);
                setProducts(res.data.recommendations || []);
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
            }
        }

        fetchRecommendations();
    }, []);


    return (
        <div className={styles['content']}>
            <div className={styles['rDiv']}>
                <div className={styles['arrowLeft']}>
                    <Image width={44} height={44} src="/image/arrow_left.png" alt="" />
                </div>
                <div className={styles['rs']}>
                    <div className={styles['title']}>
                        <div className={styles['titleText']}>
                            Sản phẩm gợi ý dành cho bạn
                        </div>
                    </div>
                    <div className={styles['slider']}>
                        {products.map((item) => {
                            // Format price with commas
                            const formattedPrice = Number(item.price_sale).toLocaleString('vi-VN')

                            // Fallback rating: if 0 or '0' → 5
                            const rating = item.rating === '0' || item.rating === 0 ? 5 : item.rating

                            return (
                                <div className={styles['product']} key={item._id}>
                                    <div className={styles['productImg']}>
                                        <Image width={180} height={180} src={item.product_img} alt={item.name} />
                                    </div>
                                    <div className={styles['heart']}>
                                        <Image width={24} height={24} src="/image/sale/Sevimli.png" alt="heart" />
                                    </div>
                                    <div className={styles['price']}>
                                        <span className={styles['gap']}>Giá chỉ: </span>{formattedPrice} <span className={styles['gap']}>VND</span>
                                    </div>
                                    <div className={styles['detail']}>{item.name}</div>
                                    <div className={styles['quantity']}>{rating} 💫 rating</div>

                                    <div className={styles['cart-button']}>
                                        <div className={styles['cart-text']}>Mua Ngay</div>
                                    </div>
                                    <div className={styles['shopping-cart']}>
                                        <Image width={40} height={40} src="/image/sale/shopping_cart.png" alt="cart" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles['arrowRight']}>
                    <Image width={44} height={44} src="/image/arrow_right.png" alt="" />
                </div>
            </div>
        </div>
    )
}
