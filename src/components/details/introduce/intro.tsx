import styles from './styles.module.scss';



interface DetailsProps {
    apiData: any[];
}

export const Intro: React.FC<DetailsProps> = ({ apiData }) => {
    return (
        <div className={styles['intro']}>
            {apiData.map((data) => (
                <div key={data._id}>
                    <div className={styles['intro2']}>Giới thiệu</div>
                    <div style={{ whiteSpace: 'pre-line', lineHeight: '2' }}>
                        {data.product_description}
                    </div>
                </div>
            ))}
        </div>
    );
};
