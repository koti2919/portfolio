"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Creating responsive and user-friendly websites using HTML, CSS and JavaScript, with a focus on clean structure and simple user experiences.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "02",
    title: "Python Development",
    description:
      "Developing practical Python programs and applications while applying programming fundamentals, problem-solving and clean coding practices.",
    technologies: ["Python", "Problem Solving"],
  },
  {
    number: "03",
    title: "Java Development",
    description:
      "Building Java programs using object-oriented programming concepts, core programming principles and structured problem-solving techniques.",
    technologies: ["Java", "OOP", "Programming"],
  },
  {
    number: "04",
    title: "AI Applications",
    description:
      "Exploring artificial intelligence and developing AI-based applications that demonstrate practical solutions to real-world problems.",
    technologies: ["Artificial Intelligence", "AI Projects"],
  },
  {
    number: "05",
    title: "MySQL Database",
    description:
      "Working with MySQL databases to organize, store and retrieve application data using database concepts and SQL queries.",
    technologies: ["MySQL", "SQL", "Database"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-black/10 bg-transparent text-black"
    >
      <div className="mx-auto max-w-7xl px-6 py-32">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-600">
            05 — What I Do
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-black sm:text-6xl md:text-8xl">
            What I
            <br />
            <span className="text-gray-500">
              build.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-700">
            I use programming, web technologies, databases and
            artificial intelligence to build practical applications
            and strengthen my software development skills.
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
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-8 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-black/20 hover:bg-white/75 hover:shadow-lg md:p-10"
            >

              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-black/[0.03] blur-3xl transition duration-500 group-hover:bg-black/[0.07]" />

              <div className="relative">

                {/* Number + Arrow */}
                <div className="flex items-start justify-between">

                  <span className="text-sm font-medium tracking-[0.2em] text-gray-500">
                    {service.number}
                  </span>

                  <span className="text-4xl text-black/20 transition duration-500 group-hover:translate-x-1 group-hover:text-black/40">
                    ↗
                  </span>

                </div>

                {/* Title */}
                <h3 className="mt-10 text-3xl font-bold tracking-tight text-black">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-7 text-gray-700">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {service.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs text-gray-700 transition duration-300 group-hover:border-black/20 group-hover:bg-white hover:text-black"
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