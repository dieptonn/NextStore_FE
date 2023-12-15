'use client'
import styles from './status.module.scss';
import Link from 'next/link'
// import React, { useEffect, useState } from "react";


export default function Status() {

    return (
        <div className={styles['main']}>
            <div className={styles['cart']}>
                <div className={styles['cartNum']}>
                    <div className={styles['cartText']}>
                        1
                    </div>
                </div>
                <div className={styles['text']}>
                    Giỏ hàng
                </div>
            </div>
            <div className={styles['line1']}>
            </div>
            <div className={styles['order']}>
                <div className={styles['orNum']}>
                    <div className={styles['orText']}>
                        2
                    </div>
                </div>
                <div className={styles['orTitle']}>
                    Đơn hàng
                </div>
            </div>
            <div className={styles['line2']}>
            </div>
            <div className={styles['order']}>
                <div className={styles['orNum']}>
                    <div className={styles['orText']}>
                        3
                    </div>
                </div>
                <div className={styles['orTitle']}>
                    Thanh toán
                </div>
            </div>
        </div>
    )
}
