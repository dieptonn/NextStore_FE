'use client'
import styles from './products.module.scss'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
                const response = await axios.get<{ data: Product[] }>('http://127.0.0.1:8000/api/v1/televisions/showProduct');
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
                                        <img src="./image/product_page/arrow_left.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Smartfonlar</div>
                                </div>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <img src="./image/product_page/arrow_left.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Kir yuvish mashinalari</div>
                                </div>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <img src="./image/product_page/arrow_left.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Televizorlar</div>
                                </div>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <img src="./image/product_page/arrow_left.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Aqlli soatlar</div>
                                </div>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <img src="./image/product_page/arrow_left.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Quloqchinlar</div>
                                </div>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <img src="./image/product_page/arrow_left.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Konditsionerlar</div>
                                </div>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <img src="./image/product_page/arrow_left.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Sovutkichlar</div>
                                </div>
                                <div className={styles['filter1-category']}>
                                    <div className={styles['filter-arrow']}>
                                        <img src="./image/product_page/arrow_down.png" alt="" />
                                    </div>
                                    <div className={styles['filter-text']}>Kompyuter va notebooklar</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={styles['filter2']}>
                        <div className={styles['filter-katalog']}>Narx so’mda</div>
                        <div className={styles['salary']}>
                            <div className={styles['from']}>
                                <div className={styles['filter-text']}>0</div>
                            </div>
                            <div className={styles['vector']}>-</div>
                            <div className={styles['to']}>100.000</div>
                        </div>
                        <div className={styles['slider']}>
                            <img src="./image/product_page/Slider.png" alt="" />
                        </div>
                    </div>
                    <div className={styles['filter3']}>
                        <div className={styles['filter-katalog']}>Brend bo’yicha</div>
                        <div className={styles['search']}>
                            <input className={styles['input']} type="text" />
                            <div className={styles['filter-arrow']}>
                                <img src="./image/product_page/search.png" alt="" />
                            </div>
                        </div>
                        <div className={styles['check']}>
                            <div className={styles['check-content']}>

                                <div className={styles['check-box']}>
                                    <div className={styles['filter-arrow']}>
                                        <img src="./image/product_page/check_box.png" alt="" />
                                    </div>
                                    <div className={styles['check-div']}>
                                        <div className={styles['filter-text']}>Apple</div>
                                    </div>
                                    <div className={styles['qty']}>23145</div>
                                </div>
                                <div className={styles['check-box']}>
                                    <div className={styles['filter-arrow']}>
                                        <img src="./image/product_page/check.png" alt="" />
                                    </div>
                                    <div className={styles['check-div']}>
                                        <div className={styles['filter-text']}>Samsung</div>
                                    </div>
                                    <div className={styles['qty']}>23145</div>
                                </div>
                                <div className={styles['check-box']}>
                                    <div className={styles['filter-arrow']}>
                                        <img src="./image/product_page/check.png" alt="" />
                                    </div>
                                    <div className={styles['check-div']}>
                                        <div className={styles['filter-text']}>Xiaomi</div>
                                    </div>
                                    <div className={styles['qty']}>23145</div>
                                </div>
                                <div className={styles['check-box']}>
                                    <div className={styles['filter-arrow']}>
                                        <img src="./image/product_page/check.png" alt="" />
                                    </div>
                                    <div className={styles['check-div']}>
                                        <div className={styles['filter-text']}>Huawei</div>
                                    </div>
                                    <div className={styles['qty']}>23145</div>
                                </div>
                                <div className={styles['check-box']}>
                                    <div className={styles['filter-arrow']}>
                                        <img src="./image/product_page/check_box.png" alt="" />
                                    </div>
                                    <div className={styles['check-div']}>
                                        <div className={styles['filter-text']}>Artel</div>
                                    </div>
                                    <div className={styles['qty']}>23145</div>
                                </div>
                                <div className={styles['check-box']}>
                                    <div className={styles['filter-arrow']}>
                                        <img src="./image/product_page/check.png" alt="" />
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
                                <div className={styles['filter-text']}>Bo’lib to’lash</div>
                                <div className={styles['tick']}>
                                    <img src="./image/product_page/switch.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['filter4-tick']}>
                                <div className={styles['filter-text']}>Yangi mahsulotlar</div>
                                <div className={styles['tick']}>
                                    <img src="./image/product_page/switch2.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['filter4-tick']}>
                                <div className={styles['filter-text']}>Chegirmali mahsulot</div>
                                <div className={styles['tick']}>
                                    <img src="./image/product_page/switch.png" alt="" />
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
                    <Link key={product._id} href="/products/details" className={styles['product']}>
                        <img src={product.product_img} alt={product.name} />
                        <div className={styles['heart']}>
                            <img src="./image/sale/Sevimli.png" alt="" />
                        </div>
                        <div className={styles['price']}>{formatNumber(product.price_old)} VND</div>
                        <div className={styles['detail']}>{product.name}</div>
                        <div className={styles['quantity']}>{formatNumber(product.rating_number)} Lượt đánh giá</div>
                        <div className={styles['cart-button']}>
                            <div className={styles['cart-text']}>Sotib olish</div>
                        </div>
                        <div className={styles['shopping-cart']}>
                            <img src="./image/sale/shopping_cart.png" alt="" />
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}