import { useState,useEffect } from "react"
import load from '../images/loader.svg'
import { usePost } from "../context/PostContext";
import { useUser } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import {Card} from "./Card"

export const Post = () => {
    const {posts,getPosts} = usePost();
    const [loading,setisLoading] = useState(true);
    const {getUsers,users} = useUser();
    const {loggedUser} = useAuth();
    useEffect(() => {
        getPosts();
        getUsers();
        setisLoading(false);
    },[])

    
        const usernames = loggedUser?.following?.map(({username}) => username);
        const updated = usernames && [loggedUser?.username,...usernames]
        const followingPosts = posts?.filter(({username}) => updated?.some(val => val === username));
        console.log(followingPosts,updated);
    
    return(
        <>
        {
            loading ? <img src={load} className="w-20 bg-secondary_bg text-center mx-auto" alt="loader"/>
            :
            followingPosts?.map((post) => <Card {...post} key={post._id}/>)   
        }   
        </>
    )
}