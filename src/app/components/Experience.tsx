"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023 – 2027",
    type: "EDUCATION",
    title: "B.Tech — Computer Science Engineering",
    organization: "QIS Engineering College",
    description:
      "Currently pursuing a B.Tech in Computer Science Engineering, building a strong foundation in programming, databases, web technologies and artificial intelligence.",
    details: [
      "Computer Science Engineering",
      "CGPA: 7.71 / 10",
    ],
  },
  {
    year: "2026",
    type: "LEARNING",
    title: "Python & Software Development",
    organization: "Self Learning",
    description:
      "Developing practical programming skills through structured learning, coding practice and hands-on projects.",
    details: [
      "Python",
      "Java",
      "MySQL",
      "JavaScript",
    ],
  },
  {
    year: "2026",
    type: "AI PROJECT",
    title: "AI Interview Preparation Platform",
    organization: "Personal Project",
    description:
      "Developing an AI-based interview preparation platform designed to simulate interview practice and provide intelligent feedback to candidates.",
    details: [
      "Artificial Intelligence",
      "AI Interview System",
      "Web Application",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
            04 — Journey
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight text-black sm:text-6xl md:text-8xl">
            My
            <br />
            <span className="text-gray-500">
              journey.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-700">
            My education, learning journey and practical experience
            as I develop my skills in software development and
            artificial intelligence.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="absolute left-3 top-0 h-full w-px bg-black/10 md:left-1/2" />

          <div className="space-y-16">

            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
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
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="relative grid md:grid-cols-2"
              >

                {/* TIMELINE DOT */}
                <div className="absolute left-0 top-2 flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white/80 backdrop-blur-md md:left-1/2 md:-translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-black" />
                </div>

                {/* CONTENT */}
                <div
                  className={`pl-12 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-16"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >

                  {/* CONTENT CARD */}
                  <div className="rounded-[2rem] border border-black/10 bg-white/60 p-7 shadow-sm backdrop-blur-md transition duration-500 hover:border-black/20 hover:bg-white/75 sm:p-9">

                    {/* YEAR */}
                    <p className="text-sm font-semibold tracking-[0.2em] text-gray-600">
                      {item.year}
                    </p>

                    {/* TYPE */}
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gray-500">
                      {item.type}
                    </p>

                    {/* TITLE */}
                    <h3 className="mt-4 text-2xl font-bold text-black md:text-3xl">
                      {item.title}
                    </h3>

                    {/* ORGANIZATION */}
                    <p className="mt-2 font-medium text-gray-600">
                      {item.organization}
                    </p>

                    {/* DESCRIPTION */}
                    <p className="mt-5 leading-7 text-gray-700">
                      {item.description}
                    </p>

                    {/* DETAILS */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs text-gray-700 transition duration-300 hover:border-black/20 hover:bg-white hover:text-black"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}