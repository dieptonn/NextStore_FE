'use client'
import styles from './styles.module.scss';
import Link from 'next/link'
import Image from 'next/image'
// import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";




export default function Payment() {

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
                        "total_price": "1557000",
                    },
                ],
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
                    </div>
                    <div className={styles['totalPrice']}>
                        <div className={styles['totalPriceTitle']}>
                            Total Price
                        </div>
                        <div className={styles['totalPriceSal']}>
                            €86.00
                        </div>
                    </div>
                </div>
                <div className={styles['button']}>
                    <div className={styles['buttonText']}>
                        Go to the Next Step
                    </div>
                </div>
            </div>

        </div>

    )
}
