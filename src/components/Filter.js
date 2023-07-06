import { usePost } from "../context/PostContext"
import { useState} from "react";

export const Filter = () => {
    const {dispatch,filters} = usePost();
    const [showOptions,setShowOptions] = useState(false);
   

    const handleClick = () => {
       setShowOptions(!showOptions)
    }

    const handleFilters = (text) => {
        setShowOptions(false);
        dispatch({type : "Filter",payload : text})
    }
    
    return(
        <div className="flex justify-between p-4">
        <h2 className="text-color align-middle text-lg">{filters} Posts</h2>
        <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-color text-color cursor-pointer" onClick={(e) => handleClick(e)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
       {
         showOptions && 
         <div className="absolute bottom-1 right-5 z-100 flex flex-col bg-primary_bg border-color rounded-sm p-2 text-secondary_bg shadow-primary_bg shadow-sm font-semibold z-auto">
            <button onClick={() => handleFilters("Trending")}>
                Trending
                </button>
                <button onClick={() => handleFilters("Latest")} className="z-100">
                Latest
                </button>
                <button onClick={() => handleFilters("Oldest")}>
                Oldest
                </button>
               
        </div>
        }
        </div>

        </div>
    )
}

