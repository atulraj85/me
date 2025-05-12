"use client";

import Image from "next/image";
import Link from "next/link";
import { GitHubLogoIcon, ExternalLinkIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { projects } from "@/data/projects/projects";

interface ProjectsPageProps {
  isMain?: boolean;
}

export default function ProjectsPage({ isMain = false }: ProjectsPageProps) {
  // If isMain is true, slice the first 4 projects
  const displayProjects = isMain ? projects.slice(0, 4) : projects;

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A curated collection of my recent work, showcasing my skills in web
          development, design, and innovative problem-solving.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {displayProjects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="group block"
          >
            <div className="bg-background border rounded-xl overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-lg">
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold">{project.name}</h2>
                  <time className="text-sm text-muted-foreground">
                    {project.dates}
                  </time>
                </div>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-2">
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-3 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-black/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GitHubLogoIcon />
                      GitHub
                    </Link>
                  )}
                  {project.links.live && (
                    <Link
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground px-3 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLinkIcon />
                      Live Site
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View More Button for Main Page */}
      {isMain && (
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="group inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:bg-primary/90"
          >
            View More Projects
            <ArrowRightIcon 
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1" 
            />
          </Link>
        </div>
      )}
    </div>
  );
}