'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../../public/images/logo.svg'
import BG1 from '../../../public/images/bg1.svg'
import { BiMenu } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import Link from 'next/link';

function HeaderHero() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={`${open ? 'flex' : 'hidden'} justify-center items-center md:hidden bg-[#000000db] backdrop-blur-md absolute top-0 left-0 w-full h-screen z-50`}>
                <div className='absolute top-0 w-[90%] m-auto flex justify-between items-center h-[105px]'>
                    <Image src={Logo} alt='logo' className='w-[140px]' />
                    <div onClick={() => setOpen(false)}>
                        <RxCross2 size={30} className='text-white' />
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <ul className='flex flex-col gap-4 text-center text-2xl text-white'>
                        <Link href={'#'} onClick={() => setOpen(false)}><li>Work</li></Link>
                        <Link href={'#'} onClick={() => setOpen(false)}><li>Services</li></Link>
                        <Link href={'#'} onClick={() => setOpen(false)}><li>About</li></Link>
                    </ul>
                </div>
            </div>
            <div className={`relative bg-[url('/images/bg.svg')] pb-20 bg-no-repeat bg-cover bg-bottom`}>
                <div className='w-[90%] xl:w-[1300px] m-auto pt-10 flex justify-between'>
                    <Image src={Logo} alt='logo' className='w-[150px]' width={200} height={100} />
                    <ul className='hidden md:flex gap-10 text-primary_color font-bold'>
                        <li>Work</li>
                        <li>Services</li>
                        <li>About</li>
                    </ul>
                    <BiMenu onClick={() => setOpen(true)} className='block md:hidden text-[30px] z-30 text-primary_color cursor-pointer' />
                </div>
                <div className='w-[650px] lg-xl:w-[750px] hidden lg:block z-10 -mt-10 absolute right-0'>
                    <Image src={BG1} alt='bg' width={1000} height={1000} className='w-full' />
                </div>
                <div className={`w-[90%] xl:w-[1350px] mx-auto mt-20 relative lg:bg-[url('/images/mainbg.png')] bg-no-repeat bg-cover bg-center z-20`}>

                    <div className='pt-6 lg:pt-44 pb-14 lg:pb-40 w-full lg:w-[80%] xl:w-[75%] mx-auto'>
                        <h1 className='text-[70px] lg-xl:text-[85px] xl:text-[100px] leading-none font-bold tracking-tighter text-primary_color'>We are an agency that will save your life</h1>
                        <h2 className='text-4xl font-semibold text-primary_color mt-14 w-[260px]'>Welcome to Ronan Agency</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderHero;