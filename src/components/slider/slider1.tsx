import styles from './slider1.module.scss'


export default function Slider1() {
    return (
        <div className={styles['slider1']}>
            <div className={styles['arrow-left']}>
                <img src="./image/arrow_left.png" alt="" />
            </div>
            <div className={styles['slider']}>
                <img src="./image/slider.png" alt="" />
            </div>
            <div className={styles['arrow-right']}>
                <img src="./image/arrow_right.png" alt="" />
            </div>
            <div className={styles['bacham']}>
                <div className={styles['black-radius']}></div>
                <div className={styles['white-radius']}></div>
                <div className={styles['white-radius']}></div>
                <div className={styles['white-radius']}></div>
                <div className={styles['white-radius']}></div>
            </div>
        </div>
    )
}