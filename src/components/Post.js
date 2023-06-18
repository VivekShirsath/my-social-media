import { useState,useEffect } from "react"
import load from '../images/loader.svg'
import { usePost } from "../context/PostContext";
import { useUser } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import {Card} from "./Card";
import { filterLogic } from "../helpers";

export const Post = ({type}) => {
    const {posts,filters} = usePost();
    const [loading,setisLoading] = useState(true);
    const {loggedUser} = useAuth();
    console.log(type);

    useEffect(() => {
        setisLoading(false);
    },[]);

        const filterPosts = filterLogic(loggedUser,posts,filters)

        const bookMarkPosts = posts.filter((post) => loggedUser.bookmarks?.some(user => user === post._id))
        console.log(loggedUser.bookmarks)

    return(
        <>
        {
            loading ? <img src={load} className="w-20 bg-secondary_bg text-center mx-auto" alt="loader"/>
            :
            type === "home" ? filterPosts?.map((post) => <Card {...post} key={post._id}/>)   
            :
            type === "explore" ? 
            <>
            <h4 className="text-2xl text-color p-4 text-center sticky top-0 backdrop-blur-sm z-50 border-b-2">Explore</h4>
             {posts?.map((post) => <Card {...post} key={post._id}/>) 
                }
            </>
            :
            type === "bookmarks" ?
            <>
            <h4 className="text-2xl text-color p-4 text-center sticky top-0 backdrop-blur-sm z-50 border-b-2">BookMarks</h4>
             { bookMarkPosts.length > 0 ? bookMarkPosts?.map((post) => <Card {...post} key={post._id}/>) 
             : <h3 className = "text-color text-lg text-center mt-2">No BookMarks</h3>
                }
            </>
            :
            <></>
        }   
        </>
    )
}