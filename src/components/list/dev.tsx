import styles from './dev.module.scss'


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
                            <img src="./image/hp.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <img src="./image/acer.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <img src="./image/samsung.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <img src="./image/asus.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <img src="./image/apple.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <img src="./image/msi.png" alt="" />
                        </div>
                    </div>
                    <div className={styles['list1']}>
                        <div className={styles['product']}>
                            <img src="./image/mi.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <img src="./image/vivo.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <img src="./image/texno.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <img src="./image/sandi.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <img src="./image/good.png" alt="" />
                        </div>
                        <div className={styles['product']}>
                            <img src="./image/elma.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}