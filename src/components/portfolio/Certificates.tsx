import { Award, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { certificates } from "./data";

export function Certificates() {
  return (
    <section id="certificates" className="py-24 sm:py-32 bg-surface/40 border-y border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Certificates"
          title="Continuous learning"
          description="Specializations and certifications that keep my craft sharp."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-border bg-background p-5 hover:border-brand/60 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="size-10 rounded-xl bg-brand/10 text-brand grid place-items-center">
                  <Award className="size-5" />
                </div>
                <ExternalLink className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-semibold leading-tight">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {c.org} · {c.date}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}