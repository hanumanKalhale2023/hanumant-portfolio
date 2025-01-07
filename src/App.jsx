import Navbar from "./Components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
const App = () => {
  return (
    <div className="font-poppins text-gray-800">
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    </div>
  )
}

export default App