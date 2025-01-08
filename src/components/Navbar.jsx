import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <nav  className='nav flex flex-row items-center justify-around'>
        <a href="#Home" className="text-zinc-800 no-underline"><h4 className='text-xl font-bold'>Hanumant </h4></a>
            <div className='nav flex justify-around gap-4 '>
                <a className='no-underline text-zinc-800 hover:text-zinc-950 hover:font-semibold' href="#Home" >Home</a>
                <a className='no-underline text-zinc-800 hover:text-zinc-950 hover:font-semibold' href="#Skills" >Skills</a>
                <a className='no-underline text-zinc-800 hover:text-zinc-950 hover:font-semibold' href="#About" >About</a>
                <a className='no-underline text-zinc-800 hover:text-zinc-950 hover:font-semibold' href="#Projects">Projects</a>
                <a className='no-underline text-zinc-800 hover:text-zinc-950 hover:font-semibold' href="#Contact">Contact</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar