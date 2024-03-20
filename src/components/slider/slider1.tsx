'use client'
import React from 'react';
import styles from './slider1.module.scss'
import { Carousel } from 'antd';
import Image from 'next/image'

const Slider1: React.FC = () => {

    const contentStyle: React.CSSProperties = {
        height: '294px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        width: '1009px',
        borderRadius: '18px'
    };
    return (

        <>
            {/* <div>
                <img src="./image/poster1.png" alt="" />
            </div> */}

            <div className={styles['slider1']}>


                <Carousel className={styles['slider']} autoplay autoplaySpeed={3000}>
                    <div>
                        <div>
                            <Image style={contentStyle} width={1009} height={294} src="/image/slider/slider0.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image style={contentStyle} width={1009} height={294} src="/image/slider/slider0.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image style={contentStyle} width={1009} height={294} src="/image/slider/slider0.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image style={contentStyle} width={1009} height={294} src="/image/slider/slider0.png" alt="" />
                        </div>
                    </div>
                </Carousel>

            </div>
        </>

    )
}

export default Slider1;