import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "https://x.com/starterhackathon", label: "Twitter" },
    { icon: Github, href: "https://github.com/starter-hackathon/landing-page", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/starter-hackathon", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@starter.com", label: "Email" },
  ];

  return (
    <footer className="relative py-16 px-4 mt-20">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black bg-gradient-to-r from-purple-400 via-purple-300 to-pink-400 bg-clip-text text-transparent mb-4">
              STARTER
            </h3>
            <p className="text-purple-300/70 mb-4 leading-relaxed">
              Igniting innovation, one hackathon at a time. Join us in building the future.
            </p>
            <div className="flex items-center gap-2 text-purple-400/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-purple-400/60" />
              <span>by OUALA EDDINE</span>
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-purple-200 font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:from-purple-600/30 hover:to-purple-800/30 border border-purple-500/20 hover:border-purple-400/40 transition-all group"
                >
                  <link.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </motion.a>
              ))}
            </div>
            <p className="text-purple-300/70 text-sm">
              Have questions? Reach out to us at{" "}
              <a href="mailto:hello@starter.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                hello@starter.com
              </a>
            </p>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-purple-500/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-purple-400/60 text-sm">
              © 2025 STARTER Hackathon. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy.html" className="text-purple-400/60 hover:text-purple-400 transition-colors" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              <a href="/terms.html" className="text-purple-400/60 hover:text-purple-400 transition-colors" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
