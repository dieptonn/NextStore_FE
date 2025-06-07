import Link from 'next/link';
import styles from './styles.module.scss'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'antd';

interface DetailsProps {
    apiData: any[];
}

interface cart {
    data: {
        userId: number,
        items: [
            PD_id: number,
            quantity: number
        ],
        total_price: string
        status: string,
    }
}

export const Details = ({ apiData }: DetailsProps) => {

    const [qty, setQty] = useState(0)

    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    // console.log(apiData)
    const formatNumber = (number?: number | null) => {
        if (number || number === 0) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
        return "0";
    };

    const addToCart = () => {
        setShow(true);
        // Thêm logic xử lý thêm vào giỏ hàng ở đây

        // Sau khi xử lý xong, có thể sử dụng setTimeout để ẩn biểu tượng giỏ hàng sau một khoảng thời gian
        setTimeout(() => {
            setShow(false);
        }, 1000); // Thời gian delay, tính bằng mili giây
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post<{ data: cart }>('http://localhost:8000/api/v1/cartPayment/addToCart', {
                    userId: 2,
                    PD_id: apiData[0]?.PD_id,
                    quantity: 1,
                    name: apiData[0]?.name,
                    price: apiData[0]?.offers.price,
                    image: apiData[0]?.image[0][0],
                    other_details: {
                        brand: apiData[0]?.brand.name[0],
                        type: apiData[0]?.additionalProperty[0].value
                    }
                });
                console.log({
                    Response: response.data.data
                });


            } catch (error) {
                console.error('Error:', error);
                // Xử lý các lỗi
            }
        };
        if (qty > 0) {
            fetchData();
        }
    }, [apiData, qty]);

    return (

        <div className={styles['details']}>


            {apiData.map((data) => (
                <div key={data._id} className={styles['details-image']}>
                    <div className={styles['details-img']}>
                        <div className={styles['img']}>
                            <Image priority width={512} height={512} src={data.image[0][0]} alt="" />
                        </div>
                        <div className={styles['like']}>
                            <Image width={32} height={32} src="/image/details/like.png" alt="" />
                        </div>
                        <div className={styles['share']}>
                            <Image width={32} height={32} src="/image/details/share.png" alt="" />
                        </div>
                    </div>
                    <div className={styles['small-img']}>
                        <div className={styles['pic1']}>
                            <Image width={105} height={105} src={data.image[0][0]} alt="" />
                        </div>
                        <div className={styles['pic1']}>
                            <Image width={105} height={105} src={data.image[0][0]} alt="" />
                        </div>
                        <div className={styles['pic1']}>
                            <Image width={105} height={105} src={data.image[0][0]} alt="" />
                        </div>
                        <div className={styles['pic1']}>
                            <Image width={105} height={105} src={data.image[0][0]} alt="" />
                        </div>
                    </div>
                </div>
            ))}
            {apiData.map((data) => (
                <div key={data._id} className={styles['info']}>
                    <div className={styles['title']}>
                        {data.name}<br />

                    </div>
                    <div className={styles['des']}>
                        {data.description}
                    </div>
                    <div className={styles['color-title']}>
                        <div className={styles['colorTitle']}>
                            Color
                        </div>
                        <div className={styles['colorName']}>Space Gray</div>
                    </div>
                    <div className={styles['color']}>
                        <div className={styles['color1']}></div>
                        <div className={styles['color1']}></div>
                        <div className={styles['color1']}></div>
                        <div className={styles['color1']}></div>
                    </div>
                    <div className={styles['type']}>
                        <span className={styles['thuongHieu']}>Đến từ thương hiệu</span> <span className={styles['Thuonghieu']}>{data.brand.name}</span>
                    </div>
                    <div className={styles['typeDetails']}>
                        Giá chỉ: <button className={styles['salary']}>{formatNumber(data.offers.price)}</button> VND
                    </div>
                    <div className={styles['config']}>
                        <div className={styles['config1']}>
                            <button className={styles['configDetails']}>
                                4
                            </button>
                            <button className={styles['configDetails']}>
                                8
                            </button>
                            <button className={styles['configDetails']}>
                                16
                            </button>
                            <button className={styles['configDetails']}>
                                32
                            </button>
                            <button className={styles['configDetails']}>
                                64
                            </button>
                            <button className={styles['configDetails']}>
                                128
                            </button>

                        </div>
                        <div className={styles['config2']}>
                            <div className={styles['add']}>+</div>
                            <div>Khác</div>
                        </div>
                    </div>
                    <div className={styles['shopping']}>
                        <button className={styles['buy']}
                            onClick={() => {
                                showModal()
                            }}
                        >
                            <div className={styles['buyText']}>
                                Mua ngay
                            </div>
                        </button>
                        <button className={styles['addCart']}
                            onClick={() => {
                                setQty(qty + 1)
                                // showModal()
                                addToCart()
                            }}
                        >

                            <div className={styles['addText']}>
                                Thêm vào giỏ
                            </div>
                            <div className={styles['smallImg']}>
                                <Image className={`${styles.cartIcon} ${show && styles.slide_up}`} width={24} height={24} src="/image/details/cart-plus.png" alt="" />
                            </div>
                        </button>

                        <Modal className={styles['customBtnDiv']} title="Thông báo!" open={open} onOk={() => { handleOk() }} onCancel={handleCancel}
                            footer={[
                                <button className={styles['customBtn']} key="back" style={{ backgroundColor: '#fff', color: '#333333' }} onClick={handleCancel}>
                                    Cancel
                                </button>,
                                <Link href='/home/gio_hang' className={styles['customBtn2']} key="submit" onClick={handleOk}>
                                    Next step
                                </Link>,
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
                            {/* <p className={styles['content']}>Đã thêm sản phẩm vào giỏ </p> */}
                            {/* <p>Some contents...</p>
                            <p>Some contents...</p> */}
                        </Modal>
                    </div>
                    <div className={styles['more']}>
                        <Image width={512} height={36} src="/image/details/1.png" alt="" />
                    </div>
                    <div className={styles['more']}>
                        <Image width={346} height={24} src="/image/details/2.png" alt="" />
                    </div>
                    <div className={styles['more']}>
                        <Image width={521} height={28} src="/image/details/3.png" alt="" />
                    </div>

                </div>
            ))}
        </div>
    )
}

