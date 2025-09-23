import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";

const Projects = memo(() => {
  const projects = [
    {
      title: "E-commerce Web Application",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      features: [
        "User registration and authentication",
        "Product search and filtering",
        "Shopping cart and checkout process",
        "Order history and tracking",
        "Admin dashboard for inventory management"
      ],
      duration: "Sep 2023 - Dec 2023",
      type: "Final Year Project"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, built using React and Firebase. Includes features for team collaboration and project tracking.",
      technologies: ["React", "Firebase", "Material-UI", "Context API"],
      features: [
        "Real-time task updates and notifications",
        "Team collaboration and user roles",
        "Project timeline and progress tracking",
        "File sharing and comments system",
        "Responsive design for mobile and desktop"
      ],
      duration: "Jun 2023 - Aug 2023",
      type: "Academic Project"
    },
    {
      title: "Weather Forecast Application",
      description: "A responsive weather application that provides current conditions and 7-day forecasts using OpenWeatherMap API. Features location-based weather and favorites system.",
      technologies: ["JavaScript", "HTML/CSS", "OpenWeather API", "Local Storage"],
      features: [
        "Current weather conditions display",
        "7-day weather forecast",
        "Location-based weather detection",
        "Search by city functionality",
        "Favorite locations management"
      ],
      duration: "Mar 2023 - Apr 2023",
      type: "Personal Project"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
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
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
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
                    
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="shadow-soft hover:shadow-card transition-smooth">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                      <Button variant="outline" size="sm" className="shadow-soft hover:shadow-card transition-smooth">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
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