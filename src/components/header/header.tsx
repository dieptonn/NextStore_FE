'use client'
import styles from './header.module.scss';
import Link from 'next/link'
import React, { useEffect, useState } from "react";


export default function Header() {
    const [menu, setMenu] = useState(false);
    const [menu_details, setMenu_details] = useState(false);


    return (
        <div className={styles['headerZ']}>
            <div className={styles['header']}>
                <div className={styles['header-1']}>
                    <Link href="/" className={styles['logo-img']}>
                        <img src="../image/Logo.jpg" alt="" />
                    </Link>
                    <div className={styles['search']}>

                        <div className={styles['search-button']}>
                            <div className={styles['search-icon']}>
                                <img src="../image/search.png" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className={styles['like']}>
                        <img src="../image/Sevimlilar.png" alt="" />
                    </div>
                    <div className={styles['like']}>
                        <img src="../image/Korzina.png" alt="" />
                    </div>
                    <Link href='/login' className={styles['avatar']}>
                        <div className={styles['text-logo']}>Kirish</div>
                    </Link>
                </div>
                <div className={styles['header-2']}>
                    <button className={styles['danh-muc']}
                        onMouseEnter={() => setMenu(true)} // Xử lý khi di chuột vào nút
                        onMouseLeave={() => setMenu(false)} // Xử lý khi di chuột ra khỏi nút
                    >
                        <div className={styles['danhmuc-div']}>
                            <div className={styles['ba-que']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['danhmuc-text']}>Tất cả danh mục</div>
                        </div>
                        <div className={menu ? `${styles.menu} ${styles.active}` : `${styles.menu}`}>
                            <div className={styles['menu-div']}
                                onMouseEnter={() => {
                                    setMenu_details(true)
                                }}
                                onMouseLeave={() => {
                                    setMenu_details(false)
                                }}
                            >
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/crown.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Hàng cao cấp</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                                <div className={menu_details ? `${styles.menu_details} ${styles.active}` : `${styles.menu_details}`}
                                    onMouseLeave={() => {
                                        setMenu_details(false)
                                    }}
                                >



                                    <div className={styles['column1']}>
                                        <div className={styles['products']}>
                                            <div className={styles['products-topic']}>
                                                <div className={styles['Text']}>
                                                    Tivi
                                                </div>
                                                <Link href="/products" className={styles['topic-text']}>
                                                    Xem tất cả
                                                </Link>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Samsung
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    LG
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Sony
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['products']}>
                                            <div className={styles['products-topic']}>
                                                <div className={styles['Text']}>
                                                    Thiết bị giặt - sấy
                                                </div>
                                                <div className={styles['topic-text']}>
                                                    Xem tất cả
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Tủ chăm sóc quần áo
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Máy giặt - Sấy kết hợp
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Máy giặt
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Máy sấy
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['products']}>
                                            <div className={styles['products-topic']}>
                                                <div className={styles['Text']}>
                                                    Máy lạnh
                                                </div>
                                                <div className={styles['topic-text']}>
                                                    Xem tất cả
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Daikin
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Gree
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    LG
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Panasonic
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['column2']}>
                                        <div className={styles['products']}>
                                            <div className={styles['products-topic']}>
                                                <div className={styles['Text']}>
                                                    Tủ lạnh
                                                </div>
                                                <div className={styles['topic-text']}>
                                                    Xem tất cả
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Tủ lạnh nhiều cửa
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Hitachi
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    LG
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Samsung
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Panasonic
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Sharp
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Toshiba
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['products']}>
                                            <div className={styles['products-topic']}>
                                                <div className={styles['Text']}>
                                                    Máy rửa chén
                                                </div>
                                                <div className={styles['topic-text']}>
                                                    Xem tất cả
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Bosch
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Electrolux
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Candy
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Whirlpool
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={styles['column3']}>
                                        <div className={styles['products']}>
                                            <div className={styles['products-topic']}>
                                                <div className={styles['Text']}>
                                                    Thiết bị gia dụng
                                                </div>
                                                <div className={styles['topic-text']}>
                                                    Xem tất cả
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Robot hút bụi
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Hút bụi cấy
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Máy lọc không khí
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['products']}>
                                            <div className={styles['products-topic']}>
                                                <div className={styles['Text']}>
                                                    Thiết bị nhà bếp
                                                </div>
                                                <div className={styles['topic-text']}>
                                                    Xem tất cả
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Nồi cơm cao tần
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Nồi chiên
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Bếp điện âm/đôi
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Máy ép trái cây
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Hút mùi/ Hút khói
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Máy xay sinh tố
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['column4']}>
                                        <div className={styles['products']}>
                                            <div className={styles['products-topic']}>
                                                <div className={styles['Text']}>
                                                    Máy lọc nước
                                                </div>
                                                <div className={styles['topic-text']}>
                                                    Xem tất cả
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    INOPIA
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Robot
                                                </div>
                                            </div>

                                        </div>
                                        <div className={styles['products']}>
                                            <div className={styles['products-topic']}>
                                                <div className={styles['Text']}>
                                                    Đồng hồ cao cấp
                                                </div>
                                                <div className={styles['topic-text']}>
                                                    Xem tất cả
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Đồng hồ thời trang
                                                </div>
                                            </div>
                                            <div className={styles['products_details']}>
                                                <div className={styles['text']}>
                                                    Orient
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/monitor-mobbile.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Tivi, loa, dàn karaoke</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/external-drive.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Tủ lạnh, tủ đông, tủ mát</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/simcard.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Máy giặt,  máy sấy, máy lạnh</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/house-2.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Máy nước nóng, quạt sưởi</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/electricity.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Điện gia dụng, xay ép</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/trush-square.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Bếp điện, nồi cơm, đồ bếp</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/filter-tick.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Máy lọc nước, nồi chiên</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/broom.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Máy hút bụi, máy rửa chén</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/heart-tick.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Sức khỏe, làm đẹp</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/setting-2.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Đồ nghề - dụng cụ sửa chữa</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/mobile.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Điện thoại, latop, tablet</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/watch.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Xe đạp, phụ kiện, đồng hồ</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/undo.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Máy cũ, trưng bày</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <img src="../image/menu/verify.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Dịch vụ hữu ích</div>
                                <div className={styles['arrow-icon']}>
                                    <img src="../image/arrow-right.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </button>
                    <div className={styles['menu-list']}>
                        <div className={styles['header-suoc']}>|</div>
                        <Link href='/products' className={styles['header-text']}>Tivi</Link>
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
            <div className={styles['backGround-title']}>
                <div className={styles['title1']}>Enjoy in the best way!</div>
                <div className={styles['title2']}>Enjoy our services anytime</div>
            </div>
            <div className={styles['backGround']}>
                <img src="./image/poster1.png" alt="" />
            </div>
        </div>
    )
}