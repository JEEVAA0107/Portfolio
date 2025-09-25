import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Programming In Java",
      issuer: "NPTEL",
      date: "JAN-APR 2024",
      description: "Completed a course in Programming in Java, covering core concepts, OOP, and application development.",
      skills: ["Core Java Concepts", "Object-Oriented Programming", "Methods & Functions", "Exception Handling"],
    },
    {
      title: "Cloud Computing ",
      issuer: "NPTEL", 
      date: "JULY-OCT 2024",
      description: "Completed a course in Cloud Computing, covering cloud services, deployment models, and practical applications.",
      skills: ["Cloud Platforms", "Virtualization & Storage", "Networking & Security", "Cloud Services"],
  
    },
    {
      title: "Generative Ai",
      issuer: "IBM via Coursera",
      date: "july 2025",
      description: "Completed a course on Generative AI, covering the fundamentals, real-world applications, and hands-on practices for building AI-driven solutions",
      skills: ["Fundamentals of Generative AI", "NLP", "Text, image, and code generation", "LLMs"],

    },
    {
      title: "Full Stack Web Development with Java",
      issuer: "ETS Academy",
      date: "September 2024",
      description: "Completed Full Stack Development in Java with front-end, back-end, and database skills.",
      skills: ["Html", "Css", "JavaScript", "Sql","JDBC","Java"],
 
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional certifications that validate my technical skills and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-medium transition-smooth h-full">
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                      <Building className="h-4 w-4" />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {cert.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default Certifications;