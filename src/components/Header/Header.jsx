import React from "react";
import styles from './Header.module.css';
import Link from "next/link";

export default function Header(){

    return (
        <div className={styles.heading}>
            <div className={styles['heading-text']}>
                <h1>Blog API</h1>
            </div>
            <nav>
                <Link href='/posts'>Posts</Link>
            </nav>
            
        </div>
    )
}