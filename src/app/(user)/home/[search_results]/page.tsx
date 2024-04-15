'use client'
import styles from './styles.module.scss'
import Products from '@/components/products/search_results/products'
import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';


export default function ResultsPage() {

    const [data, setData] = useState('')

    const pathname = usePathname()
    const index = pathname.indexOf('/');

    // Extract the part of the URL after "may_giat/"
    const searchPath = pathname.substring('/'.length);
    const cleanedSearchPath = searchPath.replace('home/', '');

    // Decode the cleanedSearchPath from URL encoding
    const searchData = decodeURIComponent(cleanedSearchPath);

    useEffect(() => {
        setData(searchData);
    }, [searchData]);

    console.log(data);


    return (
        <main className={styles['main']}>
            <div className={styles['txt']}>
                Search Results
            </div>
            <Products searchData={data} />
        </main>
    )
}