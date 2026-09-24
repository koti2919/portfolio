"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-transparent text-black">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#home"
              className="text-2xl font-black tracking-wider text-black transition duration-300 hover:text-gray-500"
            >
              K<span className="text-gray-500">.</span>
            </a>

            <p className="mt-3 text-sm text-gray-600">
              © 2026 Annem Kotireddy. All rights reserved.
            </p>

            <p className="mt-2 text-xs text-gray-500">
              Software Developer • Python • AI • Web Development
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="flex flex-wrap items-center gap-6 text-sm"
          >

            {/* GitHub */}
            <a
              href="https://github.com/koti2919"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition duration-300 hover:text-black"
            >
              GitHub ↗
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/annem-kotireddy-4860a2376"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition duration-300 hover:text-black"
            >
              LinkedIn ↗
            </a>

            {/* Email */}
            <a
              href="mailto:kotireddy5847@gmail.com"
              className="text-gray-600 transition duration-300 hover:text-black"
            >
              Email ↗
            </a>

            {/* Back To Top */}
            <a
              href="#home"
              className="rounded-full border border-black/10 bg-white/60 px-5 py-2.5 text-gray-700 backdrop-blur-md transition duration-300 hover:border-black/20 hover:bg-white hover:text-black"
            >
              Back to top ↑
            </a>

          </motion.div>

        </div>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 border-t border-black/10 pt-6"
        >
          <p className="text-center text-xs text-gray-500">
            Built with Next.js & TypeScript
          </p>
        </motion.div>

      </div>
    </footer>
  );
}