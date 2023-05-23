/* eslint-disable @next/next/no-img-element */
import React,{useEffect,useState} from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import PostCard from "../PostCard/PostCard";
import axios from "axios";

export default function Home(){

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
       axios.get("https://blogapi-asatyam.onrender.com/api/posts")
       .then((res)=>{
           console.log(res.data);
            setPosts(res.data);
       }) 
    },[])

    return(  
        <div className={styles.home}>
            {
                posts.map(post=><PostCard key = {post._id} post = {post} />)
            }
        </div>
    
    )
}
 