"use client";

import { useState } from "react";

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
    <nav className="fixed left-0 top-0 z-[9999] w-full border-b border-white/10 bg-black/95 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* LOGO */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-2xl font-black tracking-wider text-white"
        >
          K<span className="text-gray-500">.</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Let's Talk
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => {
            console.log("MENU CLICKED");
            setIsOpen(!isOpen);
          }}
          className="relative z-[10000] flex h-12 w-12 touch-manipulation items-center justify-center rounded-full border border-white/30 bg-black md:hidden"
          aria-label="Mobile menu"
        >
          <div className="flex flex-col gap-1.5">

            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />

          </div>
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="relative z-[9998] block border-t border-white/10 bg-black">

          <div className="flex flex-col px-6 py-4">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex min-h-[60px] items-center justify-between border-b border-white/10 text-lg text-white"
              >
                <span>{link.name}</span>
                <span className="text-gray-500">→</span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 rounded-full bg-white px-6 py-4 text-center font-semibold text-black"
            >
              Let's Talk →
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}