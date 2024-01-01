'use client'
import styles from '../styles.module.scss'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image'

interface Product {
    _id: string;
    product_img: string;
    name: string;
    price_old: number;
    rating_number: number;
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
                const response = await axios.get<{ data: Product[] }>('https://nextstore-be.onrender.com/api/v1/fridges/showProduct');
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
            <div className={styles['filters']}>
                <div className={styles['filter']}>
                    <div className={styles['filter1']}>
                        <div className={styles['filter1-content']}>
                            <div className={styles['filter1-katalog']}>____ Filter ____</div>
                            <div className={styles['filter1-list']}>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <Image width={24} height={24} src="/image/product_page/arrow_left.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Smartphone</div>
                                </div>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <Image width={24} height={24} src="/image/product_page/arrow_left.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Đồ gia dụng</div>
                                </div>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <Image width={24} height={24} src="/image/product_page/arrow_left.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Tivi</div>
                                </div>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <Image width={24} height={24} src="/image/product_page/arrow_left.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Máy lạnh</div>
                                </div>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <Image width={24} height={24} src="/image/product_page/arrow_left.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Đồ điện tử</div>
                                </div>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <Image width={24} height={24} src="/image/product_page/arrow_left.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Điều hòa</div>
                                </div>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <Image width={24} height={24} src="/image/product_page/arrow_left.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Tủ lạnh</div>
                                </div>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <Image width={24} height={24} src="/image/product_page/arrow_down.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Máy tính</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={styles['filter2']}>
                        <div className={styles['filter-katalog']}>Giá</div>
                        <div className={styles['salary']}>
                            <div className={styles['from']}>
                                <div className={styles['filter-text']}>0</div>
                            </div>
                            <div className={styles['vector']}>-</div>
                            <div className={styles['to']}>100.000</div>
                        </div>
                        <div className={styles['slider']}>
                            <Image width={213} height={28} src="/image/product_page/Slider.png" alt="" />
                        </div>
                    </div>
                    <div className={styles['filter3']}>
                        <div className={styles['filter-katalog']}>Theo thương hiệu</div>
                        <div className={styles['search']}>
                            <input className={styles['input']} type="text" />
                            <div className={styles['filter-arrow']}>
                                <Image width={24} height={24} src="/image/product_page/search.png" alt="" />
                            </div>
                        </div>
                        <div className={styles['check']}>
                            <div className={styles['check-content']}>

                                <div className={styles['check-box']}>
                                    <div className={styles['filter-arrow']}>
                                        <Image width={24} height={24} src="/image/product_page/check_box.png" alt="" />
                                    </div>
                                    <div className={styles['check-div']}>
                                        <div className={styles['filter-text']}>Apple</div>
                                    </div>
                                    <div className={styles['qty']}>23145</div>
                                </div>
                                <div className={styles['check-box']}>
                                    <div className={styles['filter-arrow']}>
                                        <Image width={24} height={24} src="/image/product_page/check.png" alt="" />
                                    </div>
                                    <div className={styles['check-div']}>
                                        <div className={styles['filter-text']}>Samsung</div>
                                    </div>
                                    <div className={styles['qty']}>23145</div>
                                </div>
                                <div className={styles['check-box']}>
                                    <div className={styles['filter-arrow']}>
                                        <Image width={24} height={24} src="/image/product_page/check.png" alt="" />
                                    </div>
                                    <div className={styles['check-div']}>
                                        <div className={styles['filter-text']}>Xiaomi</div>
                                    </div>
                                    <div className={styles['qty']}>23145</div>
                                </div>
                                <div className={styles['check-box']}>
                                    <div className={styles['filter-arrow']}>
                                        <Image width={24} height={24} src="/image/product_page/check.png" alt="" />
                                    </div>
                                    <div className={styles['check-div']}>
                                        <div className={styles['filter-text']}>Huawei</div>
                                    </div>
                                    <div className={styles['qty']}>23145</div>
                                </div>
                                <div className={styles['check-box']}>
                                    <div className={styles['filter-arrow']}>
                                        <Image width={24} height={24} src="/image/product_page/check_box.png" alt="" />
                                    </div>
                                    <div className={styles['check-div']}>
                                        <div className={styles['filter-text']}>Artel</div>
                                    </div>
                                    <div className={styles['qty']}>23145</div>
                                </div>
                                <div className={styles['check-box']}>
                                    <div className={styles['filter-arrow']}>
                                        <Image width={24} height={24} src="/image/product_page/check.png" alt="" />
                                    </div>
                                    <div className={styles['check-div']}>
                                        <div className={styles['filter-text']}>Boshqalar</div>
                                    </div>
                                    <div className={styles['qty']}>23145</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['filter4']}>
                        <div className={styles['filter4-content']}>
                            <div className={styles['filter4-tick']}>
                                <div className={styles['filter-text']}>Hàng mới</div>
                                <div className={styles['tick']}>
                                    <Image width={24} height={24} src="/image/product_page/switch.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['filter4-tick']}>
                                <div className={styles['filter-text']}>Hàng cũ</div>
                                <div className={styles['tick']}>
                                    <Image width={24} height={24} src="/image/product_page/switch2.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['filter4-tick']}>
                                <div className={styles['filter-text']}>Hàng đổi trả</div>
                                <div className={styles['tick']}>
                                    <Image width={24} height={24} src="/image/product_page/switch.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['filter5']}>
                        <div className={styles['filter5-content']}>

                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['list']}>
                {data.map((product) => (
                    <Link key={product._id} href="/may_giat/[productName]" as={`/may_giat/${encodeURIComponent(product.name)}`} className={styles['product']}>
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