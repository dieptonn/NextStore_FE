'use client'
import styles from './styles.module.scss';
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface CartItem {
    other_details: {
        brand: string,
        type: string,
    },
    _id: string,
    PD_id: number,
    name: string,
    quantity: number,
    price: string,
    product_img: string
}

interface CartData {
    _id: string,
    userId: number,
    items: CartItem[],
    total_price: string
    status: string,
    updatedAt: string
}

interface cart {
    status: string,
    data: CartData
}

export default function Cart() {

    const [cartData, setCartData] = useState<CartData | null>(null);
    const router = useRouter();



    useEffect(() => {
        const fetchData = async () => {

            try {
                const storedUserData = localStorage.getItem('user');
                if (storedUserData) {
                    try {
                        const userData: any = JSON.parse(storedUserData);
                        console.log("User ID:", userData._id);

                        const response = await axios.post<{ data: CartData }>('http://localhost:8000/api/v1/cartPayment/getCart', {
                            userId: userData._id
                        });
                        console.log({
                            userId: userData._id,
                            Response: response.data.data
                        });

                        setCartData(response.data.data);
                    } catch (error) {
                        console.error("Lỗi parse dữ liệu người dùng từ localStorage:", error);
                        // Có thể xử lý chuyển hướng về trang login ở đây nếu cần
                    }
                }


            } catch (error) {
                console.error('Error:', error);
                // Xử lý các lỗi
            }
        };
        fetchData();
    }, []);

    const formatDate = (dateString: string) => {
        const dateObj = new Date(dateString);
        const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const monthsOfYear = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];

        const dayOfWeek = daysOfWeek[dateObj.getUTCDay()];
        const day = dateObj.getUTCDate();
        const month = monthsOfYear[dateObj.getUTCMonth()];
        const year = dateObj.getUTCFullYear();

        return `${dayOfWeek}, ${day} ${month} ${year}`;
    };

    const formatTime = (dateString: string) => {
        const dateObj = new Date(dateString);
        const hours = dateObj.getUTCHours().toString().padStart(2, "0");
        const minutes = dateObj.getUTCMinutes().toString().padStart(2, "0");

        return `${hours}:${minutes}`;
    };

    const handleQuantityChange = async (itemId: string, action: string) => {
        if (!cartData) return;

        const item = cartData.items.find(item => item._id === itemId);
        if (!item) return;

        const updatedQuantity = action === "add" ? item.quantity + 1 : item.quantity - 1;

        try {
            const payload = {
                userId: cartData.userId,
                PD_id: item.PD_id,
                quantity: updatedQuantity,
            };

            await axios.post('http://localhost:8000/api/v1/cartPayment/update-cart', payload);

            // Gọi lại fetch để cập nhật giỏ hàng từ DB
            const response = await axios.post<{ data: CartData }>('http://localhost:8000/api/v1/cartPayment/getCart', {
                userId: cartData.userId
            });

            setCartData(response.data.data);

        } catch (error) {
            console.error("Error updating item quantity:", error);
        }
    };


    const isCartEmpty = !Array.isArray(cartData?.items) || cartData.items.every(item => item.quantity === 0);


    const handleProceedToNextStep = async () => {
        if (isCartEmpty) return;

        const firstItem = cartData!.items.find(item => item.quantity > 0)!;

        const payload = {
            userId: cartData!.userId,
            PD_id: firstItem.PD_id,
            name: firstItem.name,
            quantity: firstItem.quantity,
            price: firstItem.price,
            other_details: firstItem.other_details
        };

        try {
            await axios.post('http://localhost:8000/api/v1/cartPayment/update-cart', payload);
            console.log("Cart updated successfully!", payload);
            router.push('/home/don_hang'); // ✅ Điều hướng sau khi cập nhật
        } catch (error) {
            console.error("Error updating cart:", error);
        }
    };


    return (
        <div className={styles['cartDiv']}>

            <div className={styles['cart']}>
                <div className={styles['cartTit']}>
                    Select Your Cart
                </div>
                <div className={styles['cartNote']}>
                    <div className={styles['cartNoteText']}>
                        • Please check your shopping cart again before paying <br />
                        • Please contact us if you need assistance with payment, orders, products, <br /> manufacturers, unit prices,.
                    </div>
                </div>


                {isCartEmpty ? (
                    <div className={styles['emptyCart']}>
                        <div className={styles['emptyText']}>Bạn chưa thêm sản phẩm nào vào giỏ.</div>
                        <Link href="/home" className={styles['shopNowButton']}>
                            Mua sắm ngay
                        </Link>
                    </div>
                ) : (
                    // ▼▼▼ THAY ĐỔI 1: WRAPPER DIV CHO DANH SÁCH SẢN PHẨM CHÍNH ▼▼▼
                    <div className={styles['productList']}>
                        <div className={styles['productListInner']}>
                            {Array.isArray(cartData?.items) && cartData.items.map((item: CartItem) => (
                                <div className={styles['cart1']} key={item._id}>
                                    <div className={styles['productImgWrapper']}>
                                        <Image
                                            priority
                                            width={100}
                                            height={100}
                                            src={
                                                item.product_img && item.product_img.startsWith('http')
                                                    ? item.product_img
                                                    : `/image/products/${item.product_img || 'default.png'}`
                                            }
                                            alt={item.name}
                                            className={styles['productImg']}
                                        />
                                    </div>
                                    <div className={styles['nameDiv']}>
                                        <div className={styles['name']}>
                                            {item.name}
                                        </div>
                                        <div className={styles['content']}>
                                            • {item.other_details.brand}<br />
                                            • {item.other_details.type}
                                        </div>
                                        <div className={styles['salary']}>
                                            {parseInt(item.price).toLocaleString()} VND
                                        </div>
                                    </div>
                                    <div className={styles['qtyDiv']}>
                                        <div className={styles['sub']} onClick={() => handleQuantityChange(item._id, "sub")}>
                                            <Image width={24} height={24} src="/image/cart/sub.png" alt="" />
                                        </div>
                                        <div className={styles['qty']}>
                                            <div className={styles['qtyText']}>
                                                {item.quantity}
                                            </div>
                                        </div>
                                        <div className={styles['add']} onClick={() => handleQuantityChange(item._id, "add")}>
                                            <Image width={24} height={24} src="/image/cart/add.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}


            </div>
            <div className={styles['totalOrder']}>
                <div className={styles['title']}>
                    Your Cart Overview
                </div>
                <div className={styles['div']}>
                    {cartData && (
                        <div className={styles['order']}>
                            <div className={styles['orderImg']}>
                                <Image width={512} height={352} src="/image/cart/pic.png" alt="" />
                            </div>
                            <div className={styles['orInfo']}>
                                <div className={styles['orTitle']}>
                                    You order
                                </div>
                                <div className={styles['orDate']}>
                                    <div className={styles['dateImg']}>
                                        <Image width={24} height={24} src="/image/cart/date.png" alt="" />
                                    </div>
                                    <div className={styles['date']}>
                                        {formatDate((cartData?.updatedAt || new Date().toISOString()))}
                                    </div>
                                </div>
                                <div className={styles['orTime']}>
                                    <div className={styles['dateImg']}>
                                        <Image width={24} height={24} src="/image/cart/time.png" alt="" />
                                    </div>
                                    <div className={styles['date']}>
                                        {formatTime((cartData?.updatedAt || new Date().toISOString()))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* ▼▼▼ THAY ĐỔI 2: WRAPPER DIV CHO DANH SÁCH SẢN PHẨM TÓM TẮT ▼▼▼ */}
                    <div className={styles['memoList']}>
                        {Array.isArray(cartData?.items) && cartData.items.map((item: CartItem) => (
                            <div className={styles['memo']} key={item._id}>
                                <div className={styles['memo1']}>
                                    <div className={styles['memo1Div']}>
                                        <div className={styles['memo1Num']}>
                                            <div className={styles['memo1El']}>
                                                {item.quantity}
                                            </div>
                                        </div>
                                        <div className={styles['memo1Text']}>
                                            {item.name} ({item.other_details.brand})
                                        </div>
                                    </div>
                                    <div className={styles['memo1Sal']}>
                                        {(parseInt(item.price) * item.quantity).toLocaleString()} VND
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {cartData && (
                        <div className={styles['totalPrice']}>
                            <div className={styles['totalPriceTitle']}>
                                Total Price
                            </div>
                            <div className={styles['totalPriceSal']}>
                                {(Number(cartData.total_price) || 0).toLocaleString()} VND
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles['buttonDiv']}>
                    <button
                        onClick={handleProceedToNextStep}
                        className={`${styles['button']} ${isCartEmpty ? styles['disabled'] : ''}`}
                        disabled={isCartEmpty}
                    >
                        <div className={styles['buttonText']}>
                            Go to the Next Step
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}