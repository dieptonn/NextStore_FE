import Image from 'next/image'
import styles from './styles.module.scss'
import Cart from '@/components/cart-order-payment/cart/cart'
import Status from '@/components/cart-order-payment/status'
import Chatbot from '@/components/chatbot/chatbot'



export default function DetailsPage() {
    return (
        <main className={styles['main']}>
            <Status />
            <Cart />
            {/* <Chatbot /> */}
        </main>
    )
}