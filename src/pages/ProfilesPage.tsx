import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import GlassCard from "@/components/GlassCard";
import ParticlesBackground from "@/components/ParticlesBackground";
import { ExternalLink, Code2 } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    username: "Ramanujam-p",
    url: "https://github.com/Ramanujam-p",
    color: "from-gray-400 to-gray-600",
    stats: [
      { label: "Public Repositories", value: "10+" },
      { label: "Active Projects", value: "8+" },
      { label: "Languages Used", value: "HTML, CSS, JS" },
      { label: "Learning Focus", value: "DSA & Web" },
    ],
  },
  {
    name: "LeetCode",
    username: "RAMANUJAM_PALVANNAN",
    url: "https://leetcode.com/u/RAMANUJAM_PALVANNAN/",
    color: "from-yellow-400 to-orange-500",
    stats: [
      { label: "Problems Solved", value: "250+" },
      { label: "Primary Topics", value: "Arrays, Strings, Hash Tables, Trees, Greedy Algorithms" },
      { label: "Practice Mode", value: "Consistent" },
      { label: "Goal", value: "Placement Prep" },
    ],
  },
  {
    name: "HackerRank",
    username: "Ramanujam_P",
    url: "https://www.hackerrank.com/profile/Ramanujam_P",
    color: "from-green-400 to-emerald-600",
    stats: [
      { label: "Core Skills", value: "C / Java / SQL" },
      { label: "Practice Type", value: "Problem Solving" },
      { label: "Level", value: "Beginner–Intermediate" },
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
            My verified coding and development profiles used for learning and placement preparation
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="glass-card p-8 h-full relative"
              >
                {/* Top gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.color}`} />

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${profile.color}`}>
                      <Code2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold">
                        {profile.name}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {profile.username}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {profile.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-4 rounded-xl bg-muted/50"
                    >
                      <span className="text-lg font-display font-semibold block">
                        {stat.value}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default ProfilesPage;
