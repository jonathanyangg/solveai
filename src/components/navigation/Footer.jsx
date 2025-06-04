export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      name: 'About Me',
      href: 'https://www.linkedin.com/in/jonathan-yang-7b9075288/'
    },
    { name: 'Contact', 
      href: 'https://www.linkedin.com/company/solve-aiorg/' }
  ]

  return (
    <footer 
      style={{
        background: 'radial-gradient(at 57% 4%, #121212 0px, transparent 50%), #050505'
      }}
    >
      <div className='mx-auto flex w-full max-w-screen-xl flex-row flex-wrap-reverse content-evenly items-center justify-around gap-y-4 p-5'>
        <span className='text-center text-sm text-[#ededed]'>
          © solve-AI - {currentYear}. All Rights Reserved
        </span>

        <ul className='flex flex-wrap items-center gap-x-2 text-sm font-medium text-[#ededed] md:gap-x-6'>
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className='me-4 last:me-0 hover:underline'>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
