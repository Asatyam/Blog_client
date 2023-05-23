import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Post({post}){

    return(
        <div>
            {post.title}
            
        </div>
    )

}

export async function getStaticPaths(){

    let res = await axios.get("http://localhost:4000/api/posts");
    const posts = res.data;
       
    const paths = posts.map(post=>`/posts/${post._id}`);
    return {paths, fallback: false};
}
export async function getStaticProps({params}){

    const res  = await axios.get(`http://localhost:4000/api/posts/${params.id}`);
    const post = res.data.post;
    console.log(post);
    return {
        props: {params,post},
    };
}