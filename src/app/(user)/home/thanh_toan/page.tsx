import styles from './styles.module.scss'
import Status3 from '@/components/cart-order-payment/status3'
import Payment from '@/components/cart-order-payment/payment/payment'



export default function CheckoutPage() {
    return (
        <main className={styles['main']}>
            <Status3 />
            <Payment />
        </main>
    )
}