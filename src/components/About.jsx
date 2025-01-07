import { FaHandshakeSimple } from "react-icons/fa6";

const About = () => {
  return (
    <div className='mt-5 ml-24 about-container pr-10'>
        <h2 className="underline text-zinc-800">About</h2>
        <p>
      Hello! I’m a passionate Full-Stack Developer with a knack for building robust and scalable web applications. With expertise in both front-end and back-end technologies, I thrive on crafting seamless user experiences and solving complex technical challenges.
    </p>
    <p>
      My skill set includes modern frameworks like <strong>React</strong>, <strong>Angular</strong>, and <strong>Bootstrap</strong> for the front end, coupled with back-end technologies like <strong>Node.js </strong> and <strong>Express.js</strong>. I also have hands-on experience with databases such as <strong>MongoDB</strong>.
    </p>
    <p>
      Over the years, I’ve worked on diverse projects, ranging from single-page applications to enterprise-level platforms, gaining invaluable insights into the end-to-end software development lifecycle. When I’m not coding, I enjoy exploring new tech trends, contributing to open-source projects, and mentoring aspiring developers.
    </p>
    <p>
      Let’s collaborate and bring innovative ideas to life!
    </p>
    <a href="#contact" className="text-xl text-zinc-800 no-underline font-semibold">Get in Touch <FaHandshakeSimple />
    </a>
    </div>
  )
}

export default About