import { Palette, Globe, Camera, Megaphone, Sparkles, Code } from 'lucide-react';

const services = [
  {
    title: "Brand Design",
    description: "Crafting distinctive visual identities that leave lasting impressions.",
    icon: Palette,
    gradient: "from-purple-500 to-blue-500"
  },
  {
    title: "Digital Strategy",
    description: "Data-driven approaches that transform digital presence into market leadership.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Content Creation",
    description: "Compelling storytelling through stunning visuals and engaging narratives.",
    icon: Camera,
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    title: "Social Impact",
    description: "Amplifying your message across platforms to reach and engage your audience.",
    icon: Megaphone,
    gradient: "from-teal-500 to-green-500"
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive, beautiful interfaces that users love to interact with.",
    icon: Sparkles,
    gradient: "from-green-500 to-yellow-500"
  },
  {
    title: "Development",
    description: "Building robust digital solutions that power modern businesses.",
    icon: Code,
    gradient: "from-yellow-500 to-orange-500"
  }
];

function ServiceCard({ title, description, icon: Icon, gradient }) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-card p-6 transition-all hover:shadow-xl border border-border">
      <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${gradient} text-white`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions that transform ideas into impactful digital experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}