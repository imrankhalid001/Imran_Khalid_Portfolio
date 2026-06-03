import { SectionHeader } from "./SectionHeader";
import { experience } from "./data";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've shipped"
        />
        <ol className="relative border-l border-border ml-3 space-y-10">
          {experience.map((e) => (
            <li key={e.role + e.company} className="pl-8 relative">
              <span className="absolute -left-[7px] top-2 size-3 rounded-full bg-brand ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-lg">
                  {e.role}{" "}
                  <span className="text-muted-foreground font-normal">· {e.company}</span>
                </h3>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {e.period}
                </span>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-brand mt-1.5">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}