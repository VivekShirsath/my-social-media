import { useState } from "react";
import { usePost } from "../context/PostContext";
import { addPosts } from "../services";
import { useAuth } from "../context/AuthContext";

export const Input = () => {
   const [newPost,setNewPost] = useState(""); 
   const {dispatch} = usePost();
   const {token,loggedUser} = useAuth();

   const handleAdd = () => {
        addPosts(newPost,token,dispatch,loggedUser.firstName,
        loggedUser.lastName,loggedUser.imageId);
        setNewPost("");
   }

    return(
        <>
        <h4 className="text-2xl text-color p-4 text-center sticky top-0 backdrop-blur-sm z-50">Home</h4>
        <div className="flex relative p-2 items-center">
        <input type="text" className = "p-4 rounded-md text-secondary_bg w-full"
        placeholder="What's happening?" 
        onInput={(e) => setNewPost(e.target.value)}
        value={newPost}
        />
        <button className= "bg-cta_color text-secondary_bg rounded-md p-1 absolute right-3"
        disabled= {newPost.length === 0}
        onClick = {() => handleAdd()}>
            Post</button>
         </div>
        </>
    )
}