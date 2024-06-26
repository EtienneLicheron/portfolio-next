"use client";
import styles from "./about.module.css";

import {Scene} from "../components/threejs/scene";
import { useEffect, useState } from "react";

export default function About() {

    const [scene, setScene] = useState<any>();

    useEffect(() => {
    }, []);

    return (
        <div className={styles.about}>
            <h1>About</h1>
            <Scene />
        </div>
    )
}