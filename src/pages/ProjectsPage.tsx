import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import GlassCard from "@/components/GlassCard";
import ParticlesBackground from "@/components/ParticlesBackground";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Calculator",
    description:
      "A simple and interactive calculator built using HTML, CSS, and JavaScript with clean UI and responsive layout.",
    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&q=80",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://rama-calculator.netlify.app/",
    githubUrl: "https://github.com/Ramanujam-p/MY-WEB-PROJECTS/tree/main/CALCULATOR",
    featured: true,
  },
  {
    title: "Student Management System",
    description:
      "A CRUD-based student management system to add, update, delete, and view student records using JavaScript logic.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://rama-studentms.netlify.app/",
    githubUrl: "https://github.com/ramanujam-p/STUDENT-MANAGEMENT-SYSTEM",
    featured: true,
  },
  {
    title: "Food Website",
    description:
      "An attractive and responsive food website showcasing modern UI design using CSS layouts and animations.",
    image:
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=600&q=80",
    tech: ["HTML", "CSS"],
    liveUrl: "https://rama-foodwebsite.netlify.app/",
    githubUrl: "https://github.com/ramanujam-p/FOOD-WEBSITE",
    featured: true,
  },
  {
    title: "Landing Page",
    description:
      "A creative and responsive landing page built with modern layout techniques and smooth hover interactions.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
    tech: ["HTML", "CSS"],
    liveUrl: "https://ramanujam-p.github.io/RESPONSIVE-LANDINING-PAGE/",
    githubUrl: "https://github.com/ramanujam-p/RESPONSIVE-LANDINING-PAGE",
    featured: false,
  },
  {
    title: "To-Do List",
    description:
      "A premium and interactive to-do list application with task add, delete, and completion features.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://rama-todolist.netlify.app/",
    githubUrl: "https://github.com/ramanujam-p/TO-DO-LIST",
    featured: false,
  },
  {
    title: "Image Gallery",
    description:
      "A responsive image gallery built using CSS Flexbox and Grid concepts with hover effects.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&q=80",
    tech: ["HTML", "CSS", "Flexbox"],
    liveUrl: "https://rama-imgallery.netlify.app/",
    githubUrl: "https://github.com/ramanujam-p/IMAGE-GALLERY",
    featured: false,
  },
  {
    title: "skill share",
    description: "Skill Share is an interactive student dashboard that connects university students based on shared skills, interests, and learning goals. It enables collaboration through skill matching, Q&A, real-time chat, and a personalized dashboard, helping students grow together in a connected academic community.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://ramanujam-skill-share-platform.netlify.app/",
    githubUrl: "https://github.com/Ramanujam-p/SKILL-SHARE-PLATFORM",
    featured: true,
  }
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
