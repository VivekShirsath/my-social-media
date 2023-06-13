import { usePost } from "../context/PostContext"

export const Filter = () => {
    const {dispatch} = usePost();
    return(
        <div className="flex justify-around p-2 text-lg">
        <button className="rounded-md text-secondary_bg bg-primary_bg p-1 
        hover:bg-secondary_bg hover:text-primary_bg 
        hover:border-2 focus:bg-cta_color"
        onClick={() => dispatch({type : "Filter",payload : "Trending"})}>
            Trending
            </button>
        <button className="rounded-md text-secondary_bg bg-primary_bg p-1 hover:bg-secondary_bg hover:text-primary_bg 
         hover:border-2  focus:bg-cta_color"
        onClick={() => dispatch({type : "Filter",payload : "Latest"})}>
            Latest
            </button>
        </div>
    )
}