import Image from 'next/image';
import React from 'react';
import Client1 from '../../../public/images/clients/1.svg'
import Client2 from '../../../public/images/clients/2.svg'
import Client3 from '../../../public/images/clients/3.svg'
import Client4 from '../../../public/images/clients/4.svg'
import Client5 from '../../../public/images/clients/5.svg'
import Client6 from '../../../public/images/clients/6.svg'
import Client7 from '../../../public/images/clients/7.svg'
import Client8 from '../../../public/images/clients/8.svg'
import Client9 from '../../../public/images/clients/9.svg'
import Client10 from '../../../public/images/clients/10.svg'
import Bg from '../../../public/images/clients/clientsbg.svg'


function Clients() {
    let data = [
        Client1,
        Client2,
        Client3,
        Client4,
        Client5,
        Client6,
        Client7,
        Client8,
        Client9,
        Client10,
    ]
    return (
        <div className='py-20 lg:py-40 bg-light_blue relative'>
            <div className='w-full max-w-[2000px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-10 hidden md:block'>
                <Image src={Bg} alt='bg' className='w-full' />
            </div>
            <div className='w-[90%] xl:w-[1300px] m-auto grid-cols-2 ml:grid-cols-4 grid lg:grid-cols-5 gap-5 relative z-10'>
                {
                    data.map((image, index) => {
                        return (
                            <Image key={index} src={image} alt='image' className='w-full' />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Clients;