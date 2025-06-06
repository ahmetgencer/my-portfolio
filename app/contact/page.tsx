import { Mail, Linkedin, Github, Globe } from "lucide-react"

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Contact Me</h1>

      <p className="text-gray-700 mb-6">
        Whether you have a freelance opportunity, a project idea, or just want to say hello, feel free to reach out!
      </p>

      <ul className="space-y-4">
        <li className="flex items-center space-x-3 text-gray-700">
          <Mail className="w-5 h-5" />
          <a href="mailto:ahmetgencrr@gmail.com" className="hover:underline">
            gmail
          </a>
        </li>
        <li className="flex items-center space-x-3 text-gray-700">
          <Linkedin className="w-5 h-5" />
          <a href="https://www.linkedin.com/in/ahmetgencerr/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            linkedin
          </a>
        </li>
        <li className="flex items-center space-x-3 text-gray-700">
          <Github className="w-5 h-5" />
          <a href="https://github.com/ahmetgencer" target="_blank" rel="noopener noreferrer" className="hover:underline">
            github
          </a>
        </li>
        <li className="flex items-center space-x-3 text-gray-700">
          <Globe className="w-5 h-5" />
          <a href="https://www.fiverr.com/sellers/ahmetgencerr" target="_blank" rel="noopener noreferrer" className="hover:underline">
            fiverr
          </a>
        </li>
      </ul>
    </section>
  )
}
