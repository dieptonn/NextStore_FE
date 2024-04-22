import styles from './styles.module.scss'
import UserSidebar from '@/components/sidebar/userSidebar'
import Image from 'next/image'

export default function ProfilePage() {
    return (
        <div className={styles['dashboard']}>
            <UserSidebar />
            <div className={styles['content']}>
                <div className={styles['contentDiv']}>
                    <div className={styles['profile']}>
                        <div className={styles['profileTit']}>
                            User Profile
                        </div>
                        <div className={styles['profileLine']}>
                        </div>
                        <div className={styles['profileAvaDiv']}>
                            <div className={styles['profileAvaDiv1']}>
                                <Image width={140.705} height={139.46} src='/image/profile/ava.png' alt="" />
                                <div className={styles['name']}>
                                    <div className={styles['name1']}>
                                        Điệp Tôn
                                    </div>
                                    <div className={styles['name2']}>
                                        Product Design
                                    </div>
                                    <div className={styles['name3']}>
                                        Eastern European Time (EET), Cairo UTC +3
                                    </div>
                                </div>
                            </div>
                            <div className={styles['profileAvaDiv2']}>
                                <div className={styles['upload']}>
                                    <div className={styles['uploadTxt']}>
                                        Upload New Photo
                                    </div>
                                </div>
                                <div className={styles['delete']}>
                                    <div className={styles['deleteTxt']}>
                                        Delete
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles['profileLine1']}>
                    </div>
                    <div className={styles['Name']}>
                        <div className={styles['fullName']}>
                            <div className={styles['firstName']}>
                                <div className={styles['firstNameTxt']}>
                                    First Name
                                </div>
                                <input className={styles['firstNameDiv']} placeholder='eg. Alaa' />
                            </div>
                            <div className={styles['firstName']}>
                                <div className={styles['firstNameTxt']}>
                                    Last Name
                                </div>
                                <input className={styles['firstNameDiv']} placeholder='eg. Mohamed' />
                            </div>
                        </div>
                        <div className={styles['userName']}>
                            <div className={styles['userNameTxt']}>
                                User Name
                            </div>
                            <input className={styles['userNameDiv']} placeholder='eg. alaa.mohamed' />
                        </div>
                    </div>
                    <div className={styles['profileLine1']}>
                    </div>
                    <div className={styles['contact']}>
                        <div className={styles['email']}>
                            <div className={styles['emailTxt']}>
                                Email Address
                            </div>
                            <div className={styles['emailDiv']} >
                                <Image width={37.33} height={37.33} src='/image/profile/mail.png' alt="" />
                                <input className={styles['emailInput']} placeholder='eg. abc@gmail.com' />
                            </div>
                        </div>
                        <div className={styles['email']}>
                            <div className={styles['emailTxt']}>
                                Phone Number
                            </div>
                            <div className={styles['emailDiv']} >
                                <Image width={37.33} height={37.33} src='/image/profile/phone.png' alt="" />
                                <input className={styles['emailInput']} placeholder='eg. +8452160804' />
                            </div>
                        </div>
                    </div>
                    <div className={styles['profileLine1']}>
                    </div>
                    <div className={styles['location']}>
                        <div className={styles['locationTxt']}>
                            Email Address
                        </div>
                        <div className={styles['locationDiv']} >
                            <Image width={37.33} height={37.33} src='/image/profile/location.png' alt="" />
                            <input className={styles['locationInput']} placeholder='eg. 71b, ngõ Giếng Mứt, Bạch Mai, Hai Bà Trưng, Hà Nội' />
                        </div>
                    </div>
                    <div className={styles['profileLine1']}>
                    </div>
                    <div className={styles['location']}>
                        <div className={styles['locationTxt']}>
                            Time Zone
                        </div>
                        <div className={styles['locationDiv']} >
                            <Image width={37.33} height={37.33} src='/image/profile/timeZone.png' alt="" />
                            <input className={styles['locationInput']} placeholder='eg. Hanoi, BangKok, Jakata' />
                        </div>
                    </div>
                    <div className={styles['profileLine1']}>
                    </div>
                    <div className={styles['Name']}>
                        <div className={styles['fullName']}>
                            <div className={styles['firstName']}>
                                <div className={styles['firstNameTxt']}>
                                    Current Password
                                </div>
                                <input className={styles['firstNameDiv']} placeholder='********' />
                            </div>
                            <div className={styles['firstName']}>
                                <div className={styles['firstNameTxt']}>
                                    New Password
                                </div>
                                <input className={styles['firstNameDiv']} placeholder='********' />
                            </div>
                        </div>
                        <div className={styles['userName']}>
                            <div className={styles['userNameTxt']}>
                                Confirm New Password
                            </div>
                            <input className={styles['userNameDiv']} placeholder='********' />
                        </div>
                    </div>
                </div>
                <div className={styles['confirm']}>
                    <div className={styles['save']}>
                        <div className={styles['saveTxt']}>
                            Cancel
                        </div>
                    </div>
                    <div className={styles['cancel']}>
                        <div className={styles['cancelTxt']}>
                            Save Changes
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}