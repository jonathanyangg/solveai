'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Solve', 'Scale', 'Simplify'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        backDelay: 1000,
        startDelay: 300
      })

      // Cleanup on unmount
      return () => {
        typed.destroy()
      }
    }
  }, [])

  return (
    <section
      data-section='home'
      className='relative flex h-screen w-full items-center justify-center text-[#ededed]'
    >
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50 md:bg-fixed'
        style={{
          backgroundImage: "url('/homepage.jpg')",
          backgroundPosition: 'center center'
        }}
      ></div>
      <div className='relative z-0 flex flex-col items-center'>
        <p className='mb-6 mt-6 text-5xl font-medium'>
          <span ref={typedRef} className='font-semibold'></span>with AI
        </p>

        <p className='mb-6 text-center text-xl font-light'>
          Explore AI services for your business problems
        </p>
      </div>
    </section>
  )
}