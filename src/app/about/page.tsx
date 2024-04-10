import styles from "./page.module.css";

export default function About() {
    return (
        <div className={styles.about}>
            <h1>About</h1>
            <iframe src="https://gamer2810.github.io/steam-miniprofile/?accountId=76561198099938537" style={{border:"0px #ffffff none;"}} name="myiFrame"></iframe>
        </div>
    )
}