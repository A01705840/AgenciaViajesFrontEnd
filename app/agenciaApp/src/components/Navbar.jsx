import logo from "../assets/Logo.svg";
import { Darkmode } from "./Darkmode";
import Dropdown from "./Dropdown";
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  let navClass
  let textClass
  if (scrolled) {
    navClass = 'bg-[#253237]/70 backdrop-blur-sm'
    textClass = 'text-black/100'
  } else {
    navClass = 'bg-[#253237]/90'
    textClass = ' text-white'
  }
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div>
      <nav className={`
      fixed top-0 left-0 
      right-0 z-20 flex 
      items-center h-16 
      border-b 
      border-sage/20 
      transition-all 
      duration-500 
      ${navClass}`}>
        {/* Logo */}
        <a
          href="#"
          className="
          flex items-center 
          gap-3 h-full px-6 
          border-r border-sage/20"
        >
          <img
            src={logo}
            alt="La Marina logo"
            className="w-10 h-10 object-contain"
            />

          <div className="
          max-md:hidden flex 
          flex-col leading-none">
            <span className="
            font-serif uppercase tracking-[0.14em] 
            text-mist text-base ">
              La Marina
            </span>

            <span className="uppercase tracking-[0.24em] text-[0.52rem] text-white">
              Agencia de Viajes
            </span>
          </div>
        </a>

        {/* Links */}
          <ul className={`${textClass} max-sm:hidden flex h-full ml-1 `}>
            {[
              { name: "Destinos", id: "destinos" },
              { name: "Opiniones", id: "opiniones" },
              { name: "Experiencias", id: "destinos" },
              { name: "Acerca de", id: "acerca" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="
                    flex items-center h-full px-5
                    uppercase tracking-[0.18em] text-[0.8rem]
                    text-white/60
                    hover:text-white
                    hover:bg-white/10
                    transition-colors duration-300
                  "
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Dropdown/>
          <Darkmode/>
      </nav>
    </div>
  )
  
}