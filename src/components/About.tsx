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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Career Objective</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Seeking an entry-level software engineer position where I can apply my programming skills, 
              contribute to innovative projects, and grow professionally in a collaborative environment. 
              Passionate about creating efficient, scalable solutions and continuously learning cutting-edge technologies.
            </p>
          </div>
          <div className="gradient-card rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">Quick Facts</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Education</span>
                <span className="font-medium">B.Tech in Artificial Intelligence And Data Science</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Experience</span>
                <span className="font-medium">Fresher</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium">Available to relocate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Availability</span>
                <span className="font-medium">Immediate</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Personal Strengths</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {strengths.map((strength, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-medium transition-smooth gradient-card border-0">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {strength.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{strength.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{strength.description}</p>
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