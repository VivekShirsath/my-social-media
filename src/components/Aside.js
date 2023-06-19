import { NavLink } from "react-router-dom"

const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "#d3d3d3" : "",
    backgroundColor : isActive ? "#383838" : "",
    borderRadius : isActive ? "30px" : "",
    padding : isActive ? "3px" : "",
  });

export const Aside = () => {
    return(
        <div className="flex flex-col bg-primary_bg text-lg  gap-7
        w-1/4 text-secondary_bg font-semibold items-center p-3 sticky top-0 min-h-screen self-start">
            <h4>Twitter</h4>
            <NavLink  style={getActiveStyle}  to ="/"><h4 className="hover:bg-secondary_bg hover:text-primary_bg rounded-full p-1">Home</h4></NavLink>

            <NavLink  style={getActiveStyle}  to ="/explore">
                <h4 className="hover:bg-secondary_bg hover:text-primary_bg rounded-full p-1">
                    Explore
                    </h4></NavLink>

            <NavLink  style={getActiveStyle}  to ="/bookmarks">
                <h4 className="hover:bg-secondary_bg hover:text-primary_bg rounded-full p-1">
                    Bookmarks
                    </h4></NavLink>
            <NavLink  style={getActiveStyle}  to ="/profile">
                <h4 className="hover:bg-secondary_bg hover:text-primary_bg rounded-full p-1">
                    Profile
                    </h4></NavLink>
            <h4>Log Out</h4>
        </div>
    )
}