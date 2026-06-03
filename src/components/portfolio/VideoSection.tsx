import { Play, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";

export function VideoSection() {
  return (
    <section id="video" className="py-24 sm:py-32 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Video Introduction"
          title="About Me (Video Introduction)"
          description="Watch this short video to learn more about my experience, skills, and journey as a mobile app developer."
        />

        <div className="relative rounded-2xl overflow-hidden border border-border bg-surface shadow-2xl">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YLeg1NLWDH0?rel=0"
              title="About Me — Video Introduction"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Youtube className="size-4" />
              Watch on YouTube
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="rounded-full">
            <a
              href="https://www.loom.com/share/8f46da6364ff4265b5c0987c638a63c2"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Play className="size-4" /> Watch on Loom
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}