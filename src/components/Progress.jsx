import React from 'react';
import orangecheck from '../assets/orangeCheck.png';
import Blue from '../assets/checkBlue.png';
import notifications from '../assets/notifications.svg';
import germany from '../assets/germany.svg';
import support from '../assets/support.svg';
import { IoIosArrowForward } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";



const Progress = () => {
    return (
        <div className='relative pl-[190px] bg-white w-full md:pl-[10px]'>
            <div className='py-4 md:py-2 px-7'>
                <h2 className='py-2 text-lg font-semibold text-black'>Progress Dashboard</h2>

                <div className=''>
                    {/* component1 */}

                    <div className=" flex w-full gap-4 justify-between sm:block ">
                        <div className="box1 bg-design1 p-2 rounded w-1/2 text-white sm:w-full">
                            <p className='text-xs'>DEADLINE 12:00</p>
                            <h4 className='text-lg font-bold py-2'>Exam - Unit 5</h4>
                            <p className='text-xs'>Spanish for beginners</p>




                            <div className="flex -space-x-1 overflow-hidden  py-3">
                                <img
                                    className="inline-block h-9 w-9 rounded-full ring-0 "
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-9 w-9 rounded-full ring-0"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <img
                                    className="inline-block h-9 w-9 rounded-full ring-0"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                    alt=""
                                />
                                <h1 className='flex bg-white rounded-full h-9 w-9 text-design2 items-center justify-center m-auto'>99+</h1>
                            </div>

                        </div>
                        <div className="w-1/2 flex gap-5 sm:w-full md:pt-3 sm:block sm:mt-2">
                            <div className="bg-design5 w-full p-4 rounded-lg">
                                <img src={orangecheck} alt="" />
                                <h6 className='text-sm font-semibold'>Homework</h6>
                                <p className='text-xs pb-9 text-design7'>For today's lesson</p>
                                <span className='text-sm font-semibold'>35 MIN AGO</span>
                            </div>
                            <div className="w-full bg-design6 p-4 rounded-lg sm:mt-2">
                                <img src={Blue} alt="" />
                                <h6 className='text-sm font-semibold'>Reading</h6>
                                <p className='text-xs pb-9 text-design10'>24 words per week </p>
                                <span className='text-sm font-semibold'>2H AGO</span>
                            </div>
                        </div>
                    </div>
                    {/* component2 */}
                    <div className='flex w-full justify-between gap-4 py-6 sm:block '>
                        <div className="bg-white rounded-lg shadow-sm border-2 p-3 w-1/2 sm:w-full">
                            <div className='flex justify-between'>
                                <p className='text-sm font-semibold'>Group info</p>
                                <img src={notifications} alt="" />
                            </div>
                            <p className='text-xs py-2'>13 students in the group </p>
                            <div className='bg-design7 p-2 rounded my-1'>
                                <h6 className='text-sm font-semibold text-white py-1'>
                                    Group homework
                                </h6>
                                <span className='flex justify-between text-white'>
                                    <p className='w-2/3 text-sm'>4 students from your groups online now</p>
                                    <IoIosArrowForward />
                                </span>
                            </div>
                            <h6 className='py-2 text-sm font-semibold'>Today's lesson</h6>
                            <p className='text-xs'>unit 6 - Article</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm border-2  w-1/2 sm:w-full sm:mt-2">
                            <h6 className='pb-2 text-sm font-semibold p-3'>Overall Progress</h6>
                            <div className='flex gap-5 justify-between px-3'>
                                <h5 className='text-lg pr-4 w-1/2'>Germany for beginners </h5>
                                <img className='bg-white p-3 shadow-sm border-2 rounded-full' src={germany} alt="" />
                            </div>
                            <div className='px-3'>
                                <div className='range-container2'>
                                    <input type="range" className='styled-range2' min="0" max="100" value="30" step='12.5' />
                                </div>                            </div>
                            <h2 className='px-3 py-2'> 75%</h2>
                            <div className='items-center flex text-design1 font-semibold pointer justify-end border-t-[3px] py-2 px-3' >
                                Explore more                                     <IoIosArrowForward />

                            </div>
                        </div>
                    </div>

                    {/* last component  */}

                    <div className='flex w-full justify-between gap-4 sm:block'>
                        <div className=' w-full rounded-lg shadow-sm border-2 justify-between flex rounded p-3 '>
                            <div className='flex gap-3 p-1'>
                                <div className='items-center flex justify-end  rounded-full px-4 text-design1 shadow-lg border-2'>
                                    <FaPencilAlt />
                                </div>

                                <div>
                                    <h6 className='text-sm font-semibold'>Grammer</h6>
                                    <p className='text-sm'>+30 grammer rules</p>
                                </div>
                            </div>

                            <div className='items-center flex justify-end text-design1 text-lg'>
                                <IoIosArrowForward />
                            </div>

                        </div>
                        <div className='flex w-full align-center justify-between rounded-lg shadow-sm border-2 p-3  sm:mt-2'>
                            <div className=' flex p-2 gap-2'>
                                <img className='bg-white rounded-full px-2 shadow-lg border-2' src={support} alt="" />
                                <div className='w-full'>
                                    <h6 className='text-sm font-semibold'>Dictionary</h6>
                                    <p className='text-sm'>+10 new words</p>
                                </div>
                            </div>
                            <div className='items-center flex justify-end text-design1 text-lg '>
                                <IoIosArrowForward />
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Progress
