
import styles from './styles.module.scss';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const categories = [
    { name: 'Thương hiệu' },
    { name: 'Đánh giá' },
    { name: 'Loại' },
    { name: 'Giá tiền' },
];

interface Product {
    _id: string;
    product_img: string;
    name: string;
    price_old: number;
    price_sale: number;
    rating_number: number;
    slug: string;
}

interface FilterProps {
    category: string;
    onFilterChange: (filteredData: Product[]) => void; // Callback function
}

const brands = ['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Artel', 'Boshqalar'];

export default function Filter({ category, onFilterChange }: FilterProps) {
    const [openCategory, setOpenCategory] = useState<string | null>('Giá tiền');
    const [checkedBrands, setCheckedBrands] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<number>(50000000);
    const [initialPriceRange, setInitialPriceRange] = useState<number>(50000000);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const toggleBrand = (brand: string) => {
        setCheckedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    useEffect(() => {
        // Kiểm tra nếu giá trị slider thay đổi
        if (priceRange !== initialPriceRange) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                const fetchFilteredProducts = async () => {
                    try {
                        const response = await axios.post('http://localhost:8000/api/v1/filter/sort', {
                            maxPrice: priceRange.toString(),
                            category: category,
                        });
                        onFilterChange(response.data);
                    } catch (error) {
                        console.error('Lỗi khi gọi API lọc:', error);
                    }
                };

                fetchFilteredProducts();
            }, 500);
        }

        // Clean up khi component unmount hoặc giá trị thay đổi
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [priceRange, category, onFilterChange, initialPriceRange]);

    return (
        <div className={styles.filters}>
            <div className={styles.filter}>
                <div className={styles.filter1}>
                    <div className={styles['filter1-content']}>
                        <div className={styles['filter1-katalog']}>____ Filter ____</div>
                        <div className={styles['filter1-list']}>
                            {categories.map(cat => (
                                <div
                                    key={cat.name}
                                    className={styles['filter1-category']}
                                    onClick={() => setOpenCategory(cat.name === openCategory ? null : cat.name)}
                                >
                                    <div className={styles['filter-arrow']}>
                                        <Image
                                            width={24}
                                            height={24}
                                            src={`/image/product_page/${openCategory === cat.name ? 'arrow_down' : 'arrow_left'}.png`}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles['filter-text']}>{cat.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {openCategory === 'Giá tiền' && (
                    <div className={styles.filter2}>
                        <div className={styles['filter-katalog']}>Giá</div>
                        <div className={styles.salary}>
                            <div className={styles.from}>0</div>
                            <div className={styles.vector}>-</div>
                            <div className={styles.to}>{priceRange.toLocaleString()}</div>
                        </div>
                        <input
                            type="range"
                            min="2000000"
                            max="50000000"
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                            className={styles.slider}
                        />
                    </div>
                )}

                <div className={styles.filter3}>
                    <div className={styles['filter-katalog']}>Theo thương hiệu</div>
                    <div className={styles.search}>
                        <input className={styles.input} type="text" placeholder="Tìm thương hiệu..." />
                        <div className={styles['filter-arrow']}>
                            <Image width={24} height={24} src="/image/product_page/search.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.check}>
                        <div className={styles['check-content']}>
                            {brands.map((brand) => (
                                <div key={brand} className={styles['check-box']} onClick={() => toggleBrand(brand)}>
                                    <div className={styles['filter-arrow']}>
                                        <Image
                                            width={24}
                                            height={24}
                                            src={`/image/product_page/${checkedBrands.includes(brand) ? 'check' : 'check_box'}.png`}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles['check-div']}>
                                        <div className={styles['filter-text']}>{brand}</div>
                                    </div>
                                    <div className={styles.qty}>23145</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
