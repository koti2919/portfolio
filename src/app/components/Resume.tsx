"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section
      id="resume"
      className="border-t border-black/10 bg-transparent text-black"
    >
      <div className="mx-auto max-w-7xl px-6 py-32">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-600">
            06 — Resume
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-black sm:text-6xl md:text-8xl">
            My
            <br />
            <span className="text-gray-500">Resume.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-700">
            Learn more about my education, technical skills, projects and
            career goals through my resume.
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 rounded-3xl border border-black/10 bg-white/60 p-8 shadow-sm backdrop-blur-md transition duration-500 hover:border-black/20 hover:bg-white/75 md:p-12"
        >
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            {/* Resume Information */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Curriculum Vitae
              </p>

              <h3 className="mt-4 text-2xl font-bold text-black md:text-3xl">
                Annem Kotireddy
              </h3>

              <p className="mt-3 text-gray-700">
                B.Tech — Computer Science Engineering
              </p>

              <p className="mt-2 text-sm text-gray-500">
                2023 — 2027
              </p>

              <p className="mt-2 text-sm font-semibold text-gray-700">
                CGPA: 7.71 / 10
              </p>
            </div>

            {/* Resume Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">

              {/* View Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/20 bg-white px-7 py-3 text-sm font-semibold text-black shadow-sm transition duration-300 hover:bg-black hover:text-white"
              >
                View Resume ↗
              </a>

              {/* Download Resume */}
              <a
                href="/resume.pdf"
                download="Annem_Kotireddy_Resume.pdf"
                className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:bg-gray-800"
              >
                Download Resume ↓
              </a>

            </div>
          </div>
        </motion.div>

        {/* Resume Highlights */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-black/10 bg-white/60 p-8 shadow-sm backdrop-blur-md transition duration-500 hover:border-black/20 hover:bg-white/75"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Education
            </p>

            <h3 className="mt-4 text-xl font-bold text-black">
              B.Tech CSE
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-700">
              Computer Science Engineering student at QIS Engineering College.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-black/10 bg-white/60 p-8 shadow-sm backdrop-blur-md transition duration-500 hover:border-black/20 hover:bg-white/75"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Skills
            </p>

            <h3 className="mt-4 text-xl font-bold text-black">
              Programming & AI
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-700">
              Python, Java, MySQL, HTML, CSS, JavaScript and Artificial
              Intelligence.
            </p>
          </motion.div>

          {/* Career Goal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-black/10 bg-white/60 p-8 shadow-sm backdrop-blur-md transition duration-500 hover:border-black/20 hover:bg-white/75"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Career Goal
            </p>

            <h3 className="mt-4 text-xl font-bold text-black">
              Software Developer
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-700">
              Building practical software applications while continuously
              improving programming and problem-solving skills.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}