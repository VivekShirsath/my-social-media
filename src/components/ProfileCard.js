import { useState , useEffect } from "react"
import load from '../images/loader.svg'
import { useAuth } from "../context/AuthContext"

export const ProfileCard = () => {
    const {loggedUser} = useAuth();

    return(
        <div className="flex justify-between text-color p-3 items-center">
            <div className="flex gap-3">
                <img src={loggedUser?.imageId} alt="avatar"/>
                <div className="flex flex-col gap-2">
                    <div>
                        <h2 className="text-xl">{loggedUser?.firstName} {loggedUser?.lastName}</h2>
                        <p>{loggedUser?.username}</p>
                    </div>
                    <div>
                        <h2>Bio : {loggedUser?.bio}</h2>
                        <a href={loggedUser?.github} target="_blank">{loggedUser?.github}</a>
                    </div>
                </div>
            </div>
            <button className="bg-cta_color text-secondary_bg rounded-md p-1 w-fit self-start">
                Edit Profile</button>
        </div>
    )
}