"use client"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xdkawnyp");
    
    if (state.succeeded) {
        return (
            <div className="flex justify-center p-8 bg-[#151515]">
            <p className="text-xl text-[#ededed]">Thanks for your message! We will get back to you soon</p>
            </div>
        )
    }
    
    return (
        <section id="contact" className="bg-[#151515] p-8 md:p-20">
            <div className="px-4 mx-auto max-w-screen-md">
                <p className="text-4xl font-medium text-[#ededed] text-center mb-4">
                    Contact Us
                </p>
                <p className="text-center text-[#d6d4d4] text-lg mb-8">
                    Want to get started? Need details about our services? Let us know below!
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div>
                        <label 
                            htmlFor="email" 
                            className="block mb-2 text-sm font-medium text-[#d6d4d4]"
                        >
                            Your email
                        </label>
                        <input 
                            type="email" 
                            id="email"
                            name="email" 
                            className="shadow-sm bg-[#4a4a4a] border border-[#656465] text-[#fafafa] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder:text-[#d6d4d4]" 
                            placeholder="name@gmail.com" 
                            required 
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    
                    <div>
                        <label 
                            htmlFor="subject" 
                            className="block mb-2 text-sm font-medium text-[#d6d4d4]"
                        >
                            Subject
                        </label>
                        <input 
                            type="text" 
                            id="subject"
                            name="subject" 
                            className="block p-3 w-full text-sm bg-[#4a4a4a] rounded-lg border border-[#656465] shadow-sm focus:ring-primary-500 focus:border-primary-500 text-[#ededed] placeholder:text-[#d6d4d4]" 
                            placeholder="e.g. Initial Consultation, Product Feedback"
                            required 
                        />
                    </div>
                    
                    <div className="sm:col-span-2">
                        <label 
                            htmlFor="message" 
                            className="block mb-2 text-sm font-medium text-[#d6d4d4]"
                        >
                            Your message
                        </label>
                        <textarea 
                            id="message"
                            name="message" 
                            rows="6" 
                            className="block p-2.5 w-full text-sm bg-[#4a4a4a] rounded-lg shadow-sm border border-[#656465] focus:ring-primary-500 focus:border-primary-500 text-[#ededed] placeholder:text-[#d6d4d4]" 
                            placeholder="Let us know how we can help you"
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <div className="flex justify-center">
                        <button 
                        type="submit"
                        disabled={state.submitting}
                        className="py-3 px-5 text-sm font-medium text-center text-[#ededed] rounded-lg bg-[#4a4a4a] sm:w-fit hover:bg-[#6e6e6e] transition-all duration-300 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-gray-800"
                        >
                        {state.submitting ? 'Sending...' : 'Send message'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;