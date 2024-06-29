import Link from 'next/link'

import { Button, DropdownMenu, Flex, Text } from '@radix-ui/themes';

import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <Flex direction={'row'} height={'64px'} align={'center'}>
            <Link href='/' style={{position: 'absolute', margin: '8px'}}>
                <Text size={"6"} m={"2"} weight="bold">Etienne Licheron</Text>
            </Link>
            <Flex className={styles.links} display={{initial:'none', lg:'flex', xs: 'none', xl: 'flex', md: 'none'}} position={'relative'}>
                <Link href='/'  className={styles.button}>Home</Link>
                <Link href='/about' className={styles.button}>About</Link>
                <Link href='/projects' className={styles.button}>Projects</Link>
                <Link href='/contact' className={styles.button}>Contact</Link>
            </Flex>
            <Flex className={styles.links} display={{initial:'flex', lg:'none', xs: 'flex'}} position={'absolute'} right={'5'}>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="soft">
                            Menu
                            <DropdownMenu.TriggerIcon />
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content size={'2'} sideOffset={5}>
                        <DropdownMenu.Item><Link href='/' >Home</Link></DropdownMenu.Item>
                        <DropdownMenu.Item><Link href='/about'>About</Link></DropdownMenu.Item>
                        <DropdownMenu.Item><Link href='/projects'>Projects</Link></DropdownMenu.Item>
                        <DropdownMenu.Item><Link href='/contact'>Contact</Link></DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </Flex>
        </Flex>
    );
}