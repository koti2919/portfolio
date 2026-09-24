"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent px-6 pt-24 text-gray-900"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        {/* Soft Center Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black blur-3xl"
        />

        {/* Small Decorative Glow */}
        <div className="absolute left-[10%] top-[15%] h-40 w-40 rounded-full bg-gray-500/[0.05] blur-3xl" />

        <div className="absolute bottom-[10%] right-[10%] h-48 w-48 rounded-full bg-gray-600/[0.05] blur-3xl" />
      </div>

      {/* SUBTLE GRID */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="mx-auto w-full max-w-5xl text-center">

        {/* PROFILE PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">

            {/* ANIMATED RING */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-2 rounded-full border border-gray-900/20 border-t-gray-900"
            />

            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-gray-900 bg-white/80 p-1 shadow-2xl backdrop-blur-sm sm:h-36 sm:w-36">
              <img
                src="/profile.jpg"
                alt="Annem Kotireddy"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* AVAILABILITY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/60 px-5 py-2.5 shadow-sm backdrop-blur-xl"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
          </span>

          <span className="text-sm font-semibold text-gray-800">
            Available for opportunities
          </span>
        </motion.div>

        {/* GREETING */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3 text-base font-semibold tracking-wide text-gray-600 sm:text-lg"
        >
          Hello, I'm
        </motion.p>

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-black tracking-[-0.04em] text-gray-950 sm:text-7xl md:text-8xl"
        >
          ANNEM
          <br />
          <span className="text-gray-500">KOTIREDDY</span>
        </motion.h1>

        {/* ROLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-7"
        >
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Software Developer
            <span className="text-gray-500">.</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gray-900" />
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-7 max-w-2xl text-base font-medium leading-8 text-gray-600 sm:text-lg"
        >
          I build modern web applications and intelligent solutions using{" "}
          <span className="font-bold text-gray-950">Python</span>,{" "}
          <span className="font-bold text-gray-950">Java</span>,{" "}
          <span className="font-bold text-gray-950">AI</span> and modern web
          technologies.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center rounded-full bg-gray-950 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-2xl"
          >
            View My Projects

            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-full border-2 border-gray-900 bg-white/60 px-8 py-4 font-bold text-gray-900 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:text-white hover:shadow-xl"
          >
            View Resume

            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5 text-sm font-semibold text-gray-600 sm:gap-8"
        >
          <a
            href="https://github.com/koti2919"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:-translate-y-0.5 hover:text-gray-950"
          >
            GitHub
          </a>

          <span className="text-gray-400">•</span>

          <a
            href="https://www.linkedin.com/in/annem-kotireddy-4860a2376"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:-translate-y-0.5 hover:text-gray-950"
          >
            LinkedIn
          </a>

          <span className="text-gray-400">•</span>

          <a
            href="mailto:kotireddy5847@gmail.com"
            className="transition duration-300 hover:-translate-y-0.5 hover:text-gray-950"
          >
            Email
          </a>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14 flex flex-col items-center gap-3 text-[10px] font-bold tracking-[0.25em] text-gray-500 sm:mt-16"
        >
          <span>SCROLL TO EXPLORE</span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="h-8 w-px bg-gray-700"
          />
        </motion.div>

      </div>
    </section>
  );
}