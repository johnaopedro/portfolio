"use client";

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../ui/Button';

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const links = [
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="text-2xl font-bold tracking-tighter text-spider-red">
        JP<span className="text-spider-blue">.</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 font-medium">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-foreground/80 hover:text-spider-red transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>
      {/* Mobile Menu Toggle would go here if implemented */}
      <div className="md:hidden">
        {/* Placeholder for mobile menu */}
        <span className="text-spider-red font-bold">Menu</span>
      </div>
    </motion.header>
  );
}
