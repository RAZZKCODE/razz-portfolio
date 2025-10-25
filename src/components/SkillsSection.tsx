import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Zap } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Python", level: 70 },
        { name: "JavaScript", level: 65 },
        { name: "PHP", level: 60 },
        { name: "SQL", level: 50 },
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Web Development",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "React", level: 65 },
        { name: "Next.js", level: 70 },
        { name: "Node.js", level: 55 },
        { name: "Django", level: 65 },
      ],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Automation",
      icon: <Zap className="w-8 h-8" />,
      skills: [
        { name: "Selenium", level: 70 },
        { name: "n8n", level: 75 },
        { name: "Google Sheets API", level: 50 },
        { name: "Web Scraping", level: 68 },
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "MySQL", level: 50 },
        { name: "Git", level: 60 },
        { name: "Firebase", level: 75 },
        { name: "Pandas", level: 75 },
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks, with a focus on automation and clean code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="glass-card p-8 hover:shadow-glow transition-all duration-300 interactive-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-primary">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "HTML/CSS",
              "Tkinter",
              "NumPy",
              "phpMyAdmin",
              "REST APIs",
              "JSON",
              "Web Scraping",
              "Data Analysis",
              "Process Automation",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass-card text-primary font-medium rounded-full hover:shadow-glow transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;