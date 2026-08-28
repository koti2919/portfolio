"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    number: "01",
    title: "Continuous Learning",
    description:
      "Always learning new technologies and improving my programming, problem-solving and software development skills.",
    tags: ["Learning", "Problem Solving"],
  },
  {
    number: "02",
    title: "Practical Development",
    description:
      "I focus on turning what I learn into practical applications through hands-on coding and personal projects.",
    tags: ["Projects", "Development"],
  },
  {
    number: "03",
    title: "AI & Technology",
    description:
      "Interested in artificial intelligence and modern technologies, with a focus on building useful and intelligent applications.",
    tags: ["AI", "Innovation"],
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-32">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            07 — What I Bring
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl">
            More than
            <br />
            <span className="text-gray-500">
              just code.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            My approach to software development is built around
            continuous learning, practical problem solving and
            creating useful technology solutions.
          </p>
        </motion.div>

        {/* HIGHLIGHTS */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">

          {highlights.map((item, index) => (
            <motion.div
              key={item.number}
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
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:border-white/30 md:p-10"
            >

              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/[0.03] blur-3xl transition duration-500 group-hover:bg-white/[0.07]" />

              <div className="relative">

                {/* NUMBER */}
                <div className="flex items-center justify-between">

                  <span className="text-sm tracking-[0.2em] text-gray-600">
                    {item.number}
                  </span>

                  <span className="text-3xl text-white/10 transition duration-500 group-hover:text-white/30">
                    ↗
                  </span>

                </div>

                {/* TITLE */}
                <h3 className="mt-10 text-2xl font-bold md:text-3xl">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 leading-7 text-gray-400">
                  {item.description}
                </p>

                {/* TAGS */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black px-4 py-2 text-xs text-gray-400 transition duration-300 group-hover:border-white/20 group-hover:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            delay: 0.3,
          }}
          className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
        >

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Developer Mindset
              </p>

              <h3 className="mt-4 text-2xl font-bold md:text-3xl">
                Learn. Build. Improve.
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-gray-500">
                I believe consistent learning and hands-on
                development are the best ways to grow as a
                software developer.
              </p>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 text-2xl text-gray-400">
              →
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}