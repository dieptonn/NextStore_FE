// chatbot.tsx
'use client'
import styles from './styles.module.scss';
import { useEffect } from 'react';

// declare global {
//     namespace JSX {
//         interface IntrinsicElements {
//             'df-messenger': any;
//         }
//     }
// }

export default function Chatbot() {

    useEffect(() => {
        // Tạo một script element
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = `
            (function(d, m){
                var kommunicateSettings = 
                    {"appId":"2f57c1a909b1d305cd848e0975d059e0","popupWidget":true,"automaticChatOpenOnNavigation":true};
                var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                window.kommunicate = m; m._globals = kommunicateSettings;
            })(document, window.kommunicate || {});
        `;

        // Thêm script vào body của trang
        document.body.appendChild(script);

        // Xóa script khi component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
        </div>
    )
}
