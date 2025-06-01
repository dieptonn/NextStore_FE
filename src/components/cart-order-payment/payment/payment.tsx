'use client'
import styles from './styles.module.scss';
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';

interface CartItem {
    other_details: {
        brand: string;
        type: string;
    };
    _id: string;
    PD_id: number;
    name: string;
    quantity: number;
    price: string;
}

interface CartData {
    _id: string;
    userId: number;
    items: CartItem[];
    total_price: string;
    status: string;
    updatedAt: string;
}


export default function Payment() {

    const [cartData, setCartData] = useState<CartData>();
    const [showCODForm, setShowCODForm] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: '',
        phoneNumber: '',
        address: '',
    });


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
        const monthsOfYear = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        return `${daysOfWeek[dateObj.getUTCDay()]}, ${dateObj.getUTCDate()} ${monthsOfYear[dateObj.getUTCMonth()]} ${dateObj.getUTCFullYear()}`;
    };

    const formatTime = (dateString: string) => {
        const dateObj = new Date(dateString);
        return `${dateObj.getUTCHours().toString().padStart(2, "0")}:${dateObj.getUTCMinutes().toString().padStart(2, "0")}`;
    };


    function createOrder() {

        return fetch("http://localhost:8000/api/v1/cartPayment/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product ids and quantities
            body: JSON.stringify({
                cart: [
                    {
                        "userId": cartData?.userId,
                        "total_price": cartData ? (parseInt(cartData.total_price) / 24000).toFixed(2) : "0.00",
                        "shipping_fee": "0",
                        "payment_method": "paypal"
                    },
                ],
                // cart: [
                //     {
                //         "userId": 2,
                //         "total_price": "1",
                //         "shipping_fee": "0",
                //         "payment_method": "paypal"
                //     },
                // ],
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id);
    }

    function onApprove(data: any) {

        return fetch(`http://localhost:8000/api/v1/cartPayment/orders/${data.orderID}/capture`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID
            })
        })
            .then((response) => response.json())
            .then((orderData) => {
                const name = orderData.payer.name.given_name;
                const status = orderData.status;

                console.log("PayPal response:", orderData);

                if (status === "COMPLETED") {
                    alert(`Transaction completed by ${name}`);
                    window.location.href = "http://localhost:3000/home?payment=success";
                } else {
                    alert("Payment was not completed. Please try again.");
                }
            });
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUserInfo({
                name: user.name || '',
                phoneNumber: user.phoneNumber || '',
                address: user.address || '',
            });
        }
    }, []);

    const handleCODSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/v1/cartPayment/orders/cod', {
                userId: cartData?.userId,
                total_price: cartData?.total_price,
                payment_method: 'cod',
                shipping_fee: '8000',
                userInfo: userInfo
            });

            if (response.status === 200) {
                alert("Đơn hàng của bạn đã được tạo thành công và sẽ được giao đến địa chỉ bạn cung cấp.");
                window.location.href = "http://localhost:3000/home?payment=success";
            } else {
                alert("Đã xảy ra lỗi khi tạo đơn hàng. Vui lòng thử lại.");
            }
        } catch (error) {
            console.error("COD Payment Error:", error);
            alert("Có lỗi xảy ra trong quá trình xử lý thanh toán.");
        }
    };



    return (
        <div className={styles['paymentDiv']}>
            <div className={styles['payment']}>
                <div className={styles['paymentTit']}>
                    Select a payment method
                </div>

                <PayPalScriptProvider options={{ clientId: "AemERRNaHhdvO7lr7dZveF_z14T1hiDQs_KX0Kje2okpQ6ZjJM-K4ancHvhW70qGvLTPjmirgfH5XzLG" }}>
                    {cartData && (
                        <PayPalButtons className={styles['paypalBtn']}
                            createOrder={createOrder}
                            onApprove={onApprove}
                        />
                    )}
                </PayPalScriptProvider>

                <div className={styles['codPayment']}>
                    <button
                        className={styles['codBtn']}
                        onClick={() => setShowCODForm(!showCODForm)}
                    >
                        Thanh toán khi nhận hàng
                    </button>

                    {showCODForm && (
                        <form className={styles['codForm']} onSubmit={handleCODSubmit}>
                            <div>
                                <label>Họ tên:</label>
                                <input
                                    type="text"
                                    value={userInfo.name}
                                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label>Số điện thoại:</label>
                                <input
                                    type="text"
                                    value={userInfo.phoneNumber}
                                    onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label>Địa chỉ:</label>
                                <textarea
                                    value={userInfo.address}
                                    onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                                    required
                                />
                            </div>
                            <button className={styles['confirm']} type="submit">Xác nhận thanh toán</button>
                        </form>
                    )}
                </div>

            </div>

            <div className={styles['totalOrder']}>
                <div className={styles['title']}>
                    Your Cart Overview
                </div>
                <div className={styles['div']}>
                    {cartData && (
                        <>
                            {/* Order info */}
                            <div className={styles['order']}>
                                <div className={styles['orderImg']}>
                                    <Image width={512} height={352} src="/image/cart/pic.png" alt="Order image" />
                                </div>
                                <div className={styles['orInfo']}>
                                    <div className={styles['orTitle']}>Your order</div>

                                    <div className={styles['orDate']}>
                                        <div className={styles['dateImg']}>
                                            <Image width={24} height={24} src="/image/cart/date.png" alt="Date icon" />
                                        </div>
                                        <div className={styles['date']}>{formatDate(cartData.updatedAt)}</div>
                                    </div>

                                    <div className={styles['orTime']}>
                                        <div className={styles['dateImg']}>
                                            <Image width={24} height={24} src="/image/cart/time.png" alt="Time icon" />
                                        </div>
                                        <div className={styles['date']}>{formatTime(cartData.updatedAt)}</div>
                                    </div>
                                </div>
                            </div>

                            {/* List of items */}
                            {cartData.items.map((item) => (
                                <div className={styles['memo']} key={item._id}>
                                    <div className={styles['memo1']}>
                                        <div className={styles['memo1Div']}>
                                            <div className={styles['memo1Num']}>
                                                <div className={styles['memo1El']}>{item.quantity}</div>
                                            </div>
                                            <div className={styles['memo1Text']}>
                                                {item.name} ({item.other_details.brand})
                                            </div>
                                        </div>
                                        <div className={styles['memo1Sal']}>
                                            {(parseInt(item.price) * item.quantity).toLocaleString()} VND
                                        </div>
                                    </div>
                                    <div className={styles['shipTit']}>
                                        Shipping fee:
                                    </div>
                                    <div className={styles['shipDiv']}>
                                        <div className={styles['address']}>
                                            <div className={styles['addressTxt']}>
                                                3c, 288 alley, Hoang Mai street, Hoang Mai, Ha Noi
                                            </div>
                                        </div>
                                        <div className={styles['price']}>
                                            8,000 VND
                                        </div>
                                    </div>
                                    <div className={styles['shipTit']}>
                                        Voucher:
                                    </div>
                                    <div className={styles['voucherDiv']}>
                                        <div className={styles['priceDiv']}>
                                            <Image className={styles['voucher']} width={513} height={253} src="/image/cart/voucher1.png" alt="" />
                                            <Image className={styles['voucher']} width={513} height={253} src="/image/cart/voucher2.png" alt="" />
                                        </div>
                                        <div className={styles['price']}>
                                            - 18,000 VND
                                        </div>

                                    </div>
                                </div>
                            ))}

                            {/* Total Price */}
                            <div className={styles['totalPrice']}>
                                <div className={styles['totalPriceTitle']}>Total Price</div>
                                <div className={styles['totalPriceSal']}>
                                    {(parseInt(cartData.total_price) - 10000).toLocaleString()} VND
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </div>

        </div>

    )
}
