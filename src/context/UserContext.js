
import { createContext,useContext,useState} from "react";
import { useAuth } from "./Authcontext";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

    const [users,setUsers] = useState([]);
    const {loggedUser,setLoggedUser} = useAuth();

    const toastSuccess = (message) => {
        toast.success(message, {
            position: "bottom-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

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

    const updateUsers = (data,type,val) => {
        if(type === "follow"){
            const {user,followUser} = data;
          const update = users.map((val) => val.username === user.username ?
          {...val,following : user.following} : val).map((val) => val.username === followUser.username ?
          {...val,followers : followUser.followers} : val);
          setUsers(update);
          setLoggedUser(user);
          val === "add" ? toastSuccess(`Following ${followUser?.firstName}`)
          :toastSuccess(`Unfollowed ${followUser?.firstName}`)
        }
        else if(type === "bookmark"){
            setUsers(users.map((user) => user.username === loggedUser.username ? 
            {...user,bookmarks: data.bookmarks} : user));
            setLoggedUser({...loggedUser,bookmarks:data.bookmarks})
            val === "add" ? toastSuccess("Added to Bookmarks") :toastSuccess("Removed from Bookmarks")
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