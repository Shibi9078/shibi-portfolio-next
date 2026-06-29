"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-black py-32 px-8 flex flex-col items-center justify-center relative overflow-hidden border-t border-border/30 mt-32">
      <div className="flex flex-col items-center text-center z-10 mb-20">
        <h2 className="font-display text-[15vw] leading-[0.8] flex flex-col items-center uppercase tracking-tighter">
          <span className="text-white block">LET&apos;S WORK</span>
          <span className="text-outline block">TOGETHER</span>
        </h2>
      </div>
      
      <Link 
        href="/contact"
        className="z-10 text-sm tracking-[0.15em] font-medium px-10 py-4 border border-border rounded-full hover:bg-white hover:text-black transition-all duration-300 mb-32"
      >
        GET IN TOUCH
      </Link>
      
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center text-[11px] tracking-widest text-text-secondary border-t border-border pt-8 z-10">
        <div>© {new Date().getFullYear()} SHIBI S. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8 mt-4 md:mt-0">
          <Link href="https://linkedin.com" className="hover:text-white transition-colors">LINKEDIN</Link>
          <Link href="https://github.com" className="hover:text-white transition-colors">GITHUB</Link>
          <Link href="mailto:shibishibi9078@gmail.com" className="hover:text-white transition-colors">EMAIL</Link>
        </div>
      </div>
    </footer>
  );
}
