'use client'
import styles from './styles.module.scss';
import { useEffect } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'df-messenger': any;
        }
    }
}

export default function Chatbot() {

    useEffect(() => {
        // Tạo một script element
        const script = document.createElement('script');
        script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
        script.async = true;

        // Thêm script vào body của trang
        document.body.appendChild(script);

        // Xóa script khi component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <df-messenger className={styles['chatbot']}
                intent="WELCOME"
                chat-title="NextChat"
                agent-id="d19f3953-b7db-4251-928b-31a5ed9b901d"
                language-code="vi"
            ></df-messenger>
        </div>
    )
}
