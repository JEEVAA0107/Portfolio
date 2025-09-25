import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence And Data Science",
      institution: "Mahendra Engineering College",
      location: "Mallasamudram, Namakkal,Tamil Nadu, India",
      duration: "2022 - 2026",
      grade: "CGPA: 8.5/10",
      highlights: [
        "Specialized in Software Development and Data Structures",
        "Final Year Project: E-commerce Web Application",
        "Active member of Coding Club and Tech Society"
      ]
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "G.B.H.S.School",
      location: "Pallipalayam, Namakkal, Tamil Nadu, India", 
      duration: "2020 - 2022",
      grade: "Percentage: 70%",
      highlights: [
        "Mathematics, Physics, Chemistry, Computer Science",
        "School topper in Computer Science",
        "Participated in National Science Olympiad"
      ]
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-medium transition-smooth">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                    <p className="text-lg text-primary font-medium mb-3">{edu.institution}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-accent px-3 py-1 rounded-full text-accent-foreground font-medium">
                        {edu.grade}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;