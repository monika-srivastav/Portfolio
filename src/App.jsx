import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Linkedin } from "lucide-react";
// Assets
import passOp from "./assets/passOp.mp4";
import pass from "./assets/pass.png";
import cofee from "./assets/cofee.png";
import vectorGallery from "./assets/vectorGallery.mp4";
import AmazonClone from "./assets/AmazonClone.png";
import Amazon from "./assets/Amazon.mp4";
import calculator from "./assets/calculator.png";
import Calculator from "./assets/Calculator.mp4";
import shopper from "./assets/shopper.png";
import shopping from "./assets/shopping.mp4";
import Url from "./assets/Url.png";
import urlShortener from "./assets/urlShortener.mp4";
import Weather from "./assets/weather.png";
import weatherApp from "./assets/weatherApp.mp4";

// ===== Header =====
const Header = () => {
  const [active, setActive] = useState("home");
  const sections = ["home","about","projects","exgiperience","education","contact"];
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
    setActive(id);
  }
  return (
    <header className="bg-white/60 backdrop-blur sticky top-0 z-20 shadow">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-gray-800">Monika</h1>
        <nav className="space-x-4 font-semibold">
          {sections.map(s => (
            <button 
              key={s}
              onClick={() => handleScroll(s)}
              className={`hover:underline ${active===s?"text-indigo-600":""}`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

// ===== Home =====
const Home = () => (
  <section id="home" className="min-h-[60vh] flex items-center justify-center text-white relative overflow-hidden">
    <motion.div 
      className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500"
      animate={{backgroundPosition:["0% 50%","100% 50%","0% 50%"]}}
      transition={{duration:15, repeat:Infinity}}
      style={{backgroundSize:"200% 200%"}}
    />
    <motion.div 
      className="relative max-w-3xl mx-auto p-8 rounded-3xl bg-white/10 backdrop-blur-xl shadow-lg z-10 border border-white/20"
      whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(255,255,255,0.5)" }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <h2 className="text-4xl font-bold mb-4">
        Hi — I’m Monika<br/>
        <span className="text-yellow-300 font-semibold">MERN Stack Developer</span>
      </h2>
      <p className="text-gray-100 mb-6">
        Building scalable and responsive web applications with React, Node.js, Express, and MongoDB.
        Currently pursuing MCA (1st year) at Institute of Advanced Management & Research.
      </p>
      <div className="flex gap-3 justify-center">
        <a 
          href="/Monika_MERN_Resume_2.pdf" 
          download 
          className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded shadow hover:bg-yellow-300 transition transform hover:-translate-y-1 hover:shadow-lg"
        >
          Download Resume
        </a>
        <a 
          href="#contact" 
          className="px-6 py-2 border border-white rounded hover:bg-white hover:text-gray-900 transition transform hover:-translate-y-1 hover:shadow-lg"
        >
          Contact
        </a>
      </div>
    </motion.div>
  </section>
)

// ===== About =====
const About = ({summary}) => (
  <section id="about" className="py-12 bg-gray-50">
    <div className="max-w-5xl mx-auto p-6">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">About Me</h3>
      <p className="text-gray-700">{summary}</p>
    </div>
  </section>
)

// ===== Skills =====
const Skills = ({skills}) => (
  <section id="skills" className="py-8 bg-gray-50">
    <div className="max-w-5xl mx-auto p-6">
      <h4 className="text-xl font-semibold mb-4 text-gray-800">Skills</h4>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map(s => (
          <motion.div 
            key={s} 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)", backgroundColor:"rgba(255,255,255,0.2)" }}
            className="p-3 bg-white/20 backdrop-blur-xl rounded-xl text-center text-gray-800 font-semibold"
          >
            {s}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// ===== ProjectCard =====
const ProjectCard = ({ p }) => {
  const videoRef = useRef(null);
  const handleMouseEnter = () => { if(videoRef.current) videoRef.current.play(); }
  const handleMouseLeave = () => { if(videoRef.current){videoRef.current.pause(); videoRef.current.currentTime=0;} }

  return (
    <motion.div 
      whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(255,255,255,0.3)" }}
      className="bg-white/20 backdrop-blur-xl rounded-3xl p-4 group relative overflow-hidden border border-white/20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute -inset-0.5 rounded-3xl pointer-events-none bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 opacity-20 group-hover:opacity-40 transition duration-500"></div>
      <div className="relative z-10">
        <div className="h-40 bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
          <img src={p.screenshot} alt={p.name} className="h-full w-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-0"/>
          <motion.video 
            ref={videoRef} 
            src={p.video} 
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg hidden group-hover:block" 
            muted 
            loop 
            initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}
          />
        </div>
        <h5 className="font-semibold text-lg text-gray-800">{p.name}</h5>
        <p className="text-sm text-gray-600 my-2">{p.desc}</p>
        <div className="flex gap-6 mt-3">
      {p.github && (
        <motion.a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium transition"
        >
          <Github size={16}/> GitHub
        </motion.a>
      )}
      {p.video && (
        <motion.a
          href={p.video}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-1 text-purple-600 hover:text-purple-800 hover:underline text-sm font-medium transition"
        >
          <ExternalLink size={16}/> Live Demo
        </motion.a>
      )}
    </div>
          </div>
    </motion.div>
  )
}

// ===== Projects =====
const Projects = ({projects}) => (
  <section id="projects" className="py-12 bg-gray-50">
    <div className="max-w-5xl mx-auto p-6">
      <h4 className="text-2xl font-semibold mb-6 text-gray-800">Projects</h4>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard p={p} key={p.name} />)}
      </div>
    </div>
  </section>
)

// ===== Experience =====
const Experience = ({items}) => (
  <section id="experience" className="py-12 bg-gray-100">
    <div className="max-w-5xl mx-auto p-6">
      <h4 className="text-2xl font-semibold mb-6 text-gray-800">Experience</h4>
      <div className="space-y-4">
        {items.map(it => (
          <motion.div 
            key={it.company} 
            whileHover={{scale:1.02, boxShadow:"0 15px 25px rgba(0,0,0,0.15)"}}
            className="p-4 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20"
          >
            <div className="flex justify-between items-start">
              <div>
                <h5 className="font-semibold">{it.role} — {it.company}</h5>
                <p className="text-sm text-gray-600">{it.duration}</p>
              </div>
            </div>
            <ul className="mt-3 list-disc list-inside text-gray-700">
              {it.bullets.map((b,i) => <li key={i}>{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// ===== Education =====
const Education = ({items}) => (
  <section id="education" className="py-12 bg-gray-50">
    <div className="max-w-5xl mx-auto p-6">
      <h4 className="text-2xl font-semibold mb-4 text-gray-800">Education</h4>
      <div className="space-y-3">
        {items.map((e,i) => (
          <motion.div 
            key={i} 
            whileHover={{scale:1.02, boxShadow:"0 15px 25px rgba(0,0,0,0.15)"}}
            className="p-4 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20"
          >
            <div className="flex justify-between">
              <div>
                <h5 className="font-semibold">{e.degree}</h5>
                <p className="text-sm text-gray-600">{e.institution}</p>
              </div>
              <div className="text-sm text-gray-600">{e.year || ''}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

/// ===== Contact =====
const Contact = ({ email, github, linkedin }) => (
  <section id="contact" className="py-12 bg-gray-50">
    <div className="max-w-5xl mx-auto p-6 text-center">
      <h4 className="text-2xl font-semibold mb-4 text-gray-800">Contact</h4>
      <p className="text-gray-700 mb-4">
        Email: <a href={`mailto:${email}`} className="text-indigo-600 hover:underline">{email}</a>
      </p>
      <div className="flex justify-center gap-8">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-gray-800 hover:text-purple-600 hover:underline transition text-lg font-medium"
        >
          <Github size={20} /> GitHub
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline transition text-lg font-medium"
        >
          <Linkedin size={20} /> LinkedIn
        </a>
      </div>
    </div>
  </section>
)

// ===== Footer =====
const Footer = () => (
  <footer className="py-6 text-center text-sm text-gray-600 bg-gray-50">
    © {new Date().getFullYear()} Monika — Built with React + Tailwind + Framer Motion
  </footer>
)

// ===== Main App =====
export default function App() {
  const summary = `MERN Stack Developer experienced in building responsive, scalable web applications with React.js, Node.js, Express.js, and MongoDB. Skilled in REST APIs, authentication, and cloud integration.`
  const skills = ["React.js","Redux","TailwindCSS","HTML5","CSS3","JavaScript","Node.js","Express.js","MongoDB","MySQL","Postman","Firebase","AWS Lambda","Github"]

  const projects = [
    { name: "Amazon Clone", desc: "Responsive e-commerce website inspired by Amazon. Developed with HTML & CSS.", github: "https://github.com/monika-srivastav/Amazon_clone", video: Amazon, screenshot: AmazonClone },
    { name: "Calculator", desc: "Functional calculator with basic arithmetic operations, built using HTML, CSS, JS.", github: "https://github.com/monika-srivastav/Calculator.", video: Calculator, screenshot: calculator },
    { name: "Vector Gallery", desc: "Interactive vector gallery website with smooth animations.", github: "https://github.com/monika-srivastav/vector_gallery.git", video: vectorGallery, screenshot: cofee },
    { name: "Weather App", desc: "Responsive weather application fetching real-time data from OpenWeatherMap API.", github: "https://github.com/monika-srivastav/Weather_app.git", video: weatherApp, screenshot: Weather },
    { name: "Password Manager", desc: "Secure password manager to store credentials for various platforms.", github: "https://github.com/monika-srivastav/passwordManager.git", video: passOp, screenshot: pass },
    { name: "Shopper (E-Commerce)", desc: "Fully functional e-commerce website with cart & checkout.", github: "https://github.com/monika-srivastav/Shopping_website.git", video: shopping, screenshot: shopper },
    { name: "Url Shortener", desc: "Web app to shorten long URLs into manageable links.", github: "https://github.com/monika-srivastav/url_shortner", video: urlShortener, screenshot: Url },
  ];

  const experience = [
    {
      role: "MERN Stack Developer",
      company: "Snowebs Software Technologies Pvt Ltd",
      duration: "Nov 2024 – Present",
      bullets: [
        "Built a WhatsApp-like chat app using React, Node.js, MySQL, WebSocket & AWS Lambda.",
        "Integrated Wazzup API with webhook listeners for WhatsApp, enabling delivery tracking and live updates.",
        "Designed microservices for geospatial data from Firestore and created dashboards to monitor GPS & networks."
      ]
    },
    {
      role: "Front-End Developer (Internship)",
      company: "Netwings Solution Pvt Ltd",
      duration: "Aug 2024 – Nov 2024",
      bullets: [
        "Developed responsive pages with React.js and TailwindCSS.",
        "Assisted in API integration and bug fixing."
      ]
    }
  ];

  const education = [
    { degree: "MCA (1st Year)", institution: "IAMR" },
    { degree: "BCA", institution: "Modern College of Professional Studies — 71.3% (2021–2024)" },
    { degree: "12th (Science)", institution: "Loni Inter College — 77.8%" },
  ];

  const contact = {
    email: "srivastavmonika295@gmail.com",
    github: "https://github.com/monika-srivastav",
    linkedin: "https://linkedin.com/in/monika-srivastav-733217254"
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50">
      <Header />
      <main>
        <Home />
        <About summary={summary}/>
        <Skills skills={skills}/>
        <Projects projects={projects}/>
        <Experience items={experience}/>
        <Education items={education}/>
        <Contact {...contact}/>
      </main>
      <Footer />
    </div>
  )
}
