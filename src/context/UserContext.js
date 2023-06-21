
import { createContext,useContext,useState} from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";
import { useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

    const [users,setUsers] = useState([]);
    const {loggedUser,setLoggedUser} = useAuth();

    const getUsers = async() => {
        try{
            const {data} = await axios.get("/api/users");
            setUsers(data.users)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers();
    },[])

    const updateUsers = (data,type) => {
        if(type === "follow"){
            const {user,followUser} = data;
          const update = users.map((val) => val.username === user.username ?
          {...val,following : user.following} : val).map((val) => val.username === followUser.username ?
          {...val,followers : followUser.followers} : val);
          setUsers(update);
          setLoggedUser(user);
        }
        else if(type === "bookmark"){
            setUsers(users.map((user) => user.username === loggedUser.username ? 
            {...user,bookmarks: data.bookmarks} : user));
            setLoggedUser({...loggedUser,bookmarks:data.bookmarks})
        }
        else if(type === "edit"){
            setUsers(users.map((user) => user.username === loggedUser.username ? 
            {...data} : user));
            setLoggedUser({...data})
        }
    }
     console.log(users);
    return(
        <UserContext.Provider value = {{getUsers,users,setUsers,updateUsers}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)