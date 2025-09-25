import { Card } from "@/components/ui/card";
import { Target, Zap, Users, Code } from "lucide-react";

const About = () => {
  const strengths = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Proficiency",
      description: "Strong grasp of programming fundamentals and modern development practices"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Quick Learner",
      description: "Adaptable and eager to master new technologies and frameworks"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Excellent communication skills and experience in collaborative development"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Problem Solver",
      description: "Analytical mindset with a passion for solving complex technical challenges"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start mb-8 sm:mb-12 lg:mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Career Objective</h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
              Seeking an entry-level software engineer position where I can apply my programming skills, 
              contribute to innovative projects, and grow professionally in a collaborative environment. 
              Passionate about creating efficient, scalable solutions and continuously learning cutting-edge technologies.
            </p>
          </div>
          <div className="gradient-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card order-1 md:order-2">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Quick Facts</h3>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-muted-foreground text-sm sm:text-base">Education</span>
                <span className="font-medium text-sm sm:text-base text-right">B.Tech in AI & Data Science</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-muted-foreground text-sm sm:text-base">Experience</span>
                <span className="font-medium text-sm sm:text-base text-right">Fresher</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-muted-foreground text-sm sm:text-base">Location</span>
                <span className="font-medium text-sm sm:text-base text-right">Available to relocate</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-muted-foreground text-sm sm:text-base">Availability</span>
                <span className="font-medium text-sm sm:text-base text-right">Immediate</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground text-center mb-6 sm:mb-8">Personal Strengths</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {strengths.map((strength, index) => (
              <Card key={index} className="p-4 sm:p-6 shadow-card hover:shadow-medium transition-smooth gradient-card border-0">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 text-primary">
                    {strength.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2">{strength.title}</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{strength.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;