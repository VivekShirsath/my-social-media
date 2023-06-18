import { useState,useEffect } from "react"
import load from '../images/loader.svg'
import { usePost } from "../context/PostContext";
import {Card} from "./Card";
import { getPosts } from "../services";

export const ExploreFeed = () => {
    const {posts,dispatch} = usePost();
    const [loading,setisLoading] = useState(true);

    useEffect(() => {
        getPosts(dispatch);
        setisLoading(false);
    },[]);

    return(
        <div className="flex flex-col w-2/4 bg-secondary_bg">
            <h4 className="text-2xl text-color p-4 text-center sticky top-0 backdrop-blur-sm z-50 border-b-2">Explore</h4>
            {
            loading ? <img src={load} className="w-20 bg-secondary_bg text-center mx-auto" alt="loader"/>
            :
            posts?.map((post) => <Card {...post} key={post._id}/>)   
        }  
        </div>
    )
}