import styles from './styles.module.scss'
import Image from 'next/image'

export default function Details() {
    return (
        <div className={styles['details']}>
            <div className={styles['details-image']}>
                <div className={styles['details-img']}>
                    <div className={styles['img']}>
                        <Image width={512} height={512} src="/image/details/product_img.png" alt="" />
                    </div>
                    <div className={styles['like']}>
                        <Image width={32} height={32} src="/image/details/like.png" alt="" />
                    </div>
                    <div className={styles['share']}>
                        <Image width={32} height={32} src="/image/details/share.png" alt="" />
                    </div>
                </div>
                <div className={styles['small-img']}>
                    <div className={styles['pic1']}>
                        <Image width={105} height={105} src="/image/details/Pic1.png" alt="" />
                    </div>
                    <div className={styles['pic1']}>
                        <Image width={105} height={105} src="/image/details/Pic2.png" alt="" />
                    </div>
                    <div className={styles['pic1']}>
                        <Image width={105} height={105} src="/image/details/Pic3.png" alt="" />
                    </div>
                    <div className={styles['pic1']}>
                        <Image width={105} height={105} src="/image/details/Pic4.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles['info']}>
                <div className={styles['title']}>
                    Notebook Apple Macbok Pro 13” 2.3 2019<br />
                    Intel core i5 DDR3 8GB 256 GB
                </div>
                <div className={styles['color-title']}>
                    <div className={styles['colorTitle']}>
                        Color
                    </div>
                    <div className={styles['colorName']}>Space Gray</div>
                </div>
                <div className={styles['color']}>
                    <div className={styles['color1']}></div>
                    <div className={styles['color1']}></div>
                    <div className={styles['color1']}></div>
                    <div className={styles['color1']}></div>
                </div>
                <div className={styles['type']}>
                    16 114 285 so'm / dona
                </div>
                <div className={styles['typeDetails']}>
                    6 434 000 so'm  x 3 oy
                </div>
                <div className={styles['config']}>
                    <div className={styles['config1']}>
                        <div className={styles['configDetails']}>
                            4
                        </div>
                        <div className={styles['configDetails']}>
                            8
                        </div>
                        <div className={styles['configDetails']}>
                            16
                        </div>
                        <div className={styles['configDetails']}>
                            32
                        </div>
                        <div className={styles['configDetails']}>
                            64
                        </div>
                        <div className={styles['configDetails']}>
                            128
                        </div>

                    </div>
                    <div className={styles['config2']}>
                        <div className={styles['add']}>+</div>
                        <div>Savatga</div>
                    </div>
                </div>
                <div className={styles['shopping']}>
                    <div className={styles['buy']}>
                        <div className={styles['buyText']}>
                            Mua ngay
                        </div>
                    </div>
                    <div className={styles['addCart']}>
                        <div className={styles['smallImg']}>
                            <Image width={24} height={24} src="/image/details/cart-plus.png" alt="" />
                        </div>
                        <div className={styles['addText']}>
                            Thêm vào giỏ
                        </div>
                    </div>
                </div>
                <div className={styles['more']}>
                    <Image width={512} height={36} src="/image/details/1.png" alt="" />
                </div>
                <div className={styles['more']}>
                    <Image width={346} height={24} src="/image/details/2.png" alt="" />
                </div>
                <div className={styles['more']}>
                    <Image width={521} height={28} src="/image/details/3.png" alt="" />
                </div>

            </div>
        </div>
    )
}