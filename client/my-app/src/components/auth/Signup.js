import React from 'react'
import { useForm } from "react-hook-form";



export default function Signup({setPage}) {

const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


  return (
    <>
    <h2 className='text-xl'>Sign Up</h2>
    <form className='flex flex-col p-2 items-center' onSubmit={handleSubmit(onSubmit)}>
      
      <input className='w-100 bg-gray-50 h-10 p-2 m-1 outline-none' placeholder='Email' type='email' {...register("email", {required: {value: true, message: "This field is required"}})} />
      {errors.email && <span className='bg-red-500 m-1'>{errors.email.message}</span>}

      <input className='w-100 bg-gray-50 h-10 p-2 m-1 outline-none' placeholder='Password' type='password' {...register("password", { required: {value: true, message: "This field is required"}, minLength: {value: 8, message: "Password must be atleast 8 characters long"}})} />
      {errors.password && <span className='bg-red-500'>{errors.password.message}</span>}

      <input className='w-100 bg-gray-50 h-10 p-2 m-1 outline-none' placeholder='Confirm Password' type='password' {...register("confirmPassword", { required: {value: true, message: "This field is required"}, minLength: {value: 8, message: "Password must be atleast 8 characters long"}})} />
      {errors.confirmPassword && <span className='bg-red-500'>{errors.confirmPassword.message}</span>}
      
      <input type="submit" className='w-20 h-10 bg-green-200 hover:bg-green-300 duration-500 cursor-pointer m-1'/>
    </form>

    <h6>Already a User? <button onClick={() => {
        setPage(0)
    }} className='text-blue-500 cursor-pointer hover:underline'>Sign In</button></h6>



    </>
  )
}
