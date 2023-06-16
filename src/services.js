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
        dispatch({type:"Add_Post",payload:data.posts});
    }
    catch(error){
        console.log(error);
    }
}

export const likePost = async(token,dispatch,_id) => {
    try{
        const data = await fetch(`/api/posts/like/${_id}`,
        {
            method : 'POST',
            headers: {
              authorization: token,
            },
          }
        )
        const result = await data.json();
       dispatch({type:"Like_Post",payload:result.posts})
     }
    catch(error){
        console.log(error);
    }
 }

 export const disLikePost = async(token,dispatch,_id) => {
    try{
        const data = await fetch(`/api/posts/dislike/${_id}`,
        {
            method : 'POST',
            headers: {
              authorization: token,
            },
          }
        )
        const result = await data.json();
       dispatch({type:"Dislike_Post",payload:result.posts})
     }
    catch(error){
        console.log(error);
    }
 }

 export const bookmarkPost = async(token,dispatch,_id,loggedUser,setLoggedUser) => {
    try{
        const data = await fetch(`/api/users/bookmark/${_id}`,
        {
            method : 'POST',
            headers:{
                authorization:token,
            }
        })
        const result = await data.json();
        setLoggedUser({...loggedUser,bookmarks:result.bookmarks})
    }
    catch(error){
        console.log(error);
    }
 }

 export const removeBookmark = async(token,dispatch,_id,loggedUser,setLoggedUser) => {
    try{
        const data = await fetch(`/api/users/remove-bookmark/${_id}`,
        {
            method : 'POST',
            headers:{
                authorization:token,
            }
        })
        const result = await data.json();
        setLoggedUser({...loggedUser,bookmarks:result.bookmarks})
    }
    catch(error){
        console.log(error)
    }
 }

 export const editPost = async(token,dispatch,id,data) => {
    try{
        const result = await axios.post(`/api/posts/edit/${id}`,

        {
            postData: {
                content : data,
            }
        },
        {
            headers:{
                authorization: token,
            }
        },)
        dispatch({type:"Edit_Post",payload:result.data.posts})
    }
    catch(error){
        console.log(error);
    }
 }

 export const deletePost = async(token,dispatch,id) =>{
    try{
        const result = await axios.delete(`api/posts/${id}`,
        {
            headers:{
                authorization: token,
            }
        },
        )
        dispatch({type:"Delete_Post",payload:result.data.posts})
    }
    catch(error){
        console.log(error);
    }
 }


