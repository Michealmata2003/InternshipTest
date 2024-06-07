import React from 'react';
import '../Routes/Style.css';
import '../styles/Responsiveness.css';
import profile from '../assets/profile.jpeg';
import { IoIosArrowForward } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { GiRoundStar } from "react-icons/gi";





const Profile = () => {
    return (
        <div className=' flex justify-right bg-design5 flex-col w-2/5 p-2 my-2 md:hidden'>
            {/* first */}
            <div className='w-full justify-center text-center py-2'>
                <div className='w-1/3 m-auto p-5 justify-center flex'>
                    <img className='profileimage' src={profile} alt="" />
                </div>
                <h4 className='text-lg font-semibold'>Harrison Philips</h4>
                <p className='text-sm '>Business Analyst</p>
            </div>

            {/* secon */}
            <div className='flex justify-between p-5 bg-white rounded-lg shadow-sm border-2'>
                <div>
                    <h6 className='text-sm font-semibold'>Get - 10% sell price</h6>
                    <p className='text-sm text-design10'>for "spanish AZ" course</p>
                </div>
                <div  className='items-center flex justify-end text-design1 text-lg'>
                    <IoIosArrowForward />

                </div>

            </div>

            {/* third */}

            <div className='py-2'>
                <h3 className='font-semibold text-lg pt-6'>Course Progress</h3>

                <div className='flex justify-start gap-5 p-3 bg-white rounded-lg shadow-sm border-2'>
                    <h3 className='items-center text-center text-design1 font-bold p-2 '>63%</h3>
                    <div className='items-center flex justify-end bg-design1 p-3 text-white rounded'>
                        <FaPencilAlt />
                    </div>
                    <span>
                        <h6 className='text-sm font-semibold text-black'>Grammer</h6>
                        <p className='text-xs text-design10'>Learn new rules</p>
                    </span>
                </div>
                <div className='flex justify-start gap-5 p-3 bg-white  my-2 rounded-lg shadow-sm border-2'>
                    <h3 className='items-center text-center text-design8 font-bold p-2'>73%</h3>

                    <div className='items-center flex justify-end bg-design8 p-3 text-white rounded'>
                        <FaFileAlt />
                    </div>
                    <span>
                        <h6 className='text-sm font-semibold text-black'>Dictionary</h6>
                        <p className='text-xs text-design10'>Learn 4 new words</p>
                    </span>
                </div>
                <div className='flex items-center justify-start gap-5 p-3 bg-white rounded-lg shadow-sm border-2'>
                    <h3 className='align-center text-center text-design9 font-bold p-2'>34%</h3>
                    <div className='items-center flex justify-end bg-design9 p-3 text-white rounded'>
                        <GiRoundStar className='' />
                    </div>
                    <span>
                        <h6 className='text-sm font-semibold text-black'>Reading</h6>
                        <p>Train your skill</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Profile
