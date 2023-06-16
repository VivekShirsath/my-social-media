
import { followUser } from "../services";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";

export const FollowCard = ({username,firstName,lastName,imageId,_id}) => {
    const {updateUsers} = useUser()
    const {token} = useAuth();
    return(
        <div className="flex p-2 text-base justify-between">
            <div className="flex justify-between">
                <img src={imageId} alt="avatar" className="w-11"/>
                <div className="flex flex-col ml-2">
                <h3>{firstName} {lastName}</h3>
                <p>@{username}</p>
                </div>
            </div>
            <button className= "bg-cta_color text-secondary_bg rounded-md p-1" onClick = {() => followUser(token,_id,updateUsers)}>
                Follow</button>
        </div>
    )
}