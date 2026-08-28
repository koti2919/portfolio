"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-32">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            01 — About
          </p>

          <h2 className="mt-5 max-w-5xl text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
            A developer who
            <br />
            <span className="text-gray-500">
              loves building things.
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-gray-400">
              I am a B.Tech Computer Science Engineering student
              and aspiring Software Developer passionate about
              programming, artificial intelligence and building
              useful applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I enjoy working with Python, Java, JavaScript and
              modern web technologies while continuously improving
              my problem-solving and development skills.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Education
            </p>

            <h3 className="mt-5 text-2xl font-bold">
              B.Tech — Computer Science Engineering
            </h3>

            <p className="mt-3 text-gray-400">
              2023 — 2027
            </p>

            <div className="mt-6 h-px bg-white/10" />

            <p className="mt-6 text-gray-400">
              Currently developing my knowledge in software
              development, artificial intelligence, web technologies
              and programming.
            </p>
          </motion.div>

        </div>

        {/* Quick Facts */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-sm text-gray-500">
              Degree
            </p>

            <p className="mt-2 text-xl font-semibold">
              B.Tech CSE
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-sm text-gray-500">
              Batch
            </p>

            <p className="mt-2 text-xl font-semibold">
              2023 — 2027
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-sm text-gray-500">
              Career Goal
            </p>

            <p className="mt-2 text-xl font-semibold">
              Software Developer
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}