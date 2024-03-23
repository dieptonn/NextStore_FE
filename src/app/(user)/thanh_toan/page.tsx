import styles from './styles.module.scss'
import Status from '@/components/cart-order-payment/status'
import Payment from '@/components/cart-order-payment/payment/payment'



export default function CheckoutPage() {
    return (
        <main className={styles['main']}>
            <Status />
            <Payment />
        </main>
    )
}