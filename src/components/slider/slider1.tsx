import React from 'react';
import styles from './slider1.module.scss'
import { Carousel } from 'antd';

const Slider1: React.FC = () => {

    const contentStyle: React.CSSProperties = {
        height: '380px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        // background: '#3C96FE',
        width: '1466.189px',
    };
    return (

        <>
            <div>
                <img src="./image/poster.png" alt="" />
            </div>

            <div className={styles['slider1']}>


                <Carousel className={styles['slider']} autoplay autoplaySpeed={3000}>
                    <div>
                        <div style={contentStyle}>
                            <img src="./image/slider/slider.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle}>
                            <img src="./image/slider/slider.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle}>
                            <img src="./image/slider/slider.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div style={contentStyle}>
                            <img src="./image/slider/slider.png" alt="" />
                        </div>
                    </div>
                </Carousel>

            </div>
        </>

    )
}

export default Slider1;