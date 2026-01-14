import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import GlassCard from "@/components/GlassCard";
import ParticlesBackground from "@/components/ParticlesBackground";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI with natural language processing and smart responses.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    tech: ["Next.js", "OpenAI", "WebSocket", "MongoDB", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracking dashboard with portfolio management and price alerts.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&q=80",
    tech: ["React", "D3.js", "CoinGecko API", "Firebase"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
    tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Music Streaming UI",
    description: "Modern music streaming interface with playlist management and audio visualization.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
    tech: ["React", "Web Audio API", "Spotify API", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Weather Application",
    description: "Beautiful weather app with location-based forecasts and animated visualizations.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&q=80",
    tech: ["React Native", "OpenWeather API", "Lottie"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`group ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
  >
    <motion.div
      whileHover={{ 
        rotateY: 5, 
        rotateX: -5,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      style={{ transformStyle: "preserve-3d" }}
      className="glass-card overflow-hidden h-full"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        
        {/* Overlay Links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-primary text-primary-foreground"
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-secondary text-secondary-foreground"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Folder className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-display font-bold group-hover:text-gradient transition-all duration-300">
            {project.title}
          </h3>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectsPage = () => {
  return (
    <PageTransition className="relative gradient-mesh pt-28 pb-20 px-6">
      <ParticlesBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
