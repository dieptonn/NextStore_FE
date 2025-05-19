'use client'
import styles from './header.module.scss';
import Link from 'next/link'
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation';

interface User {
    image: string;
}


export default function Header() {
    const [menu, setMenu] = useState(false);
    const [menu_details, setMenu_details] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);
    const pathname = usePathname();
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    const handleSearch = () => {

        // Tạo URL mới từ giá trị của input
        const inputValue = searchValue.replace(/ /g, '?');
        const url = `/home/${encodeURIComponent(inputValue)}`;

        // Điều hướng đến URL mới
        router.push(url);
    };


    // Màu nền sẽ thay đổi khi vị trí cuộn lớn hơn 100px
    const backgroundColor = scrollPosition === 0 && pathname === '/home' ? 'rgba(51, 51, 51, 0.0)' : 'rgba(51, 51, 51, 1)';


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const recommendationSearch = () => {
        // Tạo URL mới từ giá trị của input
        const inputValue = searchValue.replace(/ /g, '?');

        const url = `${encodeURIComponent(inputValue)}`;

        // Điều hướng đến URL mới
        router.push(url);
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setScrollPosition(window.scrollY);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Gọi API lấy user info
            fetch('http://localhost:8000/api/v1/user/profile', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => {
                    if (!res.ok) throw new Error('Token invalid');
                    return res.json();
                })
                .then(data => {
                    setUser({
                        image: data.data.image,
                    });
                })
                .catch(err => {
                    console.error('Lỗi lấy thông tin người dùng:', err);
                    setUser(null); // Xóa thông tin nếu token sai
                });
            console.log(user);
        }
    }, []);


    return (
        <div className={styles['headerZ']}>
            {/* <div className={styles['header']} style={{ backgroundColor }}> */}
            <div className={styles['header']} style={{ backgroundColor }}>

                <Link href='/' className={styles['intro']} >
                    <Image width={512} height={459} src="/image/intro.png" alt="" />
                </Link>
                <div className={styles['header-1']}>

                    <Link href="/home" className={styles['logo-img']}>
                        <Image width={512} height={197} src="/image/Logo.jpg" alt="" />
                    </Link>


                    <div className={styles['search']}>
                        <div className={styles['searchInput']}>
                            <input
                                placeholder='Search ...'
                                className={styles['Input']}
                                type="text"
                                value={searchValue} // Giá trị của thẻ input
                                onChange={handleInputChange} // Xử lý sự kiện onChange
                                // onKeyDown={recommendationSearch}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                        <button className={styles['search-button']} onClick={handleSearch}>
                            <div className={styles['search-icon']}>
                                <Image width={24} height={24} src="/image/search.png" alt="" />
                            </div>
                        </button>
                    </div>

                    <Link href='/home/gio_hang' className={styles['like']}>
                        <Image width={20} height={20} src="/image/Korzina.png" alt="" />
                    </Link>
                    {/* <Link href='/home/my_profile' className={styles['like']}>
                        <Image width={105} height={105} src="/image/user.png" alt="" />
                    </Link> */}
                    {/* <Link href='/login' className={styles['avatar']}>
                        <div className={styles['text-logo']}>Sign in</div>
                    </Link> */}
                    {user ? (
                        <Link href="/home/my_profile" className={styles['like']}>
                            <Image
                                alt=""
                                width={205}
                                height={205}
                                src={user.image || "/image/user.png"}
                                className={styles['user-avatar']}
                            />
                        </Link>
                    ) : (
                        <Link href='/login' className={styles['avatar']}>
                            <div className={styles['text-logo']}>Sign in</div>
                        </Link>
                    )}

                </div>
                <div className={styles['header-2']}>
                    <button className={styles['danh-muc']}
                        onMouseEnter={() => setMenu(true)} // Xử lý khi di chuột vào nút
                        onMouseLeave={() => setMenu(false)} // Xử lý khi di chuột ra khỏi nút
                    >
                        <div className={styles['danhmuc-div']}>
                            <div className={styles['ba-que']}>
                                <div className={styles['menu-icon']}>
                                    <Image width={105} height={105} src="/image/menu.png" alt="" />
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
                                    <Image width={105} height={105} src="/image/menu/crown.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Hàng cao cấp</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
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
                                                <Link href="/home/tivi" className={styles['topic-text']}>
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
                                    <Image width={105} height={105} src="/image/menu/monitor-mobbile.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Tivi, loa, dàn karaoke</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <Image width={105} height={105} src="/image/menu/external-drive.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Tủ lạnh, tủ đông, tủ mát</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <Image width={105} height={105} src="/image/menu/simcard.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Máy giặt,  máy sấy, máy lạnh</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <Image width={105} height={105} src="/image/menu/house-2.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Máy nước nóng, quạt sưởi</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <Image width={105} height={105} src="/image/menu/electricity.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Điện gia dụng, xay ép</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <Image width={105} height={105} src="/image/menu/trush-square.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Bếp điện, nồi cơm, đồ bếp</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <Image width={105} height={105} src="/image/menu/filter-tick.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Máy lọc nước, nồi chiên</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <Image width={105} height={105} src="/image/menu/broom.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Máy hút bụi, máy rửa chén</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <Image width={105} height={105} src="/image/menu/heart-tick.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Sức khỏe, làm đẹp</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <Image width={105} height={105} src="/image/menu/setting-2.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Đồ nghề - dụng cụ sửa chữa</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <Image width={105} height={105} src="/image/menu/mobile.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Điện thoại, latop, tablet</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <Image width={105} height={105} src="/image/menu/watch.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Xe đạp, phụ kiện, đồng hồ</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <Image width={105} height={105} src="/image/menu/undo.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Máy cũ, trưng bày</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
                                </div>
                            </div>
                            <div className={styles['menu-div']}>
                                <div className={styles['menu-icon']}>
                                    <Image width={105} height={105} src="/image/menu/verify.png" alt="" />
                                </div>
                                <div className={styles['menu-text']}>Dịch vụ hữu ích</div>
                                <div className={styles['arrow-icon']}>
                                    <Image width={105} height={105} src="/image/arrow-right.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </button>
                    <div className={styles['menu-list']}>
                        <div className={styles['header-suoc']}>|</div>
                        <Link href='/home/tivi' className={styles['header-text']}>Tivi</Link>
                        <Link href='/home/tu_lanh' className={styles['header-text']}>Tủ lạnh</Link>
                        <Link href='/home/may_giat' className={styles['header-text']}>Máy giặt</Link>
                        <Link href='/home/may_say' className={styles['header-text']}>Máy sấy</Link>
                        <Link href='/home/gia_dung' className={styles['header-text']}>Gia dụng</Link>
                        <Link href='/home/loc_nuoc' className={styles['header-text']}>Lọc nước</Link>
                        <Link href='/home/dieu_hoa' className={styles['header-text']}>Điều hòa</Link>
                        <Link href='/home/noi_com' className={styles['header-text']}>Nồi cơm</Link>
                        <Link href='/home/noi_chien' className={styles['header-text']}>Nồi chiên</Link>
                        <Link href='/home/bep_dien' className={styles['header-text']}>Bếp điện</Link>
                        <Link href='/home/loa' className={styles['header-text']}>Loa</Link>
                        <Link href='/home/dien_thoai' className={styles['header-text']}>Điện thoại</Link>
                        <Link href='/home/may_cu' className={styles['header-text']}>Máy cũ</Link>
                        <Link href='/home/lap_top' className={styles['header-text']}>Laptop</Link>
                        <Link href='/home/tu_dong' className={styles['header-text']}>Tủ đông</Link>

                    </div>
                </div>
            </div>
            {/* <div className={styles['backGround-title']}>
                <div className={styles['title1']}>Enjoy in the best way!</div>
                <div className={styles['title2']}>Enjoy our services anytime</div>
            </div> */}
            {/* <div className={styles['backGround']}>
                <Image width={1920} height={679} src="/image/poster1.png" alt="" />
            </div> */}
        </div>
    )
}