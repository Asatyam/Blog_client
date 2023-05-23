import React, { useEffect, useState } from "react";
import axios from "axios";
import SinglePost from "@/components/SinglePost/SinglePost";

export default function Post({post}){

    return(
       <SinglePost post={post}/>
    )

}

export async function getStaticPaths(){

    let res = await axios.get("https://blogapi-asatyam.onrender.com/api/posts");
    const posts = res.data;
       
    const paths = posts.map(post=>`/posts/${post._id}`);
    return {paths, fallback: false};
}
export async function getStaticProps({params}){

    const res  = await axios.get(`https://blogapi-asatyam.onrender.com/api/posts/${params.id}`);
    const post = res.data.post;
    return {
        props: {params,post},
    };
}