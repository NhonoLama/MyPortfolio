import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="flex flex-col-reverse gap-10 lg:flex-row justify-between container max-w-6xl mx-auto text-center z-10">
        <div className="space-y-6 my-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi! I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Dawa{" "}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2 ">
              {" "}
              Lama.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Full Stack Developer | Proficient with React, Next.js, Nest.js,
            Node.js & REST APIs | BSC.CSIT Candidate
          </p>
          <div className="opacity-0 animate-fade-in-delay-4 pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
        <div className="mx-auto items-center">
          <div className="blob-container">
            <img
              src="/photo.jpg"
              alt="Profile"
              className="w-48 h-48 md:w-72 md:h-72 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm font-bold text-muted-foreground">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
