import { ProjectDetails } from "@/lib/types";

// Project data
export const projectData: { [key: string]: ProjectDetails } = {
  bizzlisting: {
    slug: "bizzlisting",
    name: "Bizzlisting",
    image: "/bizzlisting/image.png",

    description:
      "Business directory web application for local businesses to get online presence.",
    longDescription: `
        The web revolves around data, so in this project my major role was to create data scrapping which i did using Apify. Enhanced UI for premium looks and feel. 
  
        Responsive design that works seamlessly across all devicesproject showcase with detailed project pagesices and providers pages, Added SEO for better ranking,Elegant, premium and rich UI enhancements.
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
      "Prisma",
      "Apify",
      "SEO",
    ],
    links: {
      repo: "",
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
    ],
  },
  thelibrary: {
    slug: "thelibrary",
    name: "The Library",
    image: "/library/TheLibrary.png",

    description: "Curated guides and Fullstack components for reusable purpose",
    longDescription: `
        Here i have priorities on FOSS, Free and Open Source alternatives of mainstream application so that developers can easily access the source code of the tool they are using, this will further help the overall growth and web community
      `,
    technologies: [
      "Next.js",
      "Fullstack components",
      "Documentation",
      "Free Software",
      "Open Source",
    ],
    links: {
      repo: "https://codeberg.org/the-library-node",
      live: "",
    },
    dates: "February 2025 - Present",
    screenshots: [
      // {
      //   src: "/bizzlisting/image copy.png",
      //   alt: "Homepage Overview",
      //   description:
      //     "Clean and modern homepage layout with modern service categories and advertisements.",
      // },
      // {
      //   src: "/bizzlisting/image copy 2.png",
      //   alt: "Services Page",
      //   description:
      //     "Detailed services page with filters and service providers.",
      // },
      // {
      //   src: "/bizzlisting/image copy 3.png",
      //   alt: "Services Page",
      //   description: "Service providers listing.",
      // },
      // {
      //   src: "/bizzlisting/image copy 4.png",
      //   alt: "Beautiful Footer",
      //   description: "Footer with Dynamic City data.",
      // },
    ],
  },
   tictactoe: {
    slug: "tictactoe",
    name: "Tic Tac Toe",
    image: "/tictac/image.png",

    description: "Two player game using LEDs and Pushbuttons",
    longDescription: `
        This game uses 3 by 3 matrix of LEDs (Red and Yellow) and
Pushbuttons. According to player's chance the LED will glow and if
the player forms the winning pattern the game ends.
Using waste plastic box with LEDs and Push buttons, utilising the
small surface area of box with complex wiring structure
      `,
    technologies: ["ESP32", "C++", "Arduino", "Electronics"],
    links: {
      repo: "",
      live: "",
    },
    dates: "May - June 2023",
    screenshots: [
      {
        src: "/tictac/1.jpg",
        alt: "Homepage Overview",
        description: "",
      },
      {
        src: "/tictac/2.jpg",
        alt: "Services Page",
        description: "",
      },
      {
        src: "/tictac/3.jpg",
        alt: "Services Page",
        description: "",
      },
      {
        src: "/tictac/4.jpg",
        alt: "Beautiful Footer",
        description: "",
      },
      {
        src: "/tictac/5.jpg",
        alt: "Beautiful Footer",
        description: "",
      },
      {
        src: "/tictac/6.jpg",
        alt: "Beautiful Footer",
        description: "",
      },
    ],
  },
  trainersportal: {
    slug: "trainersportal",
    name: "Trainer's Portal",
    image: "/trainerportal/image.png",

    description: "Technical Trainer Oriented Resume Web Application",
    longDescription: `
        A web application for trainers to showcase their skills and
qualification and build their portfolio with rate cards for training
they provide.
      `,
    technologies: ["Next.js", "Prisma", "Zen Stack", "Tan Stack"],
    links: {
      repo: "",
      live: "https://gentrainer.vercel.app/",
    },
    dates: "January 2025",
    screenshots: [
      {
        src: "/trainerportal/image copy.png",
        alt: "Homepage Overview",
        description: "Clean and modern Signup page.",
      },
      {
        src: "/trainerportal/image copy 2.png",
        alt: "Dashboard",
        description: "Dashboard for quick stats and accesss links.",
      },
      {
        src: "/trainerportal/image copy 3.png",
        alt: "Experience page",
        description: "Trainer can add their professional experience.",
      },
      {
        src: "/trainerportal/image copy 4.png",
        alt: "Experience Form",
        description: "Form to fill experience.",
      },
      {
        src: "/trainerportal/image copy 5.png",
        alt: "Full Resume Page preview",
        description: "Full Resume Page preview",
      },
    ],
  },
  studentattendanceportal: {
    slug: "studentattendanceportal",
    name: "Student Attendance Portal",
    image: "/attendance/image.png",

    description: "Attendance portal for Medical students.",
    longDescription: `
        A Web application for MBBS institution with advance level of
complexity regarding the layout of the organisation as students
where segregation in complex batches structures.
Feature added, Attendance using Face detection by saving
student's Face Descriptors along side the student data.
      `,
    technologies: [
      "Next.js",
      "Drizzle",
      "Database Transaction Management",
      "Nodemailer",
      "SMS",
      "Tensorflow",
      "Face Api",
      "AI",
    ],
    links: {
      repo: "",
      live: "",
    },
    dates: "November 2024 - January 2025",
    screenshots: [
      {
        src: "/attendance/image copy.png",
        alt: "Dean Dashboard Overview",
        description: "Clean and modern homepage layout with reports.",
      },
      {
        src: "/attendance/image copy 2.png",
        alt: "Admin Dashboard Overview",
        description: "Admin dashboard to control the core of Attendance ERP.",
      },
      {
        src: "/attendance/image copy 3.png",
        alt: "Phase Page",
        description: "Academic Phase page ",
      },
      {
        src: "/attendance/image copy 4.png",
        alt: "Subjects",
        description: "Subjects page according to Phase.",
      },
    ],
  },
  astrologyconsultingfirm: {
    slug: "astrologyconsultingfirm",
    name: "First Impression for Astrology Consulting Firm",
    image: "/vastuteq/image.png",
    description:
      "Web Application focused on showcasing the features and enrolling the visitors.",
    longDescription: `
        Integrate payment gateway, Creation of invoice, Sending invoice to
Visitor
      `,
    technologies: ["Nextjs", "MongoDB", "Nodemailer", "Razorpay", "MySQL"],
    links: {
      repo: "",
      live: "https://vastuteq.vercel.app/",
    },
    dates: "December 2024",
    screenshots: [
      {
        src: "/vastuteq/image.png",
        alt: "Homepage Overview",
        description:
          "Clean and modern homepage layout with modern hero section",
      },
      {
        src: "/vastuteq/image copy 2.png",
        alt: "Services Page",
        description: "Home page section",
      },
      {
        src: "/vastuteq/image copy 3.png",
        alt: "Services Page",
        description: "Home page section",
      },
      {
        src: "/vastuteq/image copy.png",
        alt: "Home page section",
        description: "Payment Pop up",
      },
    ],
  },
  erpforprocurementmanager: {
    slug: "erpforprocurementmanager",
    name: "ERP For Procurement Manager",
    image: "/procu/image.png",

    description: "FullStack Web Application in NextJS.",
    longDescription: `
        Creation of invoices, role based access management, Admin and
user dashboards. This was my first hands on experience with
complex application.
      `,
    technologies: [
      "AuthJS",
      "Tailwind",
      "React",
      "NextJS",
      "Drizzle",
      "NodeMailer",
      "Vercel",
    ],
    links: {
      repo: "https://github.com/atulraj85/procu-project",
      live: "",
    },
    dates: "September 2024",
    screenshots: [],
  },
  recruitmentlandingpage: {
    slug: "recruitmentlandingpage",
    name: "Recruitment Landing Page",
    image: "/3across/image.png",

    description: "Fullstack project from Frontend to deployement.",
    longDescription: `
        The project showcased my abilities in front-end development,
integrating a Strapi headless CMS, and translating design concepts
into a polished, responsive web application.
      `,
    technologies: ["Nextjs", "Typescript", "Tailwind", "AWS", "Figma"],
    links: {
      repo: "",
      live: "",
    },
    dates: "July - August 2024",
    screenshots: [],
  },
  thebigocommunity: {
    slug: "thebigocommunity",
    name: "The Big O Community",
    image: "/bigo/TBO.png",

    description:
      "A community where we use and share knowledge about Free and Open Source",
    longDescription: `
        This project allowed me to gain hands-on experience in the full
lifecycle of setting up an online community platform, from domain
and hosting to the technical implementation. The content creation
aspect also showcased my ability to research and share knowledge
on open-source software alternatives.
      `,
    technologies: ["Free Software", "Django", "Nginx", "SSL", "Unix Commands"],
    links: {
      repo: "",
      live: "https://the-big-o-community-atulyaraj-0c6437664fef0742342132dc86cdc7377.gitlab.io/",
    },
    dates: "June 2023 - Present",
    screenshots: [],
  },
  younglearnerslandingpage: {
    slug: "younglearnerslandingpage",
    name: "Young Learners Landing page",
    image: "/aasaan/image.png",

    description: "Figma design for creative educational concept.",
    longDescription: `
        Here was my first hands on with Figma, here i learned how to think
in perspective of end users and design in a well organised way.
      `,
    technologies: ["UI", "UX", "Figma"],
    links: {
      repo: "",
      live: "https://www.figma.com/proto/7rlwhLLorUnX96T2TOqJGY/Aasaan-Project--Copy-?node-id=582-303&starting-point-node-id=582%3A303&t=QRwKfLkAT1KuwssP-1",
    },
    dates: "July - August 2023",
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
    ],
  },
 
  cleanapp2: {
    slug: "cleanapp2",
    name: "Clean App 2.0 featuring Machine Learning",
    image: "/cleanapp2/model.png",

    description: "Realtime Trash Detection and Location System",
    longDescription: `
        Application which utilises individual's camera for real-time trash
detection and if the garbage is in concerning amount, the app will
mark the location on map. Users have to place their phone in
specific area for example like a dash-cam for better view.
      `,
    technologies: [
      "Object Detection",
      "ML",
      "Yolo v7",
      "AI/ML",
      "Python",
      "Ultralytics",
    ],
    links: {
      repo: "",
      live: "https://atul.thebigocommunity.org/projects/thecleanappai",
    },
    dates: "March - June 2023",
    screenshots: [],
  },
  cleanapp: {
    slug: "cleanapp",
    name: "Clean App",
    image: "/cleanapp/2.png",

    description: "Location based garbage marking system",
    longDescription: `
        Flutter based mobile application for any responsible, environment
caring individual who would like to report a dumped waste at any
location around them. A platform where citizens can mark the
location of openly dumped garbage for concerning authorities to
deal with.
      `,
    technologies: ["Geolocation", "Flutter", "Tech for Environment"],
    links: {
      repo: "",
      live: "https://atul.thebigocommunity.org/projects/thecleanapp",
    },
    dates: "July - August 2022",
    screenshots: [
      {
        src: "/cleanapp/1.png",
        alt: "Homepage Overview",
        description:
          "Clean and modern homepage layout with modern service categories and advertisements.",
      },
      {
        src: "/cleanapp/2.png",
        alt: "Services Page",
        description:
          "Detailed services page with filters and service providers.",
      },
      {
        src: "/cleanapp/3.png",
        alt: "Services Page",
        description: "Service providers listing.",
      },
      {
        src: "/cleanapp/4.png",
        alt: "Beautiful Footer",
        description: "Footer with Dynamic City data.",
      },
      {
        src: "/cleanapp/5.png",
        alt: "Beautiful Footer",
        description: "Footer with Dynamic City data.",
      },
      {
        src: "/cleanapp/6.png",
        alt: "Beautiful Footer",
        description: "Footer with Dynamic City data.",
      },
    ],
  },
  // Add more projects here
};

/**
 * The Library
 * Here i have priorities on FOSS, Free and Open Source alternatives of mainstream application so that developers can easily access the source code of the tool they are using, this will further help the overall growth and web community.
 *
 *
 * Globalbiz
 *
 */
