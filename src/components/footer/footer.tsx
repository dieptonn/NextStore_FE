import styles from './footer.module.scss';


export default function Footer() {
    return (
        <div className={styles['footer']}>
            <div className={styles['div1']}>
                <div className={styles['footer-title']}>Hujjatlar</div>
                <div className={styles['footer-text']}>Umumiy shartlar</div>
                <div className={styles['footer-text']}>Ofertalar arxivi</div>
                <div className={styles['footer-text']}>Nizom</div>
                <div className={styles['footer-text']}>Guvohnoma</div>
            </div>
            <div className={styles['div2']}>
                <div className={styles['footer-title']}>Servis</div>
                <div className={styles['footer-text']}>Do’konlar</div>
                <div className={styles['footer-text']}>Do’konlar</div>
                <div className={styles['footer-text']}>Hamkorlik uchun</div>
                <div className={styles['footer-text']}>Qaytarish</div>
                <div className={styles['footer-text']}>Promokodlar</div>
            </div>
            <div className={styles['div3']}>
                <div className={styles['footer-title']}>Mahsulotlar katalogi</div>
                <div className={styles['footer-text']}>Katalog 1</div>
                <div className={styles['footer-text']}>Katalog 2</div>
                <div className={styles['footer-text']}>Katalog 3</div>
                <div className={styles['footer-text']}>Katalog 4</div>
                <div className={styles['footer-text']}>Katalog 5</div>
                <div className={styles['footer-text']}>Katalog 6</div>
            </div>
            <div className={styles['div4']}>
                <div className={styles['footer-title']}>Axbarot xizmati</div>
                <div className={styles['footer-text']}>contact.@nextstore.uz</div>
                <div className={styles['footer-text']}>+998 97 712 96 96 <br />
                    +998 95 503 09 09</div>
                <div className={styles['footer-text']}>Sag’bon 186, Olmazor tumani, Toshkent, <br />O'zbekiston</div>
            </div>
            <div className={styles['social']}>
                <img src="./image/Group18.png" alt="" />
            </div>
            <div className={styles['line']}></div>
            <div className={styles['footer-text2']}>2022  Nextstore.com</div>
            <div className={styles['footer-text3']}>Powered by </div>
        </div >
    )
}