import { createContext,useContext, useReducer } from "react";
import { reducer } from "../components/reducer";

export const PostContext = createContext(null);

export const PostProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,{
        posts : [],
        filters : "",
    })
    
    return(
        <PostContext.Provider value={{...state,dispatch}}>
            {children}
        </PostContext.Provider>
    )
}

export const usePost = () => useContext(PostContext);