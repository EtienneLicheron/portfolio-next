import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import Navbar from "./components/navbar/navbar";
import '@radix-ui/themes/styles.css';
import styles from "./layout.module.css";
import "./globals.css";
import { Footer } from "./components/footer/footer";
import { Theme } from '@radix-ui/themes';


export const metadata: Metadata = {
  title: "Etienne LICHERON",
  description: "Etienne Licheron's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
      <Theme accentColor="gray" appearance="dark">
          <Navbar />
          <div className={styles.page_container}>
            {children}
          </div>
        <Footer />
      </Theme>
      </body>
    </html>
  );
}
