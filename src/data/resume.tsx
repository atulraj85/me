import { Icons } from "@/components/icons";
import { ResumeIcon } from "@radix-ui/react-icons";
import { File, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Atul Raj",
  initials: "AR",
  url: "https://atul.thebigocommunity.org",
  location: "Noida, Uttar Pradesh",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer aiming to be Entrepreneur. Building incredible resources one day and code at a time.",
  summary:
    "As a tech enthusiast and digital creator, I share my journey through [tech blogs](https://curator.thebigocommunity.org/en/) and open-source advocacy, while expressing my creative side through [design](https://graphics.social/@atool), [photography](https://pixelfed.social/thessential_foundation), and [video production](https://odysee.com/@thessentialFoundation:7). My passion for technology extends to self-hosting my own [cloud](https://cloud.thebigocommunity.org/) and [messaging services](https://comfy.guide/server/prosody/), reflecting my commitment to digital sovereignty. When I'm not coding or designing, I'm either mixing tracks as a [DJ](https://odysee.com/@DJGoldbeard:3), exploring nature on my [bike rides](https://odysee.com/@rightrideway:2), diving into [PC gaming](https://odysee.com/@FreedomForgeGaming:b), or pursuing [spiritual growth](https://odysee.com/@TheSilenceInitiative:6). I love [DIY projects](https://toot.community/@diy) that challenge me to build and fix things myself, embodying my belief that understanding systems from the ground up empowers both myself and others. Through all these diverse interests, I strive to create meaningful connections between technology, creativity, and mindful living. 🚀🎨🌱",
  avatarUrl: "/me2.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Podman",
    "C++",
  ],
  navbar: [
    {
      href: "https://rxresu.me/masterbustter/atul-raj-2025-cv",
      icon: File,
      label: "CV",
    },
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://curator.thebigocommunity.org/en/",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "atulraj1010@tutanota.com",
    // tel: "+123456789",
    social: {
      Codeberg: {
        name: "Codeberg",
        url: "https://codeberg.org/atul_raj",
        icon: Icons.codeberg,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/atulraj85",
        icon: Icons.github,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:atulraj1010@tutanota.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Gennext IT",
      href: "https://gennextit.com",
      badges: [],
      location: "Noida, Uttar Pradesh",
      title: "FullStack Web Engineer",
      logoUrl: "/Gennext IT logo.png",
      start: "June 2023",
      end: "",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Graphic Era Hill University, Bhimtal",
      href: "https://gehu.ac.in/",
      degree: "Master of Computer Application",
      logoUrl: "/gehu.jpg",
      start: "2022",
      end: "2024",
    },
    {
      school: "Kumaun University, Nainital",
      href: "https://www.kunainital.ac.in/",
      degree: "Bachelor of Computer Application",
      logoUrl: "/kumauniversity.png",
      start: "2019",
      end: "2022",
    },
    {
      school: "Hermann Gmeiner School, Bhimtal",
      href: "https://hermanngmeinerschoolbhimtal.org/",
      degree: "Secondary and Primary School",
      logoUrl: "/sos.jpg",
      start: "2012",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "The Big O Company",
      dates: "May 2025",
      location: "Online",
      description:
        "Branding, Web, Mobile, Desktop. Designing, Development, Testing.",
      image: "/startups/image.png",
      links: [
        {
          title: "The Big O Company",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://company.thebigocommunity.org/",
        },
      ],
    },
    {
      title: "The Essential Foundation",
      dates: "March 2025",
      location: "Online",
      description:
        "Roti, Kapda, Makaan and WiFi in most organic, environmentally friendly, sustainable and ethical way.",
      image: "/startups/TEF.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "The Essential Foundation",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://essentials.thebigocommunity.org/",
        },
      ],
    },
    {
      title: "The DIY Community",
      dates: "April 2025",
      location: "Online",
      description:
        "A builders and creators community. To create a world where people have the confidence, tools, and knowledge to build and fix things themselves! 🌟",
      image: "/startups/TDIYC.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "The DIY Community",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://doity.thebigocommunity.org/",
        },
      ],
    },
    {
      title: "The Protector",
      dates: "April 2025",
      location: "Online",
      description:
        "Human need protection from harsh environments, construction, machines and many more. The Protector is the shield which cares for them. ",
      icon: "public",
      image: "/startups/The Protector.webp",
      links: [
        {
          title: "The Protector",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://protector.thebigocommunity.org/",
        },
      ],
    },
  ],
} as const;
