import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export default function TeamMember({
  name,
  role,
  imageUrl,
  bio,
  social,
}: TeamMemberProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:shadow-xl">
      <div className="mb-6 relative w-32 h-32 mx-auto">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="rounded-full object-cover"
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