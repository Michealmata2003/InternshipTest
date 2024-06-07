import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import google from '../assets/google.svg';
import '../styles/Responsiveness.css';

const LoginComponent = () => {
  return (
    <div className='flex flex-col gap-3 p-6'>
      <h6 className='flex justify-center pt-5'>Don't have an account yet? <Link to='/' className='text-design1 font-semibold'>Create an account</Link></h6>

      <div className='flex w-ful justify-center items-center py-2 gap-3 border-2 rounded-lg'><img src={google} alt="" />Sign up with Google</div>

      <p className='betweenLines'>OR</p>

      <div className="flex flex-col gap-2">
        <label htmlFor="">Username</label>
        <input className='border-2 p-2 rounded' type="text" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className='flex justify-between'>Password <span className='text-design1'>Remember me</span></label>
        <input className='border-2 p-2 rounded' type="password" />
      </div>
      <span>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Keep me looged in</label>
      </span>
      <NavLink to='/dashboard' className='bg-design1 text-white py-3 rounded justify-center w-full m-auto flex' >Login</NavLink>
    </div>
  )
}

export default LoginComponent
