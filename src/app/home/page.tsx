import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

import styles from './home.module.css';

export default function Home() {
    return (
    <div className={styles.homepage}>
        <div className={styles.presentation}>
          <h1>Hello there ! 🖐</h1>
          <p>
            I&apos;m Etienne, a software engineer and a student at Epitech. I&apos;m passionate about technology and I love to learn new things.
          </p>
          <Link href='/projects' className={styles.project_link}>check my projects<FaArrowRightLong/></Link>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/etienne-licheron-b4215b195/" target="_blank" rel="noopener noreferrer">
              <Image src="linkedin.svg" alt="linkedin" width={25} height={25} />
            </a>
            <a href="https://github.com/EtienneLicheron" target="_blank" rel="noopener noreferrer">
              <Image src="github-mark-white.svg" alt="github" width={25} height={25} />
            </a>
          </div>
        </div>
      </div>
    )
}