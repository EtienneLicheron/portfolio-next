"use client";
import { useState } from "react";

import { Box, Button, Flex, TextArea, TextField, Text } from "@radix-ui/themes";
import { PersonIcon, EnvelopeClosedIcon, Pencil1Icon, CheckIcon } from "@radix-ui/react-icons";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from "./contact.module.css";

export default function Contact() {
    const [open, setOpen] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [buttonText, setButtonText] = useState('Send');

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    }

    async function sendEmail(formData: FormData) {
        const rawFormData = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        const res = await fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify(rawFormData)
        });

        if (res.ok) {
            setButtonText('Sent !');
            setIsSent(true);
            toast("Message sent successfully", {type: 'success'})
        } else {
            toast("An error occured while sending the message", {type: 'error'})
        }
    }

    return (
        <Flex direction={'column'} align={'center'} justify={'center'} className={styles.contact} height={{lg: '50vh'}} width={{initial: '90vw', lg: '30vw'}}>
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss pauseOnHover theme="dark"/>
            <Text size={{initial: '7', lg: '8'}} mt={'5'}>Get in touch with me</Text>
            <form action={sendEmail} onKeyDown={handleKeyDown}>
                <Flex direction="column" align="center" justify={'center'} width={{initial: '70vw', lg: '30vw'}} height={{initial: '35vh'}} gap={'4'}>
                    <Box minWidth={'20vw'} width={{initial: '70vw', lg: '20vw'}}>
                        <TextField.Root size="2" placeholder="Full name..." name="name" type="text" required>
                            <TextField.Slot>
                                <PersonIcon height="16" width="16" />
                            </TextField.Slot>
                        </TextField.Root>
                    </Box>
                    <Box minWidth={'20vw'} width={{initial: '70vw', lg: '20vw'}}>
                        <TextField.Root size="2" placeholder="Your email..." name="email" type="email" required>
                            <TextField.Slot>
                                <EnvelopeClosedIcon height="16" width="16" />
                            </TextField.Slot>
                        </TextField.Root>
                    </Box>
                    <Box minWidth={'20vw'} width={{initial: '70vw', lg: '20vw'}}>
                        <TextField.Root size="2" placeholder="Subject..." name="subject" type="text" required>
                            <TextField.Slot>
                                <Pencil1Icon height="16" width="16" />
                            </TextField.Slot>
                        </TextField.Root>
                    </Box>
                    <Box minWidth={'20vw'} width={{initial: '70vw', lg: '20vw'}} maxHeight={'30vh'}>
                        <TextArea id="message" name="message" placeholder="Your message goes here..." required />
                    </Box>
                    <Button size="2" variant="soft" type="submit" disabled={isSent}>
                        { buttonText }
                    </Button>
                </Flex>
            </form>
        </Flex>
    )
}