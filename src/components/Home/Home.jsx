/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import PostCard from "../PostCard/PostCard";
export default function Home(){

     const posts = [
        {
            _id: 1,
            title: "Test title 1",
             author: "Test user 1",
            content: "Test content 1",
            date: (new Date()).toLocaleString(),
             published: true,
        },
         {
            _id: 2,
            title: "Test title 2",
             author: "Test user 2",
            content: "Test content 2",
            date: (new Date()).toLocaleString(),
             published: true,
        }
        ,
         {
            _id: 3,
            title: "Test title 3",
             author: "Test user 3",
            content: "Test content 3",
            date: (new Date()).toLocaleString(),
             published: true,
        },
         {
            _id: 4,
            title: "Test title 4",
             author: "Test user 4",
            content: "Test content 4",
            date: (new Date()).toLocaleString(),
             published: true,
        },
         {
            _id: 5,
            title: "Test title 5",
             author: "Test user 5",
            content: "Test content 5",
            date: (new Date()).toLocaleString(),
             published: true,
        },
         {
            _id: 6,
            title: "Test title 6",
             author: "Test user 6",
            content: "Test content 6",
            date: (new Date()).toLocaleString(),
             published: true,
        }
    ]
    return(
        <div className={styles.home}>
            {posts.map(post=><PostCard key = {post._id} post = {post} />)}
        </div>
    
    )
}