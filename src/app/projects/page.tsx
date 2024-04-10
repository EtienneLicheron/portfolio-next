"use client";
import next from "next";
import styles from "./page.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Projects() {

    const projects = [
        {
            id: 1,
            title: "My Portfolio",
            description: "Repositoy of this website. I learned how to use Next.js by creating this website.",
            link: "https://github.com/EtienneLicheron/portfolio-next",
            tags: ["Next.js", "React", "TypeScript", "CSS"]
        },
        {
            id: 2,
            title: "R-Type",
            description: "Cross-platform and multiplayer game project based on RType. I worked on the server side and the game engine. The game is written in C++ and uses the SFML and Asio library.",
            link: "https://github.com/EtienneLicheron/Rtype-epitech",
            tags: ["C++", "SFML", "TCP", "UDP"]
        },
        {
            id: 3,
            title: "Whanos",
            description: "Devops project using Docker and Jenkins. The goal was to deploy an image to a Docker Registry and deploy it on a Kubernetes cluster.",
            link: "https://github.com/EtienneLicheron/Whanos-epitech",
            tags: ["Docker", "Jenkins", "Kubernetes"]
        },
        {
            id: 4,
            title: "Area",
            description: "FullStack project using React, React Native and NestJS. This application allows you to connect all your accounts (Spotify, Deezer, Gmail, etc.) and create automations between them.",
            link: "https://github.com/EtienneLicheron/Area-epitech",
            tags: ["React", "React Native", "NestJS", "OAuth2"]
        },
        {
            id: 5,
            title: "AbstractVM",
            description: "A simple virtual machine that is able to interpret programs that are written in a simplified assembler language written in C++.",
            link: "https://github.com/EtienneLicheron/AbstractVM",
            tags: ["C++"]
        }
    ]

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        if (slider) {
            slider.scrollLeft = slider.scrollLeft - 435;
        }
    };
    
    const slideRight = () => {
        let slider = document.getElementById("slider");
        if (slider) {
            slider.scrollLeft = slider.scrollLeft + 435;
        }
    };

    return (
        <div className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.projects_container} id="slider">
                    {projects.map(project => (
                        <div className={styles.project} key={project.id}>
                            <h2>{project.title}</h2>
                            <div className={styles.tags}>
                                {project.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub<FaArrowRightLong/></a>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.scrollbuttons}>
                <button title="scroll left" className={styles.btn} onClick={slideLeft}>
                    <AiOutlineArrowLeft />
                </button>
                <button title="scroll right" className={styles.btn} onClick={slideRight}>
                    <AiOutlineArrowRight />
                </button>
            </div>
        </div>
    )
}