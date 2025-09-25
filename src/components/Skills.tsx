import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Wrench } from "lucide-react";

const Skills = memo(() => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 80 },
        { name: "Python", level: 70 },
        { name: "JavaScript", level: 75 },
        { name: "Sql", level: 70 },
        { name: "Machine learning", level: 70 }
      ]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Frontend Development",
      skills: [
        
        { name: "HTML/CSS", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Next.js", level: 70 },
       
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend & Database",
      skills: [
        { name: "Postgres Sql", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "REST APIs", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 80 },
      ]
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Eclipse", level: 80 },
        { name: "Power BI", level: 60 },
        { name: "AWS Basics", level: 55 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-6 sm:py-12 lg:py-20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">Technical Skills</h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-3 sm:mt-4 max-w-xs xs:max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto text-sm sm:text-base px-2">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-medium transition-smooth">
              <div className="p-4 xs:p-5 sm:p-6 lg:p-8">
                <div className="flex items-center gap-2 xs:gap-3 mb-4 xs:mb-5 sm:mb-6">
                  <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-3 xs:space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-1 xs:space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground text-sm xs:text-base">{skill.name}</span>
                        <span className="text-xs xs:text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5 xs:h-2">
                        <div 
                          className="h-1.5 xs:h-2 rounded-full gradient-primary transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;