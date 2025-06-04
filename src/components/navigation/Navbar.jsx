'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionName) => {
    const section = document.querySelector(`[data-section="${sectionName}"]`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      id='navbar'
      className={`top-0; fixed z-10 w-full transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-lg' : ''
      }`}
      style={{
        background: scrolled ? 'rgba(8, 8, 8, 0.8)' : 'transparent'
      }}
    >
      <ul className='my-4 flex flex-row items-center justify-center gap-x-2 md:gap-x-6'>
        <li>
          <button
            onClick={() => scrollToSection('home')}
            className="relative text-lg text-[#ededed] transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ededed] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('solutions')}
            className="relative text-lg text-[#ededed] transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ededed] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            Solutions
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('projects')}
            className="relative text-lg text-[#ededed] transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ededed] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection('contact')}
            className="relative text-lg text-[#ededed] transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ededed] after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}
