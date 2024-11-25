import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management",
    imageUrl: "https://picsum.photos/800/600?random=1",
    tags: ["React", "TypeScript", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive analytics dashboard with data visualization",
    imageUrl: "https://picsum.photos/800/600?random=2",
    tags: ["React", "D3.js", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application for task management",
    imageUrl: "https://picsum.photos/800/600?random=3",
    tags: ["React Native", "Redux", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Platform",
    description: "AI-powered content generation and management platform",
    imageUrl: "https://picsum.photos/800/600?random=4",
    tags: ["Python", "TensorFlow", "AWS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

function ProjectCard({ title, description, imageUrl, tags, demoUrl, githubUrl }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-xl">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={16} />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}