
const Navbar = () => {
  return (
    <div>
        <nav className='flex flex-row items-center justify-around'>
            <h4 className='text-xl font-bold'>Hanumant </h4>
            <div className='flex justify-around gap-4 '>
                <a className='no-underline text-zinc-800 hover:text-zinc-950 hover:font-semibold' href="/">Home</a>
                <a className='no-underline text-zinc-800 hover:text-zinc-950 hover:font-semibold' href="/education">Education</a>
                <a className='no-underline text-zinc-800 hover:text-zinc-950 hover:font-semibold' href="/about">About</a>
                <a className='no-underline text-zinc-800 hover:text-zinc-950 hover:font-semibold' href="/projects">Projects</a>
                <a className='no-underline text-zinc-800 hover:text-zinc-950 hover:font-semibold' href="/contact">Contact</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar