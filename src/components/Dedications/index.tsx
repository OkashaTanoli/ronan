import React from 'react';
import Bg from '../../../public/images/dedication.svg'
import Image from 'next/image';

function Dedications() {
    return (
        <div className='bg-light_blue pt-20 lg:pt-40 pb-10 lg:pb-20 relative'>
            <div className='w-full max-w-[2000px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-10 hidden md:block'>
                <Image src={Bg} alt='bg' className='w-full' />
            </div>
            <div className='w-[90%] xl:w-[1300px] mx-auto relative z-10'>
                <h1 className='full md:w-[80%] text-[50px] text-primary_color font-semibold'>A Ronan Dedicated to Finding the Best Creative Solutions for Your Brands.</h1>
                <div className='flex justify-end mr-0 md:mr-10 lg:mr-40'>
                    <p className='w-full md:w-[500px] mt-20 md:mt-60 text-xl font-semibold leading-10 text-primary_color'>Ronan Agency is not your average order-taking vendor.
                        We are proud to be the go-to partner for some of the
                        world&apos;s biggest agencies and brands because they trust
                        our expertise, as we do theirs. By asking the right
                        questions and challenging the creative vision, we ensure
                        the best possible results for our clients.</p>
                </div>
            </div>
        </div>
    );
}

export default Dedications;