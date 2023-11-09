'use client'
import styles from './header.module.scss';
import React, { useEffect, useState } from "react";


export default function Header() {
    const [menu, setMenu] = useState(false);

    return (
        <div className={styles['header']}>
            <div className={styles['header-1']}>
                <div className={styles['logo-img']}>
                    <img src="./image/Logo.jpg" alt="" />
                </div>
                <div className={styles['search']}>

                    <div className={styles['search-button']}>
                        <div className={styles['search-icon']}>
                            <img src="./image/search.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className={styles['like']}>
                    <img src="./image/Sevimlilar.png" alt="" />
                </div>
                <div className={styles['like']}>
                    <img src="./image/Korzina.png" alt="" />
                </div>
                <div className={styles['avatar']}>
                    <div className={styles['text-logo']}>Kirish</div>
                </div>
            </div>
            <div className={styles['header-2']}>
                <button className={styles['danh-muc']}
                    onMouseEnter={() => setMenu(true)} // Xử lý khi di chuột vào nút
                    onMouseLeave={() => setMenu(false)} // Xử lý khi di chuột ra khỏi nút
                >
                    <div className={styles['danhmuc-div']}>
                        <div className={styles['ba-que']}>
                            <div className={styles['menu-icon']}>
                                <img src="./image/menu.png" alt="" />
                            </div>
                        </div>
                        <div className={styles['danhmuc-text']}>Tất cả danh mục</div>
                    </div>
                    <div className={menu ? `${styles.menu} ${styles.active}` : `${styles.menu}`}></div>
                </button>
                <div className={styles['menu-list']}>
                    <div className={styles['header-suoc']}>|</div>
                    <div className={styles['header-text']}>Tivi</div>
                    <div className={styles['header-text']}>Tủ lạnh</div>
                    <div className={styles['header-text']}>Máy giặt</div>
                    <div className={styles['header-text']}>Máy sấy</div>
                    <div className={styles['header-text']}>Gia dụng</div>
                    <div className={styles['header-text']}>Lọc nước</div>
                    <div className={styles['header-text']}>Điều hòa</div>
                    <div className={styles['header-text']}>Nồi cơm</div>
                    <div className={styles['header-text']}>Nồi chiên</div>
                    <div className={styles['header-text']}>Bếp điện</div>
                    <div className={styles['header-text']}>Loa</div>
                    <div className={styles['header-text']}>Điện thoại</div>
                    <div className={styles['header-text']}>Máy cũ</div>
                    <div className={styles['header-text']}>Laptop</div>
                    <div className={styles['header-text']}>Tủ đông</div>
                </div>
            </div>
        </div>
    )
}