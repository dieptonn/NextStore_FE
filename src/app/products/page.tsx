import Image from 'next/image'
import styles from './styles.module.scss'
import Products from '@/components/products/products'

export default function ProductsPage() {
    return (
        <main className={styles['main']}>
            <Products />
            <button className={styles['zalo']}>
                <img src="./image/zalo.png" alt="" />
            </button>
        </main>
    )
}