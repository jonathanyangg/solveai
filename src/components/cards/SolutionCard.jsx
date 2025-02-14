export default function SolutionCard({ title, Icon, question, features }) {
    return (
      <div className="bg-[#1a1a1a] rounded-xl p-8 text-[#ededed] hover:scale-105 transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <Icon className="w-8 h-8 text-[#ededed]" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-[#d6d4d4] mb-4">{question}</p>
        <ul className="text-[#d6d4d4] space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    );
  }