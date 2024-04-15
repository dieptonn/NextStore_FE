import styles from './hot.module.scss'
import Image from 'next/image'

export default function Hot() {
    return (
        <div className={styles['hot']}>
            <div className={styles['hot-list']}>
                <div className={styles['title']}>
                    Các danh mục sản phẩm hot 🔥🔥🔥
                </div>
                <div className={styles['list']}>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product.png" alt="" />
                        <div>Smart Phone</div>
                    </div>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product2.png" alt="" />
                        <div>Macbook</div>
                    </div>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product3.png" alt="" />
                        <div>Smart TV</div>
                    </div>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product4.png" alt="" />
                        <div>Smart Watch</div>
                    </div>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product5.png" alt="" />
                        <div>Ipod</div>
                    </div>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product6.png" alt="" />
                        <div>Air Con</div>
                    </div>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product7.png" alt="" />
                        <div>Fridge</div>
                    </div>
                    <div className={styles['product']}>
                        <Image width={512} height={274} src="/image/hot/product8.png" alt="" />
                        <div>Washing Mc</div>
                    </div>
                </div>
                {/* <div className={styles['moreDiv']}>
                    <div className={styles['more']}>
                        <div className={styles['more-text']}>More</div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}