import React, { useState } from 'react';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import kingdom from '../assets/ukingdom.svg';
import profile from '../assets/profile.jpeg';


const TopNav = () => {
    const [showNav, setShowNav] = useState(false);
    const handleShowNav = () =>{
        setShowNav(true)
    }
    return (

        <div className='flex items-center w-full justify-between py-4 px-4'>
            <div className="flex w-1/2 gap-2 text-xl">
                <AiOutlineMenuUnfold  onClick={handleShowNav}/>
                <IoSearch />

            </div>
            <div className="flex w-1/2 gap-3 justify-end items-center">
                <div>
                    <img src={kingdom} alt="" />
                </div>
                <div className='topnavpic'>
                    <img src={profile} className='' alt="" />
                </div>
            </div>

        </div>
    )
}

export default TopNav
