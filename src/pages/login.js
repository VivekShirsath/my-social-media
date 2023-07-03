import { NavLink, useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { useAuth } from '../context/Authcontext';
import { Navigate } from 'react-router-dom';

export const Login = () => {
    const {logInHandler,token} = useAuth();
    const [loginData,setLoginData] = useState({
      username : "",
      password : "",
    })
    const testData = {username : "vivek18",password:"vivek123"}
    const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

    const handleSubmit = (data,e) => {
     e.preventDefault(); 
     logInHandler(data.username,data.password)      
    }

    useEffect(() => {
      if (token) {
        navigate("/");
      }
    })

    return(
        <div className="bg-primary_bg flex justify-center w-screen h-screen items-center text-lg shadow-sm shadow-secondary_bg">
          <form className = "flex flex-col justify-center p-4 bg-secondary_bg items-center text-color rounded-lg gap-1"
           onSubmit={(e) => handleSubmit(loginData,e)}>
             <h4 className="p-1 text-2xl font-bold">Shario</h4>
            <h4 className="p-1 text-2xl">Log In</h4>
            <div className="p-2 flex flex-col justify-center items-center gap-2">
                <label className="self-start">Username</label>
                <input 
                className="p-1 rounded-md text-secondary_bg" 
                type="username"
                name="username"
                value = {loginData.username}
                placeholder='Please enter username'
                onChange={(e) => handleChange(e)}
                required
                />
            </div>
    
            <div className="p-2 flex flex-col justify-center items-center gap-2">
                <label className="self-start">Password</label>
                <input 
                className="p-1 rounded-md  outline-cta_color text-secondary_bg" 
                type="password"
                name="password"
                placeholder='Please enter Password'
                onChange={(e) => handleChange(e)}
                value={loginData.password}
                required
                />
            </div>
            <button className= "bg-cta_color text-secondary_bg rounded-md p-1" 
            onSubmit={(e) => handleSubmit(loginData,e)}>Log In</button>
            <button className="bg-cta_color text-secondary_bg rounded-md p-1 mt-1" 
            onClick={(e) =>handleSubmit(testData,e)}>Log In as Guest</button>
            <h5>Don't have an account ? <NavLink to ="/signup">Sign Up</NavLink>
            </h5>
            </form>  
        </div>
    )
}