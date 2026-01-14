import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import GlassCard from "@/components/GlassCard";
import ParticlesBackground from "@/components/ParticlesBackground";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const EducationPage = () => {
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
            My <span className="text-gradient">Education</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey that shaped my engineering foundation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* School */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-display font-bold">School Education</h2>
            </div>
            <p className="text-muted-foreground">
              Completed schooling at <strong>Saradha School</strong>, building a
              strong base in mathematics and analytical thinking.
            </p>
          </GlassCard>

          {/* Higher Secondary */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-display font-bold">
                Higher Secondary (Class 12)
              </h2>
            </div>
            <p className="text-muted-foreground">
              Biology–Mathematics group with <strong>98.3%</strong> (590/600),
              securing <strong>2nd Rank</strong> at school level.
            </p>
          </GlassCard>

          {/* Undergraduate */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-display font-bold">
                Undergraduate Education
              </h2>
            </div>
            <p className="text-muted-foreground">
              Currently pursuing <strong>B.E. Computer Science Engineering</strong> at
              <strong> MIT, Anna University, Chennai</strong>.
            </p>
          </GlassCard>

          {/* Achievements */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-display font-bold">
                Academic Achievements
              </h2>
            </div>
            <ul className="text-muted-foreground space-y-2">
              <li>• 97% in Class 10</li>
              <li>• 98.3% in Class 12</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
};

export default EducationPage;
