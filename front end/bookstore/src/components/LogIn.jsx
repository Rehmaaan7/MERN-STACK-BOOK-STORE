import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/contextProvider";

function Login() {
  const navigate = useNavigate();
  const [getUser, setUser] = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const User = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3001/user/login", User)
      .then((res) => {
        if (res.data) {

          toast.success("Logged In successfully");
          
          

          
        }
        document.getElementById("my_modal_3").close();
        navigate("/");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setUser(res.data.user);

        
          
          // navigate("/");
          // window.location.reload()
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          toast.error("Error: " + error.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                type="button"
                onClick={() => {
                  document.getElementById("my_modal_3").close();
                  // navigate("/");
                }}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>

              <h3 className="font-bold text-lg">Log In</h3>
              <div>
                {/* email */}
                <div className="p-3">
                  <h2>Email:</h2>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="enter your email"
                    className="outline-none border rounded-md px-2 w-80"
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      email is required
                    </span>
                  )}
                </div>
                {/* password */}
                <div className="p-3">
                  <h2>Password:</h2>
                  <input
                    {...register("password", { required: true })}
                    type="text"
                    placeholder="enter your password"
                    className="outline-none border rounded-md px-2 w-80"
                  />
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      password is required
                    </span>
                  )}
                </div>
                {/* Log in button */}
                <div className="flex justify-around">
                  <button className="bg-pink-500 p-1 rounded-md hover:bg-pink-800 cursor-pointer">
                    Log In
                  </button>
                  <p>
                    Not registered?
                    <Link to={"/signup"}>
                      {" "}
                      <span className="text-blue-500 underline cursor-pointer">
                        {" "}
                        SignUp
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
