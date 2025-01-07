import React from 'react'

const Footer = () => {
  return (
    <div>
            <div className='flex items-center'>
                <a className='ml-80 no-underline text-zinc-800 hover:text-zinc-600 hover:font-semibold' href="#Home">Home</a>
                <a className='ml-4 no-underline text-zinc-800 hover:text-zinc-600 hover:font-semibold' href="#Skills" >Skills</a>
                <a className='ml-4 no-underline text-zinc-800 hover:text-zinc-600 hover:font-semibold' href="#About">About</a>
                <a className='ml-4 no-underline text-zinc-800 hover:text-zinc-600 hover:font-semibold' href="#Projects">Projects</a>
                <a className='ml-4 no-underline text-zinc-800 hover:text-zinc-600 hover:font-semibold' href="#Contact">Contact</a>
            </div>
        <p className='text-center text-2xl text-gray-700 p-3'> 2023 @Hanumant Kalhale. All rights reserved.</p>
        
    </div>
  )
}

export default Footer