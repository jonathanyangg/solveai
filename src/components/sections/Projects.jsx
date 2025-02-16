import ProjectCard from '../cards/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Student-Guide Matching System',
      description:
        "An AI-powered system that intelligently matches prospective students with current student guides based on shared interests and backgrounds. Using OpenAI's embedding technology, the system processes student profiles and generates personalized matches, completing what used to be days of manual work in just minutes.",
      technologies: ['Flask', 'OpenAI', 'Redis'],
      websiteUrl: 'https://matching-ndwd.onrender.com/',
      githubUrl: 'https://github.com/jonathanyangg/matching'
    },
    {
      title: 'Course Catalog Search System',
      description:
        'A semantic search tool that transforms an 84-page course catalog into an intuitive AI-powered search system. Students can express their interests in natural language and receive personalized course recommendations, making course selection more accessible and efficient.',
      technologies: ['Django', 'PostgreSQL', 'OpenAI'],
      websiteUrl: 'https://lawrencevillecatalog.org',
      githubUrl: 'https://github.com/jonathanyangg/catalog-deployment'
    },
    {
      title: 'Math Class Placement Model',
      description:
        'An automated system that streamlines the math class placement process using machine learning. By analyzing placement test scores, SSAT results, and prior grades, the model provides accurate class recommendations, reducing hours of manual work to mere minutes.',
      technologies: ['Scikit-learn', 'Pandas', 'NumPy']
    },
    {
      title: 'Alumni Donation Prediction Model',
      description:
        'A predictive analytics system that optimizes alumni donation requests using machine learning. By analyzing past donation patterns and engagement metrics, the model provides data-driven recommendations for donation requests, helping maximize fundraising efforts.',
      technologies: ['Scikit-learn', 'PythonAnywhere', 'Random Forest']
    }
  ]

  return (
    <section className='h-auto bg-[#121212] p-4 md:p-20' id='projects'>
      <p className='mb-4 text-center text-4xl font-medium text-[#ededed]'>
        Past Projects
      </p>
      <p className='mb-16 text-center text-lg text-[#d6d4d4]'>
        Here are some of the cool things we've worked on
      </p>

      <div className='flex flex-row items-center justify-center'>
        <div className='grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-16 md:px-16'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              websiteUrl={project.websiteUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
