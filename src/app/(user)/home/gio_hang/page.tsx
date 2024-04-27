'user client'
import styles from './styles.module.scss'
import Cart from '@/components/cart-order-payment/cart/cart'
import Status from '@/components/cart-order-payment/status'


export default function CartPage() {
    return (
        <main className={styles['main']}>
            <Status />
            <Cart />
        </main>
    )
}