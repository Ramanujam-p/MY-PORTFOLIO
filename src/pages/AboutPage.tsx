import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import GlassCard from "@/components/GlassCard";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    description: "Leading development of enterprise-scale applications using React, Node.js, and cloud technologies.",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description: "Developed and maintained multiple client projects, focusing on performance optimization and user experience.",
    icon: Briefcase,
  },
  {
    year: "2020",
    title: "Frontend Developer",
    company: "StartUp Hub",
    description: "Built responsive web applications and collaborated with design teams to implement pixel-perfect interfaces.",
    icon: Briefcase,
  },
  {
    year: "2019",
    title: "Computer Science Degree",
    company: "University of Technology",
    description: "Graduated with honors, specializing in software engineering and human-computer interaction.",
    icon: GraduationCap,
  },
];

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <PageTransition className="relative gradient-mesh pt-28 pb-20 px-6">
      <ParticlesBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a love for creating beautiful and functional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <GlassCard delay={0.2}>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
              <h2 className="text-2xl font-display font-bold mb-4 text-gradient">
                Hello, World!
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a creative developer who thrives at the intersection of design and technology. 
                With over 5 years of experience in web development, I've had the privilege of 
                working with startups, agencies, and enterprise companies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My approach combines clean code with intuitive design, ensuring every project 
                not only works flawlessly but also delivers an exceptional user experience. 
                I believe in writing code that tells a story and building products that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through technical writing and mentoring.
              </p>
            </GlassCard>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Projects Completed" },
                { value: "30+", label: "Happy Clients" },
              ].map((stat, index) => (
                <GlassCard key={stat.label} delay={0.3 + index * 0.1} className="text-center">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    className="text-3xl md:text-4xl font-display font-bold text-gradient block mb-2"
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>

                {/* Year badge */}
                <div className="absolute left-0 top-0 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>

                <GlassCard delay={0.1 * index} className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-primary font-medium">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{item.company}</p>
                  <p className="text-muted-foreground/80 leading-relaxed">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
