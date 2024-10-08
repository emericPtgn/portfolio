import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div>
            <div className='w-full absolute left-0 -bottom-72 min-h-96'>
                <Image width={0} height={0} style={{width: '100%', height: 'auto'}} src='/footer-grid.svg' className='w-full h-full opacity-50' alt='grid'/>
            </div>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='heading lg:max-w-[45vw]'>Prêt à <span className='text-purple'>dynamiser</span> votre présence en ligne ?</h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Contactez-moi aujourd&apos;hui, et voyons ensemble comment réaliser vos objectifs !</p>
            </div>
            <div className='flex w-full justify-center items-center'>
                <a href='mailto:pro.petitgenet.emeric@gmail.com'>
                    <MagicButton title='Je paie le 1er café ☕️' icon={<FaLocationArrow/>} position='right' />
                </a>    
            </div>
            
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright ©️ 2024 Emeric</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <Image width={0} height={0} style={{width: '100%', height: 'auto'}} src={profile.img} alt='icons' />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer
