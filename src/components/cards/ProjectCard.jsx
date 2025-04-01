export default function ProjectCard({
  title,
  description,
  technologies,
  websiteUrl
}) {
  return (
    <div className='flex min-h-[384px] w-auto flex-col rounded-xl bg-[#1a1a1a] p-4 text-[#ededed] transition-all duration-300 hover:scale-105 md:p-8'>
      <div className='mb-4 flex items-center justify-start space-x-4'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        {websiteUrl && (
          <a
            href={websiteUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#d6d4d4] hover:text-white'
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
                d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
              ></path>
            </svg>
          </a>
        )}
      </div>
      <p className='flex-grow text-sm leading-relaxed text-[#d6d4d4]'>
        {description}
      </p>
      <div className='mt-4 flex flex-wrap gap-2'>
        {technologies.map((tech, index) => (
          <span
            key={index}
            className='rounded-full bg-[#2a2a2a] px-3 py-1 text-xs'
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
