import styles from './styles.module.scss'
import Status from '@/components/cart-order-payment/status'
import Order from '@/components/cart-order-payment/order/order'



export default function CheckoutPage() {
    return (
        <main className={styles['main']}>
            <Status />
            <Order />
        </main>
    )
}