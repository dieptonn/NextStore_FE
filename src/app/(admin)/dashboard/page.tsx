import styles from './styles.module.scss'
import SideBar from '@/components/sidebar/SideBar'

export default function Page() {
    return (
        <div className={styles['dashboard']}>
            <SideBar />
        </div>
    )
}