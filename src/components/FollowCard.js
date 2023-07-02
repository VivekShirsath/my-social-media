
import { followUser } from "../services";
import { useAuth } from "../context/authContext";
import { useUser } from "../context/UserContext";
import { NavLink } from "react-router-dom";

export const FollowCard = ({username,firstName,lastName,imageId,_id}) => {
    const {updateUsers} = useUser()
    const {token} = useAuth();

    const handleFollow = (e) => {
       e.stopPropagation();
       followUser(token,_id,updateUsers)
    }
    return(
        <>
        <div className="flex p-2 text-base justify-between">
        <NavLink to = {"/profile/" + username}>
            <div className="flex justify-between">
                <img src={imageId} alt="avatar" className="w-11"/>
                <div className="flex flex-col ml-2">
                <h3>{firstName} {lastName}</h3>
                <p>@{username}</p>
                </div>
            </div>
       </NavLink>
            <button className= "bg-cta_color text-secondary_bg rounded-md p-1" onClick = {(e) => handleFollow(e)}>
                Follow</button>
            </div>
        </>
    )
}