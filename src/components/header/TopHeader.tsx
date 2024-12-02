import React from 'react'
import Container from '../Container';
import { FaTruckDroplet } from "react-icons/fa6";
import { IoChevronDownSharp } from 'react-icons/io5';

const TopHeader = () => {
  return (
<div className='bg-[#010f1c] text-gray-200'>
       <Container className='flex items-center justify-between'>
        <p className='w-full font-bold md:w-auto text-sm flex items-center justify-center md:justify-normal py-1 '>
        <FaTruckDroplet className='text-[#f71815] text-2xl mr-1 '></FaTruckDroplet>Free Express Shipping On Orders $599+</p>
        <div className='hidden md:inline-flex items-center text-sm font-bold text-white'>
        <p className='headerTopHeader'>
            English <IoChevronDownSharp className='mt-1'></IoChevronDownSharp> 
        </p>
        <p className='headerTopHeader'>
            USD <IoChevronDownSharp className='mt-1'></IoChevronDownSharp> 
        </p>
        <p className='headerTopHeader'>
            Settings <IoChevronDownSharp className='mt-1'></IoChevronDownSharp> 
        </p>
        </div>
       </Container>
    </div>
  )
}

export default TopHeader;