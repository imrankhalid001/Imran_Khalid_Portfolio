import { SectionHeader } from "./SectionHeader";
import { skills } from "./data";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="Tools I use every day"
          description="Years of focused craft across the mobile stack."
        />
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium">{s.name}</span>
                <span className="text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand to-[oklch(0.75_0.15_200)] transition-[width] duration-1000"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}