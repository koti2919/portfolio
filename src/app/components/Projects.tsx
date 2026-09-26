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
    liveLink: "https://ai-interview-platform-tjbg.onrender.com/",
    githubLink: "",
  },
  {
    number: "02",
    category: "AI / PRODUCTIVITY",
    title: "AI Email Reply Assistant",
    description:
      "An intelligent application that generates professional email responses based on the user's message and preferred communication tone.",
    technologies: ["Python", "Streamlit", "AI"],
    liveLink: "",
    githubLink: "",
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "Personal Portfolio Website",
    description:
      "A modern and responsive developer portfolio built to showcase my skills, projects, experience and technical journey.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveLink: "https://portfolio-beige-omega-mrzk62r9fn.vercel.app/",
    githubLink: "https://github.com/koti2919/portfolio",
  },
  {
    number: "04",
    category: "AI / CAREER TOOLS",
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume analysis platform that extracts resume content, compares it with job descriptions, calculates ATS scores, identifies skill gaps, analyzes keywords and provides personalized improvement recommendations.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "NLP",
      "PyMuPDF",
    ],
    liveLink: "https://ai-resume-analyzer-1-txgw.onrender.com/",
    githubLink: "https://github.com/koti2919/ai-resume-analyzer",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-black/10 bg-transparent text-black"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-black/30" />

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-600">
              03 — Projects
            </p>
          </div>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-black sm:text-6xl md:text-8xl">
            Things I've
            <br />
            <span className="text-gray-500">built.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
            A selection of projects I've worked on while learning
            software development, artificial intelligence and modern
            web technologies.
          </p>
        </motion.div>

        {/* PROJECT CARDS */}
        <div className="mt-16 space-y-6 sm:mt-20">

          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-black/20 hover:bg-white/75 hover:shadow-xl sm:p-8 md:p-10"
            >

              {/* DECORATIVE NUMBER */}
              <div className="pointer-events-none absolute -right-4 -top-8 select-none text-[8rem] font-black leading-none text-black/[0.035] transition-all duration-500 group-hover:text-black/[0.08] sm:text-[10rem] md:text-[12rem]">
                {project.number}
              </div>

              {/* HOVER GLOW */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-black/[0.02] blur-3xl transition-all duration-700 group-hover:bg-black/[0.06]" />

              <div className="relative z-10">

                {/* TOP ROW */}
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 sm:text-sm">
                      {project.category}
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          project.liveLink
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        }`}
                      />

                      <span className="text-xs font-medium text-gray-500">
                        {project.liveLink
                          ? "Live Project"
                          : "In Development"}
                      </span>
                    </div>
                  </div>

                  <span className="text-xl font-black text-black/20 transition-all duration-500 group-hover:text-black/40 sm:text-2xl">
                    {project.number}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-8 max-w-4xl text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl md:text-5xl">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-700 sm:text-base md:text-lg">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium text-gray-700 transition-all duration-300 group-hover:border-black/20 group-hover:bg-white hover:text-black"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-9 flex flex-wrap gap-3">

                  {/* LIVE DEMO */}
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:shadow-lg sm:px-7 sm:py-3.5"
                    >
                      <span>Live Demo</span>

                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-500 sm:px-7 sm:py-3.5">
                      Live Demo Coming Soon
                    </span>
                  )}

                  {/* GITHUB */}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:px-7 sm:py-3.5"
                    >
                      <span>GitHub</span>

                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
                  )}

                </div>

              </div>
            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}