
import axios from 'axios';
import { createContext,useContext,useState } from "react";
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const storage = JSON?.parse(localStorage?.getItem('loginDetails'));
    const [token,setToken] = useState(storage?.token);
    const [loggedUser,setLoggedUser] = useState(storage?.user);

    const toastSuccess = (message) => {
        toast.success(message, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const signUpHandler = async({ firstName,lastName,
    username,
    password,
    }) => 
    {
        console.log(firstName)
    try{
        const {status,data} = await axios.post("/api/auth/signup",{
            username,
            password,
            firstName,
            lastName,
            imageId:"https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
    })
        if(status === 201){
            localStorage.setItem('loginDetails',JSON.stringify({
                token : data.encodedToken,
                user : data.createdUser,
            }));
            setToken(data.encodedToken);
            setLoggedUser(data.createdUser);
            toastSuccess(`Welcome ${data.createdUser?.firstName}`)
        }
       console.log(data)
    }
    catch(error){
        console.log(error);
    }
}

    const logInHandler = async(username,password) => {
        try{
            const {status,data} = await axios.post("/api/auth/login",{
                username,
                password,
            });
            if(status === 201 || status === 200){
                localStorage.setItem('loginDetails',JSON.stringify({
                    token : data.encodedToken,
                    user : data.foundUser,
                }));
                setToken(data.encodedToken);
                setLoggedUser(data.foundUser);
                toastSuccess(`Welcome ${data.foundUser?.firstName}`)
            }
            console.log(data)
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        <AuthContext.Provider value={{signUpHandler,token,loggedUser,logInHandler,setToken,setLoggedUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
