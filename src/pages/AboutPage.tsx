import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import GlassCard from "@/components/GlassCard";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Code, Brain, Palette, Cpu } from "lucide-react";

const roles = [
  {
    title: "Web Developer",
    icon: Code,
    description:
      "Building modern, responsive, and scalable web applications using React, TypeScript, and modern UI frameworks.",
  },
  {
    title: "AI Enthusiast",
    icon: Brain,
    description:
      "Interested in artificial intelligence, problem-solving, and applying algorithms to real-world challenges.",
  },
  {
    title: "Creative Developer",
    icon: Palette,
    description:
      "Blending logic with creativity to design clean, user-friendly, and visually engaging digital experiences.",
  },
  {
    title: "Tech Enthusiast",
    icon: Cpu,
    description:
      "Passionate about exploring new technologies, tools, and systems that power modern software engineering.",
  },
];

const AboutPage = () => {
  return (
    <PageTransition className="relative gradient-mesh pt-28 pb-20 px-6">
      <ParticlesBackground />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I’m a Computer Science Engineering student currently studying at
            <strong> MIT, Anna University, Chennai</strong>. I enjoy building clean,
            scalable web applications and continuously improving my understanding
            of data structures, algorithms, and core software engineering concepts.
          </p>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            I thrive in collaborative environments, enjoy solving real-world problems,
            and aim to create technology that is both functional and user-centric.
          </p>
        </motion.div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <role.icon className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-display font-bold">
                    {role.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
