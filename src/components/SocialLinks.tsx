import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Ramanujam-p", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ramanujam-p-42576330b/", label: "LinkedIn" }
];

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-4"
    >
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + index * 0.1 }}
          whileHover={{ 
            scale: 1.2, 
            y: -5,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.9 }}
          className="group relative p-3 rounded-xl glass-card hover:neon-border transition-all duration-300"
        >
          <social.icon 
            size={20} 
            className="text-muted-foreground group-hover:text-primary transition-colors duration-300" 
          />
          
          {/* Tooltip */}
          <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-primary text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {social.label}
          </span>
        </motion.a>
      ))}
      
      {/* Vertical Line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "80px" }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="w-px bg-gradient-to-b from-primary to-transparent"
      />
    </motion.div>
  );
};

export default SocialLinks;
