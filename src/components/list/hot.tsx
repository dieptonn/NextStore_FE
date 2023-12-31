import styles from './hot.module.scss'
import Image from 'next/image'

export default function Hot() {
    return (
        <div className={styles['hot']}>
            <div className={styles['hot-list']}>
                <div className={styles['title']}>
                    Các danh mục sản phẩm hot 💥💥💥
                </div>
                <div className={styles['list']}>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product.png" alt="" />
                    </div>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product2.png" alt="" />
                    </div>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product3.png" alt="" />
                    </div>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product4.png" alt="" />
                    </div>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product5.png" alt="" />
                    </div>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product6.png" alt="" />
                    </div>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product7.png" alt="" />
                    </div>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product8.png" alt="" />
                    </div>
                </div>
                <div className={styles['more']}>
                    <div className={styles['more-text']}>More...</div>
                </div>
            </div>
        </div>
    )
}