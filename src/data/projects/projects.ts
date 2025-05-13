import { ProjectDetails } from "@/lib/types";

// Projects data
export const projects: ProjectDetails[] = [
    {
      name: 'Bizzlisting',
      slug: 'bizzlisting',
      description: 'Business directory web application for local businesses to get online presence.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', "Data Scrapping", "Apify"],
      dates: 'March - 2025',
      image: '/bizzlisting/image.png',
      links: {
        // github: '',
        live: 'https://www.bizzlisting.com/Delhi'
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
  