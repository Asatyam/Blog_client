/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Home.module.css";
import Link from "next/link";

export default function Home(){

    return(
        <div className={styles.home}>
             <div className={styles['home-container']}>
                <img src="/images/about.jpg" alt="about-img"/>
                <p>
                This website is client part of 3 part website built using MERN Stack.
                <br/>
                This is the link for <a href="https://github.com/Asatyam/BlogAPI">server</a> and this for CMS.
            </p>
            <button><Link href = '/posts'>Posts</Link></button>
            </div>
        </div>
    )
}