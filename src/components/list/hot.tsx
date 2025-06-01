'use client'

import styles from './hot.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface HotProduct {
    _id: string;
    name: string;
    product_img: string;
}

export default function Hot() {
    const [hotProducts, setHotProducts] = useState<HotProduct[]>([])

    useEffect(() => {
        const fetchHotProducts = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/v1/product/hot-products')
                setHotProducts(res.data.data)
            } catch (error) {
                console.error('Failed to fetch hot products:', error)
            }
        }

        fetchHotProducts()
    }, [])

    return (
        <div className={styles['hot']}>
            <div className={styles['hot-list']}>
                <div className={styles['title']}>
                    Các sản phẩm đang hot 🔥🔥🔥
                </div>
                <div className={styles['list']}>
                    {hotProducts.map(product => (
                        <div className={styles['product']} key={product._id}>
                            <Image
                                width={512}
                                height={274}
                                src={product.product_img}
                                alt={product.name}
                            />
                            {/* <div className={styles['item']}>{product.name}</div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
