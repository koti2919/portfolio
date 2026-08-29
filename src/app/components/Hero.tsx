"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 text-gray-900"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.04] blur-3xl" />

        <div className="absolute left-[20%] top-[20%] h-40 w-40 rounded-full bg-gray-500/[0.08] blur-3xl" />

        <div className="absolute bottom-[10%] right-[20%] h-40 w-40 rounded-full bg-gray-600/[0.08] blur-3xl" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="mx-auto max-w-5xl text-center">

        {/* PROFILE PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex justify-center"
        >
          <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-gray-900 bg-white p-1 shadow-xl sm:h-36 sm:w-36">
            <img
              src="/profile.jpg"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-gray-900/15 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur-xl"
        >
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-600" />

          <span className="text-sm font-semibold text-gray-800">
            Available for opportunities
          </span>
        </motion.div>

        {/* Hello */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-lg font-semibold text-gray-700"
        >
          Hello, I'm
        </motion.p>

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-black tracking-tight text-gray-900 sm:text-7xl md:text-8xl"
        >
          ANNEM
          <br />

          <span className="text-gray-700">
            KOTIREDDY
          </span>
        </motion.h1>

        {/* ROLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
        >
          Software Developer
          <span className="text-gray-600">.</span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-base font-medium leading-7 text-gray-700 sm:text-lg"
        >
          I build modern web applications and intelligent solutions using{" "}
          <span className="font-bold text-gray-900">Python</span>,{" "}
          <span className="font-bold text-gray-900">Java</span>,{" "}
          <span className="font-bold text-gray-900">AI</span> and modern web
          technologies.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          {/* PROJECTS */}
          <a
            href="#projects"
            className="group rounded-full bg-gray-900 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-700"
          >
            View My Projects

            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* RESUME */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-gray-900 bg-white px-8 py-4 font-bold text-gray-900 shadow-md transition duration-300 hover:scale-105 hover:bg-gray-900 hover:text-white"
          >
            View Resume
            <span className="ml-2">↗</span>
          </a>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex justify-center gap-8 text-sm font-semibold text-gray-700"
        >
          <a
            href="https://github.com/koti2919"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-gray-950"
          >
            GitHub
          </a>

          <span className="text-gray-500">•</span>

          <a
            href="https://www.linkedin.com/in/annem-kotireddy-4860a2376"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-gray-950"
          >
            LinkedIn
          </a>

          <span className="text-gray-500">•</span>

          <a
            href="mailto:kotireddy5847@gmail.com"
            className="transition hover:text-gray-950"
          >
            Email
          </a>
        </motion.div>

        {/* SCROLL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-3 text-xs font-semibold text-gray-600"
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