"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    description:
      "Programming languages I use to build applications and solve programming problems.",
    skills: [
      { name: "Python", level: "Good", value: 80 },
      { name: "Java", level: "Good", value: 70 },
    ],
  },
  {
    title: "Web Development",
    description:
      "Web technologies I use to create the structure, styling and functionality of websites.",
    skills: [
      { name: "HTML", level: "Good", value: 80 },
      { name: "CSS", level: "Good", value: 75 },
      { name: "JavaScript", level: "Learning", value: 60 },
    ],
  },
  {
    title: "Database & AI",
    description:
      "Technologies I use for database management and developing AI-based applications.",
    skills: [
      { name: "MySQL", level: "Good", value: 70 },
      { name: "Artificial Intelligence", level: "Learning", value: 60 },
    ],
  },
];

const technologies = [
  "Python",
  "Java",
  "MySQL",
  "HTML",
  "CSS",
  "JavaScript",
  "Artificial Intelligence",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-black/10 bg-transparent text-black"
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
            02 — Skills
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-black sm:text-6xl md:text-8xl">
            Technologies
            <br />
            <span className="text-gray-500">
              I work with.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-700">
            The programming languages, web technologies, database
            technologies and AI concepts I have learned and practiced.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">

          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-black/10 bg-white/60 p-8 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-black/20 hover:bg-white/75 md:p-10"
            >

              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  0{categoryIndex + 1}
                </span>

                <span className="text-gray-500 transition duration-300 group-hover:translate-x-1 group-hover:text-black">
                  ↗
                </span>
              </div>

              {/* Category Title */}
              <h3 className="mt-8 text-2xl font-bold text-black">
                {category.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-gray-700">
                {category.description}
              </p>

              {/* Skills */}
              <div className="mt-8 space-y-7">

                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>

                    <div className="mb-3 flex items-center justify-between gap-4">
                      <span className="text-sm font-medium text-gray-800">
                        {skill.name}
                      </span>

                      <span className="text-xs text-gray-500">
                        {skill.level}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 overflow-hidden rounded-full bg-black/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.value}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay:
                            categoryIndex * 0.15 +
                            skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-black"
                      />
                    </div>

                  </div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-3xl border border-black/10 bg-white/60 p-8 shadow-sm backdrop-blur-md transition duration-500 hover:border-black/20 hover:bg-white/75 md:p-10"
        >

          <p className="text-sm uppercase tracking-[0.2em] text-gray-600">
            Skills & Technologies
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            {technologies.map((technology, index) => (
              <motion.span
                key={technology}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-gray-700 transition duration-300 hover:border-black/20 hover:bg-white hover:text-black"
              >
                {technology}
              </motion.span>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}