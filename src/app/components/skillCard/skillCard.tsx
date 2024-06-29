import Image from 'next/image'
import styles from './skillCard.module.css'
import { Flex } from '@radix-ui/themes'

export const SkillCard = ({title, url} : {title: string, url: string}) => {
    return (
        <Flex className={styles.skill_card} width={{initial: '25vw', lg: '7vw', md: '12vw'}} height={{initial: '25vw', lg: '7vw', md: '12vw'}}>
            <Flex width={{lg: '45px', initial: '32px'}} height={{lg: '45px', initial: '32px'}} align={'center'} justify={'center'} position={'relative'}>
                <Image src={`/images/${url}.png`} alt={title} width={45} height={45} />
            </Flex>
            <h1>
                {title}
            </h1>
        </Flex>
    )
}