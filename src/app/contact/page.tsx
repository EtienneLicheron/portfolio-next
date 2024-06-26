"use client";
import styles from "./contact.module.css";
import { useState } from "react";

export default function Contact() {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    }

    return (
        <div className={styles.contact}>
            <div className={styles.contact_header}>
                <h1>Send me a message</h1>
            </div>
            <form className={styles.contact_form}>
                <input type="text" id="name" onKeyDown={handleKeyDown} placeholder="Full name" />
                <input type="email" id="email" onKeyDown={handleKeyDown} placeholder="Your email" />
                <input type="text" id="subject" onKeyDown={handleKeyDown} placeholder="Subject" />
                <textarea id="message" onKeyDown={handleKeyDown} placeholder="Your message goes here..." maxLength={300}></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}