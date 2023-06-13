import { useState,useEffect } from "react"
import load from '../images/loader.svg'
import { usePost } from "../context/PostContext";
import { useUser } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import {Card} from "./Card";
import { filterLogic } from "../helpers";
import { getPosts } from "../services";

export const Post = () => {
    const {posts,filters,dispatch} = usePost();
    const [loading,setisLoading] = useState(true);
    const {getUsers} = useUser();
    const {loggedUser} = useAuth();


    useEffect(() => {
        getPosts(dispatch);
        getUsers();
        setisLoading(false);
    },[]);

        const filterPosts = filterLogic(loggedUser,posts,filters)

    return(
        <>
        {
            loading ? <img src={load} className="w-20 bg-secondary_bg text-center mx-auto" alt="loader"/>
            :
            filterPosts?.map((post) => <Card {...post} key={post._id}/>)   
        }   
        </>
    )
}