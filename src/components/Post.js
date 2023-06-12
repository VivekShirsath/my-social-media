import { useState,useEffect } from "react"
import load from '../images/loader.svg'
import { usePost } from "../context/PostContext";
import {Card} from "./Card"

export const Post = () => {
    const {posts,getPosts} = usePost();
    const [loading,setisLoading] = useState(true);

    useEffect(() => {
        getPosts();
        setisLoading(false);
    },[])
    console.log(posts);
    return(
        <>
        {
            loading ? <img src={load} className="w-20 bg-secondary_bg text-center mx-auto" alt="loader"/>
            :
            posts?.map((post) => <Card {...post} key={post._id}/>)   
        }   
        </>
    )
}