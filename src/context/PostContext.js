import { createContext,useContext, useReducer } from "react";
import { reducer } from "../components/reducer";
import axios from "axios";

export const PostContext = createContext(null);

export const PostProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,{
        posts : [],
        filters : "",
    })

    const getPosts = async() => {
        try{
            const {data} = await axios.get("/api/posts");
            dispatch({type : "Post_Feed",payload:data.posts})
        }
        catch(error){
            console.log(error);
        }
    }
    
    return(
        <PostContext.Provider value={{...state,getPosts,dispatch}}>
            {children}
        </PostContext.Provider>
    )
}

export const usePost = () => useContext(PostContext);