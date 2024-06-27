import { NextRequest } from 'next/server';
import { EmailTemplate } from '../../components/email/emailTemplate';
import { Resend } from 'resend';

type Payload = {
    name: string,
    email: string,
    subject: string,
    message: string
}

const resend = new Resend(process.env.RESEND_API);

export async function POST(req: any) {
    try {
        const payload: Payload = await req.json();
        const { data, error } = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['etienne.licheron@epitech.eu'],
            subject: 'New message from portfolio website',
            react: EmailTemplate({ name: payload.name, email: payload.email, subject: payload.subject, message: payload.message}),
            text: 'New message from portfolio website',
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
