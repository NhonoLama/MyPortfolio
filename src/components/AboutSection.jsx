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
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full-Stack Developer
            </h3>

            <p className="text-muted-foreground">
              Hi, I’m Dawa Lama — a full-stack software engineer based in Nepal
              with hands-on experience building modern, scalable web
              applications.
            </p>

            <p>
              I enjoy working across the entire stack — from crafting clean and
              responsive user interfaces to designing robust backend APIs and
              databases. I focus on writing maintainable code and delivering
              real-world solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="#contact"
                className={cn(
                  "px-6 py-2 rounded-full border border-primary",
                  "text-primary hover:bg-primary/10 transition-colors duration-300"
                )}
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Frontend */}
            <div className="gradient-border p-6 card-hover cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive and interactive UIs using
                    React.js,Next.js Tailwind CSS, and modern JavaScript.
                  </p>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="gradient-border p-6 card-hover cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Developing secure and scalable APIs using Node.js, NestJS,
                    PostgreSQL, and MongoDB.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="gradient-border p-6 card-hover cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Real-World Experience
                  </h4>
                  <p className="text-muted-foreground">
                    Experience working on real production projects, following
                    best practices, collaboration, and clean architecture.
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
