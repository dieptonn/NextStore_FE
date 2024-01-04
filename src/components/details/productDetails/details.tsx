import Link from 'next/link';
import styles from './styles.module.scss'
import Image from 'next/image'

interface DetailsProps {
    apiData: any[];
}

export const Details: React.FC<DetailsProps> = ({ apiData }) => {

    // console.log(apiData)
    const formatNumber = (number?: number | null) => {
        if (number || number === 0) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
        return "0";
    };
    return (

        <div className={styles['details']}>


            {apiData.map((data) => (
                <div key={data._id} className={styles['details-image']}>
                    <div className={styles['details-img']}>
                        <div className={styles['img']}>
                            <Image width={512} height={512} src={data.image[0][0]} alt="" />
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
                            <Image width={105} height={105} src={data.image[0][0]} alt="" />
                        </div>
                        <div className={styles['pic1']}>
                            <Image width={105} height={105} src={data.image[0][0]} alt="" />
                        </div>
                        <div className={styles['pic1']}>
                            <Image width={105} height={105} src={data.image[0][0]} alt="" />
                        </div>
                        <div className={styles['pic1']}>
                            <Image width={105} height={105} src={data.image[0][0]} alt="" />
                        </div>
                    </div>
                </div>
            ))}
            {apiData.map((data) => (
                <div key={data._id} className={styles['info']}>
                    <div className={styles['title']}>
                        {data.name}<br />

                    </div>
                    <div className={styles['des']}>
                        {data.description}
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
                        <span className={styles['thuongHieu']}>Đến từ thương hiệu</span> <span className={styles['Thuonghieu']}>{data.brand.name}</span>
                    </div>
                    <div className={styles['typeDetails']}>
                        Giá chỉ: <button className={styles['salary']}>{formatNumber(data.offers.price)}</button> VND
                    </div>
                    <div className={styles['config']}>
                        <div className={styles['config1']}>
                            <button className={styles['configDetails']}>
                                4
                            </button>
                            <button className={styles['configDetails']}>
                                8
                            </button>
                            <button className={styles['configDetails']}>
                                16
                            </button>
                            <button className={styles['configDetails']}>
                                32
                            </button>
                            <button className={styles['configDetails']}>
                                64
                            </button>
                            <button className={styles['configDetails']}>
                                128
                            </button>

                        </div>
                        <div className={styles['config2']}>
                            <div className={styles['add']}>+</div>
                            <div>Khác</div>
                        </div>
                    </div>
                    <div className={styles['shopping']}>
                        <button className={styles['buy']}>
                            <div className={styles['buyText']}>
                                Mua ngay
                            </div>
                        </button>
                        <button className={styles['addCart']}>
                            <div className={styles['smallImg']}>
                                <Image width={24} height={24} src="/image/details/cart-plus.png" alt="" />
                            </div>
                            <Link href={'/gio_hang'} className={styles['addText']}>
                                Thêm vào giỏ
                            </Link>
                        </button>
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
            ))}
        </div>
    )
}

