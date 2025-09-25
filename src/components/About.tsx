import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Target, Zap, Users, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = memo(() => {
  const { ref, isVisible } = useScrollAnimation();
  
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
    <section ref={ref} id="about" className="py-6 sm:py-12 lg:py-20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">About Me</h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          {/* Career Objective - Mobile First */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground text-center sm:text-left">Career Objective</h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg text-center sm:text-left px-2 sm:px-0">
              Seeking an entry-level software engineer position where I can apply my programming skills, 
              contribute to innovative projects, and grow professionally in a collaborative environment. 
              Passionate about creating efficient, scalable solutions and continuously learning cutting-edge technologies.
            </p>
          </div>

          {/* Quick Facts - Mobile Optimized */}
          <div className="gradient-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card mx-2 sm:mx-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-4 text-center sm:text-left">Quick Facts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1">
                <span className="text-muted-foreground text-sm sm:text-base lg:text-lg block">Education</span>
                <span className="font-medium text-sm sm:text-base lg:text-lg block">B.Tech in AI & Data Science</span>
              </div>
              <div className="space-y-1">
                <span className="text-muted-foreground text-sm sm:text-base lg:text-lg block">Experience</span>
                <span className="font-medium text-sm sm:text-base lg:text-lg block">Fresher</span>
              </div>
              <div className="space-y-1">
                <span className="text-muted-foreground text-sm sm:text-base lg:text-lg block">Location</span>
                <span className="font-medium text-sm sm:text-base lg:text-lg block">Available to relocate</span>
              </div>
              <div className="space-y-1">
                <span className="text-muted-foreground text-sm sm:text-base lg:text-lg block">Availability</span>
                <span className="font-medium text-sm sm:text-base lg:text-lg block">Immediate</span>
              </div>
            </div>
          </div>

          {/* Personal Strengths - Mobile Grid */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground text-center">Personal Strengths</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-0">
              {strengths.map((strength, index) => (
                <Card key={index} className="p-3 sm:p-4 lg:p-6 shadow-card hover:shadow-medium transition-smooth gradient-card border-0">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 text-primary">
                      {strength.icon}
                    </div>
                    <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground mb-1 sm:mb-2 leading-tight">{strength.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-tight">{strength.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;