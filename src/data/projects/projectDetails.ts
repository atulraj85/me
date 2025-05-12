import {  ProjectDetailsMain } from "@/lib/types";

// Project data
export const projectData: { [key: string]: ProjectDetailsMain } = {
    'portfolio-website': {
      name: 'Personal Portfolio Website',
      description: 'A responsive and modern personal portfolio showcasing my projects and skills',
      longDescription: `
        This portfolio website is designed to provide a comprehensive overview of my professional journey, 
        highlighting my technical skills, projects, and achievements. Built with modern web technologies, 
        it offers an intuitive and visually appealing user experience.
  
        ### Key Features
        - Responsive design that works seamlessly across all devices
        - Dynamic project showcase with detailed project pages
        - Smooth animations and interactions
        - Clean, minimalist UI with dark mode support
      `,
      technologies: [
        'Next.js', 
        'React', 
        'TypeScript', 
        'Tailwind CSS', 
        'Framer Motion', 
        'Shadcn UI'
      ],
      links: {
        github: 'https://github.com/yourusername/portfolio',
        live: 'https://yourportfolio.com'
      },
      dates: 'May 2024 - Present',
      screenshots: [
        {
          src: '/api/placeholder/800/600',
          alt: 'Homepage Overview',
          description: 'Clean and modern homepage layout with project highlights'
        },
        {
          src: '/api/placeholder/800/600',
          alt: 'Project Details',
          description: 'Detailed project page with technology stack and screenshots'
        }
      ]
    }
    // Add more projects here
  };