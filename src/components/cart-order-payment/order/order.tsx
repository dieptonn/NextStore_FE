'use client'
import styles from './styles.module.scss';
import Link from 'next/link'
import Image from 'next/image'
import { Button, Modal } from 'antd';
import React, { useState } from 'react';


export default function Order() {

    const [open, setOpen] = useState(false);

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
                        <Image className={styles['voucherImg']} width={176} height={82} src="/image/cart/voucher1.png" alt="" />
                        {/* <div className={styles['voucherStick']}>

                        </div> */}
                        <Image className={styles['voucherTime']} width={153} height={108} src="/image/cart/stamp1.png" alt="" />

                        <div className={styles['voucherBtn']}>
                            <div className={styles['voucherBtnTxt']}>
                                Selected
                            </div>
                        </div>
                    </div>
                    <div className={styles['voucher1']}>
                        <Image className={styles['voucherImg']} width={176} height={82} src="/image/cart/voucher2.png" alt="" />
                        {/* <div className={styles['voucherStick']}>

                        </div> */}
                        <Image className={styles['voucherTime']} width={153} height={108} src="/image/cart/stamp1.png" alt="" />

                        <div className={styles['voucherBtn2']}>
                            <div className={styles['voucherBtnTxt2']}>
                                Select
                            </div>
                        </div>
                    </div>
                    <div className={styles['voucher1']}>
                        <Image className={styles['voucherImg']} width={176} height={82} src="/image/cart/voucher3.png" alt="" />
                        {/* <div className={styles['voucherStick']}>

                        </div> */}
                        <Image className={styles['voucherTime']} width={153} height={108} src="/image/cart/stamp2.png" alt="" />

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
                <Link href='/home/thanh_toan' className={styles['button']}>
                    <div className={styles['buttonText']}>
                        Go to the Next Step
                    </div>
                </Link>
            </div>
        </div>
    )
}
