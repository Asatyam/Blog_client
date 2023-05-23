import React, { useState } from "react";
import styles from "./Form.module.css"
import axios from "axios";
export default function Form({id}){

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:4000/api/posts/${id}/comments`,{username: userName, content: content})
        .then(res=>{
            console.log(res);
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }

    const [userName, setUsername] = useState("");
    const [content, setContent] = useState("");


    return (
        <div className={styles['form-container']}>
            <form  onSubmit={handleSubmit}>
                <div className={styles.username}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={userName} onChange={(evt)=>setUsername(evt.target.value)} required/>
                </div>
                <div className={styles.content}>
                    <label htmlFor="content">Content</label>
                    <textarea type="text" name="content" id="content" value={content} onChange={(evt)=>setContent(evt.target.value)} required/>
                </div>
                <button type="submit">Done</button>
                
            </form>
        </div>
    )
}