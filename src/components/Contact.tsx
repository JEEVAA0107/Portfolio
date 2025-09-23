import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "jeevaamarimuthu8@gmail.com",
      link: "mailto:jeevaamarimuthu8@gmail.com",
      description: "Best way to reach me for professional inquiries"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 63803 72501",
      link: "tel:+919876543210",
      description: "Available for calls upon request"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Erode,Tamil Nadu,India",
      link: "#",
      description: "Open to relocation for the right opportunity"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/jeevaa-m-m-485a51326",
      link: "https://www.linkedin.com/in/jeevaa-m-m-485a51326",
      description: "Connect with me professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm actively seeking opportunities as a fresher software engineer. 
            Feel free to reach out for collaborations, job opportunities, or just to connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="gradient-card border-0 shadow-card hover:shadow-medium transition-smooth">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{contact.label}</h4>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-primary hover:text-primary-hover p-0 h-auto"
                            asChild
                          >
                            <a href={contact.link} target="_blank" rel="noopener noreferrer">
                              <Send className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                        <p className="text-primary font-medium mb-1">{contact.value}</p>
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card className="gradient-card border-0 shadow-card">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                      <Mail className="h-12 w-12 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Ready to Start Your Journey?</h4>
                    <p className="text-muted-foreground mb-6">
                      I'm excited to discuss how my fresh perspective and technical skills 
                      can contribute to your team's success.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="gradient-primary hover:shadow-medium transition-smooth flex-1"
                      asChild
                    >
                      <a href="mailto:jeevaamarimuthu8@gmail.com">
                        <Mail className="mr-2 h-5 w-5" />
                        Send Email
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="shadow-soft hover:shadow-card transition-smooth"
                      asChild
                    >
                      <a href="https://www.linkedin.com/in/jeevaa-m-m-485a51326" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>

                  <div className="flex justify-center">
                    <Button 
                      variant="ghost" 
                      size="lg"
                      className="text-muted-foreground hover:text-foreground transition-smooth"
                      asChild
                    >
                      <a href="https://github.com/JEEVAA0107" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        View GitHub Profile
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;