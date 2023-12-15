'use client'
import styles from './styles.module.scss';
import Link from 'next/link'
// import React, { useEffect, useState } from "react";


export default function Cart() {
    return (
        <div className={styles['cartDiv']}>
            <div className={styles['cart']}>
                <div className={styles['cartTit']}>
                    Select Your Cart
                </div>
                <div className={styles['cartNote']}>
                    <div className={styles['cartNoteText']}>
                        • Please check your shopping cart again before paying <br />
                        • Please contact us if you need assistance with payment, orders, products, <br /> manufacturers, unit prices,...
                    </div>
                </div>
                <div className={styles['cart1']}>
                    <div className={styles['nameDiv']}>
                        <div className={styles['name']}>
                            Máy lọc nước Kangaroo
                        </div>
                        <div className={styles['salary']}>
                            €32.00
                        </div>
                    </div>
                    <div className={styles['qtyDiv']}>
                        <div className={styles['sub']}>
                            <img src="../image/cart/sub.png" alt="" />
                        </div>
                        <div className={styles['qty']}>
                            <div className={styles['qtyText']}>
                                2
                            </div>
                        </div>
                        <div className={styles['add']}>
                            <img src="../image/cart/add.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles['cart1']}>
                    <div className={styles['nameDiv']}>
                        <div className={styles['name']}>
                            Laptop ASUS TUF gaming
                        </div>
                        <div className={styles['content']}>
                            • 13th gen Intel<br />
                            • RTX 3070
                        </div>
                        <div className={styles['salary']}>
                            €22.00
                        </div>
                    </div>
                    <div className={styles['qtyDiv']}>
                        <div className={styles['sub']}>
                            <img src="../image/cart/sub.png" alt="" />
                        </div>
                        <div className={styles['qty']}>
                            <div className={styles['qtyText']}>
                                1
                            </div>
                        </div>
                        <div className={styles['add']}>
                            <img src="../image/cart/add.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles['cart1']}>
                    <div className={styles['nameDiv']}>
                        <div className={styles['name']}>
                            Tủ lạnh
                        </div>
                        <div className={styles['content']}>
                            • Tủ lạnh 2 ngăn đông<br />
                            • 2 cánh
                        </div>
                        <div className={styles['salary']}>
                            FREE
                        </div>
                    </div>
                    <div className={styles['qtyDiv']}>
                        <div className={styles['sub']}>
                            <img src="../image/cart/sub.png" alt="" />
                        </div>
                        <div className={styles['qty']}>
                            <div className={styles['qtyText']}>
                                1
                            </div>
                        </div>
                        <div className={styles['add']}>
                            <img src="../image/cart/add.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['totalOrder']}>
                <div className={styles['title']}>
                    Your Cart Overview
                </div>
                <div className={styles['div']}>
                    <div className={styles['order']}>
                        <div className={styles['orderImg']}>
                            <img src="../image/cart/pic.png" alt="" />
                        </div>
                        <div className={styles['orInfo']}>
                            <div className={styles['orTitle']}>
                                You order
                            </div>
                            <div className={styles['orDate']}>
                                <div className={styles['dateImg']}>
                                    <img src="../image/cart/date.png" alt="" />
                                </div>
                                <div className={styles['date']}>
                                    FRI, 23 DEC 2022
                                </div>
                            </div>
                            <div className={styles['orTime']}>
                                <div className={styles['dateImg']}>
                                    <img src="../image/cart/time.png" alt="" />
                                </div>
                                <div className={styles['date']}>
                                    15:00
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['memo']}>
                        <div className={styles['memo1']}>
                            <div className={styles['memo1Div']}>
                                <div className={styles['memo1Num']}>
                                    <div className={styles['memo1El']}>
                                        2
                                    </div>
                                </div>
                                <div className={styles['memo1Text']}>

                                    Máy lọc nước Kangaroo (€32.00)
                                </div>
                            </div>
                            <div className={styles['memo1Sal']}>
                                €64.00
                            </div>
                        </div>
                        <div className={styles['memo1']}>
                            <div className={styles['memo1Div']}>
                                <div className={styles['memo1Num']}>
                                    <div className={styles['memo1El']}>
                                        1
                                    </div>
                                </div>
                                <div className={styles['memo1Text']}>
                                    Laptop ASUS TUF gaming
                                </div>
                            </div>
                            <div className={styles['memo1Sal']}>
                                €22.00
                            </div>
                        </div>
                        <div className={styles['memo1']}>
                            <div className={styles['memo1Div']}>
                                <div className={styles['memo1Num']}>
                                    <div className={styles['memo1El']}>
                                        1
                                    </div>
                                </div>
                                <div className={styles['memo1Text']}>
                                    Tủ lạnh
                                </div>
                            </div>
                            <div className={styles['memo1Sal']}>
                                €0.00
                            </div>
                        </div>
                    </div>
                    <div className={styles['totalPrice']}>
                        <div className={styles['totalPriceTitle']}>
                            Total Price
                        </div>
                        <div className={styles['totalPriceSal']}>
                            €86.00
                        </div>
                    </div>
                </div>
                <div className={styles['button']}>
                    <div className={styles['buttonText']}>
                        Go to the Next Step
                    </div>
                </div>
            </div>
        </div>
    )
}
