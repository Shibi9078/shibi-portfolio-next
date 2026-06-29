import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Philosophy } from "@/components/home/Philosophy";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { Stats } from "@/components/home/Stats";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <AboutPreview />
      <Philosophy />
      <ProcessTimeline />
      <Stats />
    </div>
  );
}
