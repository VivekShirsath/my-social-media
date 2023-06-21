import { useState , useEffect } from "react"
import load from '../images/loader.svg'
import { Aside } from "../components/Aside"
import { Section } from "../components/Section"
import { ProfileCard } from "../components/ProfileCard"
import { getPostByUsername } from "../services"
import { useAuth } from "../context/AuthContext"
import { Card } from "../components/Card"
import { usePost } from "../context/PostContext"

export const Profile = () => {
    const [loading,setisLoading] = useState(true);
    const {posts} = usePost()
    //const [logUserPosts,setlogUserPosts] = useState([]);
    const {loggedUser} = useAuth();

    useEffect(() => {
        setisLoading(false)
        // getPostByUsername(setlogUserPosts,loggedUser.username)
    },[posts])

    const logUserPosts = posts.filter(({username}) => username === loggedUser.username)
    return(
        <>
        <Aside/>
        <div className="flex flex-col w-2/4 bg-secondary_bg">
            {
                loading ? <img src={load} className="w-20 bg-secondary_bg text-center mx-auto" alt="loader"/>
                :
                <>
                <h4 className="text-2xl text-color p-4 text-center sticky top-0 backdrop-blur-sm z-50 border-b-2">Profile</h4>
                <ProfileCard/>
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