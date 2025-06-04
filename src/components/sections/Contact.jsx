"use client"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xdkawnyp");
    
    if (state.succeeded) {
        return (
            <div className="flex justify-center p-8">
                <div className="backdrop-blur-sm bg-green-500/10 border border-green-500/20 rounded-lg p-6 shadow-lg">
                    <p className="text-xl text-[#ededed] text-center">Thanks for your message! We will get back to you soon</p>
                </div>
            </div>
        )
    }
    
    return (
        <section data-section="contact" className="py-16 px-8 md:py-24 md:px-20">
            <div className="px-4 mx-auto max-w-screen-md">
                <p className="text-4xl font-medium text-[#ededed] text-center mb-6">
                    Contact Us
                </p>
                <p className="text-center text-[#d6d4d4] text-lg mb-16 leading-relaxed">
                    Want to get started? Need details about our services? Let us know below!
                </p>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="group">
                        <label 
                            htmlFor="email" 
                            className="block mb-3 text-sm font-medium text-[#d6d4d4] group-focus-within:text-[#ededed] transition-colors duration-200"
                        >
                            Your email *
                        </label>
                        <input 
                            type="email" 
                            id="email"
                            name="email" 
                            className="w-full p-4 text-sm bg-[#2a2a2a]/80 backdrop-blur-sm border border-[#404040] text-[#fafafa] rounded-lg
                                     focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-[#2a2a2a] 
                                     hover:border-[#505050] hover:bg-[#2a2a2a]/90
                                     transition-all duration-300 placeholder:text-[#888] shadow-lg" 
                            placeholder="name@gmail.com" 
                            required 
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>
                    
                    <div className="group">
                        <label 
                            htmlFor="subject" 
                            className="block mb-3 text-sm font-medium text-[#d6d4d4] group-focus-within:text-[#ededed] transition-colors duration-200"
                        >
                            Subject *
                        </label>
                        <input 
                            type="text" 
                            id="subject"
                            name="subject" 
                            className="w-full p-4 text-sm bg-[#2a2a2a]/80 backdrop-blur-sm border border-[#404040] text-[#fafafa] rounded-lg
                                     focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-[#2a2a2a]
                                     hover:border-[#505050] hover:bg-[#2a2a2a]/90
                                     transition-all duration-300 placeholder:text-[#888] shadow-lg" 
                            placeholder="e.g. Initial Consultation, Product Feedback"
                            required 
                        />
                        <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>
                    
                    <div className="group">
                        <label 
                            htmlFor="message" 
                            className="block mb-3 text-sm font-medium text-[#d6d4d4] group-focus-within:text-[#ededed] transition-colors duration-200"
                        >
                            Your message
                        </label>
                        <textarea 
                            id="message"
                            name="message" 
                            rows="6" 
                            className="w-full p-4 text-sm bg-[#2a2a2a]/80 backdrop-blur-sm border border-[#404040] text-[#fafafa] rounded-lg
                                     focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-[#2a2a2a]
                                     hover:border-[#505050] hover:bg-[#2a2a2a]/90
                                     transition-all duration-300 placeholder:text-[#888] shadow-lg resize-none" 
                            placeholder="Let us know how we can help you..."
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>
                    
                    <div className="flex justify-center mt-6">
                        <button 
                            type="submit"
                            disabled={state.submitting}
                            className="relative overflow-hidden py-3 px-7 text-base font-medium text-[#ededed] rounded-lg 
                                     bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-[#404040] hover:border-[#505050]
                                     disabled:bg-[#1a1a1a] disabled:border-[#2a2a2a] disabled:cursor-not-allowed disabled:text-[#888]
                                     transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/10
                                     focus:ring-4 focus:ring-white/20 focus:outline-none
                                     active:scale-95 min-w-[140px]"
                        >
                            <span className={`transition-opacity duration-200 ${state.submitting ? 'opacity-0' : 'opacity-100'}`}>
                                Send message
                            </span>
                            {state.submitting && (
                                <span className="absolute inset-0 flex items-center justify-center">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                </span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;