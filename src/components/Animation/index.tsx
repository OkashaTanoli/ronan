import React from 'react';
import Animation1 from '../../../public/images/animation/animation1.svg'
import Animation2 from '../../../public/images/animation/animation2.svg'
import Animation3 from '../../../public/images/animation/animation3.svg'
import Image from 'next/image';

function Animation() {
    return (
        <div className='bg-light_blue py-20'>
            <div className='w-[90%] xl:w-[1300px] m-auto flex flex-col lg:flex-row gap-20 lg:gap-0 justify-between'>
                <div className='w-full lg:w-[25%] flex flex-row lg:flex-col justify-between items-center gap-10'>
                    <Image src={Animation1} alt='animation1' className='w-[40px]' />
                    <Image src={Animation2} alt='animation1' className='w-[60px]' />
                    <Image src={Animation1} alt='animation1' className='w-[40px]' />
                </div>
                <div className='flex flex-col items-center gap-10'>
                    <div>
                        <h1 className='text-[55px] mm:text-[80px] ml:text-[100px] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#E1F931] via-[#FFA611] to-[#8B6EFE] leading-none'>Animation</h1>
                        <div className='w-full h-2 bg-primary_color rounded-full'></div>
                    </div>
                    <div>
                        <h1 className='text-[55px] mm:text-[80px] ml:text-[100px] font-bold text-primary_color leading-none tracking-tighter'>Strategy</h1>
                        <div className='w-full h-2 bg-gradient-to-r from-[#E1F931] via-[#FFA611] to-[#8B6EFE] rounded-full mt-3'></div>
                    </div>
                    <div>
                        <h1 className='text-[55px] mm:text-[80px] ml:text-[100px] font-bold text-primary_color leading-none tracking-tighter'>Creative</h1>
                        <div className='w-full h-2 bg-gradient-to-r from-[#E1F931] via-[#FFA611] to-[#8B6EFE] rounded-full'></div>
                    </div>
                    <div>
                        <h1 className='text-[55px] mm:text-[80px] ml:text-[100px] font-bold text-primary_color leading-none tracking-tighter'>Branding</h1>
                        <div className='w-full h-2 bg-gradient-to-r from-[#E1F931] via-[#FFA611] to-[#8B6EFE] rounded-full mt-3'></div>
                    </div>
                </div>
                <div className='w-full lg:w-[25%] flex flex-row lg:flex-col justify-between items-center gap-10'>
                    <Image src={Animation1} alt='animation1' className='w-[40px]' />
                    <Image src={Animation3} alt='animation1' className='w-[60px]' />
                    <Image src={Animation1} alt='animation1' className='w-[40px]' />
                </div>
            </div>
        </div>
    );
}

export default Animation;