import styles from './style.module.scss'
import Link from 'next/link'

export default function Recommended() {
    return (
        <div className={styles['content']}>
            <div className={styles['rDiv']}>
                <div className={styles['arrowLeft']}>
                    <img src="../image/arrow_left.png" alt="" />
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
                                <img src="../image/details/ipod.png" alt="" />
                            </div>
                            <div className={styles['heart']}>
                                <img src="../image/sale/Sevimli.png" alt="" />
                            </div>
                            <div className={styles['price']}>299 000 so’m</div>
                            <div className={styles['detail']}>Apple Airpods Pro <br />
                                simsiz quloqchin , Oq rangda   </div>
                            <div className={styles['quantity']}>1230 ta buyurtma</div>

                            <div className={styles['cart-button']}>
                                <div className={styles['cart-text']}>Sotib olish</div>
                            </div>
                            <div className={styles['shopping-cart']}>
                                <img src="../image/sale/shopping_cart.png" alt="" />
                            </div>

                        </div>
                        <div className={styles['product']}>
                            <div className={styles['productImg']}>
                                <img src="../image/details/laptop.png" alt="" />
                            </div>
                            <div className={styles['heart']}>
                                <img src="../image/sale/Sevimli.png" alt="" />
                            </div>
                            <div className={styles['price']}>299 000 so’m</div>
                            <div className={styles['detail']}>Apple Airpods Pro <br />
                                simsiz quloqchin , Oq rangda   </div>
                            <div className={styles['quantity']}>1230 ta buyurtma</div>

                            <div className={styles['cart-button']}>
                                <div className={styles['cart-text']}>Sotib olish</div>
                            </div>
                            <div className={styles['shopping-cart']}>
                                <img src="../image/sale/shopping_cart.png" alt="" />
                            </div>

                        </div>
                        <div className={styles['product']}>
                            <div className={styles['productImg']}>
                                <img src="../image/details/watch.png" alt="" />
                            </div>
                            <div className={styles['heart']}>
                                <img src="../image/sale/Sevimli.png" alt="" />
                            </div>
                            <div className={styles['price']}>299 000 so’m</div>
                            <div className={styles['detail']}>Apple Airpods Pro <br />
                                simsiz quloqchin , Oq rangda   </div>
                            <div className={styles['quantity']}>1230 ta buyurtma</div>

                            <div className={styles['cart-button']}>
                                <div className={styles['cart-text']}>Sotib olish</div>
                            </div>
                            <div className={styles['shopping-cart']}>
                                <img src="../image/sale/shopping_cart.png" alt="" />
                            </div>

                        </div>
                        <div className={styles['product']}>
                            <div className={styles['productImg']}>
                                <img src="../image/details/robot.png" alt="" />
                            </div>
                            <div className={styles['heart']}>
                                <img src="../image/sale/Sevimli.png" alt="" />
                            </div>
                            <div className={styles['price']}>299 000 so’m</div>
                            <div className={styles['detail']}>Apple Airpods Pro <br />
                                simsiz quloqchin , Oq rangda   </div>
                            <div className={styles['quantity']}>1230 ta buyurtma</div>

                            <div className={styles['cart-button']}>
                                <div className={styles['cart-text']}>Sotib olish</div>
                            </div>
                            <div className={styles['shopping-cart']}>
                                <img src="../image/sale/shopping_cart.png" alt="" />
                            </div>

                        </div>
                        <div className={styles['product']}>
                            <div className={styles['productImg']}>
                                <img src="../image/details/cam.png" alt="" />
                            </div>
                            <div className={styles['heart']}>
                                <img src="../image/sale/Sevimli.png" alt="" />
                            </div>
                            <div className={styles['price']}>299 000 so’m</div>
                            <div className={styles['detail']}>Apple Airpods Pro <br />
                                simsiz quloqchin , Oq rangda   </div>
                            <div className={styles['quantity']}>1230 ta buyurtma</div>

                            <div className={styles['cart-button']}>
                                <div className={styles['cart-text']}>Sotib olish</div>
                            </div>
                            <div className={styles['shopping-cart']}>
                                <img src="../image/sale/shopping_cart.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles['arrowRight']}>
                    <img src="../image/arrow_right.png" alt="" />
                </div>
            </div>
        </div>
    )
}