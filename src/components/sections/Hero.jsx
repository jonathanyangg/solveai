"use client"

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
    const typedRef = useRef(null);

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: ['Solve', 'Scale', 'Simplify'],
                typeSpeed: 100,
                backSpeed: 50,
                loop: true,
                backDelay: 1000,
                startDelay: 300,
            });

            // Cleanup on unmount
            return () => {
                typed.destroy();
            };
        }
    }, []);

    return (
      <section id="home" className="relative h-screen w-full flex items-center justify-center text-[#ededed]">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-50 bg-fixed" 
          style={{backgroundImage: "url('/homepage.jpg')"}}
        ></div>
        <div className="flex flex-col items-center relative z-0">
          <p className="text-5xl font-medium mt-6 mb-6">
            <span ref={typedRef} className="font-semibold"></span>with AI
          </p>
          <p className="text-lg font-light mb-6">
            Explore AI services for your business problems
          </p>
        </div>
      </section>
    );
}