import { createContext,useContext, useReducer,useEffect } from "react";
import { reducer } from "../components/reducer";
import { getPosts } from "../services";
import { useAuth } from "./AuthContext";

export const PostContext = createContext(null);

export const PostProvider = ({children}) => {
    const {loggedUser} = useAuth();
    const [state,dispatch] = useReducer(reducer,{
        posts : [],
        filters : "Latest",
    })

    useEffect(() => {
        getPosts(dispatch);
    },[]);
    
    
    return(
        <PostContext.Provider value={{...state,dispatch,getPosts}}>
            {children}
        </PostContext.Provider>
    )
}

export const usePost = () => useContext(PostContext);