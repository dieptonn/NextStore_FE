'use client'
import Image from 'next/image'
import Slider1 from '@/components/slider/slider1'
import Slider2 from '@/components/slider/slider2'
import styles from './children.module.scss'
import Hot from '@/components/list/hot'
import Sale from '@/components/list/sale'
import Trend from '@/components/list/trend'
import Dev from '@/components/list/dev'
import Chatbot from '@/components/chatbot/chatbot'


export default function Home() {
  return (
    <main className={styles['main']}>
      <Slider1 />
      <Hot />
      <Sale />
      <Slider2 />
      <Trend />
      <Dev />
      {/* <Chatbot /> */}
    </main>
  )
}
