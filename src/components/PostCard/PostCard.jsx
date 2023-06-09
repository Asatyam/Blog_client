import React from "react";
import styles from "./PostCard.module.css"
import Link from "next/link";
export default function PostCard({post}){

    
    return(
       
        <div className={styles['post-card']}>
            <div className={styles.author}>
                {post.author?post.author.username:"Anonymous"}
            </div>
            <div className={styles.title}>
                <Link href={`/posts/${post._id}`} scroll={false}>
                        {post.title}
                </Link>
            </div>
            <div className={styles.date}>
                {post.date}
            </div>
        </div>
    )
}