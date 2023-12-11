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
                    <div className={styles['hello']}></div>
                </div>
            </div>
        </div>
    )
}
