import { useState ,useRef,useEffect} from 'react';
import {useAuth} from '../context/Authcontext';
import { usePost } from '../context/PostContext';
import { likePost,disLikePost,bookmarkPost,removeBookmark,editPost,deletePost,unfollowUser,followUser} from '../services';
import { useUser } from '../context/UserContext';
import { NavLink } from 'react-router-dom';
import { EditModal } from './EditModal';

export const Card = ({content,username,createdAt,_id,firstName,lastName,likes,imageId,imageContent,videoContent}) => {
    const name = firstName.concat(" ")
    const fullName = name.concat(lastName)
    const {loggedUser,token} = useAuth();
    const {dispatch} = usePost();
    const [isModalOpen,setModalOpen] = useState(false);
   const [activeId,setActiveId] = useState(null);
    const {users,updateUsers} = useUser();
    const modalRef = useRef(null);

    const isPostLiked = (likes) => likes?.likedBy?.find(({username}) => username===loggedUser.username)
    const isBookmarked = (id) => loggedUser?.bookmarks?.find((unique) => unique === id);
    const isPostByLoggedUser = (name) => loggedUser?.username === name;

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
        setActiveId(null)
    }

    const handleClick = (e,id) => {
       e.stopPropagation();  
        if(id === activeId){
            setActiveId(null);
        }
        else{
            setActiveId(id);
        }
    }
   

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setActiveId(null)
        }
      };

    const handleDelete = () => {
        setActiveId(null);
        deletePost(token,dispatch,_id)
    }
    const handleUnFollow = () => {
        const user = users?.filter?.((user) => user.username === username);
        unfollowUser(token,user,updateUsers);
    }

    const handleFollow = () => {
        const user = users?.filter?.((user) => user.username === username);
        followUser(token,user[0]._id,updateUsers)
    }

    const notfollowedUsers = users.filter(({username}) => loggedUser?.following?.every(user => user.username !== username)).filter((user => user.username !== loggedUser.username));

    useEffect(() => {
        if (activeId) {
          document.addEventListener('click', handleOutsideClick);
        }
    
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [activeId]);
    
    
    return(
        <div className="text-color flex  p-4 border-b-2 relative" >
            <>
            <NavLink to = {"/profile/"+ username}>
            <div className="flex justify-around items-center">
             <img src={imageId} alt="avatar"
             className="w-12 self-start"/>
             </div>
             </NavLink>
             <div className="flex-col ml-1 p-1 w-full">
                <div className='flex justify-between w-full '>
                <h3 className="inline-block">{fullName}</h3>
                <div className='relative'>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 text-color fill-color self-end cursor-pointer"
                onClick={(e) => handleClick(e,_id)}>
                    <g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                {
                     activeId === _id && <div className="absolute top-4 right-4 flex flex-col bg-primary_bg border-color rounded-sm p-2 text-secondary_bg shadow-primary_bg shadow-sm font-semibold" ref={modalRef}>
                       { 
                        isPostByLoggedUser(username) ?
                        <>
                        <button onClick={() => toggleModal(content)}>Edit</button>
                        <button onClick={() => handleDelete()}>Delete</button>
                        </>
                        :
                        notfollowedUsers.find((user) => user.username === username) ?
                        <button onClick={() => handleFollow()}>Follow</button> :
                        <button onClick={() => handleUnFollow()}>Unfollow</button>
                       }
                </div>
                }
                </div>
                </div>
                <p className="inline-block">@{username}</p>
                <h3 className="p-1 w-fit">{createdAt}</h3>
            <p className="p-1">{content}</p>
            {
                imageContent && <img src={imageContent} alt="post" className='flex justify-center rounded-md w-full'/>
            }
            {
                videoContent && <video className='w-full rounded-md' autoPlay src={videoContent}>
                    </video>
            }
            <div className="flex p-1 cursor-pointer mt-2">
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
                onClick={() => bookmarkPost(token,_id,updateUsers)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-3"
                onClick = {() => removeBookmark(token,_id,updateUsers)}>
                <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                </svg>
           }
            </div>
            </div>
            {isModalOpen && <EditModal content={content} imageId={imageId} imageContent={imageContent} videoContent={videoContent} id={_id} setModalOpen = {setModalOpen}
            type="edit"/>}
          </>  
        </div>
    )
}