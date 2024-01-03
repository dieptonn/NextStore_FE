import Image from 'next/image'
import styles from './styles.module.scss'
import URL from '@/components/details/URL/URL'
import Details from '@/components/details/productDetails/details'
import Config from '@/components/details/detailsConfig/config'
import Intro from '@/components/details/introduce/intro'
import Recommended from '@/components/details/recommended/recommended'
import Chatbot from '@/components/chatbot/chatbot'


export default function DetailsPage() {
    return (
        <main className={styles['main']}>
            <URL />
            <Details />
            <Intro />
            <Config />
            <Recommended />
            <Chatbot />
        </main>
    )
}