export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">About Me</h1>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        Hello! I'm Ahmet, a full-stack developer with over 4 years of experience specializing in .NET, C#, SQL Server, and modern JavaScript technologies like Node.js and TypeScript.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        I've worked on enterprise projects including MES (Manufacturing Execution Systems), ERP integrations (SAP), and microservice-based e-commerce platforms. My strengths include scalable backend development, REST API design, and clean, maintainable code.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        I’m passionate about learning new technologies, building useful tools, and solving real-world problems. When I’m not coding, I enjoy reading about AI, contributing to open-source, and refining my personal projects.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Tech Stack</h2>
<ul className="list-disc list-inside text-gray-700 space-y-1">
  <li>.NET, C#, ASP.NET Core</li>
  <li>Node.js, Express.js, TypeScript</li>
  <li>SQL Server, PostgreSQL, MongoDB</li>
  <li>Docker, Elasticsearch, Git, CI/CD</li>
</ul>
    </section>
  );
}
