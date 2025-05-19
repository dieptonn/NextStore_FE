'use client'
import styles from './styles.module.scss';
import React, { useEffect, useState } from "react";


declare global {
    namespace JSX {
        interface IntrinsicElements {
            'df-messenger': any;
        }
    }
}

export default function Chatbot() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={styles['chatbot']}>
            <df-messenger
                intent="WELCOME"
                chat-title="NextChat"
                agent-id="d19f3953-b7db-4251-928b-31a5ed9b901d"
                language-code="en"
            ></df-messenger>
        </div>
    )
}