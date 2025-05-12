export interface ProjectDetails {
    name: string;
    slug: string;
    description: string;
    technologies: string[];
    links: {
      github?: string;
      live?: string;
    };
    dates: string;
    image: string;
  }
  

  // Define the project interface
export interface ProjectDetailsMain {
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    [key: string]: string | undefined;
  };
  dates: string;
  screenshots: {
    src: string;
    alt: string;
    description: string;
  }[];
}
