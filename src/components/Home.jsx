import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";



const Home = () => {
  return (
    <div id='Home' className='flex flex-row items-center justify-around mt-4 p-5 card1 '>
    <div className=''>
        <h1 className='text-6xl'>Hanumant <br /> Kalhale</h1>
        <p className='text-justify text-xl text-zinc-600 p-1'>A passionate about software developement. <p className='text-2xl text-purple-500'>Full Stack Developer</p> </p>
       <div className='flex flex-row gap-4 bg-indigo-300 w-20 rounded hover:bg-indigo-400 hover:font-semibold'>
        <a className='p-2 no-underline text-white rounded bg-zinc-500 hover:text-zinc-800 ' href='public\HanumantKalhaleResume.pdf' target='_blank'>Resume</a>
        <a className='p-2 no-underline text-zinc-800 hover:bg-zinc-600 hover:text-white rounded' href='mailto:khanumant2023@gmail.com'>Email</a>

       </div>
       <div  className='mt-4 flex flex-row text-xl'>
        <a className='p-2 no-underline text-zinc-800 hover:text-3xl' href='https://github.com/hanumanKalhale2023' target='_blank'><FaGithub />
        </a>
        <a className='p-2 no-underline text-zinc-800 hover:text-3xl' href='https://www.linkedin.com/in/hanumant-kalhale-801135179/' target='_blank'><FaLinkedin />
        </a>
        <a className='p-2 no-underline text-zinc-800 hover:text-3xl' href='https://www.instagram.com/hanamantkalhale/' target='_blank'><FaInstagramSquare />
        </a>
        <a className='p-2 no-underline text-zinc-800 hover:text-3xl' href='https://www.codechef.com/users/hkalhale2018' target='_blank'><SiCodechef />

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