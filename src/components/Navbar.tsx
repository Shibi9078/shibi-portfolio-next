"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "WORK", href: "/work" },
  { name: "SERVICES", href: "/services" },
  { name: "SKILLS", href: "/skills" },
  { name: "ABOUT", href: "/about" },
];

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference"
    >
      <div className="text-sm tracking-widest font-medium">
        <Link href="/">SHIBI<span className="text-text-secondary">.DEV</span></Link>
      </div>
      
      <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.2em] font-medium text-text-secondary">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            className="hover:text-white transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
      
      <div>
        <Link 
          href="/contact"
          className="text-[11px] tracking-[0.15em] font-medium px-6 py-3 border border-border rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          HIRE ME
        </Link>
      </div>
    </motion.nav>
  );
}
