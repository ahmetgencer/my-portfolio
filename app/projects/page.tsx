import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-blue-600 mb-3">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-50 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4 text-sm">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
