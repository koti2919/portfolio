"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Resume", href: "#resume" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* LOGO */}
        <motion.a
          href="#home"
          onClick={() => setIsOpen(false)}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-black tracking-wider"
        >
          K<span className="text-gray-500">.</span>
        </motion.a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* LET'S TALK */}
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition duration-300 hover:bg-white hover:text-black"
          >
            Let's Talk
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-white/30 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <div className="space-y-1.5">

            {/* TOP */}
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            {/* MIDDLE */}
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            {/* BOTTOM */}
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />

          </div>
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="overflow-hidden border-t border-white/10 bg-black md:hidden"
          >
            <div className="flex flex-col px-6 py-6">

              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="border-b border-white/10 py-5 text-lg text-gray-300 transition-colors hover:text-white"
                >
                  <span className="flex items-center justify-between">
                    {link.name}

                    <span className="text-gray-600">
                      →
                    </span>
                  </span>
                </motion.a>
              ))}

              {/* MOBILE LET'S TALK */}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                }}
                className="mt-6 rounded-full bg-white px-6 py-3 text-center font-semibold text-black transition hover:bg-gray-200"
              >
                Let's Talk →
              </motion.a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}