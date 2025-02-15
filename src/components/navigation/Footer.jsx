export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    const footerLinks = [
      { name: 'About Me', href: 'https://www.linkedin.com/in/jonathan-yang-7b9075288/' },
      { name: 'Contact', href: '#contact' }
    ];
  
    return (
      <footer className="bg-[#242424]">
        <div className="w-full mx-auto max-w-screen-xl p-5 flex items-center justify-between">
          <span className="text-sm text-[#ededed] sm:text-center">
            © solve-AI - {currentYear}. All Rights Reserved
          </span>
          
          <ul className="flex flex-wrap items-center text-sm space-x-6 font-medium text-[#ededed]">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="hover:underline me-4 last:me-0"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    );
  }