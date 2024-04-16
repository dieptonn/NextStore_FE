import styles from './styles.module.scss'
import UserSidebar from '@/components/sidebar/userSidebar'

export default function ProfilePage() {
    return (
        <div className={styles['dashboard']}>
            <UserSidebar />
        </div>
    )
}