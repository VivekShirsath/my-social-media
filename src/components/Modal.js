import { useAuth } from "../context/AuthContext"
import { useState} from "react";
import { useUser } from "../context/UserContext";
import { usePost } from "../context/PostContext";
import {NavLink} from "react-router-dom"
import { editUser ,getPosts } from "../services";


export const Modal = ({modalOpen,setModalOpen}) => {
    const {loggedUser,token} = useAuth();
    const {updateUsers,getUsers} = useUser();
    const {dispatch,posts,getPosts} = usePost();
    const [editData,setEditData] = useState(
        {
        imageId : loggedUser.imageId,
        bio : loggedUser.bio,
        github : loggedUser.github,
        }
    )

   

    const handleSave = async(e) => {
       e.preventDefault();
       await editUser(token,editData,updateUsers,getUsers)
       const updatedPost = posts?.map((post) => post.username === loggedUser.username ? {...post,imageId:editData.imageId} : post)
       dispatch({type:"Edit_Post",payload : updatedPost})
       getPosts(dispatch);
       setModalOpen(false);
    }
    
    const handleImage = (e) => {
        setEditData({...editData,imageId : e.target.src})
    }
    
    const handleCancel = (e) => {
      e.preventDefault();
      setModalOpen(false);
    }

    return(
        <div className="flex justify-center items-center min-h-screen
         bg-primary_bg/[.30] fixed top-0 left-0 right-0 z-20">
        <form className="bg-black z-auto text-color bg-secondary_bg p-3
        flex flex-col gap-3 justify-center items-center rounded-md shadow-md shadow-primary_bg ">
          <div className="flex gap-3 items-center">
          <img src={loggedUser?.imageId} alt="avatar"  className="w-12 self-start"/>
          <h3>Edit Profile</h3>
          </div>
          <div>
            <div className="flex flex-col gap-3 items-center flex-wrap">
                <p>Choose Avatar for your profile:</p>
                <div className="flex gap-5 w-2/4 flex-wrap">
                 <img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png" alt="avatar" className="w-12 cursor-pointer hover:bg-primary_bg hover:rounded-sm" onClick = {(e) => handleImage(e)}/>
                 
                 <img src="https://cdn-icons-png.flaticon.com/128/4140/4140061.png" alt="avatar" className="w-12"  onClick = {(e) => handleImage(e)}/>
                 <img src="https://cdn-icons-png.flaticon.com/128/4140/4140051.png" alt="avatar" className="w-12"  onClick = {(e) => handleImage(e)}/> 
                 <img src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" alt="avatar" className="w-12"  onClick = {(e) => handleImage(e)}/>  
                 <img src="https://cdn-icons-png.flaticon.com/128/4139/4139981.png" alt="avatar" className="w-12"  onClick = {(e) => handleImage(e)}/>  
                 <img src="https://cdn-icons-png.flaticon.com/128/4140/4140060.png" alt="avatar" className="w-12"  onClick = {(e) => handleImage(e)}/>    
                </div>
             </div> 
             </div> 
             <div className="flex flex-col gap-2 justify-center w-full">
                <label className="self-center">Bio</label>
                <input type="text" className="bg-primary_bg rounded-md text-secondary_bg p-1 w-full" value={editData.bio}
                onChange={(e) => setEditData({...editData,bio:e.target.value})}/>
             </div> 
             <div className="flex flex-col gap-2 justify-center w-full">
                <label className="self-center">Github</label>
                <input type="url" className="bg-primary_bg rounded-md text-secondary_bg p-1 w-full" value={editData.github}
                onChange={(e) => setEditData({...editData,github:e.target.value})}
                required pattern="https://.*"/>
             </div> 
          <div>
            <button onClick = {(e) => handleSave(e)}>Save</button>
            <button onClick = {(e) => handleCancel(e)}>Cancel</button>
          </div>
        </form>
        </div>
    )
}