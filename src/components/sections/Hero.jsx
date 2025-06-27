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
    <>
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Solve AI",
            "description": "AI services for educational institutions - Solve, Scale, and Simplify with artificial intelligence",
            "serviceType": "AI Services"
          })
        }}
      />
      
      <section
        data-section='home'
        className='relative flex h-screen w-full items-center justify-center text-[#ededed]'
        role='banner'
        aria-label='Hero section'
      >
        <Image
          src="/homepage.jpg"
          alt="Modern AI technology background representing artificial intelligence solutions for educational institutions and businesses"
          fill
          priority
          className="object-cover brightness-[0.4]"
          style={{ zIndex: -1 }}
        />
        <div className='relative z-10 flex flex-col items-center'>
          <h1 className='mb-6 mt-6 text-5xl font-medium'>
            <span ref={typedRef} className='font-semibold' suppressHydrationWarning aria-live='polite'></span>
            <span className='sr-only'>Solve, Scale, or Simplify </span>with AI
          </h1>

          <h2 className='mb-6 text-center text-xl font-light'>
            Explore AI Services for Educational Institutions
          </h2>
        </div>
      </section>
    </>
  )
}