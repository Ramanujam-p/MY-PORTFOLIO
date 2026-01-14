import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ParticlesBackground from "@/components/ParticlesBackground";

const HeroPage = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <PageTransition className="relative overflow-hidden gradient-hero">
      <ParticlesBackground />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4 px-4 py-2 rounded-full glass-card"
          >
            <span className="text-primary font-medium">
              👋 Computer Science Engineering Student
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
          >
            <span className="text-foreground">I’m </span>
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Ramanujam
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-3"
          >
            Software Engineer · Full-Stack Developer
          </motion.h2>

          {/* ⭐ Credibility Line (NEW) */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-primary mb-6 font-medium"
          >
            Actively solving DSA · Building full-stack projects · Open to internships & entry-level roles
          </motion.p>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed"
          >
            Computer Science Engineering student focused on building clean, scalable
            web applications with a strong foundation in data structures, algorithms,
            and core computer science concepts.
          </motion.p>

          {/* Proof */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-muted-foreground mb-12"
          >
            • 400+ DSA problems solved • Multiple real-world projects • Active on GitHub & LeetCode
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("projects")}
              className="btn-primary flex items-center gap-2"
            >
              View Projects <ArrowRight className="w-5 h-5" />
            </motion.button>

            <a
              href="/resume/P_Ramanujam_Resume.pdf"
              download
              className="btn-outline flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume (PDF)
            </a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("contact")}
              className="btn-outline flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ⬇ Scroll Hint (NEW) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition"
          >
            <span className="text-xs mb-1">Scroll to explore</span>
            <ChevronDown />
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default HeroPage;
