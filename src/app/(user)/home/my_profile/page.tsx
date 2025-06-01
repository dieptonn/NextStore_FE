'use client';

import { useEffect, useState, MouseEvent } from 'react';
// QUAN TRỌNG: Import file SCSS module MỚI cho component này
import styles from './popupStyles.module.scss'; // Đổi tên file SCSS nếu bạn đặt khác
import Image from 'next/image';

// (Interfaces User, ProfileFormData, UserProfilePopupProps giữ nguyên)
interface User {
    _id: number;
    name: string;
    email: string;
    password?: string;
    authType: 'local' | 'google' | 'facebook';
    image: string | null;
    address: string | null;
    gender: 'male' | 'female' | 'other' | null;
    phoneNumber: string | null;
    role: 'user' | 'guest' | 'admin';
    slug: string;
    createdAt: string;
    updatedAt: string;
    __v?: number;
}

interface ProfileFormData {
    firstName: string;
    lastName: string;
    email: string;
    currentPassword?: string;
    newPassword?: string;
    confirmNewPassword?: string;
    image: string | null;
    address: string | null;
    phoneNumber: string | null;
}

const defaultAvatar = '/image/profile/ava.png'; // Đảm bảo đường dẫn này đúng

interface UserProfilePopupProps {
    isOpen: boolean;
    onClose: () => void;
}


export default function UserProfilePopup({ isOpen, onClose }: UserProfilePopupProps) {
    // (State và các hàm xử lý useEffect, handleInputChange, ... giữ nguyên)
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [formData, setFormData] = useState<ProfileFormData>({
        firstName: '',
        lastName: '',
        email: '',
        image: null,
        address: '',
        phoneNumber: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isOpen && (!currentUser || currentUser._id !== JSON.parse(localStorage.getItem('user') || '{}')._id)) {
            setIsLoading(true);
            const storedUserData = localStorage.getItem('user');
            if (storedUserData) {
                try {
                    const userData: User = JSON.parse(storedUserData);
                    setCurrentUser(userData);

                    const nameParts = userData.name.split(' ');
                    const firstName = nameParts[0] || '';
                    const lastName = nameParts.slice(1).join(' ') || '';

                    setFormData({
                        firstName: firstName,
                        lastName: lastName,
                        email: userData.email || '',
                        image: userData.image || null,
                        address: userData.address || '',
                        phoneNumber: userData.phoneNumber || '',
                        currentPassword: '',
                        newPassword: '',
                        confirmNewPassword: '',
                    });
                } catch (error) {
                    console.error("Failed to parse user data from localStorage", error);
                    onClose();
                }
            } else {
                onClose();
            }
            setIsLoading(false);
        } else if (!isOpen) {
            // setCurrentUser(null); // Optional: reset user data when popup closes
            // setIsLoading(true);
        }
    }, [isOpen, currentUser, onClose]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = (e: React.MouseEvent<HTMLButtonElement>) => { // Sửa type của e
        e.preventDefault();
        if (!currentUser) return;
        const updatedName = `${formData.firstName} ${formData.lastName}`.trim();
        const updatedUserData: Partial<User> = {
            ...currentUser,
            name: updatedName,
            email: formData.email,
            image: formData.image,
            address: formData.address,
            phoneNumber: formData.phoneNumber,
        };

        if (formData.newPassword && formData.newPassword.length < 6) {
            alert("New password must be at least 6 characters long.");
            return;
        }

        if (formData.newPassword && formData.newPassword === formData.confirmNewPassword) {
            console.log("Attempting to change password. Current:", formData.currentPassword, "New:", formData.newPassword);

        } else if (formData.newPassword && formData.newPassword !== formData.confirmNewPassword) {
            alert("New passwords do not match!");
            return;
        }

        // Simulate saving to localStorage (in a real app, this would be an API call to update user profile)
        localStorage.setItem('user', JSON.stringify(updatedUserData));
        setCurrentUser(updatedUserData as User);
        alert('Profile updated successfully!');
        setFormData(prev => ({
            ...prev,
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
        }));
        // onClose(); // Optional: close popup after successful save
    };

    const handleCancelAndClose = () => {
        if (currentUser) {
            const nameParts = currentUser.name.split(' ');
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || '';
            setFormData({
                firstName: firstName,
                lastName: lastName,
                email: currentUser.email || '',
                image: currentUser.image || null,
                address: currentUser.address || '',
                phoneNumber: currentUser.phoneNumber || '',
                currentPassword: '',
                newPassword: '',
                confirmNewPassword: '',
            });
        }
        onClose();
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            // Basic validation for image type and size (optional)
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (!allowedTypes.includes(file.type)) {
                alert('Invalid file type. Please select a JPG, PNG, or GIF image.');
                return;
            }
            if (file.size > 2 * 1024 * 1024) { // 2MB limit
                alert('File is too large. Maximum size is 2MB.');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, image: reader.result as string }));
                // In a real app, you'd upload this to a server and get back a URL
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = () => {
        setFormData(prev => ({ ...prev, image: null }));
        // If image is from server, you might need an API call to delete it there
    };

    const handlePopupContentClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };


    if (!isOpen) {
        return null;
    }

    if (isLoading) {
        return (
            <div className={styles.popupOverlay} onClick={onClose}>
                <div className={styles.popupContent} onClick={handlePopupContentClick}>
                    <p style={{ textAlign: 'center', padding: '20px' }}>Loading profile...</p>
                </div>
            </div>
        );
    }

    if (!currentUser && !isLoading) {
        return (
            <div className={styles.popupOverlay} onClick={onClose}>
                <div className={styles.popupContent} onClick={handlePopupContentClick}>
                    <button className={styles.popupCloseButton} onClick={onClose} aria-label="Close profile">×</button>
                    <p style={{ textAlign: 'center', padding: '20px' }}>User data not found.</p>
                </div>
            </div>
        );
    }

    if (!currentUser) return null;

    return (
        <div className={styles.popupOverlay} onClick={onClose}>
            <div className={styles.popupContent} onClick={handlePopupContentClick}>
                <button className={styles.popupCloseButton} onClick={onClose} aria-label="Close profile">×</button>
                <div className={styles.popupContentWrapper}>
                    <div className={styles.contentDiv}>
                        {/* --- Profile Avatar Section --- */}
                        <div className={styles.profile}>
                            <h2 className={styles.profileTit}>User Profile</h2>
                            <div className={styles.profileAvaDiv}>
                                <div className={styles.profileAvaDiv1}>
                                    <Image
                                        className={styles.avatarImage} // Thêm class để dễ style
                                        width={100} // Giảm kích thước avatar
                                        height={100}
                                        src={formData.image || currentUser.image || defaultAvatar}
                                        alt="User Avatar"
                                        priority // Cân nhắc nếu là LCP
                                    />
                                    <div className={styles.name}>
                                        <div className={styles.name1}>
                                            {`${formData.firstName} ${formData.lastName}`.trim() || currentUser.name}
                                        </div>
                                        <div className={styles.name2}>
                                            Role: {currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)}
                                        </div>
                                        <div className={styles.name3}>
                                            {/* Placeholder, bạn có thể hiển thị email hoặc thông tin khác */}
                                            Email: {currentUser.email}
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.profileAvaDiv2}>
                                    <label htmlFor="photo-upload-popup" className={styles.uploadButtonLabel}>
                                        Upload Photo
                                    </label>
                                    <input
                                        id="photo-upload-popup"
                                        type="file"
                                        accept="image/png, image/jpeg, image/gif"
                                        style={{ display: 'none' }}
                                        onChange={handleImageUpload}
                                    />
                                    {(formData.image || currentUser.image) && // Chỉ hiển thị nút delete nếu có ảnh
                                        <button type="button" className={styles.deleteButton} onClick={handleDeleteImage}>
                                            Delete Photo
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>

                        {/* <div className={styles.profileLine1}></div> */}

                        {/* --- Name & Email Section --- */}
                        <div className={styles.formSection}>
                            <div className={styles.formRow}>
                                <div className={styles.formField}>
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder='e.g., Alaa'
                                    />
                                </div>
                                <div className={styles.formField}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder='e.g., Mohamed'
                                    />
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="userEmail">User Email (Login ID)</label>
                                <input
                                    id="userEmail"
                                    type="email"
                                    name="email" // Giữ name="email" để handleInputChange hoạt động
                                    value={formData.email}
                                    // onChange={handleInputChange} // Email thường không cho phép thay đổi hoặc cần quy trình riêng
                                    readOnly
                                    placeholder='e.g., alaa.mohamed@example.com'
                                />
                            </div>
                        </div>

                        {/* <div className={styles.profileLine1}></div> */}

                        {/* --- Contact Information Section --- */}
                        <div className={styles.formSection}>
                            <div className={styles.formRow}> {/* Email và Phone trên cùng 1 hàng nếu đủ chỗ */}
                                <div className={styles.formField}>
                                    <label htmlFor="contactEmail">Email Address</label>
                                    <div className={styles.inputWithIcon}>
                                        <span className={styles.icon}>
                                            <Image width={20} height={20} src='/image/profile/mail.png' alt="mail icon" />
                                        </span>
                                        <input
                                            id="contactEmail"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            readOnly
                                            placeholder='e.g., abc@gmail.com'
                                        />
                                    </div>
                                </div>
                                <div className={styles.formField}>
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <div className={styles.inputWithIcon}>
                                        <span className={styles.icon}>
                                            <Image width={20} height={20} src='/image/profile/phone.png' alt="phone icon" />
                                        </span>
                                        <input
                                            id="phoneNumber"
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber || ''}
                                            onChange={handleInputChange}
                                            placeholder='e.g., 0123456789'
                                            maxLength={10}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="address">Address</label>
                                <div className={styles.inputWithIcon}>
                                    <span className={styles.icon}>
                                        <Image width={20} height={20} src='/image/profile/location.png' alt="location icon" />
                                    </span>
                                    <input
                                        id="address"
                                        type="text"
                                        name="address"
                                        value={formData.address || ''}
                                        onChange={handleInputChange}
                                        placeholder='e.g., 71b, Ngo Gieng Mut, Bach Mai'
                                    />
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <label htmlFor="timeZone">Time Zone (Display Only)</label>
                                <div className={styles.inputWithIcon}>
                                    <span className={styles.icon}>
                                        <Image width={20} height={20} src='/image/profile/timeZone.png' alt="time zone icon" />
                                    </span>
                                    <input
                                        id="timeZone"
                                        type="text"
                                        placeholder='e.g., Hanoi, Bangkok, Jakarta (GMT+7)'
                                        readOnly
                                        value="Asia/Ho_Chi_Minh (Placeholder)"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* <div className={styles.profileLine1}></div> */}

                        {/* --- Password Change Section --- */}
                        {/* <div className={styles.formSection}>
                            <div className={styles.formField}>
                                <label htmlFor="currentPassword">Current Password</label>
                                <input
                                    id="currentPassword"
                                    type="password"
                                    name="currentPassword"
                                    value={formData.currentPassword}
                                    onChange={handleInputChange}
                                    placeholder='Enter current password to change'
                                />
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formField}>
                                    <label htmlFor="newPassword">New Password</label>
                                    <input
                                        id="newPassword"
                                        type="password"
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleInputChange}
                                        placeholder='Enter new password'
                                        minLength={6}
                                    />
                                </div>
                                <div className={styles.formField}>
                                    <label htmlFor="confirmNewPassword">Confirm New Password</label>
                                    <input
                                        id="confirmNewPassword"
                                        type="password"
                                        name="confirmNewPassword"
                                        value={formData.confirmNewPassword}
                                        onChange={handleInputChange}
                                        placeholder='Confirm new password'
                                        minLength={6}
                                    />
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* --- Action Buttons --- */}
                    <div className={styles.confirmActions}>
                        <button type="button" className={styles.cancelButton} onClick={handleCancelAndClose}>
                            Cancel
                        </button>
                        <button type="button" className={styles.saveButton} onClick={handleSaveChanges}>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}