import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import GlassCard from "@/components/GlassCard";
import ParticlesBackground from "@/components/ParticlesBackground";
import { ExternalLink, Calendar, Clock, BookOpen } from "lucide-react";

const articles = [
  {
    title: "Building Scalable React Applications with Clean Architecture",
    description: "A deep dive into structuring React applications for maintainability and scalability using clean architecture principles.",
    date: "Dec 2024",
    readTime: "12 min read",
    tags: ["React", "Architecture", "Best Practices"],
    url: "https://medium.com",
    featured: true,
  },
  {
    title: "The Complete Guide to TypeScript Generics",
    description: "Master TypeScript generics with practical examples and real-world use cases for type-safe code.",
    date: "Nov 2024",
    readTime: "15 min read",
    tags: ["TypeScript", "JavaScript", "Tutorial"],
    url: "https://dev.to",
    featured: true,
  },
  {
    title: "Implementing Real-time Features with WebSockets",
    description: "Learn how to add real-time functionality to your applications using WebSockets and Socket.io.",
    date: "Oct 2024",
    readTime: "10 min read",
    tags: ["WebSockets", "Node.js", "Real-time"],
    url: "https://medium.com",
    featured: false,
  },
  {
    title: "CSS Grid vs Flexbox: When to Use What",
    description: "A comprehensive comparison of CSS Grid and Flexbox with practical examples for layout decisions.",
    date: "Sep 2024",
    readTime: "8 min read",
    tags: ["CSS", "Layout", "Frontend"],
    url: "https://dev.to",
    featured: false,
  },
  {
    title: "Optimizing React Performance: A Practical Guide",
    description: "Techniques and strategies to improve the performance of your React applications.",
    date: "Aug 2024",
    readTime: "14 min read",
    tags: ["React", "Performance", "Optimization"],
    url: "https://medium.com",
    featured: false,
  },
  {
    title: "Introduction to Three.js for Web Developers",
    description: "Getting started with 3D graphics on the web using Three.js and React Three Fiber.",
    date: "Jul 2024",
    readTime: "11 min read",
    tags: ["Three.js", "3D", "WebGL"],
    url: "https://dev.to",
    featured: false,
  },
];

const ArticlesPage = () => {
  return (
    <PageTransition className="relative gradient-mesh pt-28 pb-20 px-6">
      <ParticlesBackground />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Articles</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical articles and tutorials sharing my knowledge and experiences
          </p>
        </motion.div>

        {/* Featured Articles */}
        <div className="space-y-6 mb-12">
          {articles
            .filter((a) => a.featured)
            .map((article, index) => (
              <motion.a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="block group"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-8 relative overflow-hidden"
                >
                  {/* Featured badge */}
                  <div className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-medium rounded-bl-xl">
                    Featured
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-display font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {article.description}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.a>
            ))}
        </div>

        {/* Other Articles */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-display font-bold mb-6"
        >
          More Articles
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-6">
          {articles
            .filter((a) => !a.featured)
            .map((article, index) => (
              <motion.a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <GlassCard delay={index * 0.1} className="h-full hover:neon-border">
                  <h3 className="text-lg font-display font-bold mb-2 group-hover:text-gradient transition-all duration-300 flex items-start justify-between gap-2">
                    {article.title}
                    <ExternalLink className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </GlassCard>
              </motion.a>
            ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default ArticlesPage;
