import styles from './slider3.module.scss'
import Image from 'next/image'

export default function Slider3() {
    return (
        <div className={styles['slider3']}>
            <div className={styles['background']}>
                <div className={styles['contactDiv']}>
                    <div className={styles['contactTit']}>
                        Get Special Offers for <br />Organizations
                    </div>
                    <div className={styles['contactTxt']}>
                        Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem Ipsum has been the <br />industry&apos;s standard dummy text ever since the 1500s.
                    </div>
                    <div className={styles['contactBtn']}>
                        Contact Us
                    </div>
                </div>
                <Image className={styles['img']} src='/image/man.png' width={1651} height={2400} alt='' />
            </div>
        </div>
    )
}