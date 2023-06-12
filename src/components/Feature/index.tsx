import Image from 'next/image';
import React from 'react';
import FeatureBg from '../../../public/images/featurebg.svg'
import Dots from '../../../public/images/bgdots2.svg'
import Cup from '../../../public/images/cup.svg'

function Feature() {
    return (
        <div className='bg-light_blue py-20'>
            <div className='w-[90%] xl:w-[1300px] m-auto'>
                <div>
                    <h1 className='text-[60px] md:text-[100px] font-semibold text-primary_color leading-none'>Featured</h1>
                    <h1 className='text-[60px] md:text-[100px] font-semibold text-primary_color'>Work</h1>
                </div>
                <div className='grid grid-cols-1 ml:grid-cols-2 md:grid-cols-3  gap-10 mt-10'>
                    <div className='relative'>
                        <Image src={FeatureBg} alt='bg' className='' />
                        <h1 className='text-[70px] md-lg:text-[90px] lg-xl:text-[120px] xl:text-[140px] absolute top-0 left-1/2 -translate-x-1/2 tracking-tighter font-bold text-primary_color'>G200</h1>
                        <Image src={Dots} alt='bg' className='absolute left-1/2 -translate-x-1/2 bottom-8 w-[90%]' />
                        <Image src={Cup} alt='bg' className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bottom-8 w-[70%]' />
                    </div>
                    <div className='relative'>
                        <Image src={FeatureBg} alt='bg' className='' />
                        <h1 className='text-[70px] md-lg:text-[90px] lg-xl:text-[120px] xl:text-[140px] absolute top-0 left-1/2 -translate-x-1/2 tracking-tighter font-bold text-primary_color'>G200</h1>
                        <Image src={Dots} alt='bg' className='absolute left-1/2 -translate-x-1/2 bottom-8 w-[90%]' />
                        <Image src={Cup} alt='bg' className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bottom-8 w-[70%]' />
                    </div>
                    <div className='relative'>
                        <Image src={FeatureBg} alt='bg' className='' />
                        <h1 className='text-[70px] md-lg:text-[90px] lg-xl:text-[120px] xl:text-[140px] absolute top-0 left-1/2 -translate-x-1/2 tracking-tighter font-bold text-primary_color'>G200</h1>
                        <Image src={Dots} alt='bg' className='absolute left-1/2 -translate-x-1/2 bottom-8 w-[90%]' />
                        <Image src={Cup} alt='bg' className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bottom-8 w-[70%]' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;