import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import GlassCard from "@/components/GlassCard";
import ParticlesBackground from "@/components/ParticlesBackground";
import { ExternalLink, Trophy, Star, Code2 } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    username: "@johndoe",
    url: "https://github.com",
    icon: "github",
    color: "from-gray-400 to-gray-600",
    stats: [
      { label: "Repositories", value: "120+" },
      { label: "Contributions", value: "2.5K+" },
      { label: "Stars", value: "500+" },
      { label: "Followers", value: "1.2K" },
    ],
  },
  {
    name: "LeetCode",
    username: "@johndoe",
    url: "https://leetcode.com",
    icon: "code",
    color: "from-yellow-400 to-orange-500",
    stats: [
      { label: "Problems Solved", value: "450+" },
      { label: "Contest Rating", value: "1850" },
      { label: "Global Rank", value: "Top 5%" },
      { label: "Streak Days", value: "120" },
    ],
  },
  {
    name: "CodeChef",
    username: "@johndoe",
    url: "https://codechef.com",
    icon: "chef",
    color: "from-amber-400 to-yellow-600",
    stats: [
      { label: "Rating", value: "1920" },
      { label: "Division", value: "Div 2" },
      { label: "Problems", value: "300+" },
      { label: "Contests", value: "25" },
    ],
  },
  {
    name: "HackerRank",
    username: "@johndoe",
    url: "https://hackerrank.com",
    icon: "terminal",
    color: "from-green-400 to-emerald-600",
    stats: [
      { label: "Badges", value: "15" },
      { label: "Certificates", value: "6" },
      { label: "Problems", value: "200+" },
      { label: "Stars", value: "5⭐" },
    ],
  },
];

const ProfilesPage = () => {
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
            Coding <span className="text-gradient">Profiles</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My competitive programming and coding platform profiles
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.03, 
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)"
                }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 h-full relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.color}`} />
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-4 rounded-2xl bg-gradient-to-br ${profile.color}`}
                    >
                      <Code2 className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h2 className="text-2xl font-display font-bold group-hover:text-gradient transition-all duration-300">
                        {profile.name}
                      </h2>
                      <p className="text-muted-foreground">{profile.username}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {profile.stats.map((stat, statIndex) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 + statIndex * 0.05 }}
                      className="p-4 rounded-xl bg-muted/50"
                    >
                      <motion.span
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + statIndex * 0.1, type: "spring" }}
                        className="text-2xl font-display font-bold text-gradient block"
                      >
                        {stat.value}
                      </motion.span>
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <GlassCard className="text-center p-10">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-4 neon-glow" />
            <h3 className="text-2xl font-display font-bold mb-4">Achievements</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Google Code Jam Qualifier",
                "LeetCode Weekly Contest Top 100",
                "Open Source Contributor",
                "Hackathon Winner 2023",
                "5⭐ Problem Solver",
              ].map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
                >
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default ProfilesPage;
