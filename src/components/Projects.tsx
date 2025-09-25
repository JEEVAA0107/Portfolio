import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";

const Projects = memo(() => {
  const projects = [
  {
  title: "Food Products E-commerce Application",
  description: "A food products platform built with React and TypeScript, using Supabase. Users can browse available products and submit inquiries to place orders.",
  technologies: ["React", "TypeScript", "Supabase", "HTML", "CSS"],
  features: [
    "Display food products with images and details",
    "Submit inquiries to place orders",
    "Simple and responsive user interface",
    "Order inquiry notifications",
    "Responsive design for mobile and desktop"
  ],
  duration: "July 2025 - Sep 2025",
  type: "Freelance Project"
},

   {
  title: "Decision Making Algorithm",
  description: "A project that implements decision-making algorithms to analyze multiple options and provide optimal solutions. Designed to support data-driven choices in various scenarios.",
  technologies: ["Python", "NumPy", "Pandas", "Scikit-learn"],
  features: [
    "Evaluation of multiple decision options using algorithms",
    "Data analysis and visualization of outcomes",
    "Customizable decision criteria and weights",
    "Supports scenario-based simulations",
    "User-friendly interface for inputting data and viewing results"
  ],
  duration: "Mar 2023 - May 2023",
  type: "Academic Project"
  },
    {
  title: "AI Voice Assistant for Cars",
  description: "An AI-powered voice assistant designed for cars to help drivers control navigation, entertainment, and vehicle functions hands-free, enhancing safety and convenience.",
  technologies: ["Python", "Speech Recognition", "Text-to-Speech", "OpenAI API"],
  features: [
    "Voice-controlled navigation and route guidance",
    "Hands-free music and media control",
    "Real-time vehicle status updates",
    "Personalized driver assistance and reminders",
    "Supports natural language commands"
  ],
  duration: "Sep 2023 - Nov 2023",
  type: "Personal Project"
}

  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Academic Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing practical applications of my technical skills through various development projects
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-medium transition-smooth">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {project.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {/* <Button variant="outline" size="sm" className="shadow-soft hover:shadow-card transition-smooth">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button> */}
                      {index === 0 && (
                        <a href="https://shreekalyanifoods.netlify.app/" target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="shadow-soft hover:shadow-card transition-smooth">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
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
});

export default Projects;