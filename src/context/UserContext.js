
import { createContext,useContext,useState} from "react";
import axios from "axios";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

    const [users,setUsers] = useState([]);

    const getUsers = async() => {
        try{
            const {data} = await axios.get("/api/users");
            setUsers(data.users)
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <UserContext.Provider value = {{getUsers,users}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)