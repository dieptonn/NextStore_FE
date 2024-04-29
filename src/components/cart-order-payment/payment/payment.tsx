'use client'
import styles from './styles.module.scss';
import Link from 'next/link'
import Image from 'next/image'
// import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";




export default function Payment() {

    function createOrder() {
        return fetch("https://nextstore-be.onrender.com/api/v1/cartPayment/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // use the "body" param to optionally pass additional order information
            // like product ids and quantities
            body: JSON.stringify({
                cart: [
                    {
                        "userId": 3,
                        "items": [
                            {
                                "PD_id": 2,
                                "name": "Toshiba 7 Kg AW-L805AV (SG)",
                                "quantity": 3,
                                "price": "519000",
                                "other_details": {
                                    "brand": "Toshiba",
                                    "type": "Cửa trước"
                                }
                            }
                        ],
                        "total_price": "1567000",
                        "shipping_fee": "10000",
                        "payment_method": "paypal"
                    },
                ],
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id);
    }
    function onApprove(data: any) {
        return fetch(`https://nextstore-be.onrender.com/api/v1/cartPayment/orders/${data.orderID}/capture`, {
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
                console.log(orderData)
                alert(`Transaction completed by ${name}`);
            });

    }
    return (
        <div className={styles['paymentDiv']}>
            <div className={styles['payment']}>
                <div className={styles['paymentTit']}>
                    Select a payment method
                </div>

                <PayPalScriptProvider options={{ clientId: "AemERRNaHhdvO7lr7dZveF_z14T1hiDQs_KX0Kje2okpQ6ZjJM-K4ancHvhW70qGvLTPjmirgfH5XzLG" }}>
                    <PayPalButtons className={styles['paypalBtn']}
                        createOrder={createOrder}
                        onApprove={onApprove}
                    />
                </PayPalScriptProvider>

            </div>


            <div className={styles['totalOrder']}>
                <div className={styles['title']}>
                    Your Cart Overview
                </div>
                <div className={styles['div']}>
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
                                    FRI, 23 DEC 2022
                                </div>
                            </div>
                            <div className={styles['orTime']}>
                                <div className={styles['dateImg']}>
                                    <Image width={24} height={24} src="/image/cart/time.png" alt="" />
                                </div>
                                <div className={styles['date']}>
                                    15:00
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['memo']}>
                        <div className={styles['memo1']}>
                            <div className={styles['memo1Div']}>
                                <div className={styles['memo1Num']}>
                                    <div className={styles['memo1El']}>
                                        2
                                    </div>
                                </div>
                                <div className={styles['memo1Text']}>

                                    Máy lọc nước Kangaroo (€32.00)
                                </div>
                            </div>
                            <div className={styles['memo1Sal']}>
                                €64.00
                            </div>
                        </div>
                        <div className={styles['memo1']}>
                            <div className={styles['memo1Div']}>
                                <div className={styles['memo1Num']}>
                                    <div className={styles['memo1El']}>
                                        1
                                    </div>
                                </div>
                                <div className={styles['memo1Text']}>
                                    Laptop ASUS TUF gaming
                                </div>
                            </div>
                            <div className={styles['memo1Sal']}>
                                €22.00
                            </div>
                        </div>
                        <div className={styles['memo1']}>
                            <div className={styles['memo1Div']}>
                                <div className={styles['memo1Num']}>
                                    <div className={styles['memo1El']}>
                                        1
                                    </div>
                                </div>
                                <div className={styles['memo1Text']}>
                                    Tủ lạnh
                                </div>
                            </div>
                            <div className={styles['memo1Sal']}>
                                €0.00
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
                                €8.00
                            </div>
                        </div>
                        <div className={styles['shipTit']}>
                            Voucher:
                        </div>
                        <div className={styles['voucherDiv']}>
                            <div className={styles['priceDiv']}>
                                <Image className={styles['voucher']} width={116} height={54} src="/image/cart/voucher1.png" alt="" />
                                <Image className={styles['voucher']} width={116} height={54} src="/image/cart/voucher2.png" alt="" />
                            </div>
                            <div className={styles['price']}>
                                - €26.00
                            </div>

                        </div>

                    </div>
                    <div className={styles['totalPrice']}>
                        <div className={styles['totalPriceTitle']}>
                            Total Price
                        </div>
                        <div className={styles['totalPriceSal']}>
                            €68.00
                        </div>
                    </div>
                </div>
                {/* <Link href='/home/don_hang' className={styles['button']}>
                    <div className={styles['buttonText']}>
                        Back to the Pre Step
                    </div>
                </Link> */}
            </div>

        </div>

    )
}
