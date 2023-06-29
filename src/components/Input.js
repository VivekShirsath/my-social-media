import { useState } from "react";
import { usePost } from "../context/PostContext";
import { addPosts } from "../services";
import { useAuth } from "../context/AuthContext";

export const Input = () => {
   const [newPost,setNewPost] = useState({
    textContent : "",
    imageContent : null,
    videoContent : null,
   }); 
   const [initialPost,setInitialPost] = useState({
    textContent : "",
    imageContent : null,
   }); 
   const {dispatch} = usePost();
   const {token,loggedUser} = useAuth();

   const handleAdd = (e) => {
    e.preventDefault();
        addPosts(newPost.textContent,newPost.imageContent,newPost.videoContent,token,dispatch,loggedUser.firstName,
        loggedUser.lastName,loggedUser.imageId);
        setNewPost(initialPost)
        
   }
   const handleImageContent = (e) => { 
    const type = (e.target?.files[0]?.type)
    console.log(e.target?.files[0]?.type)
    if(e.target?.files[0]?.type === undefined) return;
    if(type === "image/png"){
        setNewPost({...newPost,imageContent:URL.createObjectURL(e.target.files[0]),videoContent:null})
    }
    else{
        setNewPost({...newPost,videoContent:URL.createObjectURL(e.target.files[0]),imageContent:null})
    }
   }
   
    return(
        <>
        <h4 className="text-2xl text-color p-4 text-center sticky top-0 backdrop-blur-sm z-50">Home</h4>
        <div className="flex gap-3 bg-primary_bg border-secondary_bg border-2">
        <img src={loggedUser?.imageId} alt="avatar" className="w-12 self-start mt-4"/>
        <form className="flex flex-col w-full">
        <input type="text" className = "p-4 border-0 outline-none text-secondary_bg placeholder-black bg-primary_bg text-lg"
        placeholder="What's happening?" 
        onInput={(e) => setNewPost({...newPost,textContent :e.target.value})}
        value={newPost?.textContent}
        />
        <div className="relative w-3/4">
        <img src={newPost?.imageContent} className="flex justify-center items-center"/>

        {newPost?.videoContent && <video className="w-full"autoPlay><source src={newPost?.videoContent}></source> </video>}

        {newPost?.imageContent || newPost?.videoContent ?
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 absolute top-3 
        right-3  fill-primary_bg cursor-pointer" onClick={() => setNewPost({...newPost,imageContent:null,videoContent:null})
        }>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        :
        <></>
}
        </div>
        <div className="flex gap-2 ml-auto mr-3 mb-2"> 
        <label for="file" className="cursor-pointer" >
        <input id="file" type="file" accept="image/*, video/*" className="hidden" onChange={(e) => handleImageContent(e)}/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-12 text-secondary_bg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        </label>
        <button className= "bg-cta_color text-secondary_bg rounded-md p-2 font-semibold"
        disabled= {newPost?.textContent=== "" && newPost.imageContent === null && newPost.videoContent === null}
        onClick = {(e) => handleAdd(e)}>
            Post</button>
            </div>
         </form>

         </div>
        </>
    )
}