import styles from './navbar.module.css';
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link href='/' className={styles.title}><span>Etienne Licheron</span></Link>
            <div className={styles.links}>
                <Link href='/'  className={styles.button}>Home</Link>
                <Link href='/about' className={styles.button}>About</Link>
                <Link href='/projects' className={styles.button}>Projects</Link>
                <Link href='/contact' className={styles.button}>Contact</Link>
            </div>
        </div>
    );
}