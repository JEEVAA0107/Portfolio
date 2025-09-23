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
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-medium transition-smooth">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="h-2 rounded-full gradient-primary transition-all duration-1000 ease-out"
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