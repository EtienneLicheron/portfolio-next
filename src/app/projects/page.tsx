"use client";
import { useRef, useEffect } from "react";

import { Badge, Box, Flex, Heading, Text } from "@radix-ui/themes";
import { FaArrowRightLong } from "react-icons/fa6";

import styles from "./projects.module.css";
import { projects } from "./projects";

function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
        const el :any = elRef.current;
        if (el) {
            const onWheel = (e: any) => {
                if (e.deltaY == 0) return;
                let slider = document.getElementById("slider");
                if (slider) {
                    slider.scrollLeft += Math.round(e.deltaY) * 0.8;
                    return;
                }
                e.preventDefault();
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);
    return elRef;
}

export default function Projects() {
    const scrollRef: any = useHorizontalScroll();

    return (
        <Flex direction={'column'} align={'center'} justify={{ lg: 'center' }} ref={scrollRef} height={'calc(100vh - 64px)'} >
            <Box display={{xs: 'none', initial: 'none', lg: 'block'}}>
                <Heading className={styles.title} size={{ md: '5', lg: '7'}}>$&#62; SOME PROJECTS I MADE <Text  size={{initial: '1', xs: '1', md: '3', lg: '5'}} className={styles.prompt}>█</Text></Heading>
            </Box>
            <Flex maxWidth={'100vw'}>
                <Flex className={styles.projects_container} id="slider" direction={{xs: 'column', initial: 'column', lg: 'row'}} overflowY={{xs: 'auto', initial: 'auto'}}>
                    {projects.map(project => (
                        <Flex className={styles.project} key={project.id} width={{xs: '90vw', initial: '90vw', lg: '20vw', md: '50vw'}}>
                            <h2>{project.title}</h2>
                            <Flex gap="2" mb={'2'}>
                                {project.tags.map(tag => (
                                    <Badge variant="soft" key={tag} color="indigo">{tag}</Badge>
                                ))}
                            </Flex>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.link.includes("github") ? "View on GitHub" : "View Website"}
                                <FaArrowRightLong/>
                            </a>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}