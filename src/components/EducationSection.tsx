import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "Technical Institute",
      period: "2021-2024",
      percentage: "72%",
      description: "Specialized in software development, database management, and computer programming. Completed projects in web development and automation.",
      color: "from-blue-500 to-blue-600",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "UP Board",
      period: "2020-2021",
      percentage: "74%",
      description: "Science stream with focus on Mathematics and Computer Science. Developed strong analytical and problem-solving skills.",
      color: "from-green-500 to-green-600",
    },
    {
      degree: "Secondary (10th)",
      institution: "UP Board",
      period: "2018-2019",
      percentage: "82%",
      description: "Completed with excellent grades in Mathematics and Science. Built strong foundation in logical thinking and academic excellence.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Education Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey showcasing consistent performance and growing expertise in technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow z-10"></div>

                {/* Education Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="glass-card p-8 hover:shadow-glow transition-all duration-300 interactive-card">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${edu.color} text-white mr-4`}>
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary">
                          {edu.degree}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center mb-4 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{edu.period}</span>
                      <Award className="w-4 h-4 mr-2" />
                      <span className="font-semibold text-primary">{edu.percentage}</span>
                    </div>

                    <p className="text-foreground/80 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievement Badge */}
                    <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <Award className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-primary font-medium text-sm">
                        {edu.percentage} Score
                      </span>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground">Years of Study</div>
          </Card>
          <Card className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">76%</div>
            <div className="text-muted-foreground">Average Score</div>
          </Card>
          <Card className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">CSE</div>
            <div className="text-muted-foreground">Specialization</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;