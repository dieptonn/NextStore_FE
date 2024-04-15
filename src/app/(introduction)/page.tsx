import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'


export default function introPage() {
    return (
        <main className={styles['main']}>
            <div className={styles['welcome']}>
                <div className={styles['lerfDiv']}>
                    <Image className={styles['bg']} width={1397.33} height={765.33} src="/image/intro/bg.png" alt="" />

                    <div className={styles['overlay']}>
                        <div className={styles['welcomeDiv']}>
                            <div className={styles['welcomeText']}>
                                <div className={styles['welcomeTextTitle']}>
                                    <div className={styles['welcomeLine']}></div>
                                    <div className={styles['welcomeTitleDiv']}>
                                        <div className={styles['welcomeTitle']}>
                                            Welcome to NextStore
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['welcomeIntro']}>
                                    <div className={styles['welcomeIntroText']}>
                                        We bring multi-platform e-commerce applications, along with many new <br /> features to best serve customers.
                                        <br /><br /><br />Thank you for accompanying NextStore during the past time.
                                    </div>
                                </div>

                            </div>
                            <Link href='/home' className={styles['welcomeBtn']}>
                                <div className={styles['welcomeBtnText']}>SEE OUT PRODUCTS</div>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles['rightDiv']}>
                    <div className={styles['rightDivTitle']}>
                        Our Services
                    </div>
                    <div className={styles['rightDivService']}>
                        <div className={styles['rightDivService1']}>
                            <div className={styles['Service1Img']}>
                                <Image width={72.052} height={70.667} src="/image/intro/service1.png" alt="" />
                            </div>
                            <div className={styles['Service1Text']}>
                                <div className={styles['Payment']}>
                                    Online Payment
                                </div>
                                <div className={styles['PaymentText']}>
                                    Pay online using a bank <br />account or e-wallet
                                </div>
                            </div>
                        </div>
                        <div className={styles['rightDivService1']}>
                            <div className={styles['Service1Img']}>
                                <Image width={72.052} height={70.667} src="/image/intro/service2.png" alt="" />
                            </div>
                            <div className={styles['Service1Text']}>
                                <div className={styles['Payment']}>
                                    Accumulate points
                                </div>
                                <div className={styles['PaymentText']}>
                                    Accumulate points to buy<br /> products at preferential prices
                                </div>
                            </div>
                        </div>
                        <div className={styles['rightDivService1']}>
                            <div className={styles['Service1Img']}>
                                <Image width={72.052} height={70.667} src="/image/intro/service3.png" alt="" />
                            </div>
                            <div className={styles['Service1Text']}>
                                <div className={styles['Payment']}>
                                    Discount code
                                </div>
                                <div className={styles['PaymentText']}>
                                    Offer regular coupons to reward<br />customers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['quote']}>
                <div className={styles['quoteTitle']}>
                    Get a Quote For Your Project
                </div>
                <div className={styles['quoteBtn']}>
                    <div className={styles['quoteBtnText']}>
                        FREE QUOTE
                    </div>
                </div>
            </div>
            <div className={styles['contact']}>
                <div className={styles['contactImg']}>
                    <Image width={586.67} height={973.33} src="/image/intro/contact.png" alt="" />
                </div>
                <div className={styles['contactDiv']}>
                    <div className={styles['contactDiv1']}>
                        <div className={styles['contactDiv12']}>
                            <div className={styles['contactTitle']}>
                                No Project Too Big Or Too Small
                            </div>
                            <div className={styles['contactLine']}>

                            </div>
                            <div className={styles['contactTxtDiv']}>
                                <div className={styles['contactTxtDiv1']}>
                                    Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Sapien, dignissim tristique<br /> tellus sed faucibus nullam. Tincidunt mauris<br /> ut quam sed mauris proin feugiat.<br /> Scelerisque lorem posuere iaculis nunc amet<br /> phasellus.

                                    <br /><br />Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Sapien, dignissim tristique<br /> tellus sed faucibus nullam.
                                </div>
                                <div className={styles['contactTxtDiv2']}>
                                    <div className={styles['contactTxt']}>
                                        Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Sapien, dignissim tristique tellus<br /> sed faucibus nullam. Tincidunt mauris ut quam <br />sed mauris proin feugiat. Scelerisque lorem <br />posuere iaculis nunc amet phasellus.
                                    </div>
                                    <div className={styles['more']}>
                                        <div className={styles['moreTxt']}>
                                            LEARN MORE
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['contactDiv2']}>
                        <div className={styles['year']}>
                            <div className={styles['yearDiv']}>
                                <div className={styles['yearNum']}>
                                    12
                                </div>
                                <div className={styles['yearTxt']}>
                                    YEARS ESTABLISHED
                                </div>
                            </div>
                        </div>
                        <div className={styles['completed']}>
                            <div className={styles['completedDiv']}>
                                <div className={styles['completedNum']}>
                                    250
                                </div>
                                <div className={styles['completedTxt']}>
                                    COMPLETED PROJECTS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['prj']}>
                <div className={styles['project']}>
                    <div className={styles['projectTit']}>
                        Latest Projects
                    </div>
                    <div className={styles['projectLine']}>
                    </div>
                    <div className={styles['projectAll']}>
                        <div className={styles['prj1']}>
                            <div className={styles['prj1Img']}>
                                <Image width={390.67} height={242.67} src="/image/intro/prj1.png" alt="" />
                            </div>
                            <div className={styles['prj1Div']}>
                                <div className={styles['prj1Tit']}>
                                    Order online
                                </div>
                                <div className={styles['prj1Txt']}>
                                    Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Id et <br />euismod bibendum adipiscing <br />et orci, fermentum. Cras <br />tristique viverra gravida et sit<br /> egestas.
                                </div>
                                <div className={styles['prj1Btn']}>
                                    <div className={styles['prj1BtnTxt']}>
                                        VIEW PROJECT
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['prj1']}>
                            <div className={styles['prj1Img']}>
                                <Image width={390.67} height={242.67} src="/image/intro/prj2.png" alt="" />
                            </div>
                            <div className={styles['prj1Div']}>
                                <div className={styles['prj1Tit']}>
                                    Payment online
                                </div>
                                <div className={styles['prj1Txt']}>
                                    Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Id et <br />euismod bibendum adipiscing <br />et orci, fermentum. Cras <br />tristique viverra gravida et sit<br /> egestas.
                                </div>
                                <div className={styles['prj1Btn']}>
                                    <div className={styles['prj1BtnTxt']}>
                                        VIEW PROJECT
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['prj1']}>
                            <div className={styles['prj1Img']}>
                                <Image width={390.67} height={242.67} src="/image/intro/prj3.png" alt="" />
                            </div>
                            <div className={styles['prj1Div']}>
                                <div className={styles['prj1Tit']}>
                                    Home delivery
                                </div>
                                <div className={styles['prj1Txt']}>
                                    Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Id et <br />euismod bibendum adipiscing <br />et orci, fermentum. Cras <br />tristique viverra gravida et sit<br /> egestas.
                                </div>
                                <div className={styles['prj1Btn']}>
                                    <div className={styles['prj1BtnTxt']}>
                                        VIEW PROJECT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['projectBtn']}>
                        <div className={styles['projectBtnTxt']}>
                            VIEW ALL
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['about']}>
                <div className={styles['about1']}>
                    <div className={styles['about1Tit']}>
                        We’ve Been <br />Building For Over <br />10 Years
                    </div>
                    <div className={styles['about1Line']}>

                    </div>
                    <div className={styles['about1Txt']}>
                        Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Sapien, dignissim tristique tellus<br /> sed faucibus nullam. Tincidunt mauris ut quam <br />sed mauris proin feugiat. Scelerisque lorem<br /> posuere iaculis nunc amet phasellus.
                    </div>
                    <div className={styles['about1Btn']}>
                        <div className={styles['about1BtnTxt']}>
                            ABOUT US
                        </div>
                    </div>
                </div>
                <div className={styles['about2']}>
                    <div className={styles['about2Img']}>
                        <Image width={1333.33} height={800} src="/image/intro/about.png" alt="" />
                    </div>
                    <div className={styles['about2Div']}>
                        <div className={styles['call']}>
                            <div className={styles['callTxt']}>
                                Call for a Quote
                            </div>
                            <div className={styles['callNum']}>
                                (346) 234-6973
                            </div>
                        </div>
                        <div className={styles['form']}>
                            <div className={styles['formBtn']}>
                                <div className={styles['formBtnTxt']}>
                                    ONLINE ESTIMATE FORM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['get']}>
                <div className={styles['get1']}>
                    <div className={styles['get1Div']}>
                        <div className={styles['get1Tit']}>
                            Let’s Build <br />Something<br /> Together
                        </div>
                        <div className={styles['get1Line']}>
                        </div>
                    </div>
                    <div className={styles['get1Div2']}>
                        <div className={styles['get1Div2Txt']}>
                            Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Sapien, dignissim tristique<br />  tellus sed faucibus nullam. Tincidunt mauris <br /> ut quam sed mauris proin feugiat.
                        </div>
                        <div className={styles['get1Div2Btn']}>
                            <div className={styles['get1Div2BtnTxt']}>
                                GET IN TOUCH
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['get2']}>
                    <div className={styles['get21']}>
                        <div className={styles['get21TitDiv']}>
                            <div className={styles['get21Tit']}>
                                Donec rutrum congue leo eget malesuada?
                            </div>
                            <div className={styles['subicon']}>
                                <Image width={26.667} height={26.667} src='/image/intro/subicon.png' alt='' />
                            </div>
                        </div>
                        <div className={styles['get21Txt']}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique<br /> tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat.
                        </div>
                    </div>
                    <div className={styles['get22']}>
                        <div className={styles['get22TitDiv']}>
                            <div className={styles['get22Tit']}>
                                Vivamus suscipit tortor eget felis porttitor volutpat?
                            </div>
                            <div className={styles['subicon']}>
                                <Image width={26.667} height={26.667} src='/image/intro/addicon.png' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className={styles['get22']}>
                        <div className={styles['get22TitDiv']}>
                            <div className={styles['get22Tit']}>
                                Curabitur non nulla sit amet nisl tempus?
                            </div>
                            <div className={styles['subicon']}>
                                <Image width={26.667} height={26.667} src='/image/intro/addicon.png' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className={styles['get22']}>
                        <div className={styles['get22TitDiv']}>
                            <div className={styles['get22Tit']}>
                                Pellentesque in ipsum id orci porta dapibus?
                            </div>
                            <div className={styles['subicon']}>
                                <Image width={26.667} height={26.667} src='/image/intro/addicon.png' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className={styles['get22']}>
                        <div className={styles['get22TitDiv']}>
                            <div className={styles['get22Tit']}>
                                Curabitur non nulla sit amet nisl?
                            </div>
                            <div className={styles['subicon']}>
                                <Image width={26.667} height={26.667} src='/image/intro/addicon.png' alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['client']}>
                <div className={styles['clientDiv']}>
                    <div className={styles['clientTit']}>
                        Client Testimonials
                    </div>
                    <div className={styles['clientLine']}>

                    </div>
                    <div className={styles['clientRate']}>
                        <div className={styles['clientRateDiv']}>
                            <div className={styles['clientRateDiv1']}>
                                <div className={styles['star']}>
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                </div>
                                <div className={styles['txtName']}>
                                    <div className={styles['rateTxt']}>
                                        “Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br /> Sapien, dignissim tristique tellus<br />  sed faucibus nullam.”
                                    </div>
                                    <div className={styles['name']}>
                                        John Smith
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['clientRateDiv']}>
                            <div className={styles['clientRateDiv1']}>
                                <div className={styles['star']}>
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                </div>
                                <div className={styles['txtName']}>
                                    <div className={styles['rateTxt']}>
                                        “Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br /> Sapien, dignissim tristique tellus<br />  sed faucibus nullam.”
                                    </div>
                                    <div className={styles['name']}>
                                        John Smith
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['clientRateDiv']}>
                            <div className={styles['clientRateDiv1']}>
                                <div className={styles['star']}>
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                    <Image width={34.667} height={34.667} src="/image/intro/star.png" alt="" />
                                </div>
                                <div className={styles['txtName']}>
                                    <div className={styles['rateTxt']}>
                                        “Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br /> Sapien, dignissim tristique tellus<br />  sed faucibus nullam.”
                                    </div>
                                    <div className={styles['name']}>
                                        John Smith
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['img']}>
                <Image width={1397.333} height={320} src="/image/intro/Clients.png" alt="" />
            </div>
        </main >
    )
}