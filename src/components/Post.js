import { useState,useEffect,useRef,useCallback} from "react"
import load from '../images/loader.svg'
import { usePost } from "../context/PostContext";
import { useUser } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import {Card} from "./Card";
import { filterLogic } from "../helpers";


export const Post = ({type}) => {
    const {filters,posts,getPosts,dispatch} = usePost();
    const [loading,setisLoading] = useState(true);
    const {loggedUser} = useAuth();

    useEffect(() => {
        getPosts(dispatch,setisLoading,loading);
      },[]);

        const filterPosts = filterLogic(loggedUser,posts,filters)
        console.log("render");
       
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
             {posts?.map((post,index) => {
                if(posts.length === index+1){
                  return  <Card {...post} key={post._id}/>
                }
                else{
                    return  <Card {...post} key={post._id}/> 
                }
             }
             ) 
                }
            </>
            :
            <></>
        }   
        </>
    )
}