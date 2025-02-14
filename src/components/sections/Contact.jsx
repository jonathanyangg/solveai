// export default function ContactForm() {
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // Add your form submission logic here
//     };
  
//     return (
//       <form onSubmit={handleSubmit} className="space-y-8">
//         <div>
//           <label 
//             htmlFor="email" 
//             className="block mb-2 text-sm font-medium text-[#d6d4d4]"
//           >
//             Your email
//           </label>
//           <input 
//             type="email" 
//             id="email" 
//             className="shadow-sm bg-[#4a4a4a] border border-[#656465] text-[#fafafa] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder:text-[#d6d4d4]" 
//             placeholder="name@gmail.com" 
//             required 
//           />
//         </div>
        
//         <div>
//           <label 
//             htmlFor="subject" 
//             className="block mb-2 text-sm font-medium text-[#d6d4d4]"
//           >
//             Subject
//           </label>
//           <input 
//             type="text" 
//             id="subject" 
//             className="block p-3 w-full text-sm bg-[#4a4a4a] rounded-lg border border-[#656465] shadow-sm focus:ring-primary-500 focus:border-primary-500 text-[#ededed] placeholder:text-[#d6d4d4]" 
//             placeholder="Let us know how we can help you" 
//             required 
//           />
//         </div>
        
//         <div className="sm:col-span-2">
//           <label 
//             htmlFor="message" 
//             className="block mb-2 text-sm font-medium text-[#d6d4d4]"
//           >
//             Your message
//           </label>
//           <textarea 
//             id="message" 
//             rows="6" 
//             className="block p-2.5 w-full text-sm bg-[#4a4a4a] rounded-lg shadow-sm border border-[#656465] focus:ring-primary-500 focus:border-primary-500 text-[#ededed] placeholder:text-[#d6d4d4]" 
//             placeholder="Leave a comment..."
//           />
//         </div>
        
//         <button 
//           type="submit" 
//           className="py-3 px-5 text-sm font-medium text-center text-[#ededed] rounded-lg bg-[#4a4a4a] sm:w-fit hover:bg-[#6e6e6e] transition-all duration-300 hover:scale-105 focus:ring-4 focus:outline-none focus:ring-gray-800"
//         >
//           Send message
//         </button>
//       </form>
//     );
//   }