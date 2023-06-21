import { NavLink, useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { useAuth } from '../context/AuthContext';

export const SignUp = () => {
    
    const {signUpHandler,token} = useAuth();
    const [signUpdata,setSignUpdata] = useState({
        firstName:"",
        lastName:"",
        username:"",
        password: "",
        confirmPassword : "",
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpdata({ ...signUpdata, [name]: value });
    }

    const handleSubmit = (data,e) => {
        e.preventDefault(); 
        signUpHandler(signUpdata) 
       }

       useEffect(() => {
        if (token) {
          navigate("/");
        }
      })

    return(
        <div className="bg-primary_bg flex justify-center w-screen h-screen items-center text-lg shadow-sm shadow-secondary_bg">
        <form className = "flex flex-col justify-center p-3 bg-secondary_bg items-center text-color rounded-lg "
         onSubmit={(e) => handleSubmit(signUpdata,e)}>
          <h4 className="p-1 text-2xl">Sign Up</h4>
          <div className="p-2 flex flex-col justify-center items-center gap-1">
              <label className="self-start">Firstname</label>
              <input 
              className="p-1 rounded-md text-secondary_bg" 
              type="text"
              name="firstName"
              value = {signUpdata.firstName}
              placeholder='Please enter firstname'
              onChange={(e) => handleChange(e)}
              required
              />
          </div>
          <div className="p-2 flex flex-col justify-center items-center gap-1">
              <label className="self-start">Lastname</label>
              <input 
              className="p-1 rounded-md text-secondary_bg" 
              type="text"
              name="lastName"
              value = {signUpdata.lastName}
              placeholder='Please enter username'
              onChange={(e) => handleChange(e)}
              required
              />
          </div>
          <div className="p-2 flex flex-col justify-center items-center gap-1">
              <label className="self-start">Username</label>
              <input 
              className="p-1 rounded-md text-secondary_bg" 
              type="username"
              name="username"
              value = {signUpdata.username}
              placeholder='Please enter username'
              onChange={(e) => handleChange(e)}
              required
              />
          </div>
  
          <div className="p-2 flex flex-col justify-center items-center gap-1">
              <label className="self-start">Password</label>
              <input 
              className="p-1 rounded-md  outline-cta_color text-secondary_bg" 
              type="password"
              name="password"
              placeholder='Please enter Password'
              onChange={(e) => handleChange(e)}
              value={signUpdata.password}
              required
              />
          </div>
          <div className="p-2 flex flex-col justify-center items-center gap-1">
              <label className="self-start">Confirm Password</label>
              <input 
              className="p-1 rounded-md  outline-cta_color text-secondary_bg" 
              type="password"
              name="confirmPassword"
              placeholder='Please enter Password'
              onChange={(e) => handleChange(e)}
              value={signUpdata.confirmPassword}
              required
              />
          </div>
          <button className= "bg-cta_color text-secondary_bg rounded-md p-1" 
          onSubmit={(e) => handleSubmit(e)}>Sign Up</button>
          <h5>Already have an account ? <NavLink to ="/login">Log In</NavLink>
          </h5>
          </form>  
      </div>
    )
  }