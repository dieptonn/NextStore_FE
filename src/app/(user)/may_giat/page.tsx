import Image from 'next/image'
import styles from './styles.module.scss'
import Products from '@/components/products/may_giat/products'
import Chatbot from '@/components/chatbot/chatbot'

export default function ProductsPage() {
    return (
        <main className={styles['main']}>
            <Products />
            <Chatbot />
        </main>
    )
}