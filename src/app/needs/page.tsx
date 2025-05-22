"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Heart, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

interface NeedItem {
  id: string;
  name: string;
  image: string;
  project: string;
  description?: string;
  priority: "high" | "medium" | "low";
  category: string;
  links?: {
    reference?: string;
    purchase?: string;
  };
}

// Updated data based on the image provided
const NEEDS_DATA: NeedItem[] = [
  // The Big O Community
  {
    id: "1",
    name: "Samsung Galaxy Tab S9",
    image: "/needs/image.png",
    project: "The Big O Community",
    description: "High-performance tablet for design work and presentations",
    priority: "high",
    category: "Hardware",
    links: {
      reference: "https://samsung.com/galaxy-tab-s9",
    },
  },
  {
    id: "2",
    name: "Gaming Keyboard & Mouse Set",
    image: "/needs/image copy.png",
    project: "The Big O Community",
    description: "RGB mechanical keyboard and gaming mouse for development",
    priority: "medium",
    category: "Peripherals",
  },

  // The Protector
  {
    id: "3",
    name: "Jeans Coverall",
    image: "/needs/image copy 2.png",
    project: "The Protector",
    description: "Professional safety gear and protective equipment",
    priority: "high",
    category: "Safety Equipment",
  },

  // Food Feels Good
  {
    id: "4",
    name: "4 tier Tiffin",
    image: "/needs/image copy 3.png",
    project: "Food Feels Good",
    description: "High-capacity 4 tier tiffin for carrying delicous meals.",
    priority: "high",
    category: "Kitchen Equipment",
  },

  // The Silence Initiative
  {
    id: "6",
    name: "Noise-Cancelling Headphones",
    image: "/needs/image copy 4.png",
    project: "The Silence Initiative",
    description: "Professional headphones for audio analysis and testing",
    priority: "high",
    category: "Audio Equipment",
  },

  // The Right_Ride Way
  {
    id: "7",
    name: "Bike Carrier",
    image: "/needs/image copy 5.png",
    project: "The Right_Ride Way",
    description: "Carrier, so that i can carry more loads of assets.",
    priority: "high",
    category: "Transportation",
    links: {
      reference:
        "https://www.amazon.in/Leosportz-Cycle-Carrier-Quick-Release/dp/B0C6J5WH58/ref=sr_1_1_sspa?sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY9",
      purchase:
        "https://www.amazon.in/Leosportz-Cycle-Carrier-Quick-Release/dp/B0C6J5WH58/ref=sr_1_1_sspa?sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY",
    },
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
    case "medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
    case "low":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
  }
};

const NeedCard = ({ item, delay }: { item: NeedItem; delay: number }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleHelp = () => {
    const subject = encodeURIComponent(`Help with: ${item.name}`);
    const body = encodeURIComponent(
      `Hi Atul,\n\nI'd like to help you with "${item.name}" for your ${item.project} project.\n\nLet me know how I can assist!\n\nBest regards`
    );
    window.open(
      `mailto:your-email@example.com?subject=${subject}&body=${body}`
    );
  };

  return (
    <Card className="group flex flex-col overflow-hidden border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:bg-card/80 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 h-full">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            width={200}
            height={200}
            src={item.image}
            alt={item.name}
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge
              className={getPriorityColor(item.priority)}
              variant="secondary"
            >
              {item.priority}
            </Badge>
          </div>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-3 right-3 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-colors hover:bg-white/30"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                isLiked ? "fill-red-500 text-red-500" : "text-white"
              }`}
            />
          </button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg leading-tight line-clamp-2">
            {item.name}
          </h3>
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <Badge variant="outline" className="text-xs px-2 py-1">
              {item.category}
            </Badge>
            <span className="text-sm text-muted-foreground font-medium">
              {item.project}
            </span>
          </div>
        </div>

        {item.description && (
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {item.description}
          </p>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-3">
        <Button onClick={handleHelp} className="flex-1" size="default">
          <MessageCircle className="h-4 w-4 mr-2" />I can help!
        </Button>
        {item.links?.reference && (
          <Button
            variant="outline"
            size="default"
            onClick={() => window.open(item.links?.reference, "_blank")}
            className="px-3"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default function NeedsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPriority, setSelectedPriority] = useState<string>("all");

  const projects = [
    "all",
    ...Array.from(new Set(NEEDS_DATA.map((item) => item.project))),
  ];
  const priorities = ["all", "high", "medium", "low"];

  const filteredNeeds = NEEDS_DATA.filter((item) => {
    const categoryMatch =
      selectedCategory === "all" || item.project === selectedCategory;
    const priorityMatch =
      selectedPriority === "all" || item.priority === selectedPriority;
    return categoryMatch && priorityMatch;
  });

  return (
    <main className="flex flex-col space-y-12 p-6">
      {/* Hero Section */}
      <section id="hero">
        <div className="mx-auto w-full max-w-5xl space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Needs / ज़रूरतें
            </h1>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl">
              Things I need to build better projects and create meaningful
              impact. If you can help with any of these, I&apos;d be incredibly
              grateful!
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section id="filters">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="space-y-3">
              <label className="text-sm font-medium">Projects</label>
              <div className="flex flex-wrap gap-2">
                {projects.map((project) => (
                  <Button
                    key={project}
                    variant={
                      selectedCategory === project ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(project)}
                    className="capitalize text-sm"
                  >
                    {project === "all" ? "All Projects" : project}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">Priority</label>
              <div className="flex flex-wrap gap-2">
                {priorities.map((priority) => (
                  <Button
                    key={priority}
                    variant={
                      selectedPriority === priority ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedPriority(priority)}
                    className="capitalize"
                  >
                    {priority}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Needs Grid - 2 Columns */}
      <section id="needs-grid">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredNeeds.map((item, index) => (
              <NeedCard
                key={item.id}
                item={item}
                delay={BLUR_FADE_DELAY * 5 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="help-contact">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-foreground text-background px-4 py-2 text-sm font-medium">
              Want to Help?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Every contribution matters
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether it&apos;s lending equipment, sharing resources, or
              providing guidance - your support helps bring ideas to life. Thank
              you for being part of the journey!
            </p>
            <Button
              size="lg"
              onClick={() => {
                const subject = encodeURIComponent(
                  "I'd like to help with your needs!"
                );
                const body = encodeURIComponent(
                  "Hi Atul,\n\nI've been looking at your needs list and would like to help. Let's discuss how I can contribute!\n\nBest regards"
                );
                window.open(
                  `mailto:your-email@example.com?subject=${subject}&body=${body}`
                );
              }}
            >
              <Mail className="h-5 w-5 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
