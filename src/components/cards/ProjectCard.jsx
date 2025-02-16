export default function ProjectCard({
  title,
  description,
  technologies,
  websiteUrl,
  githubUrl
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
        {githubUrl && (
          <a
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#d6d4d4] hover:text-white'
          >
            <svg
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                clipRule='evenodd'
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
