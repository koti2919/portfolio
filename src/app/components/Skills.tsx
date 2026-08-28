"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    description:
      "Languages I use to build applications and solve programming problems.",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
    ],
  },

  {
    title: "Database & AI",
    description:
      "Technologies I use for data management and intelligent applications.",
    skills: [
      { name: "SQL", level: 70 },
      { name: "Artificial Intelligence", level: 70 },
    ],
  },

  {
    title: "Web Technologies",
    description:
      "Modern web technologies I use to create responsive and interactive websites.",
    skills: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 70 },
      { name: "Next.js", level: 65 },
      { name: "TypeScript", level: 60 },
    ],
  },
];

const technologies = [
  "Python",
  "Java",
  "SQL",
  "Artificial Intelligence",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-white/10 bg-white/[0.02]"
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
            02 — Skills
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl md:text-8xl">
            Technologies
            <br />
            <span className="text-gray-500">
              I work with.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            A growing set of programming languages, web technologies,
            database tools and AI technologies that I use to build
            modern applications.
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
              className="group rounded-3xl border border-white/10 bg-black p-8 transition-colors duration-300 hover:border-white/30 md:p-10"
            >

              {/* Category Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  0{categoryIndex + 1}
                </span>

                <span className="text-gray-600 transition-colors group-hover:text-white">
                  ↗
                </span>
              </div>

              {/* Category Title */}
              <h3 className="mt-8 text-2xl font-bold">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {category.description}
              </p>

              {/* Skills */}
              <div className="mt-8 space-y-7">

                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>

                    {/* Skill Name + Percentage */}
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>

                      <span className="text-xs text-gray-600">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay:
                            categoryIndex * 0.15 +
                            skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-white"
                      />

                    </div>

                  </div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-3xl border border-white/10 bg-black p-8 md:p-10"
        >

          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Technologies
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
                  delay: index * 0.04,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400 transition-colors duration-300 hover:border-white/30 hover:text-white"
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