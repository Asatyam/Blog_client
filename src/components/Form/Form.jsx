import React, { useState } from "react";
import styles from "./Form.module.css"

export default function Form({id}){

    const [userName, setUsername] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className={styles['form-container']}>
            <form action={`http://localhost:4000/api/posts/${id}/comments`} method="POST">
                <div className={styles.username}>
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" value={userName} onChange={(evt)=>setUsername(evt.target.value)} required/>
                </div>
                <div className={styles.content}>
                    <label for="content">Content</label>
                    <textarea type="text" name="content" id="content" value={content} onChange={(evt)=>setContent(evt.target.value)} required/>
                </div>
                <button type="submit">Done</button>
                
            </form>
        </div>
    )
}