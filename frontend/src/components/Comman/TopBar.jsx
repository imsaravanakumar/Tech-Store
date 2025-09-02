import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa6'

const Topbar = () => {
  return (
    <div className=' bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white'>
      <div className='container mx-auto flex flex-grow justify-between items-center py-3 px-4'>
        <div className='flex items-center space-x-4'>
            <a href="" className='hover:text-amber-400'><FaInstagram className='h-4 w-4'/></a>
            <a href="" className='hover:text-amber-400'><FaFacebook className='h-4 w-4'/></a>
            <a href="" className='hover:text-amber-400'><FaTwitter className='h-4 w-4'/></a>
        </div>
        <div className='text-sm hidden lg:block'>
            <a href="saravana03tmg@gmail.com" className='hover:text-amber-400 flex items-center gap-1'><FaEnvelope/> saravana03tmg@gmail.com</a>
        </div>
        <div className='text-sm'>
            <a href="tel:9655617827" className='hover:text-amber-400 flex items-center gap-1'><FaPhone/>+919655617827</a>
        </div>
      </div>
    </div>
  )
}

export default Topbar
