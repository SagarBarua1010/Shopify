'use client';
import React, { useState } from 'react'
import { RiCloseLine, RiSearchLine } from 'react-icons/ri';

const SearchInput = () => {
    const [search,setSearch] = useState('');
    console.log('search',search)
  return (
    <div className='hidden md:inline-flex flex-1 h-10 relative'>
        <input type="text" placeholder='Search products here...' 
        className='w-full h-full border-2 border-themeColor px-4 outline-none'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        {search && <RiCloseLine
        onClick={() => setSearch('')}
        className='text-xl absolute top-2.5 right-12 text-gray-500
         hover:text-red-500 cursor-pointer duration-200'></RiCloseLine>}
        <span className='w-10 h-10 bg-themeColor/80 inline-flex items-center justify-center text-white absolute top-0 right-0
        border border-themeColor hover:bg-themeColor duration-200 cursor-pointer'>
            <RiSearchLine></RiSearchLine>
        </span>
    </div>
  )
}

export default SearchInput