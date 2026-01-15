import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
} from "react-icons/si";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { SiGit, SiDocker } from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <SiJavascript className="w-8 h-8 text-yellow-400" />,
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: <SiReact className="w-8 h-8 text-blue-400" />,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: <SiNextdotjs className="w-8 h-8 text-black-400" />,
  },
  {
    name: "Tailwind",
    category: "Frontend",
    icon: <SiTailwindcss className="w-8 h-8 text-teal-400" />,
  },

  {
    name: "Node.js",
    category: "Backend",
    icon: <SiNodedotjs className="w-8 h-8 text-green-500" />,
  },
  {
    name: "Nest.js",
    category: "Backend",
    icon: <SiNestjs className="w-8 h-8 text-red-500" />,
  },
  {
    name: "Express",
    category: "Backend",
    icon: <SiExpress className="w-8 h-8 text-gray-600" />,
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: <SiMongodb className="w-8 h-8 text-green-600" />,
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    icon: <SiPostgresql className="w-8 h-8 text-blue-700" />,
  },

  {
    name: "Git/GitHub",
    category: "Tools",
    icon: <SiGit className="w-8 h-8 text-red-500" />,
  },
  {
    name: "Docker",
    category: "Tools",
    icon: <SiDocker className="w-8 h-8 text-blue-500" />,
  },
];

const categories = ["all", "Frontend", "Backend", "Tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills icons */}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="w-20 h-20 flex items-center justify-center rounded-xl bg-card shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-105 cursor-pointer relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity " />
              {skill.icon}
              <span className="absolute bottom-1 text-xs text-foreground/80  text-center opacity-0 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
