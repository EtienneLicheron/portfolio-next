import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import Navbar from "./components/navbar/navbar";
import styles from "./layout.module.css";
import "./globals.css";
import { Footer } from "./components/footer/footer";

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
          <div className={styles.page_container}>
            {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
