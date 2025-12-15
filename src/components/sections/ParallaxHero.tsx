import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; // -10 to 10 deg
    const y = (clientY / innerHeight - 0.5) * 20; // -10 to 10 deg
    setMousePosition({ x, y });
  };

  const yBg = useTransform(scrollY, [0, 1000], [0, 400]); // Slowest (Background)
  const yMg = useTransform(scrollY, [0, 1000], [0, 200]); // Midground
  const yFg = useTransform(scrollY, [0, 1000], [0, 50]); // Fastest/Standard (Foreground content)
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative h-[90vh] overflow-hidden flex items-center justify-center bg-white"
      onMouseMove={handleMouseMove}
    >
      {/* Layer 3: Background Texture/Grain */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0 opacity-10"
      >
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/23/5a/04/235a045a25daa49b683be346d970c192.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white" />
      </motion.div>

      {/* Layer 2: Midground Elements (Abstract Shapes/Gradients) */}
      <motion.div
        style={{ y: yMg }}
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[60vw] h-[60vw] bg-secondary/10 rounded-full blur-[120px] absolute top-1/4 -right-1/4" />
        <div className="w-[40vw] h-[40vw] bg-gray-100/50 rounded-full blur-[100px] absolute bottom-0 -left-10" />
      </motion.div>

      {/* Layer 1: Foreground Content */}
      <motion.div
        style={{ y: yFg, opacity: opacityHero }}
        className="relative z-20 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      >
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 text-xs font-medium tracking-wide text-black/80 mb-4 hover:bg-black/10 transition-colors cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              AVAILABLE FOR NEW PROJECTS
            </Link>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-4 text-black">
              Designing for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black to-secondary">
                Humans.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-black/60 max-w-lg leading-relaxed ">
              Product-focused UI/UX & Motion Designer creating
              intuitive, scalable digital experiences that
              support growth and engagement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <Button
              size="lg"
              className="bg-black text-white hover:bg-secondary hover:text-black rounded-full h-14 px-8 text-base transition-colors duration-300"
              asChild
            >
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-black/20 text-black hover:bg-black/5 rounded-full h-14 px-8 text-base bg-transparent"
              asChild
            >
              <Link to="/work">
                View Case Studies{" "}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Hero Image / Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateX: -mousePosition.y,
            rotateY: mousePosition.x,
          }}
          transition={{
            opacity: {
              duration: 1.2,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            },
            scale: {
              duration: 1.2,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            },
            rotateX: {
              type: "spring",
              stiffness: 100,
              damping: 30,
            },
            rotateY: {
              type: "spring",
              stiffness: 100,
              damping: 30,
            },
          }}
          className="relative hidden lg:block perspective-1000 group"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-black/10 transform transition-transform duration-700">
            <img
              src="https://cdn.dribbble.com/userupload/45675793/file/abc148459b2fdb99cd1fe963bcd94391.png?resize=1024x768&vertical=center"
              alt="Fintech Dashboard UI"
              className="w-full !h-[50rem] object-cover"
            />
          </div>

          {/* Decorative background element behind image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-black/5 to-gray-500/5 rounded-3xl blur-2xl -z-10 opacity-60" />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 z-20 flex flex-col items-center gap-3"
      >
        <div className="w-[26px] h-[40px] rounded-full border border-black/20 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-1 h-1.5 rounded-full bg-secondary"
          />
        </div>
        <span className="text-[10px] tracking-widest uppercase text-black/40 font-medium">
          Scroll
        </span>
      </motion.div>
    </div>
  );
}
