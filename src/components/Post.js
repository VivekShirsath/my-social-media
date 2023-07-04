import { useState,useEffect,useRef,useCallback} from "react"
import load from '../images/loader.svg'
import { usePost } from "../context/PostContext";
import { useUser } from "../context/UserContext";
import { useAuth } from "../context/Authcontext";
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
        
       
    return(
        <>
        {
            loading ? <img src={load} className="w-20 bg-secondary_bg text-center mx-auto" alt="loader"/>
            :
            type === "home" ? filterPosts?.map((post) => <Card {...post} key={post._id}/>)   
            :
            type === "explore" ? 
            <>
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