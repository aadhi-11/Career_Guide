"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, Brain, Target, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; duration: number; delay: number }>>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true);
    
    // Generate random stars only on client
    const generateStars = () => {
      const newStars = Array.from({ length: 150 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 3,
      }));
      setStars(newStars);
    };

    // Generate random particles only on client
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 4,
      }));
      setParticles(newParticles);
    };

    generateStars();
    generateParticles();
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950">
      {/* Animated Stars Background with Blur - Client-side only */}
      {isClient && (
        <div className="absolute inset-0 backdrop-blur-sm">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-white opacity-80 backdrop-blur-sm"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 2 + (star.delay % 2),
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Floating Particles with Blur - Client-side only */}
      {isClient && (
        <div className="absolute inset-0 backdrop-blur-sm">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-70 backdrop-blur-sm"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content - Full Height */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 max-w-5xl mx-auto w-full">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-2 sm:space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-6 w-6 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-yellow-400" />
              </motion.div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white leading-[0.9] tracking-tight">
                <span className="block">Career</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                  Guide AI
                </span>
              </h1>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-2"
          >
            Your intelligent career companion powered by cutting-edge AI technology
            <br />
            <span className="text-blue-200 text-xs sm:text-sm md:text-base lg:text-lg">
              Get personalized guidance, discover opportunities, and accelerate your professional journey
            </span>
          </motion.p>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 my-4 sm:my-6"
          >
            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 sm:p-3 bg-blue-800/40 rounded-full border border-blue-400/40 backdrop-blur-sm"
              >
                <Brain className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-300" />
              </motion.div>
              <span className="text-xs sm:text-sm md:text-base text-blue-200 font-medium">AI Powered</span>
            </div>
            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="p-2 sm:p-3 bg-purple-800/40 rounded-full border border-purple-400/40 backdrop-blur-sm"
              >
                <Target className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-purple-300" />
              </motion.div>
              <span className="text-xs sm:text-sm md:text-base text-purple-200 font-medium">Personalized</span>
            </div>
            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 sm:p-3 bg-pink-800/40 rounded-full border border-pink-400/40 backdrop-blur-sm"
              >
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-pink-300" />
              </motion.div>
              <span className="text-xs sm:text-sm md:text-base text-pink-200 font-medium">Fast Results</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="pt-2 sm:pt-4"
          >
            <Link href="/chat">
              <Button 
                size="lg" 
                className="group relative text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <motion.span
                  className="flex items-center justify-center space-x-2 sm:space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.span>
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </Button>
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="pt-4 sm:pt-6 text-center"
          >
            <p className="text-xs sm:text-sm md:text-base text-blue-300/80 px-2">
              ✨ Join thousands of professionals who have transformed their careers
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </div>
  );
}
