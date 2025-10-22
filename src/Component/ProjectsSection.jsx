import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Food Store",
    description: "Food store using React and CSS",
    image: "/Projects/Project_1.png",
    tags: ["React", "Context Api", "CSS"], //,"Form Handling"
    demoUrl: "https://food-store-webapp.vercel.app/",
    githubUrl: "https://github.com/akvarc/Food-store-Webapp",
  },
  {
    id: 2,
    title: "Project Management",
    description: "Project Management using React ",
    image: "/Projects/Project_2.png",
    tags: ["React", "TailwindCss"], //, "State Mangement"
    demoUrl: "https://project-management-web-app-navy.vercel.app/",
    githubUrl: "https://github.com/akvarc/Project-Management-Web-App",
  },
  {
    id: 3,
    title: "Event's Blog Website",
    description: "Event's Blog Website using React",
    image: "/Projects/Project_3.png",
    tags: ["React", "React-Router", "authentication"], //,"Form Handling","CSS","Dummy Backend"
    demoUrl: "#",
    githubUrl: "#",
  },
];

//Component from here

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured
          <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover "
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              
              <div></div>
              <h3 className="text-xl  font-semibold mb-1 ">{project.title}</h3>
              <p className="text-muted-foreground pb-5 ">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3 pl-2 pb-2">
                  <a
                    href={project.demoUrl}
                    target="__blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink  size={20}/>
                  </a>
                  <a
                    className="pl-1 text-foreground/80 hover:text-primary transition-colors duration-300"
                    target="__blank"
                    href={project.githubUrl}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/akvarc" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="__blank">
            Check My Github <ArrowRight size={16}/> 
          </a>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
