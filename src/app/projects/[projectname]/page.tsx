"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
  GitBranch,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projectData } from "@/data/projects/projectDetails";

export default function ProjectPage({
  params,
}: {
  params: { projectname: string };
}) {
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    description: string;
    index: number;
  } | null>(null);

  const project = projectData[params.projectname];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link
          href="/projects"
          className="inline-flex items-center text-primary hover:underline"
        >
          <ArrowLeft className="mr-2" /> Back to Projects
        </Link>
      </div>
    );
  }

  const openLightbox = (
    src: string,
    alt: string,
    description: string,
    index: number
  ) => {
    setLightboxImage({ src, alt, description, index });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: "next" | "prev") => {
    if (!lightboxImage) return;

    const totalScreenshots = project.screenshots.length;
    let newIndex =
      direction === "next"
        ? (lightboxImage.index + 1) % totalScreenshots
        : (lightboxImage.index - 1 + totalScreenshots) % totalScreenshots;

    const newScreenshot = project.screenshots[newIndex];
    setLightboxImage({
      src: newScreenshot.src,
      alt: newScreenshot.alt,
      description: newScreenshot.description,
      index: newIndex,
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        {/* Project Header */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {project.description}
          </p>

          {/* Project Links */}
          <div className="flex justify-center gap-4 mt-6">
            {project.links.repo && (
              <Link
                href={project.links.repo}
                target="_blank"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80 transition-colors"
              >
                <GitBranch className="w-5 h-5" /> Repository
              </Link>
            )}
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-5 h-5" /> Live Site
              </Link>
            )}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.header>

        {/* Project Details */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {/* Long Description */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: project.longDescription }}
              />
            </CardContent>
          </Card>

          {/* Screenshots */}
          <h2 className="text-3xl font-bold mb-8 text-center">
            Project Screenshots
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer"
                onClick={() =>
                  openLightbox(
                    screenshot.src,
                    screenshot.alt,
                    screenshot.description,
                    index
                  )
                }
              >
                <Card className="overflow-hidden">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                  />
                  <CardContent className="p-4">
                    <p className="text-muted-foreground text-sm text-center">
                      {screenshot.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Project Details - Read More Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-4xl mx-auto mt-16 mb-10"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 text-center md:text-left">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Want to dive deeper?
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Discover the full story behind this project, including my
                  detailed contributions, challenges overcome, and the
                  technologies that made it possible.
                </p>
              </div>

              <Link
                href={`/blog/${project.slug}`}
                className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-full bg-primary text-primary-foreground transition-all duration-300 ease-out hover:pl-10 hover:pr-6"
              >
                <span className="absolute left-0 inset-y-0 flex items-center justify-center w-10 h-full transition-all duration-300 ease-out transform translate-x-[-40px] bg-primary-foreground/20 group-hover:translate-x-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative group-hover:translate-x-2 transition-transform duration-300">
                  Explore Full Case Study
                </span>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Back to Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2" /> Back to All Projects
          </Link>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              {project.screenshots.length > 1 && (
                <>
                  <button
                    onClick={() => navigateLightbox("prev")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={() => navigateLightbox("next")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Image */}
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={1600}
                height={1200}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Description */}
              <p className="text-white text-center mt-4 text-sm">
                {lightboxImage.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
