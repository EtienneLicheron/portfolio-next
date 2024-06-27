import * as React from 'react';

interface EmailTemplateProps {
  name: string,
  email: string,
  subject: string,
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message
}) => (
  <div>
    <h1>New message from {name}</h1>
    <p>Email: {email}</p>
    <p>Subject: {subject}</p>
    <p>Message: {message}</p>
  </div>
);