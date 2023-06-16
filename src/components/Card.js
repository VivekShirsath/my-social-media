import { useState } from 'react';
import {useAuth} from '../context/AuthContext';
import { usePost } from '../context/PostContext';
import { likePost,disLikePost,bookmarkPost,removeBookmark,editPost,deletePost} from '../services';

export const Card = ({content,username,createdAt,_id,firstName,lastName,likes,imageId}) => {
    const [clicked,setClicked] = useState(false);
    const name = firstName.concat(" ")
    const fullName = name.concat(lastName)
    const {loggedUser,token,setLoggedUser} = useAuth();
    const {dispatch} = usePost();
    const [isModalOpen,setModalOpen] = useState(false);
    const [editedPost,setEditedPost] = useState(content);

    const isPostLiked = (likes) => likes?.likedBy?.find(({username}) => username===loggedUser.username)
    const isBookmarked = (id) => loggedUser?.bookmarks?.find((unique) => unique === id);
    const isPostByLoggedUser = (name) => loggedUser?.username === name;

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
        setClicked(false);
    }

    const handleSave = () => {
        setModalOpen(false);
        editPost(token,dispatch,_id,editedPost)
    }

    const handleDelete = () => {
        setClicked(false);
        deletePost(token,dispatch,_id)
    }
    return(
        <div className="text-color flex  p-4 border-b-2 relative" >
            <div className="flex justify-around items-center">
             <img src={imageId} alt="avatar"
             className="w-12 self-start"/>
             </div>
             <div className="flex-col ml-1 p-1 w-full">
                <div className='flex justify-between w-full '>
                <h3 className="inline-block">{fullName}</h3>
                <div className='relative'>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 text-color fill-color self-end cursor-pointer"
                onClick={() => setClicked(!clicked)}>
                    <g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                {
                    clicked && <div className="absolute top-4 right-4 flex flex-col bg-primary_bg border-color rounded-sm p-2 text-secondary_bg shadow-primary_bg shadow-sm font-semibold">
                       { 
                        isPostByLoggedUser(username) ?
                        <>
                        <button onClick={() => toggleModal(content)}>Edit</button>
                        <button onClick={() => handleDelete()}>Delete</button>
                        </>
                        :
                        <button>Unfollow</button>
                       }
                </div>
                }
                </div>
                </div>
                <p className="inline-block">@{username}</p>
                <h3 className="p-1 w-fit">{createdAt}</h3>
            <p className="p-1">{content}</p>
            <div className="flex p-1 cursor-pointer">
            <div className='flex w-11'>
            {
                isPostLiked(likes)? 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F4364C" className="w-6 h-6"
                onClick={() => disLikePost(token,dispatch,_id)}>
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                onClick={() => likePost(token,dispatch,_id)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            }
            {likes.likeCount >0 ?<span>{likes.likeCount}</span> : <span></span>}
            </div>
           {
                !isBookmarked(_id) ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3"
                onClick={() => bookmarkPost(token,dispatch,_id,loggedUser,setLoggedUser)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-3"
                onClick = {() => removeBookmark(token,dispatch,_id,loggedUser,setLoggedUser)}>
                <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                </svg>
           }
            </div>
            </div>
            {isModalOpen && 
             <div className='absolute bg-primary_bg text-secondary_bg w-full h-full inset-0 shadow-md flex flex-col shadow-secondary_bg p-4'>
                <div role='textbox' contentEditable="true" className='p-2 outline-none' onInput={(e) => setEditedPost(e.target.innerText)}>
                {content}
                </div>
                <div className='flex align-baseline justify-center'>
                <button className="bg-cta_color text-secondary_bg rounded-md p-1 mt-1 text-lg mr-4" onClick={() => handleSave()}>Save</button>
                <button className="bg-cta_color text-secondary_bg rounded-md p-1 mt-1 text-lg" onClick={() => setModalOpen(false)}>Cancel</button>
                </div>
            </div>
            }
        </div>
    )
}