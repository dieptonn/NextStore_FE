// app/login/page.tsx
'use client'

import styles from './styles.module.scss'
import Link from 'next/link';
import React, { useEffect, useState } from "react";


export default function SideBar() {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div className={styles['sidebar']}>
            <div className={styles['sidebarDiv']}>
                <div className={styles['new']}>
                    <div className={styles['newDiv']}>
                        <div className={styles['newAdd']}>
                            <img src="../image/admin/add.png" alt="" />
                        </div>
                        <div className={styles['newText']}>
                            New Item
                        </div>
                    </div>
                </div>
                <div className={styles['dashboard']}
                    onClick={() => {
                        setDropdown(!dropdown)
                    }}
                >
                    <div className={styles['dashboardSon']}>
                        <div className={styles['dashboardDiv']}>
                            <div className={styles['dashboardIcon']}>
                                <img src="../image/admin/icon.png" alt="" />
                            </div>
                            <div className={styles['dashboardText']}>
                                Dashboard
                            </div>
                        </div>
                        <div className={styles['drop']}>
                            <img src="../image/admin/dropdown.png" alt="" />
                        </div>
                    </div>
                    <div className={dropdown ? `${styles.dropdown} ${styles.active}` : `${styles.dropdown}`}>
                        <div className={styles['drop']}>
                            <div className={styles['dashboardText']}>
                                Commarce
                            </div>
                            <div className={styles['dashboardText']}>
                                Analytics
                            </div>
                            <div className={styles['dashboardText']}>
                                Cyrpto
                            </div>
                            <div className={styles['dashboardText']}>
                                Helpdesk
                            </div>
                            <div className={styles['dashboardText']}>
                                Monitoring
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['dashboard']}
                    onClick={() => {
                        // setDropdown(!dropdown)
                    }}
                >
                    <div className={styles['dashboardSon']}>
                        <div className={styles['dashboardDiv']}>
                            <div className={styles['dashboardIcon']}>
                                <img src="../image/admin/icon.png" alt="" />
                            </div>
                            <div className={styles['dashboardText']}>
                                Application
                            </div>
                        </div>
                        <div className={styles['drop']}>
                            <img src="../image/admin/dropdown.png" alt="" />
                        </div>
                    </div>
                    <div className={styles['dropdown']}>
                        <div className={styles['drop']}>
                            <div className={styles['dashboardText']}>
                                Commarce
                            </div>
                            <div className={styles['dashboardText']}>
                                Analytics
                            </div>
                            <div className={styles['dashboardText']}>
                                Cyrpto
                            </div>
                            <div className={styles['dashboardText']}>
                                Helpdesk
                            </div>
                            <div className={styles['dashboardText']}>
                                Monitoring
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['dashboard']}
                    onClick={() => {
                        // setDropdown(!dropdown)
                    }}
                >
                    <div className={styles['dashboardSon']}>
                        <div className={styles['dashboardDiv']}>
                            <div className={styles['dashboardIcon']}>
                                <img src="../image/admin/icon.png" alt="" />
                            </div>
                            <div className={styles['dashboardText']}>
                                Elements
                            </div>
                        </div>
                        <div className={styles['drop']}>
                            <img src="../image/admin/dropdown.png" alt="" />
                        </div>
                    </div>
                    <div className={styles['dropdown']}>
                        <div className={styles['drop']}>
                            <div className={styles['dashboardText']}>
                                Commarce
                            </div>
                            <div className={styles['dashboardText']}>
                                Analytics
                            </div>
                            <div className={styles['dashboardText']}>
                                Cyrpto
                            </div>
                            <div className={styles['dashboardText']}>
                                Helpdesk
                            </div>
                            <div className={styles['dashboardText']}>
                                Monitoring
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['dashboard']}
                    onClick={() => {
                        // setDropdown(!dropdown)
                    }}
                >
                    <div className={styles['dashboardSon']}>
                        <div className={styles['dashboardDiv']}>
                            <div className={styles['dashboardIcon']}>
                                <img src="../image/admin/icon.png" alt="" />
                            </div>
                            <div className={styles['dashboardText']}>
                                Forms
                            </div>
                        </div>
                        <div className={styles['drop']}>
                            <img src="../image/admin/dropdown.png" alt="" />
                        </div>
                    </div>
                    <div className={styles['dropdown']}>
                        <div className={styles['drop']}>
                            <div className={styles['dashboardText']}>
                                Commarce
                            </div>
                            <div className={styles['dashboardText']}>
                                Analytics
                            </div>
                            <div className={styles['dashboardText']}>
                                Cyrpto
                            </div>
                            <div className={styles['dashboardText']}>
                                Helpdesk
                            </div>
                            <div className={styles['dashboardText']}>
                                Monitoring
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['dashboard']}
                    onClick={() => {
                        // setDropdown(!dropdown)
                    }}
                >
                    <div className={styles['dashboardSon']}>
                        <div className={styles['dashboardDiv']}>
                            <div className={styles['dashboardIcon']}>
                                <img src="../image/admin/icon.png" alt="" />
                            </div>
                            <div className={styles['dashboardText']}>
                                Settings
                            </div>
                        </div>
                        <div className={styles['drop']}>
                            <img src="../image/admin/dropdown.png" alt="" />
                        </div>
                    </div>
                    <div className={styles['dropdown']}>
                        <div className={styles['drop']}>
                            <div className={styles['dashboardText']}>
                                Commarce
                            </div>
                            <div className={styles['dashboardText']}>
                                Analytics
                            </div>
                            <div className={styles['dashboardText']}>
                                Cyrpto
                            </div>
                            <div className={styles['dashboardText']}>
                                Helpdesk
                            </div>
                            <div className={styles['dashboardText']}>
                                Monitoring
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

