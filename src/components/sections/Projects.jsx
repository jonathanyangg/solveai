import ProjectCard from '../cards/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Tour Guide Matching System',
      description:
      'An AI-powered system that intelligently matches prospective students with current student guides based on shared interests and backgrounds. Using OpenAI\'s embedding technology, Weaviate\'s vector databases, and Supabase\'s user authentication, admins can processes student profiles and generates personalized matches in seconds.',
      technologies: ['FastAPI', 'Next.js', 'Weaviate', 'Supabase'],
    },
    {
      title: 'AI Powered Course Catalog',
      description:
        'A semantic search tool that transforms an 84-page course catalog into an intuitive AI-powered search system. Students can express their interests in natural language and receive personalized course recommendations, making course selection more accessible and efficient.',
      technologies: ['Django', 'PostgreSQL', 'PGVector', 'Azure'],
    },
    {
      title: 'Class Placement Model',
      description:
        'An automated system that streamlines the class placement process using machine learning. By analyzing placement test scores, SSAT results, and prior grades, the model provides accurate class recommendations, reducing hours of manual work to mere minutes.',
      technologies: ['Optuna', 'Scikit-learn', 'Pandas', 'NumPy']
    },
    {
      title: 'Alumni Donation Prediction Model',
      description:
        'A predictive analytics system that optimizes alumni donation requests using machine learning. By analyzing past donation patterns and engagement metrics, the model provides data-driven recommendations for donation requests, helping maximize fundraising efforts.',
      technologies: ['Optuna', 'Scikit-learn', 'Flask', 'PythonAnywhere']
    }
  ]

  return (
    <section className='h-auto py-12 px-8 md:py-16 md:px-20' data-section='projects'>
      <div className="max-w-7xl mx-auto">
        <p className='mb-6 text-center text-4xl font-medium text-[#ededed]'>
          Past Projects
        </p>
        <p className='mb-20 text-center text-lg text-[#d6d4d4] leading-relaxed'>
          Here are some of the cool things we've worked on
        </p>

        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              websiteUrl={project.websiteUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
