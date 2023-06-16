
import { createContext,useContext,useState} from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";

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

    const updateUsers = (data) => {
        const {user,followUser} = data;
        const nonloggeduser = users.filter((val) => val.username !== user.username && val.username !== followUser.username);
        setUsers([...nonloggeduser,user,followUser])
        setLoggedUser(user);
    }
    console.log(users);
    return(
        <UserContext.Provider value = {{getUsers,users,setUsers,updateUsers}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)