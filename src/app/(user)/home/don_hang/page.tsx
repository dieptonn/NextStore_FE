import styles from './styles.module.scss'
import Status2 from '@/components/cart-order-payment/status2'
import Order from '@/components/cart-order-payment/order/order'



export default function CheckoutPage() {
    return (
        <main className={styles['main']}>
            <Status2 />
            <Order />
        </main>
    )
}