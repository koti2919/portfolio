"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section
      id="resume"
      className="border-t border-black/10 text-black"
    >
      <div className="mx-auto max-w-7xl px-6 py-32">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-700">
            06 — Resume
          </p>

          <h2 className="mt-5 text-5xl font-bold text-black sm:text-6xl md:text-8xl">
            My
            <br />
            <span className="text-gray-700">
              Resume.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-700">
            Learn more about my education, technical skills,
            projects and experience through my resume.
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 rounded-3xl border border-black/10 bg-white/60 p-8 shadow-sm backdrop-blur-md md:p-12"
        >
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            {/* Resume Info */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-700">
                Curriculum Vitae
              </p>

              <h3 className="mt-4 text-2xl font-bold text-black md:text-3xl">
                Annem Kotireddy
              </h3>

              <p className="mt-3 text-gray-700">
                B.Tech Computer Science & Engineering
              </p>

              <p className="mt-2 text-sm text-gray-600">
                2023 — 2027
              </p>

              <p className="mt-2 text-sm font-semibold text-gray-700">
                CGPA: 7.71
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">

              {/* VIEW RESUME */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/30 bg-white px-7 py-3 text-sm font-semibold text-black shadow-sm transition duration-300 hover:bg-black hover:text-white"
              >
                View Resume ↗
              </a>

              {/* DOWNLOAD */}
              <a
                href="/resume.pdf"
                download="Resume.pdf"
                className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-gray-800"
              >
                Download Resume ↓
              </a>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}