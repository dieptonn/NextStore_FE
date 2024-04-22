// app/login/page.tsx
'use client'

import styles from './userSidebar.module.scss'
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Image from 'next/image'

export default function UserSidebar() {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div className={styles['sidebar']}>
            <div className={styles['dashboardBtn']}>
                <div className={styles['btn']}>
                    <Image className={styles['img']} src='/image/profile/dashboard.png' width={37.33} height={37.33} alt='' />
                    <div className={styles['dashboardTit']}>
                        Dashboard
                    </div>
                </div>
                <Image className={styles['Aimg']} src='/image/profile/rArrow.png' width={9.333} height={16} alt='' />

            </div>
            <div className={styles['dashboard']}>
                <div className={styles['item']}>
                    <div className={styles['item1']}>
                        <Image className={styles['img']} src='/image/profile/task.png' width={37.33} height={37.33} alt='' />
                        <div className={styles['itemTxt']}>
                            My Tasks
                        </div>
                    </div>
                    <Image className={styles['img']} src='/image/profile/rArrow.png' width={9.333} height={16} alt='' />
                </div>
                <div className={styles['item']}>
                    <div className={styles['item1']}>
                        <Image className={styles['img']} src='/image/profile/team.png' width={37.33} height={37.33} alt='' />
                        <div className={styles['itemTxt']}>
                            Manage Team
                        </div>
                    </div>
                    <Image className={styles['img']} src='/image/profile/rArrow.png' width={9.333} height={16} alt='' />
                </div>
                <div className={styles['item']}>
                    <div className={styles['item1']}>
                        <Image className={styles['img']} src='/image/profile/clock.png' width={37.33} height={37.33} alt='' />
                        <div className={styles['itemTxt']}>
                            Hours Reports
                        </div>
                    </div>
                    <Image className={styles['img']} src='/image/profile/rArrow.png' width={9.333} height={16} alt='' />
                </div>
                <div className={styles['item']}>
                    <div className={styles['item1']}>
                        <Image className={styles['img']} src='/image/profile/time.png' width={37.33} height={37.33} alt='' />
                        <div className={styles['itemTxt']}>
                            Edit Time
                        </div>
                    </div>
                    <Image className={styles['img']} src='/image/profile/rArrow.png' width={9.333} height={16} alt='' />
                </div>
                <div className={styles['item']}>
                    <div className={styles['item1']}>
                        <Image className={styles['img']} src='/image/profile/setting.png' width={37.33} height={37.33} alt='' />
                        <div className={styles['itemTxt']}>
                            Setting
                        </div>
                    </div>
                    <Image className={styles['img']} src='/image/profile/rArrow.png' width={9.333} height={16} alt='' />
                </div>
            </div>
            <div className={styles['logout']}>
                <div className={styles['logoutTxt']}>
                    Sign out
                </div>
                <Image className={styles['img']} src='/image/profile/out.png' width={21.5} height={21.5} alt='' />

            </div>
        </div>
    )
}

