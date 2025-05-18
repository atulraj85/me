"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { projectData } from "@/data/projects/projectDetails";
import { ProjectDetails } from "@/lib/types";
import { ArrowRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { GitBranchIcon, Clock } from "lucide-react";
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
    <>
      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      <div className="container mx-auto max-w-6xl px-4 py-16">
      {/* Page Header */}
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">{isMain ? "Featured Projects" : "Projects"}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A curated collection of my recent work, showcasing my skills in web
            development, design, and innovative problem-solving.
          </p>
        </header>
      </BlurFade>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {displayProjects.map((project, index) => (
          <BlurFade key={project.slug || index} delay={BLUR_FADE_DELAY * (index + 10)}>
            <div className="bg-background border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full">
              {/* Project Image */}
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="aspect-video overflow-hidden bg-secondary/50">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary flex items-center justify-center">
                      <span className="text-secondary-foreground text-sm">
                        No Image Available
                      </span>
                    </div>
                  )}
                </div>
              </Link>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow relative">
                {/* Header Section */}
                <div className="mb-3">
                  <div className="flex justify-between items-start gap-3 mb-1">
                    <Link href={`/projects/${project.slug}`} className="flex-1 min-w-0">
                      <h2 className="text-lg font-semibold hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {project.name}
                      </h2>
                    </Link>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                {isMounted && (
                  <div className="flex gap-3 mt-auto mb-8">
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-secondary text-secondary-foreground px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors border"
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
                        className="flex-1 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLinkIcon  />
                        Live Site
                      </a>
                    )}
                  </div>
                )}

                {/* Project Duration - Bottom Right Corner */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-2.5 py-1.5 rounded-full border">
                  <Clock size={12} />
                  <span className="font-medium">{project.dates}</span>
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* View More Button for Main Page */}
      {isMain && (
        <BlurFade delay={BLUR_FADE_DELAY * (displayProjects.length + 10)}>
          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/25"
            >
              View More Projects
              <ArrowRightIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </BlurFade>
      )}
    </div>
    </>
  );
}