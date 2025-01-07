import React from 'react'

const Projects = () => {
  return (
    <section id='Projects'>
      <div className='mt-20 ml-20 '> <h2>Projects</h2>
      <p>follwing are the projects I've done and which I am working... </p></div>     
    <div className='mt-4 ml-2 mb-10'>


        <div id='projects' className='flex gap-4 items-center justify-center'>
            <div className='w-48 flex flex-col items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600'>
                <h6 className='text-xl font-semibold text-zinc-600'>ToDo App</h6>
                <div><img src="public\todo.png" alt="" /></div>
                <div className='gap-4'><a href="https://react-todo-app-hanumantkalhale.netlify.app/" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl ' >Live</a><a href="https://github.com/hanumanKalhale2023/React-Todo-App" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl '>Git</a></div>
            </div>
            <div className='w-48 flex flex-col items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600'>
                <h6 className='text-xl font-semibold text-zinc-600'>SunDownStudio</h6>
                <div><img src="public\sun.png" alt="" className='w-36'/></div>
                <div className='gap-4'><a href="https://sundown-studio-clone-hanumant.netlify.app/" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl' >Live</a><a href="https://github.com/hanumanKalhale2023/SundownStudioclone" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl'>Git</a></div>
            </div>
            <div className='w-48 flex flex-col items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600'>
                <h6 className='text-xl font-semibold text-zinc-600'>WebTech</h6>
                <div><img src="public\webtech.jpeg" alt="" className='w-36'/></div>
                <div className='gap-4'><a href="https://web-dev-veer.netlify.app/" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl' >Live</a><a href="https://github.com/hanumanKalhale2023/webtechdev" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl'>Git</a></div>
            </div>
            <div className='w-48 flex flex-col items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600'>
                <h6 className='text-xl font-semibold text-zinc-600'>WebTech</h6>
                <div><img src="public\grocery.jpeg" alt="" className='w-36 rounded'/></div>
                <div className='gap-4'><a href="https://e-groccery-hanumant.netlify.app/" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl' >Live</a><a href="https://github.com/hanumanKalhale2023/eGrossaryStore" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl'>Git</a></div>
            </div>
            
        </div>
        
        <div id='projects1' className='flex gap-4 items-center justify-center mt-7'>
            <div className='w-48 flex flex-col items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600'>
                <h6 className='text-xl font-semibold text-zinc-600'>SolarSytem</h6>
                <div><img src="public\solar.jpeg" alt="" className='w-36 h-36 rounded'/></div>
                <div className='gap-4'><a href="https://solar-system-hanumant.netlify.app/" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl' >Live</a><a href="https://github.com/hanumanKalhale2023/Solar-System" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl'>Git</a></div>
            </div>
            <div className='w-48 flex flex-col items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600'>
                <h6 className='text-xl font-semibold text-zinc-600'>CaloryCounter</h6>
                <div><img src="public\calory.jpeg" alt="" className='w-36 h-36 rounded'/></div>
                <div className='gap-4'><a href="https://calorie-counter-hanumantkalhale.netlify.app/" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl' >Live</a><a href="https://github.com/hanumanKalhale2023/Calorie-Counter" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl'>Git</a></div>
            </div>
            <div className='w-48 flex flex-col items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600'>
                <h6 className='text-xl font-semibold text-zinc-600'>BubbleGame</h6>
                <div><img src="public\bubblegame.jpeg" alt="" className='w-36 h-36 rounded'/></div>
                <div className='gap-4'><a href="https://jsbubble-game-hak.netlify.app/" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl' >Live</a><a href="https://github.com/hanumanKalhale2023/bubblegame" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl'>Git</a></div>
            </div>
            <div className='w-48 flex flex-col items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600'>
                <h6 className='text-xl font-semibold text-zinc-600'>BookHeaven</h6>
                <div><img src="public\bookstore.png" alt="" className='w-36 rounded'/></div>
                <div className='gap-4'><a href="https://e-groccery-hanumant.netlify.app/" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl' >Live</a><a href="https://github.com/hanumanKalhale2023/bookheaven" target='_blank' className='p-3 mr-2 no-underline text-zinc-600 text-xl'>Git</a></div>
            </div>
            
        </div>
    </div>
    </section>
  )
}

export default Projects