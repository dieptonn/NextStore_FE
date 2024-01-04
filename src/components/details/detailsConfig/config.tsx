import styles from './styles.module.scss';
import React from 'react';

interface DetailsProps {
    apiData: any[];
}

interface PropertyValue {
    _id: string;
    Type: string;
    name: string;
    value: string;
}

export const Config: React.FC<DetailsProps> = ({ apiData }) => {
    return (
        <div className={styles['config']}>
            <div className={styles['title']}>Thông số chi tiết</div>
            {apiData.map((data) => (
                <div key={data._id} className={styles['configDiv']}>
                    {data.additionalProperty.map((property: PropertyValue) => (
                        <div key={property._id} className={styles['configPair']}>
                            <div className={styles['configDiv1']}>
                                <div className={styles['text1']}>
                                    {property.name}
                                </div>
                            </div>
                            <div className={styles['configDiv2']}>
                                <div className={styles['text2']}>
                                    {property.value}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
