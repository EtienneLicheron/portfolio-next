"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Contact() {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    }

    return (
        <div className={styles.contact}>
            <div className={styles.contact_container}>
                <div className={styles.terminal_header}>
                    &#62;_ Terminal
                </div>
                <div className={styles.terminal_body}>
                    <p>$&#62; npx create-contact-form</p>
                    <form onKeyDown={handleKeyDown} autoComplete="off">
                        <div className={styles.terminal_body_name}>
                            <label>🔍 Your name : </label>
                            <input type="text" name="name" placeholder="_" required />
                        </div>
                        <div className={styles.terminal_body_email}>
                            <label>✉️ Your email : </label>
                            <input type="email" name="email" placeholder="_" required />
                        </div>
                        <div className={styles.terminal_body_message}>
                            <label>📜 Your message : </label>
                            <textarea name="message" placeholder="_" required maxLength={500}/>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}