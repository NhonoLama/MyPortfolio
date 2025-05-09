import { cn } from "@/lib/utils";
import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              Myself Dawa Lama ! Highly experienced in front end web development
              , based in Nepal.
            </p>
            <p>
              I'm a passionate web developer with a strong focus on building
              clean, responsive, and user-friendly websites and applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#contact"
                className={cn(
                  "px-6 py-2 rounded-full border border-primary",
                  " text-primary hover:bg-primary/10 transition-colors duration-300"
                )}
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 2-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Specialized in modern frontend technologies like React,
                    Tailwind CSS, and JavaScript.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 2-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Specialized in modern frontend technologies like React,
                    Tailwind CSS, and JavaScript.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 2-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Specialized in modern frontend technologies like React,
                    Tailwind CSS, and JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
