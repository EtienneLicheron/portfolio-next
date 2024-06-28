"use client";
import { Resend } from "resend";
import styles from "./contact.module.css";
import { useState } from "react";
import { useFormState } from "react-dom";
import { Box, Flex, TextField } from "@radix-ui/themes";

export default function Contact() {

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    }

    async function sendEmail(formData: FormData) {
        // 'use server';
        const rawFormData = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        const response = await fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify(rawFormData)
        });
    }

    return (
        <div className={styles.contact}>
            <div className={styles.contact_header}>
                <h1>Send me a message</h1>
            </div>
            <form className={styles.contact_form} action={sendEmail}>
                <input type="text" id="name" name="name" onKeyDown={handleKeyDown} placeholder="Full name" required/>
                <input type="email" id="email" name="email" onKeyDown={handleKeyDown} placeholder="Your email" required/>
                <input type="text" id="subject" name="subject" onKeyDown={handleKeyDown} placeholder="Subject" required/>
                <textarea id="message" name="message" onKeyDown={handleKeyDown} placeholder="Your message goes here..." maxLength={300} required />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}