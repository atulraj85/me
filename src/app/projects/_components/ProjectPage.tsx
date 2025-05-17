"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { projectData } from "@/data/projects/projectDetails";
import { ProjectDetails } from "@/lib/types";
import { ArrowRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { GitBranchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProjectsPageProps {
  isMain?: boolean;
}

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage({ isMain = false }: ProjectsPageProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  // Fix hydration mismatch by ensuring client and server render the same initially
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Convert object to array of project details
  const projectsArray: ProjectDetails[] = Object.values(projectData);

  // If isMain is true, slice the first 4 projects
  const displayProjects: ProjectDetails[] = isMain
    ? projectsArray.slice(0, 4)
    : projectsArray;

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      {/* Page Header */}
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A curated collection of my recent work, showcasing my skills in web
            development, design, and innovative problem-solving.
          </p>
        </header>
      </BlurFade>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {displayProjects.map((project) => (
          <div
            key={
              project.slug ||
              Object.keys(projectData).find(
                (key) => projectData[key] === project
              )
            }
            className="group block"
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="bg-background border rounded-xl overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-lg">
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary flex items-center justify-center">
                      <span className="text-secondary-foreground">
                        No Image Available
                      </span>
                    </div>
                  )}
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
                </div>
              </div>
            </Link>

            {/* Project Links as separate elements outside the main Link */}
            {isMounted && (
              <div className="flex gap-2 mt-4 px-6">
                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-3 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-black/80 transition-colors"
                  >
                    <GitBranchIcon size={16} />
                    Repository
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground px-3 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLinkIcon />
                    Live Site
                  </a>
                )}
              </div>
            )}
          </div>
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
            <ArrowRightIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
}
