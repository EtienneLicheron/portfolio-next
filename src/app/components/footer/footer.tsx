import { Box } from '@radix-ui/themes'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <Box className={styles.scroll_container} display={{initial: 'none', xs: 'none', md: 'block', lg: 'block'}}>
            <div className={styles.scroll_text}>Open for work  •  Open for work  •  Open for work</div>
        </Box>
    )
}