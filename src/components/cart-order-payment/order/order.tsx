'use client'
import styles from './styles.module.scss';
import Link from 'next/link'
import Image from 'next/image'
import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
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

export default function Order() {

    const [open, setOpen] = useState(false);
    const [cartData, setCartData] = useState<CartData>();

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


    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <div className={styles['cartDiv']}>
            <div className={styles['cart']}>
                <div className={styles['cartTit']}>
                    Select voucher
                </div>
                <div className={styles['cartNote']}>
                    <div className={styles['cartNoteText']}>
                        Please check and read the voucher information carefully including usage,<br /> expiration date, quantity, incentives, intended users,...
                    </div>
                </div>
                <div className={styles['voucherList']}>
                    <div className={styles['voucher1']}>
                        <Image className={styles['voucherImg']} width={513} height={253} src="/image/cart/voucher1.png" alt="" />
                        {/* <div className={styles['voucherStick']}>

                        </div> */}
                        <Image className={styles['voucherTime']} width={512} height={362} src="/image/cart/stamp1.png" alt="" />

                        <div className={styles['voucherBtn']}>
                            <div className={styles['voucherBtnTxt']}>
                                Selected
                            </div>
                        </div>
                    </div>
                    <div className={styles['voucher1']}>
                        <Image className={styles['voucherImg']} width={513} height={253} src="/image/cart/voucher2.png" alt="" />
                        {/* <div className={styles['voucherStick']}>

                        </div> */}
                        <Image className={styles['voucherTime']} width={512} height={362} src="/image/cart/stamp1.png" alt="" />

                        <div className={styles['voucherBtn2']}>
                            <div className={styles['voucherBtnTxt2']}>
                                Select
                            </div>
                        </div>
                    </div>
                    <div className={styles['voucher1']}>
                        <Image className={styles['voucherImg']} width={513} height={253} src="/image/cart/voucher3.png" alt="" />
                        {/* <div className={styles['voucherStick']}>

                        </div> */}
                        <Image className={styles['voucherTime']} width={512} height={362} src="/image/cart/stamp2.png" alt="" />

                        <div className={styles['voucherBtn3']}>
                            <div className={styles['voucherBtnTxt3']}>
                                Sold out
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['cartTit']}>
                    Shipping address
                </div>
                <div className={styles['addressDiv']}>
                    <div className={styles['addressDivTxt']}>
                        3c, 288 alley, Hoang Mai street, Hoang Mai, Ha Noi
                    </div>

                    <button onClick={() => showModal()}>
                        <Image width={36} height={36} src='/image/cart/setting.png' alt='' />
                    </button>
                    <Modal title="Edit your shipping address" open={open} onOk={handleOk} onCancel={handleCancel}
                        footer={[
                            <Button className={styles['customBtn']} key="back" style={{ backgroundColor: '#fff', color: '#333333' }} onClick={handleCancel}>
                                Cancel
                            </Button>,
                            <Button key="submit" type="default" style={{ backgroundColor: '#FF8C00', color: 'white' }} onClick={handleOk}>
                                Save
                            </Button>,
                            // <Button
                            //     key="link"
                            //     href="https://google.com"
                            //     type="dashed"
                            //     onClick={handleOk}
                            // >
                            //     Search on Google
                            // </Button>,
                        ]}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
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
                <div className={styles['nextStep']}>
                    <Link href='/home/thanh_toan' className={styles['button']}>
                        <div className={styles['buttonText']}>
                            Go to the Next Step
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
