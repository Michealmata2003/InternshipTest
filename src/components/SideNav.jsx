import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/Union.svg';
import chart from '../assets/Chart.svg';
import chat from '../assets/Chat.svg';
import graph from '../assets/Graph.svg';
import settings from '../assets/Setting.svg';
import document from '../assets/Document.svg';
import danger from '../assets/Danger.svg';
import profile from '../assets/profileIcon.svg';
import unfold from '../assets/unfold_more.svg';
import profileImage from '../assets/profile.jpeg';


const SideNav = () => {
  return (
    <div className=' bg-design1 w-[13rem] flex-col h-full justify-between fixed overflow-hidden left-0 z-10 md:top-0'>
      <div className='h-2/3 justify-center items-center m-auto w-full p-3 flex-col justify-between'>
        <div className="h-1/4 flex flex-col space-y-4 ">
          <div className='border-b-2 border-indigo-200 py-5'>
            <img src={logo} alt="logo" />

          </div>
          <div className='px-2 text-sm flex justify-between align-center bg-design2 py-3 rounded-lg'>
            <div className='flex gap-2'>
              <p className='bg-design4 rounded-full p-2 text-xs'>DW </p>
              <div className='text-xs'>
                <p className='text-white'>Dlex Designs</p>
                <p className='text-design10 '>general team</p>
              </div>
            </div>
            <img className='justify-right' src={unfold} alt="" />
          </div>
        </div>

        <div className="text-white mt-8">
          <nav className='py-3'>
            <ul className='text-design10'>
              <li className=''>
                <NavLink to='/' className='flex text-sm gap-x-2 w-full py-1 text-white'>
                  <img src={graph} alt="" /> Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to='/' className='flex text-sm gap-x-2 w-full py-1'>
                  <img src={chart} alt="" />OverView
                </NavLink>
              </li>
              <li>
                <NavLink to='/' className='flex text-sm gap-x-2 w-full py-1'>
                  <img src={chat} alt="" /> Chat
                </NavLink>
              </li>
              <li>
                <NavLink to='/' className='flex text-sm gap-x-2 w-full py-1'>
                  <img src={profile} alt="" />Team
                </NavLink>
              </li>
            </ul>
          </nav>
          <h6 className='py-4 text-design10 text-sm font-semibold'>SHORTCUT</h6>
          <nav>
            <ul className='text-design10'>
              <li>
                <NavLink to='/' className='flex text-sm gap-x-2 w-full py-1'>
                  <img src={document} alt="" />Task
                </NavLink>
              </li>
              <li>
                <NavLink to='/' className='flex text-sm gap-x-2 w-full py-1'>
                  <img src={danger} alt="" />Reports
                </NavLink>
              </li>
              <li>
                <NavLink to='/' className='flex text-sm gap-x-2 w-full py-1'>
                  <img src={settings} alt="" /> Settings
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='  bg-design1 flex flex-col space-y-2 p-2'>
        <div className=' p-3 bg-design2 rounded mt-3'>
          <span className='flex justify-between'>
            <p className='text-white text-sm'>Storage</p>
            <p className='text-design10 text-sm'>Upgrade</p>
          </span>
          <p className='text-design10 text-sm' ><span className='text-white text-sm'>3.4 GB</span> of 15 GB</p>
          <div className='range-container'>
            <input type="range" className='styled-range1' min="0" max="100" value="30" step='12.5'/>

          </div>
        </div>
        <div className='flex justify-between pt-2 border-t-2 border-indigo-200'>
          <div className='flex  gap-2 w-3/4 justify-between items-center'>
            <img className='rounded-full w-1/3 ' src={profileImage} alt="" />
            <p className='text-white' >Jane Smith</p>
          </div>
          <img src={unfold} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SideNav
