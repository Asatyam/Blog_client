import React from "react";
import styles from "./SinglePost.module.css"
import Comments from "../Comments/Comments";
import Form from "../Form/Form";
export default function SinglePost({post}){

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <div className={styles.title}>
                    <h1>{post.title}</h1>
                </div>
                <div className = {styles.author}>
                    -{post.author.username}
                </div>
            </div>
            <div className={styles.content}>
                    {post.content}
                    
            </div>
            <Form id={post._id}/>
            <div className={styles.comments}>
                    <h3>Comments</h3>
                    <Comments id = {post._id}/>
            </div>
            
        </div>
    )

}