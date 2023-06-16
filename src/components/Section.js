
import { useUser } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import { FollowCard } from "./FollowCard";

export const Section = () => {
    const {users} = useUser();
    const {loggedUser} = useAuth();

    const notfollowedUsers = users.filter(({username}) => loggedUser?.following?.every(user => user.username !== username)).filter((user => user.username !== loggedUser.username));
    
    return(
        <div className="bg-primary_bg text-secondary_bg w-1/4 p-4 text-lg">
        {
          notfollowedUsers.length > 0 && 
          <div className="bg-secondary_bg text-color p-4 sticky top-20 rounded-md">
            <h2>Suggested Users</h2>
           {
            notfollowedUsers.map((user) => <FollowCard {...user} key={user._id}/>)
           }
        </div>
        }
        </div>
    )
}