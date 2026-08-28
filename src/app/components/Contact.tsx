"use client";

import { motion } from "framer-motion";

const contactItems = [
  {
    label: "Email",
    value: "kotireddy5847@gmail.com",
    href: "mailto:kotireddy5847@gmail.com",
    action: "Send me an email",
  },
  {
    label: "LinkedIn",
    value: "Annem Kotireddy",
    href: "https://www.linkedin.com/in/annem-kotireddy-4860a2376",
    action: "Connect with me",
  },
  {
    label: "GitHub",
    value: "github.com/koti2919",
    href: "https://github.com/koti2919",
    action: "Explore my code",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
            08 — Contact
          </p>

          <h2 className="mt-5 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl">
            Let's build
            <br />
            <span className="text-gray-500">
              something great.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Have an opportunity, project or idea?
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-white/30"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm uppercase tracking-[0.2em] text-gray-500">
                  {item.label}
                </span>

                <span className="text-2xl text-gray-600 transition group-hover:text-white">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 break-words text-xl font-bold">
                {item.value}
              </h3>

              <p className="mt-4 text-sm text-gray-500 transition group-hover:text-gray-300">
                {item.action} →
              </p>
            </motion.a>
          ))}
        </div>

        {/* AVAILABILITY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Availability
              </p>

              <h3 className="mt-4 text-2xl font-bold md:text-3xl">
                Open to opportunities
              </h3>

              <p className="mt-3 max-w-xl text-gray-400">
                Software development, AI projects and internship
                opportunities.
              </p>
            </div>

            <a
              href="mailto:kotireddy5847@gmail.com"
              className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-gray-200"
            >
              Get In Touch →
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}