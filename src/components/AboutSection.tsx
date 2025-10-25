import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
<div className="text-center md:text-left">
  <div className="relative inline-block">
    <div className="w-80 h-70 mx-auto rounded-full bg-gradient-card p-1 animate-glow-pulse">
      <div className="w-full h-full rounded-full bg-muted overflow-hidden flex items-center justify-center">
        <img
          src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-62dc-61f8-bd32-dae2d7476cf0/raw?se=2025-08-27T04%3A20%3A15Z&sp=r&sv=2024-08-04&sr=b&scid=2ba64236-1d1d-56ce-a74d-3ae54c8836c2&skoid=c156db82-7a33-468f-9cdd-06af263ceec8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-26T21%3A58%3A33Z&ske=2025-08-27T21%3A58%3A33Z&sks=b&skv=2024-08-04&sig=pO7I5cdl6zvTG%2B2vGQef9U0srKrIdCV%2BZBMSmqz0lV4%3D"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Decorative elements */}
    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"></div>
    <div
      className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-light rounded-full animate-float"
      style={{ animationDelay: "2s" }}
    ></div>
  </div>
</div>

          {/* About Content */}
          <div className="space-y-6">
            <Card className="glass-card p-8 hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Tech Enthusiast & Problem Solver
              </h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Hi, I'm Rajveer, a passionate Tech Enthusiast and Programmer from Uttar Pradesh, India. 
                I have completed my Diploma in CSE with 72%. Skilled in Python, Web Development, 
                Automation, and Data Science.
              </p>
            </Card>

            <Card className="glass-card p-8 hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Mission Statement
              </h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                My mission is to build impactful tech solutions that solve real-world problems. 
                I believe in the power of automation and clean code to transform businesses and 
                make processes more efficient.
              </p>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;