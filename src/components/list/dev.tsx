import styles from './dev.module.scss'
import Image from 'next/image'

export default function Dev() {
    return (
        <div className={styles['sale']}>
            <div className={styles['sale-list']}>
                <div className={styles['title']}>
                    Các nhà phát hành
                </div>
                <div className={styles['list']}>
                    <div className={styles['list1']}>
                        <div className={styles['product']}>
                            <Image width={512} height={274} src="/image/hp.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <Image width={512} height={274} src="/image/acer.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <Image width={512} height={274} src="/image/samsung.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <Image width={512} height={274} src="/image/asus.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <Image width={512} height={274} src="/image/apple.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <Image width={512} height={274} src="/image/msi.png" alt="" />
                        </div>
                    </div>
                    <div className={styles['list1']}>
                        <div className={styles['product']}>
                            <Image width={512} height={274} src="/image/mi.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <Image width={512} height={274} src="/image/vivo.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <Image width={512} height={274} src="/image/texno.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <Image width={512} height={274} src="/image/sandi.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <Image width={512} height={274} src="/image/good.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <Image width={512} height={274} src="/image/elma.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}