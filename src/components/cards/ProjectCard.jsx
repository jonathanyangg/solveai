export default function ProjectCard({
  title,
  description,
  technologies,
  websiteUrl
}) {
  return (
    <div className='flex min-h-[384px] w-auto flex-col rounded-xl bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#303030] hover:border-[#404040] p-10 text-[#ededed] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 hover:bg-[#1a1a1a]'>
      <div className='mb-8 flex items-center justify-start space-x-4'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        {websiteUrl && (
          <a
            href={websiteUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#d6d4d4] hover:text-white transition-colors duration-200 p-1 rounded hover:bg-[#3a3a3a]/50'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
              ></path>
            </svg>
          </a>
        )}
      </div>
      <p className='flex-grow text-base leading-relaxed text-[#d6d4d4] mb-8'>
        {description}
      </p>
      <div className='flex flex-wrap gap-3'>
        {technologies.map((tech, index) => (
          <span
            key={index}
            className='rounded-full bg-[#3a3a3a]/60 backdrop-blur-sm border border-[#4a4a4a] px-4 py-2 text-xs font-medium text-[#ededed] hover:bg-[#3a3a3a] transition-colors duration-200'
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
