'use client'
import styles from './styles.module.scss';
import Link from 'next/link'
import React, { useEffect, useState } from "react";


export default function Chatbot() {
    const [chatBox, setChatBox] = useState(false);

    return (
        <div className={`${styles['zalo']} ${chatBox ? styles['active'] : ''}`}
            onClick={() => {
                setChatBox(!chatBox)
            }
            }
        >
            <img src="./image/zalo.png" alt="" />
            <div className={chatBox ? `${styles.chatBox} ${styles.active}` : `${styles.chatBox}`}>
                <div className={styles['header']}>
                    <div className={styles['title']}>
                        <div className={styles['next']}>Next</div>
                        <div className={styles['store']}> Store</div>
                    </div>
                    <div className={styles['hello']}>
                        <div className={styles['hello1']}>
                            Kính chào quý khách!
                        </div>
                        <div className={styles['hello2']}>
                            Rất vui khi được hỗ trợ quý khách
                        </div>
                    </div>
                    <div className={styles['down']}>
                        <img src="../image/down.png" alt="" />
                    </div>
                </div>
                <div className={styles['content']}>
                    <div className={styles['content1']}>
                        Vui lòng chọn phương thức hỗ trợ
                    </div>
                    <div className={styles['content2']}>
                        <div className={styles['content2Text']}>
                            Hỗ trợ về dịch vụ, sản phẩm, ...
                        </div>
                    </div>
                    <div className={styles['content3']}>
                        Hoặc
                    </div>
                    <div className={styles['content4']}>
                        <div className={styles['content4Text']}>
                            Nhắn tin trực tiếp với nhân viên hỗ trợ
                        </div>
                    </div>
                </div>
                <div className={styles['footer']}></div>
            </div>
        </div>
    )
}
