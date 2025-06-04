export default function SolutionCard({ title, Icon, question, features }) {
  return (
    <div className='rounded-xl bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#303030] hover:border-[#404040] p-8 text-[#ededed] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 hover:bg-[#1a1a1a]'>
      <div className='mb-6 flex items-center gap-4'>
        <div className="p-2 rounded-lg bg-[#3a3a3a]/50 backdrop-blur-sm">
          <Icon className='h-8 w-8 text-[#ededed]' />
        </div>
        <h3 className='text-xl font-semibold'>{title}</h3>
      </div>
      <p className='mb-6 text-[#d6d4d4] leading-relaxed'>{question}</p>
      <ul className='space-y-3 text-[#d6d4d4]'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-start gap-3'>
            <div className="flex-shrink-0 mt-0.5">
              <svg
                className='h-5 w-5 text-green-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13l4 4L19 7'
                ></path>
              </svg>
            </div>
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
