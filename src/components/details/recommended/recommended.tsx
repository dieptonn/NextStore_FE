import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Recommended() {
    return (
        <div className={styles['content']}>
            <div className={styles['rDiv']}>
                <div className={styles['arrowLeft']}>
                    <Image width={44} height={44} src="/image/arrow_left.png" alt="" />
                </div>
                <div className={styles['rs']}>
                    <div className={styles['title']}>
                        <div className={styles['titleText']}>
                            Sản phẩm gợi ý dành cho bạn
                        </div>
                    </div>
                    <div className={styles['slider']}>
                        <div className={styles['product']}>
                            <div className={styles['productImg']}>
                                <Image width={180} height={180} src="/image/details/ipod.png" alt="" />
                            </div>
                            <div className={styles['heart']}>
                                <Image width={180} height={180} src="/image/sale/Sevimli.png" alt="" />
                            </div>
                            <div className={styles['price']}>299 000 so’m</div>
                            <div className={styles['detail']}>Apple Airpods Pro <br />
                                simsiz quloqchin , Oq rangda   </div>
                            <div className={styles['quantity']}>1230 ta buyurtma</div>

                            <div className={styles['cart-button']}>
                                <div className={styles['cart-text']}>Mua Ngay</div>
                            </div>
                            <div className={styles['shopping-cart']}>
                                <Image width={40} height={40} src="/image/sale/shopping_cart.png" alt="" />
                            </div>

                        </div>
                        <div className={styles['product']}>
                            <div className={styles['productImg']}>
                                <Image width={180} height={180} src="/image/details/laptop.png" alt="" />
                            </div>
                            <div className={styles['heart']}>
                                <Image width={24} height={24} src="/image/sale/Sevimli.png" alt="" />
                            </div>
                            <div className={styles['price']}>299 000 so’m</div>
                            <div className={styles['detail']}>Apple Airpods Pro <br />
                                simsiz quloqchin , Oq rangda   </div>
                            <div className={styles['quantity']}>1230 ta buyurtma</div>

                            <div className={styles['cart-button']}>
                                <div className={styles['cart-text']}>Mua Ngay</div>
                            </div>
                            <div className={styles['shopping-cart']}>
                                <Image width={40} height={40} src="/image/sale/shopping_cart.png" alt="" />
                            </div>

                        </div>
                        <div className={styles['product']}>
                            <div className={styles['productImg']}>
                                <Image width={180} height={180} src="/image/details/watch.png" alt="" />
                            </div>
                            <div className={styles['heart']}>
                                <Image width={24} height={24} src="/image/sale/Sevimli.png" alt="" />
                            </div>
                            <div className={styles['price']}>299 000 so’m</div>
                            <div className={styles['detail']}>Apple Airpods Pro <br />
                                simsiz quloqchin , Oq rangda   </div>
                            <div className={styles['quantity']}>1230 ta buyurtma</div>

                            <div className={styles['cart-button']}>
                                <div className={styles['cart-text']}>Mua Ngay</div>
                            </div>
                            <div className={styles['shopping-cart']}>
                                <Image width={40} height={40} src="/image/sale/shopping_cart.png" alt="" />
                            </div>

                        </div>
                        <div className={styles['product']}>
                            <div className={styles['productImg']}>
                                <Image width={180} height={180} src="/image/details/robot.png" alt="" />
                            </div>
                            <div className={styles['heart']}>
                                <Image width={24} height={24} src="/image/sale/Sevimli.png" alt="" />
                            </div>
                            <div className={styles['price']}>299 000 so’m</div>
                            <div className={styles['detail']}>Apple Airpods Pro <br />
                                simsiz quloqchin , Oq rangda   </div>
                            <div className={styles['quantity']}>1230 ta buyurtma</div>

                            <div className={styles['cart-button']}>
                                <div className={styles['cart-text']}>Mua Ngay</div>
                            </div>
                            <div className={styles['shopping-cart']}>
                                <Image width={40} height={40} src="/image/sale/shopping_cart.png" alt="" />
                            </div>

                        </div>
                        <div className={styles['product']}>
                            <div className={styles['productImg']}>
                                <Image width={180} height={180} src="/image/details/cam.png" alt="" />
                            </div>
                            <div className={styles['heart']}>
                                <Image width={24} height={24} src="/image/sale/Sevimli.png" alt="" />
                            </div>
                            <div className={styles['price']}>299 000 so’m</div>
                            <div className={styles['detail']}>Apple Airpods Pro <br />
                                simsiz quloqchin , Oq rangda   </div>
                            <div className={styles['quantity']}>1230 ta buyurtma</div>

                            <div className={styles['cart-button']}>
                                <div className={styles['cart-text']}>Mua Ngay</div>
                            </div>
                            <div className={styles['shopping-cart']}>
                                <Image width={40} height={40} src="/image/sale/shopping_cart.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles['arrowRight']}>
                    <Image width={44} height={44} src="/image/arrow_right.png" alt="" />
                </div>
            </div>
        </div>
    )
}