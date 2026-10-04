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
  {
    number: "03",
    category: "AI / SECURITY",
    title: "AI QR Visitor Management System",
    description:
      "An AI-powered visitor management system with visitor registration, QR code generation, check-in/check-out tracking, analytics and security monitoring.",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "SQLite",
      "QR Code",
    ],
    liveLink: "https://ai-qr-visitor-management.vercel.app/",
    githubLink: "https://github.com/koti2919/AI-QR-Visitor-Management",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            My Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            A selection of AI-powered and full-stack projects that demonstrate
            my skills in software development, artificial intelligence, and
            modern web technologies.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="text-sm font-bold tracking-widest text-gray-400">
                      {project.number}
                    </span>

                    <span className="h-px w-10 bg-gray-300"></span>

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-gray-700 md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Buttons */}
                <div className="flex shrink-0 flex-wrap gap-3 lg:w-48 lg:flex-col">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-700"
                    >
                      Live Demo
                      <span className="ml-2">↗</span>
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-gray-900 hover:bg-gray-50"
                    >
                      GitHub
                      <span className="ml-2">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}