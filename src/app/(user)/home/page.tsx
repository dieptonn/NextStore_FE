'use client'
import Image from 'next/image'
import Slider1 from '@/components/slider/slider1'
import Slider2 from '@/components/slider/slider2'
import Slider3 from '@/components/slider/slider3'
import styles from './children.module.scss'
import Hot from '@/components/list/hot'
import Sale from '@/components/list/sale'
import Trend from '@/components/list/trend'
import Dev from '@/components/list/dev'
import Chatbot from '@/components/chatbot/chatbot'


export default function Home() {
  return (
    <main className={styles['main']}>
      <div className={styles['backGround']}>
        {/* <div className={styles['backGround-title']}>
          <div className={styles['title1']}>Enjoy in the best way!</div>
          <div className={styles['title2']}>Enjoy our services anytime</div>
        </div> */}
        <Image className={styles['backGroundImg']} width={7680} height={2716} src="/image/poster1.png" alt="" />
      </div>
      <Slider1 />
      <Hot />
      <Slider3 />
      <Sale />
      <Slider2 />
      <Trend />
      <Dev />
      {/* <Chatbot /> */}
    </main>
  )
}
