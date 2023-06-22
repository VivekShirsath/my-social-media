import { useState } from "react"
import { Aside } from "../components/Aside"
import { Section } from "../components/Section"
import { Card } from "../components/Card"
import { getbookmarkPosts } from "../services"
import { useEffect } from "react"
import load from '../images/loader.svg'
import { useAuth } from "../context/AuthContext"
import { usePost } from "../context/PostContext"

export const BookMarks = () => {
    const [bookMarkId,setbookMarkId] = useState([]);
    const [loading,setLoading] = useState(true);
    const {token} = useAuth();
    const {posts} = usePost();

    useEffect(() => {
        getbookmarkPosts(setbookMarkId,token,setLoading)
    },[bookMarkId])
    
   const bookMarkPosts = posts.filter((post) => bookMarkId?.bookmarks?.some(user => user === post._id))
   
    return(
        <>
        <Aside/>
        <div className="flex flex-col w-2/4 bg-secondary_bg">
        <h4 className="text-2xl text-color p-4 text-center sticky top-0 backdrop-blur-sm z-50 border-b-2">BookMarks</h4>
     {   loading ? <img src={load} className="w-20 bg-secondary_bg text-center mx-auto" alt="loader"/>
      :   bookMarkPosts.length > 0 ?
              bookMarkPosts?.map((post) => <Card {...post} key={post._id}/>) 
             : <h3 className = "text-color text-lg text-center mt-2">No BookMarks</h3>
                }
        </div>
        <Section/>
        </>
    )
}