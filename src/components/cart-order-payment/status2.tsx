'use client'
import styles from './status2.module.scss';
import Link from 'next/link'
// import React, { useEffect, useState } from "react";


export default function Status2() {

    return (
        <div className={styles['main']}>
            <Link href='/home/gio_hang' className={styles['cart']}>
                <div className={styles['cartNum']}>
                    <div className={styles['cartText']}>
                        1
                    </div>
                </div>
                <div className={styles['text']}>
                    Giỏ hàng
                </div>
            </Link>
            <div className={styles['line1']}>
            </div>
            <Link href='/home/don_hang' className={styles['order']}>
                <div className={styles['orNum']}>
                    <div className={styles['orText']}>
                        2
                    </div>
                </div>
                <div className={styles['orTitle']}>
                    Đơn hàng
                </div>
            </Link>
            <div className={styles['line2']}>
            </div>
            <div className={styles['order2']}>
                <div className={styles['orNum2']}>
                    <div className={styles['orText2']}>
                        3
                    </div>
                </div>
                <div className={styles['orTitle2']}>
                    Thanh toán
                </div>
            </div>
        </div>
    )
}
