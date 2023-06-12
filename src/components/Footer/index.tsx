import Image from 'next/image';
import React from 'react';
import Dots from '../../../public/images/footerdots.svg'
import Ronan from '../../../public/images/ronan.svg'
import Linkedin from '../../../public/images/icons/linkedin.svg'
import Be from '../../../public/images/icons/be.svg'
import Insta from '../../../public/images/icons/insta.svg'

function Footer() {
    return (
        <div className={`relative pt-32 bg-[url('/images/footerbg.svg')] bg-no-repeat bg-cover bg-top`}>
            <div className='w-[90%] xl:w-[1300px] m-auto '>
                <Image src={Dots} alt='dots' className='w-full' />
                <div className='block md:flex mt-20'>
                    <div className='w-[80%] md:w-[70%] self-end'>
                        <Image src={Ronan} alt='ronan' className='w-full md:w-[80%]' />
                    </div>
                    <div className='mt-10 md:mt-0'>
                        <h1 className='text-3xl text-primary_color font-bold'>Let&apos;s work together</h1>
                        <div className='mt-8 md:mt-12'>
                            <p className='text-lg text-primary_color font-semibold'>Hello@ronanagency.com</p>
                            <p className='text-lg text-primary_color font-semibold'>024 5567 8888</p>
                        </div>
                        <div className='mt-16 md:mt-32 flex items-center gap-16'>
                            <Image src={Linkedin} alt='linkedin' className='w-[30px]' />
                            <Image src={Be} alt='linkedin' className='w-[35px]' />
                            <Image src={Insta} alt='linkedin' className='w-[30px]' />
                        </div>
                        <p className='text-lg text-primary_color font-semibold mt-8 md:mt-14 pb-10'>© Ronan Agency, All rights reserved, 2022 </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;