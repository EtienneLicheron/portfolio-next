"use client";
import styles from "./about.module.css";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SkillCard } from "../components/skillCard/skillCard";

import { skills } from "./skills";

export default function About() {

    return (
        <div className={styles.about}>
            <div className={styles.about_left}>
                <h1>About me</h1>
                <div className={styles.card}>
                    From south of France. Currently living in Paris,
                    I am a junior developer passionate about technology and innovation. I master several languages thanks to school and personal projects.
                </div>
                <h1>Studies</h1>
                <div className={styles.card}>
                    <Image src={'/images/epitech.png'} alt="epitech" width={30} height={30} />
                    <span>Expert Diploma in Information Technology - Epitech Montpellier/Paris (France)</span>
                </div>
                <div className={styles.card}>
                    <Image src={'/images/heriot.png'} alt="epitech" width={30} height={30} />
                    MsC Software Engineering - Heriot-Watt (Edinburgh)
                </div>
            </div>
            <div className={styles.about_center}>
                <Image src="/memoji.png" alt="memoji" width={250} height={250} />
            </div>
            <div className={styles.about_right}>
                <h1>Technical Skills</h1>
                <div className={styles.skills}>
                    { skills.map((skill, index) => (
                        <SkillCard key={index} title={skill.title} url={skill.url}/>
                    ))}
                </div>
            </div>
        </div>
    )
}