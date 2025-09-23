import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, Building } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Programming In Java",
      issuer: "NPTEL",
      date: "JAN-APR 2024",
      description: "Programming in Java is learning to write software using Java, focusing on core concepts like classes, objects, and methods to build platform-independent applications.",
      skills: ["Core Java Concepts", "Object-Oriented Programming", "Methods & Functions", "Exception Handling"],
      credentialId: "fcc-cert-js-2023-12"
    },
    {
      title: "Cloud Computing ",
      issuer: "NPTEL", 
      date: "JULY-OCT 2024",
      description: "Cloud Computing is the delivery of computing services servers, storage, databases, networking, and software over the internet, allowing on-demand access, scalability, and cost-efficient management of resources.",
      skills: ["Cloud Platforms", "Virtualization & Storage", "Networking & Security", "Cloud Services"],
      credentialId: "fcc-cert-rwd-2023-10"
    },
    {
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "August 2023",
      description: "Comprehensive React course covering components, state management, hooks, routing, and modern React development patterns.",
      skills: ["React.js", "Hooks", "State Management", "Redux"],
      credentialId: "udemy-react-2023"
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM via Coursera",
      date: "June 2023",
      description: "Foundation course covering cloud computing concepts, service models, deployment models, and major cloud platforms.",
      skills: ["Cloud Computing", "AWS", "Azure", "Cloud Architecture"],
      credentialId: "coursera-ibm-cloud-2023"
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
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        ID: {cert.credentialId}
                      </span>
                      <Button variant="outline" size="sm" className="shadow-soft hover:shadow-card transition-smooth">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Verify
                      </Button>
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