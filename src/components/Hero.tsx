import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-subtle px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-56 h-56 mx-auto mb-6 rounded-full gradient-card shadow-medium flex items-center justify-center overflow-hidden">
            {/* Passport-size profile pic */}
            <img
              src="/src/assets/passportsize.jpg"
              className="w-full h-full object-cover object-top"
              loading="eager"
              width="224"
              height="224"
              decoding="async"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            JEEVAA M M
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Software Engineer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A passionate and dedicated fresher software engineer with a strong
            foundation in modern web technologies and a keen interest in
            building innovative digital solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/src/assets/resume.pdf" download>
            <Button
              size="lg"
              className="gradient-primary hover:shadow-medium transition-smooth"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>

          <div className="flex gap-3">
            <a href="mailto:jeevaamarimuthu8@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="shadow-soft hover:shadow-card transition-smooth"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact
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
                <Linkedin className="h-5 w-5" />
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
                <Github className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
