'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
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
      <Image
        src="/homepage.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover brightness-50"
        style={{ zIndex: -1 }}
      />
      <div className='relative z-10 flex flex-col items-center'>
        <p className='mb-6 mt-6 text-5xl font-medium'>
          <span ref={typedRef} className='font-semibold' suppressHydrationWarning></span>with AI
        </p>

        <p className='mb-6 text-center text-xl font-light'>
          Explore AI services for your business problems
        </p>
      </div>
    </section>
  )
}