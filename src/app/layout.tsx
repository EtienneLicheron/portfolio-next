import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import Navbar from "./components/navbar/navbar";
import styles from "./layout.module.css";
import "./globals.css";

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
      <body className={GeistSans.className}>
        <Navbar />
        {children}
        <div className={styles.scroll_container}>
          <div className={styles.scroll_text}>Open for work  •  Open for work  •  Open for work</div>
        </div>
      </body>
    </html>
  );
}
