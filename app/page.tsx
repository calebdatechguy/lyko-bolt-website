import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/features/ProjectCard";
import TeamMember from "@/components/features/TeamMember";
import ContactForm from "@/components/features/ContactForm";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management",
    imageUrl: "https://picsum.photos/800/600?random=1",
    tags: ["Next.js", "TypeScript", "Tailwind"],
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

const team = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    imageUrl: "https://picsum.photos/400/400?random=1",
    bio: "10+ years of experience in digital design and branding",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    imageUrl: "https://picsum.photos/400/400?random=2",
    bio: "Full-stack developer specialized in scalable applications",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emma Wilson",
    role: "UX Designer",
    imageUrl: "https://picsum.photos/400/400?random=3",
    bio: "Creating user-centered designs with a focus on accessibility",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/1920/1080?random=0"
            alt="Hero background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-500">
            We Create Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your ideas into reality with our expert team of designers and developers
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View Our Work
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Team Section */}
      <section id="team" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}