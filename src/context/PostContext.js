import { createContext,useContext, useReducer,useEffect } from "react";
import { reducer } from "../components/reducer";
import { getPosts } from "../services";

export const PostContext = createContext(null);

export const PostProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,{
        posts : [],
        filters : "",
    })

    useEffect(() => {
        getPosts(dispatch);
    },[]);
    
    return(
        <PostContext.Provider value={{...state,dispatch}}>
            {children}
        </PostContext.Provider>
    )
}

export const usePost = () => useContext(PostContext);