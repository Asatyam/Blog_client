import React from "react";
import styles from "./PostCard.module.css"

export default function PostCard({post}){

    return(
       
        <div className={styles['post-card']}>
            <div className={styles.author}>
                {post.author}
            </div>
            <div className={styles.title}>
                <a href={`/posts/${post._id}`}>
                        {post.title}
                </a>
            </div>
            <div className={styles.date}>
                {post.date}
            </div>
        </div>
    )
}