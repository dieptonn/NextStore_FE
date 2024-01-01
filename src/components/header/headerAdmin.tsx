'use client'
import styles from './headerAdmin.module.scss';
import Link from 'next/link'
import React, { useEffect, useState } from "react";
import Image from 'next/image'

export default function Header() {


    return (
        <div className={styles['header']}>
            <div className={styles['header1']}>
                <div className={styles['headerHome']}>
                    <div className={styles['headerIcon']}>
                        <Image width={18} height={18} src="/image/admin/home.png" alt="" />
                    </div>
                    <div className={styles['headerText']}>Home</div>
                </div>
                <div className={styles['headerHome']}>
                    <div className={styles['headerIcon']}>
                        <Image width={18} height={18} src="/image/admin/content.png" alt="" />
                    </div>
                    <div className={styles['headerText']}>Contents</div>
                </div>
                <div className={styles['headerHome']}>
                    <div className={styles['headerIcon']}>
                        <Image width={18} height={18} src="/image/admin/categories.png" alt="" />
                    </div>
                    <div className={styles['headerText']}>Categories</div>
                </div>
                <div className={styles['headerHome']}>
                    <div className={styles['headerIcon']}>
                        <Image width={18} height={18} src="/image/admin/setting.png" alt="" />
                    </div>
                    <div className={styles['headerText']}>Settings</div>
                </div>
            </div>
            <div className={styles['header2']}>
                <div className={styles['avatar']}>
                    <Image width={30} height={30} src="/image/admin/avatar.png" alt="" />
                </div>
                <div className={styles['name']}>diepton</div>
            </div>
        </div>
    )
}