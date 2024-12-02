 import React from 'react'
import Container from '../Container';
import Image from 'next/image';
import { logo } from '@/app/assets';
import SearchInput from './SearchInput';
import Link from 'next/link';
import { LiaUser } from 'react-icons/lia';
import HeaderIcons from './HeaderIcons';
 
 const MiddleHeader = () => {
   return (
     <div className='border-b-[1px] border-b-gray-400'>
        <Container className=' py-5 flex items-center gap-4  md:gap-4 lg:20  justify-between'>
            <Link href={'/'}>
            <div  className='flex items-center gap-2'>
            <Image src={logo} alt='logo' className='w-7' priority></Image>
            <p className='text-[20px] font-bold text-[#f71815] mt-1'>Shopify...</p>
            </div>
            </Link>
            <SearchInput></SearchInput>
            <div className='hidden md:inline-flex items-center gap-3'>
              <Link href={"/signin"} className='flex items-center gap-2 text-sm'>
              <div className='border-2 border-gray-700 p-1.5 rounded-full text-xl'>
                  <LiaUser></LiaUser>
              </div>
              <div>
                <p className='font-bold'>Login / Register</p>
              </div>
              </Link>
              <HeaderIcons></HeaderIcons>
            </div>
        </Container>
     </div>
   )
 }
 
 export default MiddleHeader;