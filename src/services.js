import axios from "axios";

export const getPosts = async(dispatch) => {
    try{
        const {data} = await axios.get("/api/posts");
        dispatch({type : "Post_Feed",payload:data.posts})
    }
    catch(error){
        console.log(error);
    }
}

export const addPosts = async(post,token,dispatch,firstName,lastName,imageId) => {
  
    try{
        const {data} = await axios.post("/api/posts",
        {
            postData: {
                content : post,
                firstName,
                lastName,
                imageId,
            }
        },
        {
            headers:{
                authorization: token,
            }
        },
        )
        console.log(data.posts);
        dispatch({type:"Add_Post",payload:data.posts});
    }
    catch(error){
        console.log(error);
    }
}