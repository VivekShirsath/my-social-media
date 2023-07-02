
import { useUser } from "../context/UserContext";
import { useAuth } from "../context/Authcontext";
import { FollowCard } from "./FollowCard";
import { SearchUsers } from "./SearchUsers";

export const Section = () => {
    const {users} = useUser();
    const {loggedUser} = useAuth();

    const notfollowedUsers = users.filter(({username}) => loggedUser?.following?.every(user => user.username !== username)).filter((user => user.username !== loggedUser.username));
    
    return(
        //  <div className="bg-primary_bg text-secondary_bg w-1/4 p-4 flex flex-col gap-5 sticky top-0 min-h-screen self-start">
           <div className="hidden md:bg-primary_bg md:text-secondary_bg md:w-1/4 md:p-4 md:flex md:flex-col md:sticky md:gap-5 md: min-h-screen md:top-0 md:self-start md:min-h-screen"> 
          <SearchUsers />
        {
          <div className="bg-secondary_bg text-color p-4 rounded-md z-10">
            <h2>Suggested Users</h2>
           {
            notfollowedUsers.map((user) => <FollowCard {...user} key={user._id}/>)
           }
        </div>
        }
        </div>
    )
}