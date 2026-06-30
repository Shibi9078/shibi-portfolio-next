"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [phase, setPhase] = useState<"welcome" | "loading">("welcome");
  const [progress, setProgress] = useState(0);
  const [flash, setFlash] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);
  const stopAnimationRef = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", handleResize);

    const cx = w / 2;
    const cy = h / 2;
    const hubRadius = Math.min(w, h) * 0.25; // Blank center

    const DIRS = [
      [1, 0], [-1, 0], [0, 1], [0, -1],
      [0.707, 0.707], [-0.707, -0.707], [0.707, -0.707], [-0.707, 0.707]
    ];

    class Trace {
      pts: {x: number, y: number}[] = [];
      progress: number = 0;
      speed: number = 0.002 + Math.random() * 0.003;

      constructor() {
        this.generate();
      }

      generate() {
        this.pts = [];
        let x = Math.random() * w;
        let y = Math.random() * h;
        
        // Ensure start is outside hub
        while (Math.hypot(x - cx, y - cy) < hubRadius) {
          x = Math.random() * w;
          y = Math.random() * h;
        }
        this.pts.push({ x, y });
        
        let curDir = DIRS[Math.floor(Math.random() * DIRS.length)];
        const numSegments = 3 + Math.floor(Math.random() * 5);
        
        for (let i = 0; i < numSegments; i++) {
          const segLen = 50 + Math.random() * 150;
          const nx = x + curDir[0] * segLen;
          const ny = y + curDir[1] * segLen;
          
          // Stop if hitting the hub
          if (Math.hypot(nx - cx, ny - cy) < hubRadius + 20) {
            break;
          }
          this.pts.push({ x: nx, y: ny });
          x = nx;
          y = ny;
          curDir = DIRS[Math.floor(Math.random() * DIRS.length)];
        }
        this.progress = Math.random(); 
      }

      update() {
        this.progress += this.speed;
        if (this.progress >= 1) {
          this.progress = 0;
        }
      }

      draw(isFlashing: boolean) {
        if (this.pts.length < 2) return;
        
        ctx!.beginPath();
        ctx!.moveTo(this.pts[0].x, this.pts[0].y);
        for (let i = 1; i < this.pts.length; i++) {
          ctx!.lineTo(this.pts[i].x, this.pts[i].y);
        }
        
        ctx!.strokeStyle = isFlashing ? "#ffffff" : "rgba(0, 200, 255, 0.2)";
        ctx!.lineWidth = isFlashing ? 3 : 1;
        ctx!.shadowBlur = isFlashing ? 30 : 5;
        ctx!.shadowColor = isFlashing ? "#ffffff" : "#00ffff";
        ctx!.stroke();

        // Draw traveling dot
        const totalLen = this.pts.length - 1;
        const currentSeg = Math.floor(this.progress * totalLen);
        const segProgress = (this.progress * totalLen) - currentSeg;
        
        if (currentSeg < totalLen) {
          const p1 = this.pts[currentSeg];
          const p2 = this.pts[currentSeg + 1];
          const dx = p1.x + (p2.x - p1.x) * segProgress;
          const dy = p1.y + (p2.y - p1.y) * segProgress;

          ctx!.beginPath();
          ctx!.arc(dx, dy, isFlashing ? 5 : 2, 0, Math.PI * 2);
          ctx!.fillStyle = isFlashing ? "#ffffff" : "#00ffff";
          ctx!.fill();
        }
      }
    }

    const traces: Trace[] = Array.from({ length: 60 }, () => new Trace());
    let animationId: number;

    const render = () => {
      if (stopAnimationRef.current) {
        ctx.clearRect(0, 0, w, h);
        return;
      }
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      // Read flash state from dataset to avoid stale closures
      const isFlashing = document.body.dataset.flash === "true";

      traces.forEach(t => {
        t.update();
        t.draw(isFlashing);
      });

      animationId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Sync flash state to DOM for canvas to read
  useEffect(() => {
    document.body.dataset.flash = flash.toString();
  }, [flash]);

  // Phase Sequence
  useEffect(() => {
    // Phase 1: Welcome (Wait 2s total: 0.5s fade in, 1.5s hold)
    const welcomeTimer = setTimeout(() => {
      setPhase("loading");
    }, 2000);

    return () => clearTimeout(welcomeTimer);
  }, []);

  // Loading Counter Sequence
  useEffect(() => {
    if (phase === "loading") {
      let current = 0;
      let interval: NodeJS.Timeout;
      
      // Delay the counting by 400ms so it fades in fully at 0% before starting
      const startTimer = setTimeout(() => {
        interval = setInterval(() => {
          current += Math.floor(Math.random() * 3) + 1; // 1 to 3
          if (current >= 100) {
            current = 100;
            setProgress(100);
            clearInterval(interval);
            
            // Trigger Flash Completion Effect
            setTimeout(() => {
              setFlash(true);
              // Trigger Fade Out & Unmount
              setTimeout(() => {
                stopAnimationRef.current = true;
                setIsUnmounted(true);
              }, 600); // 0.6s to allow flash & opacity transition to finish
            }, 300);
          } else {
            setProgress(current);
          }
        }, 30);
      }, 400);
      
      return () => {
        clearTimeout(startTimer);
        if (interval) clearInterval(interval);
      };
    }
  }, [phase]);

  if (isUnmounted) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: flash ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div className="relative z-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {phase === "welcome" && (
            <motion.h1
              key="welcome"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="font-display text-white text-4xl md:text-6xl lg:text-7xl tracking-[0.3em] uppercase drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]"
            >
              WELCOME
            </motion.h1>
          )}

          {phase === "loading" && (
            <motion.div
              key="counter"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="font-sans font-black text-white text-8xl md:text-[10rem] tracking-tighter drop-shadow-[0_0_30px_rgba(0,255,255,0.4)]"
            >
              {progress}%
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
