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
        <div className="flex relative p-2 items-center flex-col">
        <div role="textbox" contentEditable="true" className = "p-4 border-0 text-color"
        placeholder="What's happening?" 
        onInput={(e) => setNewPost(e.target.value)}
        value={newPost}
        ></div>
        <div>
        <input type="file"/>
        <button className= "bg-cta_color text-secondary_bg rounded-md p-1"
        disabled= {newPost?.length === 0}
        onClick = {() => handleAdd()}>
            Post</button>
            </div>
         </div>
        </>
    )
}