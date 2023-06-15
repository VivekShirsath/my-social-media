import { NavLink } from "react-router-dom"

export const Aside = () => {
    return(
        <div className="flex flex-col bg-primary_bg text-lg  gap-7
        w-1/4 text-secondary_bg font-semibold items-center p-4 sticky top-0 left-0 overflow-auto min-h-screen">
            <h4>Twitter</h4>
            <NavLink to ="/"><h4>Home</h4></NavLink>
            <h4>Explore</h4>
            <h4>Bookmarks</h4>
            <h4>Log Out</h4>
        </div>
    )
}