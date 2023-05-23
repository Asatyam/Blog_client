import React, { useState,useEffect } from "react";
import SingleComment from "../SingleComment/SingleComment";
import styles from "./Comments.module.css"
import axios from "axios";

export default function Comments({id}){

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/posts/${id}/comments`)
        .then((res)=>{
            setComments(res.data);
        })
        .catch(err=>setComments(null))
    },[id]);

    if(comments === null){
        return (
              <div className="comments">
                    No Comments yet
        </div>
        )
    }
    return (
        <div className="comments">

            {comments.map((comment)=> <SingleComment key= {comment._id} comment={comment}/>)}
        </div>
    )

}