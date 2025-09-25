import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import passportImage from "/passportsize.jpg";
import resumePdf from "/resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-subtle px-3 sm:px-6 lg:px-8 pt-16 pb-8"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="w-32 h-32 xs:w-36 xs:h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto mb-4 sm:mb-6 lg:mb-8 rounded-full gradient-card shadow-medium flex items-center justify-center overflow-hidden">
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
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight px-1 sm:px-2">
            JEEVAA M M
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-3 sm:mb-4 lg:mb-6 font-medium">
            Software Engineer
          </p>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            A passionate and dedicated fresher software engineer with a strong
            foundation in modern web technologies and a keen interest in
            building innovative digital solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 sm:px-4">
          <a href={resumePdf} download className="w-full xs:w-auto sm:w-auto">
            <Button
              size="lg"
              className="gradient-primary hover:shadow-medium transition-smooth w-full xs:w-auto sm:w-auto text-sm sm:text-base"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download Resume
            </Button>
          </a>

          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center w-full xs:w-auto">
            <a href="mailto:jeevaamarimuthu8@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="shadow-soft hover:shadow-card transition-smooth text-sm sm:text-base"
              >
                <Mail className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden xs:inline sm:inline">Contact</span>
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
