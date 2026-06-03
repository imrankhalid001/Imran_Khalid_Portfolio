import { Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { testimonials } from "./data";

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-surface/40 border-y border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader eyebrow="Testimonials" title="Kind words from teams I've worked with" />
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-background p-6 flex flex-col gap-4"
            >
              <Quote className="size-6 text-brand" />
              <blockquote className="text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}