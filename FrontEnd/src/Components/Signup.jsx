import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from "axios";
import toast from 'react-hot-toast';
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"
  const { 
    register,
    handleSubmit, 
    formState: { errors } ,
    } = useForm();

  const onSubmit = async data => {
    const userInfo = {
      fullname:data.fullname,
      email: data.email,
      password: data.password 
    } 
    await axios.post("http://localhost:4001/user/signup", userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Signup Successfull!');
        navigate(from, { replace: true });
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user))
    }).catch((err)=>{
       if(err.response){
        console.log(err)
        toast.error("Error: " + err.response.data.message);
       }
    })
  };

  return (
    <>
      <div className='flex items-center justify-center h-screen dark:bg-slate-900 dark:text-white'>
        <div className="w-[600px]">
          <div className="modal-box dark:bg-slate-500 dark:text-white">
            {/* Close Button */}
            <Link
              to = "/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('signup_modal').close()}
            >
              ✕
            </Link>
            
            <h3 className="font-bold text-2xl">SignUp</h3>
            <form onSubmit={handleSubmit(onSubmit)}> {/* Proper form handling */}
              {/* Name Field */}
              <div className='mt-4 space-y-3'>
                <span>Name</span>
                <br />
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='w-80 px-3 py-2 border rounded-md outline-none dark:bg-slate-700 dark:text-white'
                  {...register("fullname", { required: "Name is required" })}
                />
                {errors.fullname && <p className="text-red-500">{errors.fullname.message}</p>}
              </div>

              {/* Email Field */}
              <div className='mt-4 space-y-3'>
                <span>Email</span>
                <br />
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-80 px-3 py-2 border rounded-md outline-none dark:bg-slate-700 dark:text-white'
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>

              {/* Password Field */}
              <div className='mt-4 space-y-3'>
                <span>Password</span>
                <br />
                <input
                  type='password'
                  placeholder='Enter your password'
                  className='w-80 px-3 py-2 border rounded-md outline-none dark:bg-slate-700 dark:text-white'
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>

              {/* Buttons */}
              <div className='flex justify-around mt-4'>
                <button
                  type="submit"
                  className='bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700'
                >
                  SignUp
                </button>
                <p>
                  Have an account?{' '}
                  <button
                    type="button"
                    className='underline text-blue-500 cursor-pointer'
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
            <Login /> {/* Include the Login modal */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
