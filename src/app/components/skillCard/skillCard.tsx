import Image from 'next/image'
import styles from './skillCard.module.css'
import { useEffect, useState } from 'react'

export const SkillCard = ({title, url} : {title: string, url: string}) => {

    return (
        <div className={styles.skill_card}>
            <Image src={`/images/${url}.png`} alt={title} width={50} height={50}/>
            <h1>
                {title}
            </h1>
        </div>
    )
}