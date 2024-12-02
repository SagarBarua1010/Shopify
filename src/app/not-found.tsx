import Container from '@/components/Container';
import Image from 'next/image';
import React from 'react'
import { notFound } from './assets';
import Button from '@/components/Button';

const NotFound = () => {
  return (
    <Container className='flex flex-col gap-2 items-center py-10'>
        <Image src={notFound} alt='notFoundImage' className='max-w-60'></Image>
        <p className='text-xl font-semibold'>Oops! page not found</p>
        <p>Whoops, this is embarrassing.Looks like the page you were looking for
            wasn&apos;t found.
        </p>
        <Button href='/'>Back to Home</Button>
    </Container>
  )
}

export default NotFound;