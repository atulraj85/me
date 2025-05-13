// Define the project interface
export interface ProjectDetails {
  slug: string;
  image: string;

  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  links: {
    repo?: string;
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
