import styles from './slider2.module.scss'
import Image from 'next/image'

export default function Slider2() {
    return (
        <div className={styles['slider2']}>
            <div className={styles['slider']}>
                <div className={styles['about']}>
                    <Image width={355} height={512} src="/image/about.png" alt="" />
                </div>
                <div className={styles['content']}>
                    <div className={styles['title']}>
                        <div className={styles['title1']}>WELCOME TO OUR SITE!</div>
                        <div className={styles['title2']}>We are the best company
                            for your visit</div>
                    </div>
                    <div className={styles['text']}>
                        After decades of experience, and a whole life in Lucca, we offer you the most<br /> complete tourism service in the city. In addition to having bikes and rickshaws to<br /> have as much fun as you want, you have the choice of tour guides with whom to<br /> tour and drivers for your every need! We offer packages in the way that you get the<br /> most at the lowest price. Book with us and we will always be available for you!
                    </div>
                    <div className={styles['more']}>
                        <div className={styles['moreDiv']}>
                            <div className={styles['moreTitle']}>20+</div>
                            <div className={styles['moreText']}>Years<br />Experience</div>
                        </div>
                        <div className={styles['moreDiv']}>
                            <div className={styles['moreTitle']}>100+</div>
                            <div className={styles['moreText']}>Happy<br />Customer</div>
                        </div>
                        <div className={styles['moreDiv']}>
                            <div className={styles['moreTitle']}>15+</div>
                            <div className={styles['moreText']}>Choice<br />of Services</div>
                        </div>
                        <div className={styles['moreDiv']}>
                            <div className={styles['moreTitle']}>10+</div>
                            <div className={styles['moreText']}>Professional<br />Guides</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}