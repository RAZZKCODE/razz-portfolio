import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/rajveer",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/rajveer",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:rajveerkushwah15032004@gmail.com",
      label: "Email",
    },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-mono text-primary glow-primary">
              &lt;Rajveer/&gt;
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Passionate Tech Enthusiast building innovative solutions 
              and automating the future, one line of code at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open(link.href, "_blank")}
                  className="hover:text-primary hover:shadow-glow transition-all duration-300"
                >
                  {link.icon}
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Education", href: "#education" },
                { name: "Contact", href: "#contact" },
                { name: "Resume", href: "/resume.pdf" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    if (link.href.startsWith("#")) {
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.open(link.href, "_blank");
                    }
                  }}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Get In Touch</h4>
            <div className="space-y-2 text-foreground/80">
              <p>📧 rajveerkushwah15032004@gmail.com</p>
              <p>📍 Agra, Uttar Pradesh, India</p>
              <p>🌐 Hindi, English</p>
            </div>
            <Button
              variant="hero"
              onClick={() => window.open("mailto:rajveerkushwah15032004@gmail.com", "_blank")}
              className="w-full mt-4"
            >
              Hire Me
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-foreground/60 mb-4 md:mb-0">
              <span>© {currentYear} Rajveer. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & TypeScript</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={handleScrollToTop}
                className="text-foreground/60 hover:text-primary transition-colors duration-200"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;