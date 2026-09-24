"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
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
              01 — About
            </p>
          </div>

          <h2 className="mt-6 max-w-5xl text-5xl font-bold leading-tight tracking-tight text-black sm:text-6xl md:text-8xl">
            A developer who
            <br />
            <span className="text-gray-500">
              loves building things.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
            I am a Computer Science Engineering student focused on building
            practical software applications and continuously improving my
            programming and problem-solving skills.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">

          {/* ABOUT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-[2rem] border border-black/10 bg-white/60 p-7 shadow-sm backdrop-blur-md transition duration-500 hover:border-black/20 hover:bg-white/70 sm:p-9">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                Who I am
              </p>

              <p className="mt-6 text-base leading-8 text-gray-700 sm:text-lg">
                I am a B.Tech Computer Science Engineering student and
                aspiring Software Developer with an interest in programming,
                artificial intelligence and building useful applications.
              </p>

              <p className="mt-6 text-base leading-8 text-gray-700 sm:text-lg">
                I enjoy working with Python, Java, MySQL, HTML, CSS and
                JavaScript while continuously developing my coding,
                problem-solving and software development skills.
              </p>

              {/* SKILL TAGS */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Python",
                  "Java",
                  "MySQL",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "AI",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium text-gray-700 transition duration-300 hover:border-black/20 hover:bg-white hover:text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 p-7 text-black shadow-sm backdrop-blur-md transition duration-500 hover:border-black/20 hover:bg-white/70 sm:p-9"
          >

            {/* DECORATIVE NUMBER */}
            <div className="pointer-events-none absolute -right-5 -top-8 text-[9rem] font-black leading-none text-black/[0.04] transition duration-500 group-hover:text-black/[0.08]">
              01
            </div>

            <div className="relative z-10">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                Education
              </p>

              <h3 className="mt-6 text-2xl font-bold leading-tight text-black sm:text-3xl">
                B.Tech — Computer Science Engineering
              </h3>

              <p className="mt-4 text-sm font-medium text-gray-600">
                QIS Engineering College
              </p>

              <p className="mt-2 text-sm font-medium text-gray-500">
                2023 — 2027
              </p>

              <div className="my-7 h-px bg-black/10" />

              <p className="text-sm leading-7 text-gray-700 sm:text-base">
                Currently developing my knowledge in software development,
                artificial intelligence, web technologies, databases and
                programming.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                <span className="text-sm font-medium text-gray-700">
                  Currently studying
                </span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* QUICK FACTS */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">

          {/* DEGREE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur-md transition duration-300 hover:border-black/20 hover:bg-white/70"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Degree
            </p>

            <p className="mt-3 text-xl font-bold text-black">
              B.Tech CSE
            </p>
          </motion.div>

          {/* BATCH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur-md transition duration-300 hover:border-black/20 hover:bg-white/70"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Batch
            </p>

            <p className="mt-3 text-xl font-bold text-black">
              2023 — 2027
            </p>
          </motion.div>

          {/* CAREER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur-md transition duration-300 hover:border-black/20 hover:bg-white/70"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Career Goal
            </p>

            <p className="mt-3 text-xl font-bold text-black">
              Software Developer
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}