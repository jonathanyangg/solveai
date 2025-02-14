import SolutionCard from '../cards/SolutionCard';

export default function Solutions() {
  return (
    <section className="h-auto bg-[#0f0f0f] p-20" id="solutions">
      <p className="text-4xl font-medium text-[#ededed] text-center mb-4">
        Solutions
      </p>
      <p className="text-lg text-[#d6d4d4] text-center max-w-3xl mx-auto mb-16">
        We leverage cutting-edge AI technology to transform your business challenges into opportunities for growth and efficiency
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <SolutionCard 
          title="AI Strategy Consulting"
          Icon={({ className }) => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          )}
          question="Are you struggling to identify where AI can benefit your business?"
          features={[
            "Custom AI roadmap development",
            "ROI analysis and implementation planning"
          ]}
        />
        {/* Add other solution cards */}

        <SolutionCard 
          title="Process Automation"
          Icon={({ className }) => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          )}
          question="Spending too much time on repetitive tasks?"
          features={[
            "Workflow automation solutions",
            "Smart document processing"
          ]}
        />

        <SolutionCard 
          title="Predictive Analytics"
          Icon={({ className }) => (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
          )}
          question="Want to make data-driven decisions with confidence?"
          features={[
            "Custom prediction models",
            "Business intelligence dashboards"
          ]}
        />
      </div>

      <div className="mt-16 text-center">
        <p className="text-2xl font-medium text-[#ededed] mb-6">Ready to transform your business?</p>
        <a href="#contact" className="inline-block px-8 py-3 bg-[#4a4a4a] text-[#ededed] rounded-lg hover:bg-[#6e6e6e] transition-all duration-300 hover:scale-105">
          Get Started
        </a>
      </div>
    </section>
  );
}