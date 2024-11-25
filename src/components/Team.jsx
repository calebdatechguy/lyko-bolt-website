import { Github, Linkedin, Twitter } from 'lucide-react';

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

function TeamMember({ name, role, imageUrl, bio, social }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:shadow-xl">
      <div className="mb-6 relative w-32 h-32 mx-auto">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{role}</p>
        <p className="text-sm mb-6">{bio}</p>
        <div className="flex justify-center gap-4">
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter size={20} />
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
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
  );
}