'use client'
import styles from './styles.module.scss'
import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


// interface user {
//     _id: number,
//     name: string,
//     email: string,
//     authType: string,
//     image: string,
//     role: string,
// }

export default function Page() {

    const [userData, setUserData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:8000/api/v1/auth/google');
                console.log({
                    Response: response.data
                });
                setUserData(response.data);

            } catch (error) {
                console.error('Error:', error);
                // Xử lý các lỗi
            }
        };
        // if (qty > 0) {
        fetchData();
        // }
    }, []);


    return (
        <div className={styles['login']}>
            <div className={styles['loginDiv']}>
                <div className={styles['mask']}>
                    <div className={styles['signin']}>
                        <div className={styles['logo']}>
                            <Image width={112} height={44} src="/image/login/Logo.png" alt="" />
                        </div>
                        <div className={styles['text']}>
                            <div className={styles['wellcome']}>
                                Welcome back !!!
                            </div>
                            <div className={styles['loginText']}>
                                Login
                            </div>

                            <div className={styles['email']}>
                                <div className={styles['emailDiv']}>
                                    <div className={styles['emailText']}>
                                        Email
                                    </div>
                                    <input placeholder='test1@gmail.com' className={styles['div']}>

                                    </input>

                                </div>
                            </div>
                            <div className={styles['email']}>
                                <div className={styles['emailDiv']}>
                                    <div className={styles['emailText']}>
                                        <div className={styles['pass']}>
                                            Password
                                        </div>
                                        <div className={styles['forgot']}>
                                            Forgot Password ?
                                        </div>
                                    </div>

                                    <input placeholder='**************' className={styles['div']}>

                                    </input>

                                </div>
                            </div>

                            <div className={styles['button']}>
                                <Link href='/home' className={styles['signDiv']}>
                                    <div className={styles['signText']}>
                                        Sign In
                                    </div>
                                </Link>
                                <div className={styles['or']}>
                                    or
                                </div>
                                <Link href="http://localhost:8000/api/v1/auth/google" className={styles['gg']}>
                                    <div className={styles['ggImg']}>
                                        <Image width={24} height={25} src="/image/login/gg.png" alt="" />
                                    </div>
                                    <div className={styles['ggText']}>
                                        Sign In with Google
                                    </div>
                                </Link>
                            </div>
                            <div className={styles['signup']}>
                                <div className={styles['dontHave']}>
                                    I don’t have an account ?
                                </div>
                                <div className={styles['signupText']}>
                                    Sign up
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['img']}>
                <Image width={729} height={741} src="/image/login/gr.png" alt="" />
            </div>
        </div>
    )
}

Page.getLayout = function getLayout(page: React.ReactNode): React.ReactNode {
    // Trả về null để báo cho Next.js rằng không cần áp dụng layout toàn cục
    return null;
};
