import React, { useState,  useRef, useEffect  } from 'react';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import kingdom from '../assets/ukingdom.svg';
import profile from '../assets/profile.jpeg';
import SideNav from '../components/SideNav';
import './Style.css';
import Progress from '../components/Progress';
import Profile from '../components/Profile';
import TopNav from '../components/TopNav';

const Dashboard = () => {
  const [showNav, setShowNav] = useState(false);
  const sideNavRef = useRef(null);


  const handleShowNav = () => {
    setShowNav(!showNav);
  };

  const handleClickOutside = (event) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setShowNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='full-screen'>
      <div className=' items-center w-full justify-between py-4 px-4 hidden md:flex'>
        <div className="flex  gap-2 text-xl items-center">
          <div className='cursor-pointer'>
            <AiOutlineMenuUnfold onClick={handleShowNav} />

          </div>
          <div>
            <IoSearch />
          </div>
        </div>
        <div className="flex  gap-3 justify-end items-center">
          <div>
            <img src={kingdom} alt="UK Flag" />
          </div>
          <div className='topnavpic'>
            <img src={profile} className='' alt="Profile" />
          </div>
        </div>
      </div>
      <div className='flex w-full'>
        <div ref={sideNavRef} className={`mde:block ${showNav ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}><SideNav /></div>
        <div className='flex w-full'>
          <Progress />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;