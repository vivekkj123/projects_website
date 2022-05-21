import { useTheme } from 'next-themes'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'
function Navbar() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => setMounted(true), [])
    if(!mounted) return null
    return (
        <div className={styles.Navbar}>
            <h3>Vivek&apos;s Lab 🧪</h3>
            <div className={styles.themeToggle} onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>
                <p>
                {theme === 'light' ? '🌝' : '🌞'}

                </p>
            </div>
            <Link passHref href='https://vivekkj.com'>
                <div className={styles.home_btn}>
                    Home Page 🏠
                </div></Link>
        </div>
    )
}

export default Navbar