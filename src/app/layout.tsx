import type { Metadata } from "next";
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import "./globals.css";
import styles from "./layout.module.css";

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
      <Theme accentColor="gray" appearance="dark" hasBackground={false} >
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
