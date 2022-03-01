import styles from './Footer.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Footer() {
    const router = useRouter();
    const getLink = () => {
        if (router.pathname === '/doot') {
            return (
                <Link href="/">
                    home
                </Link>
            )
        } else {
            return (
                <Link href="/doot">
                    doot
                </Link>
            )
        }
    }

    return (
        <div className={styles.footer}>
            {getLink()}
        </div>
    )
}