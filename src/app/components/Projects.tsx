"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "AI / EDUCATION",
    title: "AI Interview Preparation Platform",
    description:
      "An AI-powered interview preparation platform designed to simulate real interviews and provide intelligent feedback to candidates.",
    technologies: ["AI", "React", "Gemini", "TypeScript"],
  },
  {
    number: "02",
    category: "AI / PRODUCTIVITY",
    title: "AI Email Reply Assistant",
    description:
      "An intelligent application that generates professional email responses based on the user's message and preferred communication tone.",
    technologies: ["Python", "Streamlit", "AI"],
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "Personal Portfolio Website",
    description:
      "A modern and responsive developer portfolio built to showcase my skills, projects, experience and technical journey.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-32">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            03 — Projects
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl">
            Things I've
            <br />
            <span className="text-gray-500">
              built.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            A selection of projects I've worked on while learning
            software development, artificial intelligence and
            modern web technologies.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <div className="mt-20 space-y-6">

          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:border-white/30 md:p-10"
            >

              {/* BACKGROUND GLOW */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/[0.03] blur-3xl transition duration-500 group-hover:bg-white/[0.06]" />

              <div className="relative">

                {/* TOP */}
                <div className="flex items-start justify-between gap-6">

                  <p className="text-sm font-medium tracking-[0.2em] text-gray-500">
                    {project.category}
                  </p>

                  <span className="text-4xl font-black text-white/10 transition duration-500 group-hover:text-white/20 md:text-6xl">
                    {project.number}
                  </span>

                </div>

                {/* TITLE */}
                <h3 className="mt-8 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-6 max-w-3xl text-base leading-7 text-gray-400 md:text-lg">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-black px-4 py-2 text-xs text-gray-300 transition duration-300 group-hover:border-white/20"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* PROJECT STATUS */}
                <div className="mt-10 flex items-center gap-3">

                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />

                  <span className="text-sm text-gray-500">
                    Project links coming soon
                  </span>

                </div>

                {/* COMING SOON */}
                <div className="mt-6">

                  <span className="inline-flex rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-gray-500">
                  </span>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}