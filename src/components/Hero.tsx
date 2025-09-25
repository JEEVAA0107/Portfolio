import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import passportImage from "/passportsize.jpg";
import resumePdf from "/resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-subtle px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 sm:mb-12">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto mb-6 sm:mb-8 rounded-full gradient-card shadow-medium flex items-center justify-center overflow-hidden">
            <img
              src={passportImage}
              alt="Jeevaa M M"
              className="w-full h-full object-cover object-top"
              loading="eager"
              width="224"
              height="224"
              decoding="async"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight px-2">
            JEEVAA M M
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6 font-medium">
            Software Engineer
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            A passionate and dedicated fresher software engineer with a strong
            foundation in modern web technologies and a keen interest in
            building innovative digital solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <a href={resumePdf} download className="w-full sm:w-auto">
            <Button
              size="lg"
              className="gradient-primary hover:shadow-medium transition-smooth w-full sm:w-auto"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download Resume
            </Button>
          </a>

          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <a href="mailto:jeevaamarimuthu8@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="shadow-soft hover:shadow-card transition-smooth"
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Contact</span>
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/jeevaa-m-m-485a51326"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="shadow-soft hover:shadow-card transition-smooth"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a>
            <a
              href="https://github.com/JEEVAA0107"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="shadow-soft hover:shadow-card transition-smooth"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
