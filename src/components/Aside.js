import { NavLink } from "react-router-dom"
import { useAuth } from "../context/Authcontext";

const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "#d3d3d3" : "",
    backgroundColor : isActive ? "#383838" : "",
    borderRadius : isActive ? "30px" : "",
    padding : isActive ? "3px" : "",
  });

  

export const Aside = () => {
    const {loggedUser,setToken} = useAuth();

    const handlelogOut = () => {
        localStorage.removeItem('loginDetails');
        setToken("")
      }
    return(
        // <div className="flex flex-col bg-primary_bg text-lg  gap-7
        // w-1/4 text-secondary_bg font-semibold items-center p-3 sticky top-0 min-h-screen self-start">
              <div className="fixed w-full bottom-0 left-0 z-50 p-2 flex justify-between bg-primary_bg text-secondary_bg font-semibold items-center md:text-lg md:w-1/4 md:flex-col md:sticky md:top-0 md:z-0 md:p-3 md:min-h-screen md:self-start md:gap-7 md:flex md:items-center md:justify-normal"> 
            <h4 className="hidden md:block">Shario</h4>
            <NavLink  style={getActiveStyle}  to ="/"><h4 className="hover:bg-secondary_bg hover:text-primary_bg rounded-sm p-1 md:rounded-full self-center">Home</h4></NavLink>

            <NavLink  style={getActiveStyle}  to ="/explore">
                <h4 className="hover:bg-secondary_bg hover:text-primary_bg rounded-sm p-1 md:rounded-full">
                    Explore
                    </h4></NavLink>

            <NavLink  style={getActiveStyle}  to ="/bookmarks">
                <h4 className="hover:bg-secondary_bg hover:text-primary_bg rounded-sm p-1 md:rounded-full">
                    Bookmarks
                    </h4></NavLink>
            <NavLink  style={getActiveStyle}  to = {"/profile/" + loggedUser.username}>
                <h4 className="hover:bg-secondary_bg hover:text-primary_bg rounded-sm p-1 md:rounded-full">
                    Profile
                    </h4></NavLink>
            <h4 className="hover:bg-secondary_bg hover:text-primary_bg rounded-sm p-1 hover:cursor-pointer md:rounded-full" 
            onClick = {() => handlelogOut()}>Log Out</h4>
        </div>
    )
}