import { useState , useEffect } from "react"
import load from '../images/loader.svg'
import { Aside } from "../components/Aside"
import { Section } from "../components/Section"
import { getPostByUsername,getUserById,followUser,unfollowUser} from "../services"
import { useAuth } from "../context/authContext"
import { Card } from "../components/Card"
import { usePost } from "../context/PostContext"
import { Modal } from "../components/Modal"
import { useParams } from "react-router-dom"
import { useUser } from "../context/UserContext" 

export const Profile = () => {
    const [loading,setisLoading] = useState(true);
    const {posts} = usePost();
    const {users,updateUsers} = useUser();
    const {loggedUser,token} = useAuth();
    const [logUserPosts,setlogUserPosts] = useState()
    const [currUser,setcurrUser] = useState({});
    const [modalOpen,setModalOpen] = useState(false);
    const {username} = useParams();
  

    useEffect(() => {
        getPostByUsername(setlogUserPosts,username)
        getUserById(username,setcurrUser,setisLoading) 
    },[posts,username,currUser])

    const handleModal = () => {
        setModalOpen(true);
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
    //  
    return(
        <>
        <Aside/>
        <div className="flex flex-col md:w-2/4 bg-secondary_bg w-full">       
                {loading ? <img src={load} className="w-20 bg-secondary_bg text-center mx-auto" alt="loader"/> :
                <>
                <h4 className="text-2xl text-color p-4 text-center sticky top-0 backdrop-blur-sm z-50 border-b-2">Profile</h4>
                <div className="flex justify-between text-color p-3 items-center">
            <div className="flex gap-3">
                <img src={currUser?.user?.imageId} alt="avatar" className="self-center"/>
                <div className="flex flex-col gap-2">
                    <div>
                        <h2 className="text-xl">{currUser?.user?.firstName} {currUser?.user?.lastName}</h2>
                        <p>{currUser?.user?.username}</p>
                    </div>
                    <div>
                    <h2>Bio : {currUser?.user.bio}</h2>
                    <a href={currUser?.user.github} target="_blank">{currUser?.user.github}</a>
                    </div>
                    <div className="flex gap-3">
                       <div className="flex gap-2">
                        <span>{currUser?.user?.following?.length}</span>
                        <div>Following</div>
                       </div>
                       <div className="flex gap-2">
                        <span>{currUser?.user?.followers?.length}</span>
                        <div>Followers</div>
                       </div>
                    </div>
                </div>
            </div>
            {loggedUser.username === username ?
            <button className="bg-cta_color text-secondary_bg rounded-md p-1 w-fit self-start" onClick = {() => handleModal()}>
                Edit Profile</button>
             : 
             notfollowedUsers.find((user) => user.username === username) ?
             <button  className="bg-cta_color text-secondary_bg rounded-md p-1 w-fit self-start" onClick={() => handleFollow()}>Follow</button>  
             :
             <button  className="bg-cta_color text-secondary_bg rounded-md p-1 w-fit self-start" onClick={() => handleUnFollow()}>UnFollow</button>
            }
            {
                modalOpen && <Modal setModalOpen={setModalOpen} modalOpen={modalOpen}/>
            }
        </div>
                <hr className="text-primary_bg"></hr>
                {
                    logUserPosts?.map((post) => <Card {...post} key={post._id}/>)   
                }
            
            </>
           }
        </div>
        <Section/>
        </>
    )
        }
