'use client'
import Image from 'next/image'
import styles from './styles.module.scss'
import URL from '@/components/details/URL/URL'
import { Details } from '@/components/details/productDetails/details'
import { Config } from '@/components/details/detailsConfig/config'
import { Intro } from '@/components/details/introduce/intro'
import Recommended from '@/components/details/recommended/recommended'
import Chatbot from '@/components/chatbot/chatbot'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter, usePathname } from 'next/navigation';



export default function DetailsPage() {
    const [apiData, setApiData] = useState([]);

    const router = useRouter();
    // const { productName } = router.query;
    const pathname = usePathname()
    const index = pathname.indexOf('may_giat/');

    // Extract the part of the URL after "may_giat/"
    const productName = pathname.substring(index + 'may_giat/'.length);

    // console.log(productName);

    useEffect(() => {

        const fetchProductDetail = async () => {
            try {
                if (productName) {
                    // Gọi API với productName
                    const response = await axios.post(`https://nextstore-be.onrender.com/api/v1/washingMachines/showProductDetail?productName=${productName}`);
                    // Xử lý dữ liệu từ API

                    setApiData(response.data.data)

                }
            } catch (error) {
                console.error('Error fetching product detail:', error);
                // Xử lý lỗi
            }
        };

        fetchProductDetail();
    }, [productName]);


    return (
        <main className={styles['main']}>
            <URL />
            <Details apiData={apiData} />
            <Intro apiData={apiData} />
            <Config apiData={apiData} />
            <Recommended />
            {/* <Chatbot /> */}
        </main>
    )
}