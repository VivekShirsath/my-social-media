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
        console.log(result);
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

 export const bookmarkPost = async(token,_id,updateUsers) => {
    try{
        const data = await fetch(`/api/users/bookmark/${_id}`,
        {
            method : 'POST',
            headers:{
                authorization:token,
            }
        })
        const result = await data.json();
        updateUsers(result,"bookmark");
    }
    catch(error){
        console.log(error);
    }
 }

 export const removeBookmark = async(token,_id,updateUsers) => {
    try{
        const data = await fetch(`/api/users/remove-bookmark/${_id}`,
        {
            method : 'POST',
            headers:{
                authorization:token,
            }
        })
        const result = await data.json();
        updateUsers(result,"bookmark");
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

 export const unfollowUser = async(token,user,updateUsers) => {
    try{
        const result = await fetch(
            `/api/users/unfollow/${user[0]._id}`,
            {
            method : 'POST',
            body:{},
             headers: { authorization: token } ,
            }
          );
        const data = await result.json();
        updateUsers(data,"follow");
    }
    catch(error){
        console.log(error);
    }
 }

 export const followUser = async(token,id,updateUsers) => {
    try{
        const result = await fetch(`/api/users/follow/${id}`,
        {
            method : 'POST',
            body:{},
             headers: { authorization: token } ,
            }
        )
        const data = await result.json();
        updateUsers(data,"follow");
    }
    catch(error){
        console.log(error);
    }
 }

 export const getbookmarkPosts = async(setbookMarkId,token) => {
    try{
        const result = await fetch("/api/users/bookmark",
        {
             headers: { authorization: token } ,
            }
        )
        const data = await result.json();
        setbookMarkId(data);
    }
    catch(error){
        console.log(error);
    }
 }

 export const getPostByUsername = async(setlogUserPosts,username) => {
    try{
        const result = await fetch(`/api/posts/user/${username}`)
        const data = await result.json();
        setlogUserPosts(data.posts);
        console.log(data.posts);
    }
    catch(error){
        console.log(error);
    }
 }


 export const editUser = async(token,editdata,updateUsers,getUsers) => {
    try{
       const result = await axios.post("/api/users/edit", 
       {
        userData: {
            bio : editdata?.bio,
            imageId : editdata?.imageId,
            github : editdata?.github,
        }
    },
    {
        headers:{
            authorization: token,
        }
    })
    updateUsers(result.data.user,"edit");  
    getUsers(); 
    }
    catch(error){
        console.log(error);
    }
 }



