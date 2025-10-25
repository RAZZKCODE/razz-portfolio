import { Card } from "@/components/ui/card";
import { Brain, Zap, Target, Heart } from "lucide-react";

const StrengthsSection = () => {
  const strengths = [
    {
      title: "Problem Solver",
      icon: <Brain className="w-10 h-10" />,
      description: "Analytical mindset with ability to break down complex problems into manageable solutions.",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Quick Learner",
      icon: <Zap className="w-10 h-10" />,
      description: "Rapidly adapt to new technologies and frameworks, staying updated with industry trends.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Consistency",
      icon: <Target className="w-10 h-10" />,
      description: "Committed to delivering high-quality work consistently, meeting deadlines and expectations.",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Passion for Coding",
      icon: <Heart className="w-10 h-10" />,
      description: "Genuine love for programming and technology, driving continuous improvement and innovation.",
      color: "from-red-500 to-pink-600",
    },
  ];

  return (
    <section id="strengths" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Core Strengths
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The key qualities that drive my success in technology and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <Card
              key={strength.title}
              className="glass-card p-8 text-center hover:shadow-glow transition-all duration-300 interactive-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-r ${strength.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                {strength.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">
                {strength.title}
              </h3>
              
              <p className="text-foreground/80 leading-relaxed">
                {strength.description}
              </p>

              {/* Decorative elements */}
              <div className="flex justify-center mt-6 space-x-2">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${strength.color}`}></div>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${strength.color} opacity-60`}></div>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${strength.color} opacity-30`}></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Why Choose Me?
            </h3>
            <p className="text-foreground/80 leading-relaxed text-lg mb-6">
              I bring a unique combination of technical expertise, creative problem-solving, 
              and dedication to every project. My goal is to not just complete tasks, but to 
              deliver solutions that exceed expectations and create lasting value.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Commitment</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Learning</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;