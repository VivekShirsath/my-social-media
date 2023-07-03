import { NavLink } from "react-router-dom"
import { useAuth } from "../context/Authcontext";
import { useState } from "react";
import { EditModal } from "./EditModal";

const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "#d3d3d3" : "",
    backgroundColor : isActive ? "#383838" : "",
    borderRadius : isActive ? "30px" : "",
    padding : isActive ? "4px" : "",
  });

  

export const Aside = () => {
    const {loggedUser,setToken} = useAuth();
   

    const handlelogOut = () => {
        localStorage.removeItem('loginDetails');
        setToken("")
      }
    return(
              <div className="fixed w-full bottom-0 left-0 z-50 p-2 flex justify-between bg-primary_bg text-secondary_bg font-semibold items-center md:text-lg md:w-1/4 md:flex-col md:sticky md:top-0 md:z-0 md:p-3 md:min-h-screen md:self-start md:gap-7 md:flex md:items-center md:justify-normal"> 
            <h4 className="hidden md:block text-2xl font-bold">Shario</h4>

            <NavLink  style={getActiveStyle}  to ="/" className="flex gap-1 items-center hover:bg-secondary_bg hover:text-primary_bg md:rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

            <h4 className="hover:bg-secondary_bg hover:text-primary_bg rounded-sm p-1 md:rounded-full self-center hidden md:flex">Home</h4></NavLink>

            <NavLink  style={getActiveStyle}  to ="/explore" className="flex gap-1 items-center hover:bg-secondary_bg hover:text-primary_bg md:rounded-full p-1">
            <img  src={`https://img.icons8.com/ios/50/color/compass--v1.png`} alt="compass--v1" className="w-6 h-6 bottom-1"/>
                <h4 className="hover:bg-secondary_bg hover:text-primary_bg rounded-sm p-1 md:rounded-full hidden md:flex">
                    Explore
                    </h4></NavLink>

            <NavLink  style={getActiveStyle}  to ="/bookmarks" className="flex gap-1 items-center hover:bg-secondary_bg hover:text-primary_bg md:rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>

                <h4 className="hover:bg-secondary_bg hover:text-primary_bg rounded-sm p-1 md:rounded-full hidden md:flex">
                    Bookmarks
                    </h4></NavLink>

            <NavLink  style={getActiveStyle}  to = {"/profile/" + loggedUser.username}className="flex gap-1 items-center hover:bg-secondary_bg hover:text-primary_bg md:rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

                <h4 className="hover:bg-secondary_bg hover:text-primary_bg rounded-sm p-1 md:rounded-full hidden md:flex">
                    Profile
                    </h4></NavLink>

                    <NavLink className="flex gap-1 items-center hover:bg-secondary_bg hover:text-primary_bg md:rounded-full p-1 " onClick = {() => handlelogOut()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>

                    <h4 className="hover:bg-secondary_bg hover:text-primary_bg rounded-sm p-1 hover:cursor-pointer md:rounded-full hidden md:flex" 
                    >Log Out</h4>
                    </NavLink>
            
        </div>
    )
}