import { useState } from "react"
import { editPost } from "../services"
import { useAuth } from "../context/Authcontext"
import { usePost } from "../context/PostContext"
import { getPosts } from "../services"

export const EditModal = ({content,imageId,imageContent,videoContent,id,setModalOpen}) => {
    const {loggedUser,token} = useAuth();
    const {dispatch} = usePost();

    const [editDetails,setEditDetails] = useState({
        content,
        imageId,
        imageContent,
        videoContent,
    })
    
    const handleSave = (e) => {
        e.preventDefault();
       editPost(token,dispatch,id,editDetails.content,editDetails.imageContent,editDetails.videoContent)
       getPosts();
       setModalOpen(false);
    }

    const handleCancel = (e) => {
       e.preventDefault();
       setModalOpen(false);
    }
    const handleView = (e) => { 
        const type = (e.target?.files[0]?.type)
       
        if(e.target?.files[0]?.type === undefined) return;
        if(type === "image/png" || type === "image/jpeg" || type === "image/jpg"){
            setEditDetails({...editDetails,imageContent:URL.createObjectURL(e.target.files[0]),videoContent:null})
        }
        else{
            setEditDetails({...editDetails,videoContent:URL.createObjectURL(e.target.files[0]),imageContent:null})
        }
       }
   
    return(
        <div>
            <div className="flex justify-center items-center min-h-screen
         bg-primary_bg/[.30] fixed top-0 left-0 right-0 z-20">
            
        <form className="bg-black  text-color bg-secondary_bg p-3
        flex flex-col gap-3 justify-center items-center rounded-md shadow-md shadow-primary_bg md:w-7/12 z-30 w-3/4">
            <img src={imageId} alt="avatar" className="w-12"/>        
            <textarea className='p-2 border-0 outline-none  text-lg bg-secondary_bg text-color w-full text-center flex justify-center min-h-fit overflow-scroll md:overflow-hidden md:h-fit' onInput={(e) => setEditDetails({...editDetails,content:e.target.value})} placeholder="What's Happening?" value={editDetails.content}/>
                
             <div className="relative">
                 {
                editDetails?.imageContent && <img src={editDetails.imageContent} alt="post" className='flex justify-center rounded-md items-center relative md:w-2/4 md:h-2/4 md:self-center md:ml-auto md:mr-auto'/>
            }
            {
                editDetails?.videoContent && <video className='flex justify-center rounded-md items-center relative md:w-3/4 md:h-2/4 md:self-center md:ml-auto md:mr-auto' autoPlay><source src={editDetails.videoContent}></source></video>
            }
         {editDetails.imageContent || editDetails.videoContent ?
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-10 h-10 absolute top-3 
        right-3  fill-primary_bg cursor-pointer" onClick={() => setEditDetails({...editDetails,imageContent:null,videoContent:null})
        }>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        : <></>}
        </div>
            <div className="flex gap-3">
            <label htmlFor="edit" className="cursor-pointer" >
        <input id="edit" type="file" accept="image/*, video/*" className="hidden" onChange={(e) => handleView(e)}/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-12 text-secondary_bg fill-color">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        </label>
            <button onClick = {(e) => handleSave(e)} className= "bg-cta_color text-secondary_bg rounded-md p-2">Save</button>
            <button onClick = {(e) => handleCancel(e)} className= "bg-cta_color text-secondary_bg rounded-md p-2">Cancel</button>
          </div>
        </form>
        </div>
        </div>
    )
}

// onClick={() => setEditDetails(
//     {...editDetails,imageContent:null,videoContent:null})