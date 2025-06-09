export default function ProjectCard({
  title,
  description,
  technologies,
  websiteUrl
}) {
  const techLinks = {
    'Django': 'https://www.djangoproject.com/',
    'PostgreSQL': 'https://www.postgresql.org/',
    'PGVector': 'https://github.com/pgvector/pgvector',
    'Azure': 'https://azure.microsoft.com/',
    'Optuna': 'https://optuna.org/',
    'Scikit-learn': 'https://scikit-learn.org/',
    'Pandas': 'https://pandas.pydata.org/',
    'NumPy': 'https://numpy.org/',
    'Flask': 'https://flask.palletsprojects.com/',
    'PythonAnywhere': 'https://www.pythonanywhere.com/',
    'FastAPI': 'https://fastapi.tiangolo.com/',
    'Next.js': 'https://nextjs.org/',
    'React': 'https://react.dev/',
    'Node.js': 'https://nodejs.org/',
    'TypeScript': 'https://www.typescriptlang.org/',
    'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'Python': 'https://www.python.org/',
    'Tailwind CSS': 'https://tailwindcss.com/',
    'MongoDB': 'https://www.mongodb.com/',
    'Supabase': 'https://supabase.com/',
    'OpenAI': 'https://openai.com/',
    'Weaviate': 'https://weaviate.io/'
  }
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
        {technologies?.map((tech, index) => {
          const techUrl = techLinks[tech]
          return techUrl ? (
            <a
              key={index}
              href={techUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full bg-[#3a3a3a]/60 backdrop-blur-sm border border-[#4a4a4a] px-4 py-2 text-xs font-medium text-[#ededed] hover:bg-[#3a3a3a] hover:border-[#5a5a5a] transition-all duration-200 cursor-pointer hover:scale-105'
            >
              {tech}
            </a>
          ) : (
            <span
              key={index}
              className='rounded-full bg-[#3a3a3a]/60 backdrop-blur-sm border border-[#4a4a4a] px-4 py-2 text-xs font-medium text-[#ededed] hover:bg-[#3a3a3a] transition-colors duration-200'
            >
              {tech}
            </span>
          )
        })}
      </div>
    </div>
  )
}
