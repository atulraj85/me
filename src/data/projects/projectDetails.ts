import { ProjectDetailsMain } from "@/lib/types";

// Project data
export const projectData: { [key: string]: ProjectDetailsMain } = {
  bizzlisting: {
    name: "Bizzlisting",
    description:
      "Business directory web application for local businesses to get online presence.",
    longDescription: `
        The web revolves around data, so in this project my major role was to create data scrapping which i did using Apify. Enhanced UI for premium looks and feel. 
  
        ### Key Features
        - Responsive design that works seamlessly across all devicesproject showcase with detailed project pagesices and providers pages
        - Added SEO for better ranking
        - Elegant, premium and rich UI enhancements.
      `,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
      "Zustand",
      "Data Scrapping",
      "Apify",
      "SEO",
    ],
    links: {
      github: "",
      live: "https://www.bizzlisting.com/Delhi",
    },
    dates: "March - 2025",
    screenshots: [
      {
        src: "/bizzlisting/image copy.png",
        alt: "Homepage Overview",
        description:
          "Clean and modern homepage layout with modern service categories and advertisements.",
      },
      {
        src: "/bizzlisting/image copy 2.png",
        alt: "Services Page",
        description:
          "Detailed services page with filters and service providers.",
      },
      {
        src: "/bizzlisting/image copy 3.png",
        alt: "Services Page",
        description: "Service providers listing.",
      },
      {
        src: "/bizzlisting/image copy 4.png",
        alt: "Beautiful Footer",
        description: "Footer with Dynamic City data.",
      },
      {
        src: "/bizzlisting/Screenshot 2025-05-13 at 05-34-16 Bizzlisting - Business Directory for Service Providers & Vendors.png",
        alt: "full home page",
        description: "Full Home page preview.",
      },
    ],
  },
  // Add more projects here
};
