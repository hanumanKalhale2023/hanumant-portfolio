import Navbar from './components/Navbar'
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
const App = () => {

 
 

  return (
    <div className="font-poppins text-gray-800">
        <Navbar/>
      	<Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
    
    {/* <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/> */}
    </div>
  )
}

export default App