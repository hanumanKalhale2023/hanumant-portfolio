import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";



const Home = () => {
  return (
    <div className='flex flex-row items-center justify-around mt-4 p-5'>
    <div className=''>
        <h1 className='text-6xl'>Hanumant <br /> Kalhale</h1>
        <p className='text-justify text-xl text-zinc-600 p-1'>A passionate about software developement. <p className='text-2xl text-purple-500'>Full Stack Developer</p> </p>
       <div className='bg-indigo-300 w-20 rounded hover:bg-indigo-400 hover:font-semibold'>
        <a className='p-2 no-underline text-zinc-800' href='public\HanumantKalhaleResume.pdf' target='_blank'>Resume</a>
       </div>
       <div  className='mt-2 flex flex-row text-xl'>
        <a className='p-2 no-underline text-zinc-800 hover:text-3xl' href='https://github.com/hanumanKalhale2023' target='_blank'><FaGithub />
        </a>
        <a className='p-2 no-underline text-zinc-800 hover:text-3xl' href='https://www.linkedin.com/in/hanumant-kalhale-801135179/' target='_blank'><FaLinkedin />
        </a>
        <a className='p-2 no-underline text-zinc-800 hover:text-3xl' href='https://www.instagram.com/hanamantkalhale/' target='_blank'><FaInstagramSquare />
        </a>
        <a className='p-2 no-underline text-zinc-800 hover:text-3xl' href='https://www.twitter.com/hanumant_kalhale' target='_blank'><FaSquareTwitter />
        </a>
       </div>
       
    </div>
    <div className=''>
        <img className='rounded-full w-60 bg-white border-indigo-500 ' src="public\Photo.jpg" alt="" />
    </div>
    </div>
  )
}

export default Home