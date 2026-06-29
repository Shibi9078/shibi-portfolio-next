"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col pt-40 pb-20 px-8 min-h-[90vh]">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-[15vw] leading-[0.8] tracking-tighter uppercase mb-32 flex w-full justify-center"
        >
          <span className="text-white">CONT</span>
          <span className="text-outline">ACT</span>
        </motion.h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col w-full"
          >
            <h2 className="text-3xl md:text-4xl text-white uppercase font-display tracking-tight mb-8">Got an idea?<br/>Let&apos;s build it.</h2>
            
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-text-secondary">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-card-dark border border-border/50 rounded-2xl px-6 py-4 text-white placeholder:text-text-secondary focus:outline-none focus:border-white transition-colors"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-text-secondary">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-card-dark border border-border/50 rounded-2xl px-6 py-4 text-white placeholder:text-text-secondary focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-text-secondary">Message</label>
                <textarea 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-card-dark border border-border/50 rounded-2xl px-6 py-4 text-white placeholder:text-text-secondary focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="self-start mt-4 px-10 py-4 bg-white text-black text-[11px] tracking-[0.2em] font-medium rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {status.message && (
                <div className={`mt-2 text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-text-secondary">Email</span>
              <a href="mailto:shibishibi9078@gmail.com" className="text-xl md:text-2xl text-white hover:text-gray-300 transition-colors">shibishibi9078@gmail.com</a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-text-secondary">Socials</span>
              <div className="flex flex-col gap-2 items-start">
                <a href="https://linkedin.com" className="text-xl md:text-2xl text-white hover:text-gray-300 transition-colors">LinkedIn ↗</a>
                <a href="https://github.com" className="text-xl md:text-2xl text-white hover:text-gray-300 transition-colors">GitHub ↗</a>
                <a href="https://twitter.com" className="text-xl md:text-2xl text-white hover:text-gray-300 transition-colors">Twitter ↗</a>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-text-secondary">Location</span>
              <span className="text-xl md:text-2xl text-white">Chamba, India<br/>(VIT Vellore)</span>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <span className="w-3 h-3 rounded-full bg-white animate-pulse" />
              <span className="text-xs tracking-widest text-text-secondary uppercase">Available for freelance</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
