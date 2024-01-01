import styles from './footer.module.scss';
import Image from 'next/image'

export default function Footer() {
    return (
        <div className={styles['footer']}>
            <div className={styles['footer1']}>
                <div className={styles['image']}>
                    <Image width={1920} height={239.626} src="/image/footerimage.png" alt="" />
                </div>
                <div className={styles['background']}>
                    <div className={styles['content']}>
                        <div className={styles['about']}>
                            <div className={styles['aboutContent']}>
                                <div className={styles['aboutTitle']}>
                                    <div className={styles['Title']}>About Us</div>
                                    <div className={styles['line']}></div>
                                </div>
                                <div className={styles['textDiv']}>
                                    <div className={styles['text']}>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt.</div>
                                </div>
                                <div className={styles['textDiv']}>
                                    <div className={styles['text']}>Lorem Ipsum is simply dummy text of
                                        the printing and typesetting industry.</div>
                                </div>
                                <div className={styles['list']}>
                                    <Image width={512} height={74} src="/image/List.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles['link']}>
                            <div className={styles['linkDiv']}>
                                <div className={styles['header']}>
                                    <div className={styles['headerText']}>Quick Links</div>
                                    <div className={styles['psaudo']}></div>
                                </div>
                                <div className={styles['linkList']}>
                                    <div className={styles['item']}>
                                        <div className={styles['linkLine']}></div>
                                        <div className={styles['linkText']}>Home</div>
                                    </div>
                                    <div className={styles['item']}>
                                        <div className={styles['linkLine']}></div>
                                        <div className={styles['linkText']}>Hotels</div>
                                    </div>
                                    <div className={styles['item']}>
                                        <div className={styles['linkLine']}></div>
                                        <div className={styles['linkText']}>Flights</div>
                                    </div>
                                    <div className={styles['item']}>
                                        <div className={styles['linkLine']}></div>
                                        <div className={styles['linkText']}>Cruise</div>
                                    </div>
                                    <div className={styles['item']}>
                                        <div className={styles['linkLine']}></div>
                                        <div className={styles['linkText']}>Blog</div>
                                    </div>
                                    <div className={styles['item']}>
                                        <div className={styles['linkLine']}></div>
                                        <div className={styles['linkText']}>404</div>
                                    </div>
                                    <div className={styles['item']}>
                                        <div className={styles['linkLine']}></div>
                                        <div className={styles['linkText']}>Contact Us</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['insta']}>
                            <div className={styles['instaDiv']}>
                                <div className={styles['instaHeading']}>
                                    <div className={styles['headingText']}>Instagram</div>
                                    <div className={styles['instaLine']}></div>
                                </div>
                                <div className={styles['instaImg']}>
                                    <Image width={255} height={204} src="/image/gr.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={styles['new']}>
                            <div className={styles['newDiv']}>
                                <div className={styles['newHeading']}>
                                    <div className={styles['newTitle']}>Newsletter</div>
                                    <div className={styles['newLine']}></div>
                                </div>
                                <div className={styles['newContent']}>
                                    <div className={styles['newText']}>
                                        <div className={styles['text']}>Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod tempor
                                            incididunt.</div>
                                    </div>
                                    <div className={styles['newForm']}>
                                        <div className={styles['input']}>
                                            <div className={styles['inputDiv']}>
                                                <div className={styles['inputText']}>
                                                    Email I'd
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['button']}>
                                            <div className={styles['buttonText']}>
                                                Subscribe
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['background2']}>
                    <div className={styles['info']}>
                        <div className={styles['infoText']}>
                            © 2023 Nextstore.com | Powered by Diepton
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}