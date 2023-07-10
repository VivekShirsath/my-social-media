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
    const [isVisible,setIsVisible] = useState({password:false})
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
                <div className='relative'>
                <input 
                className="p-1 rounded-md  outline-cta_color text-secondary_bg" 
                type={isVisible.password ? "text" : "password"}
                name="password"
                placeholder='Please enter Password'
                onChange={(e) => handleChange(e)}
                value={loginData.password}
                required
                />
                {
                isVisible.password 
                ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6 absolute right-0 top-2 ml-2" onClick={() => setIsVisible({...isVisible,password:false})}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6 absolute right-0 top-2 ml-2"
                onClick={() => setIsVisible({...isVisible,password:true})}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              }
              </div>
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