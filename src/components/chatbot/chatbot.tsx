'use client'
import styles from './styles.module.scss';
import React, { useEffect, useState } from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document';


declare global {
    namespace JSX {
        interface IntrinsicElements {
            'df-messenger': any;
        }
    }
}

export default function Chatbot() {

    return (
        <div className={styles['chatbot']}>
            <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
            <df-messenger
                intent="WELCOME"
                chat-title="NextChat"
                agent-id="d19f3953-b7db-4251-928b-31a5ed9b901d"
                language-code="en"
            ></df-messenger>
        </div>
    )
}