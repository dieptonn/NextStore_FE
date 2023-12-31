'use client'
import styles from './headerAdmin.module.scss';
import Link from 'next/link'
import React, { useEffect, useState } from "react";


export default function Header() {


    return (
        <div className={styles['header']}>
            <div className={styles['header1']}>
                <div className={styles['headerHome']}>
                    <div className={styles['headerIcon']}>
                        <img src="../image/admin/home.png" alt="" />
                    </div>
                    <div className={styles['headerText']}>Home</div>
                </div>
                <div className={styles['headerHome']}>
                    <div className={styles['headerIcon']}>
                        <img src="../image/admin/content.png" alt="" />
                    </div>
                    <div className={styles['headerText']}>Contents</div>
                </div>
                <div className={styles['headerHome']}>
                    <div className={styles['headerIcon']}>
                        <img src="../image/admin/categories.png" alt="" />
                    </div>
                    <div className={styles['headerText']}>Categories</div>
                </div>
                <div className={styles['headerHome']}>
                    <div className={styles['headerIcon']}>
                        <img src="../image/admin/setting.png" alt="" />
                    </div>
                    <div className={styles['headerText']}>Settings</div>
                </div>
            </div>
            <div className={styles['header2']}>
                <div className={styles['avatar']}>
                    <img src="../image/admin/avatar.png" alt="" />
                </div>
                <div className={styles['name']}>diepton</div>
            </div>
        </div>
    )
}