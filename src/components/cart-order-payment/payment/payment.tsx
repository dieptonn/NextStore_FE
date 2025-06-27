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

    const shippingFee = 28000;
    const voucherDiscount = 18000;
    const [userInfo, setUserInfo] = useState({
        name: '',
        phoneNumber: '',
        address: '',
    });


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
            .then(async (orderData) => { // <-- Thêm async ở đây
                const name = orderData.payer.name.given_name;
                const status = orderData.status;

                console.log("PayPal response:", orderData);

                if (status === "COMPLETED") {
                    // ▼▼▼ PHẦN LOGIC MỚI ▼▼▼
                    try {
                        // Lấy userId từ đâu đó, ví dụ localStorage
                        const storedUser = localStorage.getItem('user');
                        if (!storedUser) {
                            alert("Lỗi: Không tìm thấy thông tin người dùng. Vui lòng đăng nhập lại.");
                            return;
                        }
                        const user = JSON.parse(storedUser);
                        const userId = user._id;
                        console.log("User ID:", userId);

                        // Gọi API mới để tạo đơn hàng và xóa giỏ hàng
                        const backendResponse = await axios.post('http://localhost:8000/api/v1/cartPayment/create-order-after-payment', {
                            userId: userId,
                            paymentDetails: orderData // Gửi toàn bộ chi tiết thanh toán từ PayPal
                        });

                        if (backendResponse.status === 201) {
                            console.log("BE Response:", backendResponse.data.message);
                            alert(`Thanh toán thành công bởi ${name}! Đơn hàng của bạn đã được ghi nhận.`);
                            // Chuyển hướng về trang chủ với thông báo thành công
                            window.location.href = "http://localhost:3000/home?payment=success";
                        } else {
                            // Xử lý trường hợp backend trả về lỗi
                            alert("Thanh toán PayPal thành công nhưng có lỗi khi ghi nhận đơn hàng. Vui lòng liên hệ hỗ trợ.");
                        }
                    } catch (error) {
                        console.error("Lỗi khi gọi API backend sau thanh toán:", error);
                        alert("Đã xảy ra lỗi hệ thống sau khi thanh toán. Vui lòng liên hệ hỗ trợ.");
                    }
                    // ▲▲▲ KẾT THÚC LOGIC MỚI ▲▲▲

                } else {
                    alert("Thanh toán không hoàn tất. Vui lòng thử lại.");
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
                shipping_fee: shippingFee,
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

    const calculateFinalPrice = () => {
        if (!cartData) return 0;
        const subtotal = parseInt(cartData.total_price) || 0;
        return subtotal + shippingFee - voucherDiscount;
    }

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
                            {/* 1. Order info - Hiển thị 1 lần */}
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

                            {/* 2. List of items - Bên trong vùng cuộn */}
                            <div className={styles['memoList']}>
                                <div className={styles['memoListInner']}>
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
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 3. Shipping fee - Hiển thị 1 lần sau danh sách */}
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
                                    {shippingFee.toLocaleString()} VND
                                </div>
                            </div>

                            {/* 4. Voucher - Hiển thị 1 lần sau phí ship */}
                            <div className={styles['shipTit']}>
                                Voucher:
                            </div>
                            <div className={styles['voucherDiv']}>
                                <div className={styles['priceDiv']}>
                                    <Image className={styles['voucher']} width={513} height={253} src="/image/cart/voucher1.png" alt="" />
                                    {/* Bạn có thể thêm voucher thứ 2 nếu cần, nhưng chỉ là để hiển thị */}
                                </div>
                                <div className={styles['price']}>
                                    - {voucherDiscount.toLocaleString()} VND
                                </div>
                            </div>

                            {/* 5. Total Price - Tính toán lại */}
                            <div className={styles['totalPrice']}>
                                <div className={styles['totalPriceTitle']}>Total Price</div>
                                <div className={styles['totalPriceSal']}>
                                    {calculateFinalPrice().toLocaleString()} VND
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </div>

        </div>

    )
}
