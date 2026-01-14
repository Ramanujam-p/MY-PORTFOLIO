import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import useScrollSpy from "@/hooks/useScrollSpy";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Profiles", id: "profiles" },
  { name: "Contact", id: "contact" },
];

const sectionIds = navItems.map((n) => n.id);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState<string | null>(null);

  const activeSection = useScrollSpy(sectionIds);

  const scrollToSection = (id: string) => {
    setClicked(id);
    setIsOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => setClicked(null), 600);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl">
        <div className="glass-card px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-display font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RAMANUJAM
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive =
                clicked === item.id || activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-colors
                    ${
                      isActive
                        ? "text-primary neon-text"
                        : "text-white hover:text-primary"
                    }`}
                >
                  {item.name}

                  {isActive && (
                    <motion.div
                      layoutId="navbar-glow"
                      className="absolute inset-0 rounded-lg bg-primary/10 -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        duration: 0.5,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2 glass-card overflow-hidden"
            >
              <div className="py-4 px-6 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive =
                    clicked === item.id || activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left py-2 px-4 rounded-lg transition-colors
                        ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-white hover:text-primary hover:bg-primary/10"
                        }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
