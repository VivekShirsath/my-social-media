import {useState} from "react";
import { useUser } from "../context/UserContext";
import { NavLink } from "react-router-dom";

export const SearchUsers = () => {
  
    const [query,setQuery] = useState("");
    const [searchUser,setSearchUser] = useState([]);
    const {users} = useUser();


    const handleInput = (e) => {
          setQuery(e.target.value);
          findUser(e.target.value)
    }

    const findUser = (val) => {
       const user = users.filter(({firstName,lastName,username}) => firstName.toLowerCase().includes(val.toLowerCase()) || lastName.toLowerCase().includes(val.toLowerCase()) || username.toLowerCase().includes(val.toLowerCase()))
       console.log(user);
       setSearchUser(user);
    }
    
    return(
        <div className="relative">
            <input type="text" className="bg-secondary_bg text-color p-2  rounded-md self-start "
            placeholder="Search Users" value={query} onInput={(e) => handleInput(e)}/>
            <div className="flex flex-col gap-1 rounded-md text-secondary_bg border border-secondary_bg absolute top-12 z-40 bg-primary_bg">
            {
              query && searchUser && 
              searchUser.map(({imageId,firstName,lastName,username}) => {
                return(
                  <NavLink to = {"/profile/" + username}>
                    <div className="flex gap-3 p-2">
                    <img src={imageId} className="w-11 inline-block"alt="avatar"/>
                    <div className="flex flex-col">
                    <div>{firstName} {lastName}</div>
                    <div>@{username}</div>
                    </div>
                    </div>
                    </NavLink>
                    
                )
              })
            }
            {
              query && searchUser?.length===0 ? <div className="p-2">No users found</div> : <></>
            }
            </div>
        </div>
    )
}