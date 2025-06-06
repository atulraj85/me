"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface CircleData {
  id: string;
  name: string;
  subtitle: string;
  image?: string;
  icon?: string;
  color: string;
  size: number;
  orbitRadius: number;
  speed: number;
  route: string;
}

const OrbitingPortfolio: React.FC = () => {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCircle, setHoveredCircle] = useState<string | null>(null);

  const circles: CircleData[] = [
    {
      id: "atulraj",
      name: "Atul Raj",
      subtitle: "The Founder",
      image: "/api/placeholder/80/80",
      color: "from-blue-400 to-purple-500",
      size: 120,
      orbitRadius: 200,
      speed: 20,
      route: "/atulraj",
    },
    {
      id: "atuld",
      name: "atuld",
      subtitle: "Software Engineer",
      image: "/api/placeholder/80/80",
      color: "from-orange-400 to-pink-500",
      size: 110,
      orbitRadius: 250,
      speed: 15,
      route: "/atuld",
    },
    {
      id: "atulya",
      name: "atulya",
      subtitle: "yogi",
      image: "/api/placeholder/80/80",
      color: "from-yellow-400 to-orange-500",
      size: 100,
      orbitRadius: 300,
      speed: 25,
      route: "/atulya",
    },
    {
      id: "simba",
      name: "simba",
      subtitle: "explorer",
      image: "/api/placeholder/80/80",
      color: "from-green-400 to-teal-500",
      size: 95,
      orbitRadius: 180,
      speed: 30,
      route: "/simba",
    },
    {
      id: "goldbeard",
      name: "goldbeard",
      subtitle: "pirate",
      image: "/api/placeholder/80/80",
      color: "from-pink-400 to-red-500",
      size: 90,
      orbitRadius: 350,
      speed: 12,
      route: "/goldbeard",
    },
    {
      id: "ati",
      name: "ati",
      subtitle: "singer model",
      image: "/api/placeholder/80/80",
      color: "from-cyan-400 to-blue-500",
      size: 85,
      orbitRadius: 220,
      speed: 22,
      route: "/ati",
    },
    {
      id: "atool",
      name: "atool",
      subtitle: "designer creator",
      icon: "🎨",
      color: "from-purple-400 to-pink-500",
      size: 80,
      orbitRadius: 280,
      speed: 18,
      route: "/atool",
    },
    // {
    //   id: "vasu",
    //   name: "vasu",
    //   subtitle: "sexual",
    //   icon: "💕",
    //   color: "from-red-400 to-purple-600",
    //   size: 75,
    //   orbitRadius: 160,
    //   speed: 35,
    //   route: "/vasu",
    // },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleCircleClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-pulse rounded-full bg-white opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="relative"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          {/* Central Circle */}
          <div className="relative z-10 flex h-48 w-48 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 shadow-2xl">
            <div className="text-center">
              <h1 className="mb-2 text-4xl font-bold text-white drop-shadow-lg">
                atul
              </h1>
              <div className="mx-auto h-0.5 w-12 bg-white opacity-75"></div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 scale-110 animate-ping rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 opacity-50"></div>
          </div>

          {/* Orbiting Circles */}
          {circles.map((circle, index) => {
            const angle = (Date.now() / (circle.speed * 100)) % (2 * Math.PI);
            const x = Math.cos(angle) * circle.orbitRadius;
            const y = Math.sin(angle) * circle.orbitRadius;

            return (
              <div
                key={circle.id}
                className="group absolute cursor-pointer"
                style={{
                  transform: `translate(${x - circle.size / 2}px, ${
                    y - circle.size / 2
                  }px)`,
                  left: "50%",
                  top: "50%",
                }}
                onClick={() => handleCircleClick(circle.route)}
                onMouseEnter={() => setHoveredCircle(circle.id)}
                onMouseLeave={() => setHoveredCircle(null)}
              >
                {/* Orbit trail */}
                <div
                  className="pointer-events-none absolute rounded-full border border-white opacity-10"
                  style={{
                    width: circle.orbitRadius * 2,
                    height: circle.orbitRadius * 2,
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) translate(${-x}px, ${-y}px)`,
                  }}
                />

                {/* Circle */}
                <div
                  className={`relative rounded-full bg-gradient-to-br ${circle.color} flex items-center justify-center overflow-hidden shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:brightness-110`}
                  style={{
                    width: circle.size,
                    height: circle.size,
                    transform:
                      hoveredCircle === circle.id
                        ? "scale(1.1) rotate(5deg)"
                        : "scale(1) rotate(0deg)",
                  }}
                >
                  {/* Background image or icon */}
                  {circle.image ? (
                    <div
                      className="absolute inset-2 rounded-full bg-cover bg-center opacity-80"
                      style={{ backgroundImage: `url(${circle.image})` }}
                    />
                  ) : (
                    <div className="text-2xl">{circle.icon}</div>
                  )}

                  {/* Overlay gradient */}
                  <div className="bg-opacity-20 absolute inset-0 rounded-full bg-black"></div>

                  {/* Content */}
                  <div className="relative z-10 p-2 text-center text-white">
                    <div className="mb-1 text-sm font-bold">{circle.name}</div>
                    <div className="text-xs opacity-90">{circle.subtitle}</div>
                  </div>

                  {/* Hover glow */}
                  {hoveredCircle === circle.id && (
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${circle.color} scale-125 animate-pulse opacity-60`}
                    ></div>
                  )}
                </div>

                {/* Floating label on hover */}
                {hoveredCircle === circle.id && (
                  <div className="bg-opacity-75 animate-fadeIn absolute top-full left-1/2 mt-2 -translate-x-1/2 transform rounded-full bg-black px-3 py-1 text-sm whitespace-nowrap text-white">
                    Click to visit {circle.name}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform text-center text-white opacity-75">
        <div className="mb-2 text-sm">Explore the universe of Atul</div>
        <div className="flex items-center justify-center space-x-2 text-xs">
          <div className="h-2 w-2 animate-bounce rounded-full bg-white"></div>
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-white"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-white"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default OrbitingPortfolio;
