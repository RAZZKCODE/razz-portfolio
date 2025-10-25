import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const handleDownloadResume = () => {
    // This would trigger a resume download
    window.open("/resume.pdf", "_blank");
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 relative inline-block">
  <span className="bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent animate-text-shimmer">
    Rajveer
  </span>

  {/* Neon Glow Effect */}
  <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary-light via-primary to-primary-dark opacity-50 rounded-lg animate-pulse"></span>
</h1>

          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            <span className="text-primary font-semibold">Tech Enthusiast</span> |{" "}
            <span className="text-primary font-semibold">Python Developer</span> |{" "}
            <span className="text-primary font-semibold">Automation Expert</span>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building impactful tech solutions that solve real-world problems with precision and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="premium"
              size="lg"
              onClick={handleDownloadResume}
              className="text-lg px-8 py-6 animate-glow-pulse"
            >
              <Download className="mr-2" />
              Download Resume
            </Button>
            
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              <Mail className="mr-2" />
              Contact Me
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default HeroSection;