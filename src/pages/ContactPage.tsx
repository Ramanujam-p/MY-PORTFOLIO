import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import GlassCard from "@/components/GlassCard";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Send, Mail, User, MessageSquare, CheckCircle, Loader2 } from "lucide-react";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground";

  return (
    <PageTransition className="relative gradient-mesh pt-28 pb-20 px-6">
      <ParticlesBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <GlassCard>
              <h3 className="text-xl font-display font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a question, want to collaborate, or just want to say hi, 
                feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:hello@johndoe.dev"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>hello@johndoe.dev</span>
                </motion.a>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-display font-bold mb-4">Response Time</h3>
              <p className="text-muted-foreground">
                I typically respond within 24-48 hours. For urgent matters, 
                please reach out via LinkedIn.
              </p>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3"
          >
            <GlassCard className="relative overflow-hidden">
              {/* Success Overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isSubmitted ? 1 : 0, 
                  scale: isSubmitted ? 1 : 0.8,
                  pointerEvents: isSubmitted ? "auto" : "none"
                }}
                className="absolute inset-0 flex items-center justify-center bg-card/95 backdrop-blur-sm z-10"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: isSubmitted ? 1 : 0 }}
                    transition={{ type: "spring", delay: 0.1 }}
                  >
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-display font-bold text-gradient mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                </div>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={`${inputClasses} pl-12`}
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={`${inputClasses} pl-12`}
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className={`${inputClasses} pl-12 resize-none`}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin relative z-10" />
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
