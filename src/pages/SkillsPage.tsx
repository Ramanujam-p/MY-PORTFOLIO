import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import GlassCard from "@/components/GlassCard";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Code, Server, Wrench, Database, Layout, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 }
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-purple-400 to-pink-500",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "REST APIs", level: 95 }
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-green-400 to-teal-500",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "Supabase", level: 80 }
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-orange-400 to-red-500",
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "GitHub Actions", level: 85 },
      { name: "Nginx", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    color: "from-indigo-400 to-purple-500",
    skills: [
      { name: "Git", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 80 },
      { name: "Postman", level: 85 }
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </div>
    <div className="skill-bar">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="skill-bar-fill"
      />
    </div>
  </div>
);

const SkillsPage = () => {
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
            My <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <GlassCard 
                delay={categoryIndex * 0.1} 
                className="h-full hover:neon-border transition-all duration-500"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h2 className="text-xl font-display font-bold">{category.title}</h2>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={0.3 + categoryIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-display font-bold mb-6">Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Vue.js", "Angular", "C","Java Script", "Ruby on Rails",
              "Java", "C++", "MySQL", "SQLite", "Jira", "TypeScript", "HTML5", "CSS3", "XML",
              "JSON","MongoDB"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full glass-card text-sm font-medium text-muted-foreground hover:text-primary hover:neon-border transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default SkillsPage;
