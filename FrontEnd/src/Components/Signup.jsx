import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);  // Log form data
    // Close the modal after submission if needed
    // document.getElementById('signup_modal').close(); (Optional, if implemented)
  };

  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className="w-[600px]">
          <div className="modal-box">
            {/* Close Button */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('signup_modal').close()}
            >
              ✕
            </button>
            
            <h3 className="font-bold text-2xl">SignUp</h3>
            <form onSubmit={handleSubmit(onSubmit)}> {/* Proper form handling */}
              {/* Name Field */}
              <div className='mt-4 space-y-3'>
                <span>Name</span>
                <br />
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='w-80 px-3 py-2 border rounded-md outline-none'
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>

              {/* Email Field */}
              <div className='mt-4 space-y-3'>
                <span>Email</span>
                <br />
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-80 px-3 py-2 border rounded-md outline-none'
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
                  className='w-80 px-3 py-2 border rounded-md outline-none'
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
