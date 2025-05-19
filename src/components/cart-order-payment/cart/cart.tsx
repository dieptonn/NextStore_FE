'use client'
import styles from './styles.module.scss';
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import axios from 'axios';

interface CartItem {
    other_details: {
        brand: string,
        type: string,
    },
    _id: string,
    PD_id: number,
    name: string,
    quantity: number,
    price: string
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

    const [cartData, setCartData] = useState<CartData>()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post<{ data: CartData }>('http://localhost:8000/api/v1/cartPayment/getCart', {
                    userId: 2
                });
                console.log({
                    Response: response.data.data
                });

                setCartData(response.data.data);

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

    const handleQuantityChange = (itemId: string, action: string) => {

        const updatedItems = cartData?.items.map((item) => {
            if (item._id === itemId) {
                const updatedQuantity = action === "add" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
                return {
                    ...item,
                    quantity: updatedQuantity,
                };
            }
            return item;
        });

        if (updatedItems) {
            // Tính toán lại total_price
            const newTotalPrice = updatedItems.reduce((total, item) => {
                return total + item.quantity * parseInt(item.price);
            }, 0);

            setCartData((prevCartData) => ({
                ...(prevCartData as CartData), // Ép kiểu prevCartData thành CartData
                items: updatedItems,
                total_price: newTotalPrice.toString(), // Chuyển thành string để đồng nhất kiểu dữ liệu
            }));
        }
    };

    const handleProceedToNextStep = async () => {
        if (!cartData || cartData.items.length === 0) return;

        const firstItem = cartData.items[0];

        const payload = {
            userId: cartData.userId,
            PD_id: firstItem.PD_id,
            name: firstItem.name,
            quantity: firstItem.quantity,
            price: firstItem.price,
            other_details: firstItem.other_details
        };

        try {
            await axios.post('http://localhost:8000/api/v1/cartPayment/update-cart', payload);
            console.log("Cart updated successfully!", payload);
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
                {cartData && cartData.items.map((item: CartItem) => (
                    <div className={styles['cart1']} key={item._id}>
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
                                        {cartData && formatDate(cartData.updatedAt)}
                                    </div>
                                </div>
                                <div className={styles['orTime']}>
                                    <div className={styles['dateImg']}>
                                        <Image width={24} height={24} src="/image/cart/time.png" alt="" />
                                    </div>
                                    <div className={styles['date']}>
                                        {cartData && formatTime(cartData.updatedAt)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {cartData && cartData.items.map((item: CartItem) => (
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
                                    {parseInt(item.price).toLocaleString()} VND
                                </div>
                            </div>
                        </div>
                    ))}

                    {cartData && (
                        <div className={styles['totalPrice']}>
                            <div className={styles['totalPriceTitle']}>
                                Total Price
                            </div>
                            <div className={styles['totalPriceSal']}>
                                {parseInt(cartData.total_price).toLocaleString()} VND
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles['buttonDiv']}>
                    <Link href='/home/don_hang' className={styles['button']} onClick={handleProceedToNextStep}>
                        <div className={styles['buttonText']}>
                            Go to the Next Step
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}
