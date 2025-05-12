import { ProjectDetails } from "@/lib/types";

// Projects data
export const projects: ProjectDetails[] = [
    {
      name: 'Personal Portfolio Website',
      slug: 'portfolio-website',
      description: 'A responsive and modern personal portfolio showcasing my projects and skills',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      dates: 'May 2024 - Present',
      image: '/api/placeholder/500/300',
      links: {
        github: 'https://github.com/yourusername/portfolio',
        live: 'https://yourportfolio.com'
      }
    },
    {
      name: 'E-Commerce Platform',
      slug: 'ecommerce-platform',
      description: 'Full-stack e-commerce solution with advanced features and seamless user experience',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      dates: 'Jan 2024 - Apr 2024',
      image: '/api/placeholder/500/300',
      links: {
        github: 'https://github.com/yourusername/ecommerce',
        live: 'https://yourecommercesite.com'
      }
    }
    // Add more projects here
  ];
  