// Search.tsx
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './search.module.scss'; // Đảm bảo styles có được import từ file tương ứng

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const router = useRouter();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        // Tạo URL mới từ giá trị của input
        const inputValue = searchValue.replace(/ /g, '?');
        const currentPath = usePathname()

        const url = `${currentPath}/${encodeURIComponent(inputValue)}`;

        // Điều hướng đến URL mới
        router.push(url);
    };

    return (
        <div className={styles['search']}>
            <div className={styles['searchInput']}>
                <input
                    placeholder='Search ...'
                    className={styles['Input']}
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles['search-button']} onClick={handleSearch}>
                {/* Icon search hoặc button tìm kiếm */}
            </div>
        </div>
    );
};

export default Search;
