import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./LogIn";
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast";
import { useAuth } from "../context/contextProvider";

function SignUp() {
  const navigate = useNavigate()
  const [getUser, setUser] = useAuth()

   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const newUser ={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:3001/user/signup",newUser)
    .then((res)=>{
      if(res.data){
       toast.success("signing up successed")
      
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user))
      setUser(res.data.user);
       document.getElementById("my_modal_3").close();
       navigate("/")
    } )
    .catch((error)=>{
      if (error.response) {
        console.log(error)
        toast.error("Error: "+error.response.data.message)
        
      }
    })
   }


  return (
    <>
      <div className="flex items-center justify-center h-screen dark:bg-slate-900 dark:text-white">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}

        <div className="model-box border p-5 rounded-md shadow-2xl ">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          

          <h3 className="font-bold text-lg">Sign Up</h3>

          {/* Name */}
          <div className="p-3">
            <h2>Name:</h2>
            <input {...register("fullname", { required: true })}
              type="text"
              placeholder="Eneter your name"
              className="outline-none border rounded-md px-2 w-80"
              
            />
            <br />
             {errors.fullname && <span className="text-sm text-red-500">name is required</span>}
          </div>

          <div>
            {/* email */}
            <div className="p-3">
              <h2>Email:</h2>
              <input {...register("email", { required: true })}
                type="email"
                placeholder="enter your email"
                className="outline-none border rounded-md px-2 w-80"
              />
              <br />
               {errors.email && <span className="text-sm text-red-500">email is required</span>}
            </div>

            {/* password */}
            <div className="p-3">
              <h2>Password:</h2>
              <input {...register("password", { required: true })}
                type="text"
                placeholder="enter your password"
                className="outline-none border rounded-md px-2 w-80"
              />
              <br />
               {errors.password && <span className="text-sm text-red-500">password is required</span>}
            </div>

            {/* confirm password */}
            {/* <div className="p-3">
              <h2>Confirm Password:</h2>
              <input {...register("confirm_password", { required: true })}
                type="text"
                placeholder="enter your password"
                className="outline-none border rounded-md px-2 w-80"
              />
              <br />
               {errors.confirm_password && <span className="text-sm text-red-500">This is required</span>}
            </div> */}
            

            {/* Sign Up button */}
            <div className="flex justify-around p-3">
              <button className="bg-pink-500 p-1 rounded-md hover:bg-pink-800 cursor-pointer">
                Sign Up
              </button>
              <p>
                Have Account ?  
                <button onClick={()=>document.getElementById('my_modal_3').showModal()
                  
                }>
                 
                  <span className="text-blue-500 underline cursor-pointer">
                   
                       Log In
                  </span>
                </button>
                
              </p>
            </div>
            
          </div>
          </form>
        </div>
      </div>
      <Login />
    </>
  );
}

export default SignUp;
