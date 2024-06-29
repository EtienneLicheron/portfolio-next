"use client";
import styles from "./about.module.css";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SkillCard } from "../components/skillCard/skillCard";

import { skills } from "./skills";
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";

export default function About() {

    return (
        <Flex direction={{initial: 'column', lg: 'row'}} justify={{lg: 'center'}} align={'center'}  height={'calc(100vh - 64px)'}>
            <Flex direction="column" gap="5" width={{initial: '90vw', lg: '40vw'}} align={'center'}>
                <h1>
                    About me
                </h1>
                <Flex maxWidth={{initial: '90vw', lg: '35vw'}}>
                    <Text align={'center'}>
                        I am a 21 years old Junior Developer currently in my fourth year at Epitech. My academic journey has equipped me with a solid foundation in various programming languages and software development methodologies. I have a keen interest in both front-end and back-end development, and I am constantly striving to expand my knowledge and skills in these areas. My experience at Epitech has also fostered my ability to work effectively in team settings, adapt to new technologies quickly, and solve complex problems creatively. I am passionate about coding and eager to contribute to innovative projects that make a difference.
                    </Text>
                </Flex>
                <h1>
                    Studies
                </h1>
                <Box width={{initial: '90vw', md: '40vw', lg: '20vw'}}>
                    <Card>
                        <Flex gap="3" align="center">
                        <Avatar size="3" src="/images/epitech.png" fallback="T"/>
                        <Box>
                            <Text as="div" size="2" weight="bold">
                            Epitech Montpellier (France)
                            </Text>
                            <Text as="div" size="2" color="gray">
                            Expert Diploma in Information Technology
                            </Text>
                        </Box>
                        </Flex>
                    </Card>
                </Box>
                <Box width={{initial: '90vw', md: '40vw', lg: '20vw'}}>
                    <Card>
                        <Flex gap="3" align="center">
                        <Avatar size="3" src="/images/heriot.png" fallback="T"/>
                        <Box>
                            <Text as="div" size="2" weight="bold">
                            Heriot Watt University (Edinburgh)
                            </Text>
                            <Text as="div" size="2" color="gray">
                            MsC software engineering
                            </Text>
                        </Box>
                        </Flex>
                    </Card>
                </Box>
            </Flex>
            <Flex direction="column" display={{initial: 'none', lg: 'flex'}}>
                <Image src="/memoji.png" alt="Profile" width={200} height={200} />
            </Flex>
            <Flex direction="column" width={{initial: '90vw', lg: '40vw'}} align={'center'}>
                <h1>Technical Skills</h1>
                <Flex direction={{initial: 'row', lg: 'column'}} gap={'4'} align={'center'} justify={'center'} wrap={'wrap'} height={{initial: '50vh', lg: '50vh'}} width={{initial: '90vw', lg: '30vw', md: '60vw'}}>
                    {skills.map((skill, index) => (
                        <SkillCard key={index} title={skill.title} url={skill.url} />
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}