import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'
function Navbar() {
    return (
        <div className={styles.Navbar}>
            <h3>Vivek&apos;s Lab 🧪</h3>
            <Link passHref href='https://vivekkj.com'>
            <div className={styles.home_btn}>
                Home Page 🏠
            </div></Link>
        </div>
    )
}

export default Navbar