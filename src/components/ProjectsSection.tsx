import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Instagram, Calculator, FileText, Workflow } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Instagram Reels Scraper",
      description: "Advanced web scraping tool built with Python and Selenium to extract Instagram Reels data. Features automated browsing, data extraction, and export functionality.",
      icon: <Instagram className="w-8 h-8" />,
      technologies: ["Python", "Selenium", "Web Scraping", "Data Processing"],
      github: "#",
      demo: "#",
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "Daily Spending Tracker",
      description: "Desktop application built with Tkinter for personal finance management. Track daily expenses, categorize spending, and generate detailed financial reports.",
      icon: <Calculator className="w-8 h-8" />,
      technologies: ["Python", "Tkinter", "SQLite", "Data Visualization"],
      github: "#",
      demo: "#",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "PDF Tools Website",
      description: "Complete PDF manipulation web application similar to iLovePDF. Features merge, split, compress, and convert functionalities with modern web interface.",
      icon: <FileText className="w-8 h-8" />,
      technologies: ["React", "Node.js", "PDF-lib", "Express.js"],
      github: "#",
      demo: "#",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Branding Agency Automation",
      description: "End-to-end automation solution using n8n and Python for branding agencies. Automates client onboarding, project tracking, and reporting workflows.",
      icon: <Workflow className="w-8 h-8" />,
      technologies: ["n8n", "Python", "API Integration", "Automation"],
      github: "#",
      demo: "#",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work, demonstrating expertise in automation, web development, and data processing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card p-8 hover:shadow-glow transition-all duration-300 interactive-card group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-full bg-gradient-to-r ${project.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <h3 className="text-2xl font-semibold text-primary">
                  {project.title}
                </h3>
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-primary mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="hero"
                  size="sm"
                  onClick={() => window.open(project.github, "_blank")}
                  className="flex-1"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  variant="premium"
                  size="sm"
                  onClick={() => window.open(project.demo, "_blank")}
                  className="flex-1"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.open("https://github.com/rajveer", "_blank")}
            className="px-8 py-4 text-lg"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;