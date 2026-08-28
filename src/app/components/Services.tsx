"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building modern, responsive and user-friendly websites and web applications using HTML, CSS, JavaScript and modern frontend technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    number: "02",
    title: "Python Development",
    description:
      "Developing practical Python applications with clean code, problem-solving techniques, automation and application development.",
    technologies: ["Python", "Streamlit", "APIs"],
  },
  {
    number: "03",
    title: "AI Applications",
    description:
      "Building intelligent applications using AI technologies and modern AI APIs to explore practical solutions for real-world problems.",
    technologies: ["AI", "Gemini", "OpenAI"],
  },
  {
    number: "04",
    title: "Database & SQL",
    description:
      "Working with databases and SQL to store, manage and retrieve application data efficiently while developing reliable applications.",
    technologies: ["SQL", "Databases", "Data Management"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
            05 — What I Do
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl">
            What I
            <br />
            <span className="text-gray-500">
              build.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            I turn ideas into practical software applications
            using programming, web technologies, databases and
            artificial intelligence.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="mt-20 grid gap-5 md:grid-cols-2">

          {services.map((service, index) => (
            <motion.div
              key={service.number}
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:border-white/30 md:p-10"
            >

              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/[0.03] blur-3xl transition duration-500 group-hover:bg-white/[0.06]" />

              <div className="relative">

                {/* Number + Arrow */}
                <div className="flex items-start justify-between">

                  <span className="text-sm tracking-[0.2em] text-gray-600">
                    {service.number}
                  </span>

                  <span className="text-4xl text-white/10 transition duration-500 group-hover:text-white/20">
                    ↗
                  </span>

                </div>

                {/* Title */}
                <h3 className="mt-10 text-3xl font-bold tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-7 text-gray-400">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {service.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-gray-400 transition duration-300 group-hover:border-white/20 group-hover:text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}