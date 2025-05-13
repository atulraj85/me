"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeftIcon, MailIcon } from "lucide-react";

export default function NotFoundPage() {
  const [hovering, setHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/10 p-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Meditating Guru SVG Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-72 h-72 mx-auto mb-8"
        >
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Background Circle */}
            <motion.circle
              cx="200"
              cy="200"
              r="150"
              fill="url(#paint0_radial)"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Meditation Platform */}
            <motion.ellipse
              cx="200"
              cy="280"
              rx="80"
              ry="20"
              fill="url(#paint1_linear)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.3, duration: 1 }}
            />

            {/* Meditating Person */}
            <motion.g
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 4,
                ease: "easeInOut",
              }}
            >
              {/* Body */}
              <path
                d="M180 220C180 220 160 260 160 270C160 280 180 280 200 280C220 280 240 280 240 270C240 260 220 220 220 220"
                fill="#546E7A"
                stroke="#37474F"
                strokeWidth="2"
              />

              {/* Legs Crossed */}
              <path
                d="M160 270C160 270 180 250 200 250C220 250 240 270 240 270"
                fill="#455A64"
              />

              {/* Arms */}
              <path
                d="M170 230C170 230 160 220 155 230C150 240 170 250 180 240"
                fill="#546E7A"
                stroke="#37474F"
                strokeWidth="2"
              />
              <path
                d="M230 230C230 230 240 220 245 230C250 240 230 250 220 240"
                fill="#546E7A"
                stroke="#37474F"
                strokeWidth="2"
              />

              {/* Head */}
              <circle cx="200" cy="190" r="30" fill="#FFCC80" />
              <path
                d="M185 190A5 5 0 0 1 185 190"
                stroke="black"
                strokeWidth="1"
              />
              <path
                d="M215 190A5 5 0 0 1 215 190"
                stroke="black"
                strokeWidth="1"
              />

              {/* Closed Eyes */}
              <path d="M185 185C185 185 190 190 195 185" stroke="black" strokeWidth="1" />
              <path d="M215 185C215 185 210 190 205 185" stroke="black" strokeWidth="1" />

              {/* Peaceful Smile */}
              <path
                d="M190 200C190 200 200 205 210 200"
                stroke="black"
                strokeWidth="1"
                fill="none"
              />

              {/* Meditation Aura Circles */}
              <motion.circle
                cx="200"
                cy="200"
                r="40"
                stroke="rgba(147, 112, 219, 0.2)"
                strokeWidth="2"
                fill="none"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1.1 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.circle
                cx="200"
                cy="200"
                r="50"
                stroke="rgba(147, 112, 219, 0.1)"
                strokeWidth="2"
                fill="none"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1.2 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />
              <motion.circle
                cx="200"
                cy="200"
                r="60"
                stroke="rgba(147, 112, 219, 0.05)"
                strokeWidth="2"
                fill="none"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1.3 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
            </motion.g>
          </svg>

          {/* SVG Gradients */}
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(200 200) rotate(90) scale(150)"
            >
              <stop stopColor="rgba(147, 112, 219, 0.3)" />
              <stop offset="1" stopColor="rgba(147, 112, 219, 0)" />
            </radialGradient>
            <linearGradient
              id="paint1_linear"
              x1="120"
              y1="280"
              x2="280"
              y2="280"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#78909C" />
              <stop offset="1" stopColor="#546E7A" />
            </linearGradient>
          </defs>
        </motion.div>

        {/* Message Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Peaceful Contemplation
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 shadow-lg max-w-xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Ah, welcome gentle visitor! You&apos;ve discovered a page in the midst of creation.
              Like a garden being tended, this space is still growing into its full beauty.
            </p>
            
            <p className="mt-4 text-lg text-foreground/80">
              The creator is nurturing this page with care and will bring it to life soon.
              Until then, may I suggest another path on your journey?
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <Link 
              href="/"
              className="group flex items-center gap-2 px-6 py-3 bg-secondary/80 hover:bg-secondary/90 text-secondary-foreground rounded-full transition-all duration-300 ease-in-out hover:shadow-md"
            >
              <ArrowLeftIcon size={18} className="transition-transform group-hover:-translate-x-1" />
              <span>Explore This Beautiful Place</span>
            </Link>
            
            <motion.a 
              href="mailto:contact@yourdomain.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary/80 hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300 ease-in-out hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <MailIcon size={18} />
              <span>Send a Message</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}