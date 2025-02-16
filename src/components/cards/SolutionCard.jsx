export default function SolutionCard({ title, Icon, question, features }) {
  return (
    <div className='rounded-xl bg-[#1a1a1a] p-8 text-[#ededed] transition-all duration-300 hover:scale-105'>
      <div className='mb-4 flex items-center gap-4'>
        <Icon className='h-8 w-8 text-[#ededed]' />
        <h3 className='text-xl font-semibold'>{title}</h3>
      </div>
      <p className='mb-4 text-[#d6d4d4]'>{question}</p>
      <ul className='space-y-2 text-[#d6d4d4]'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center gap-2'>
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
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
