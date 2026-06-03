import { useMemo, useState } from "react";
import { ExternalLink, Github, Search, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeader } from "./SectionHeader";
import { projects, type Category } from "./data";

const filters: ("All" | Category)[] = ["All", "Android", "Flutter", "Open Source", "UI/UX"];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [q, setQ] = useState("");

  const visible = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = filter === "All" || p.category.includes(filter);
      const haystack = (p.title + p.description + p.stack.join(" ")).toLowerCase();
      const matchesQ = !q.trim() || haystack.includes(q.toLowerCase());
      return matchesFilter && matchesQ;
    });
  }, [filter, q]);

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          description="A few apps I've designed, built and shipped to real users."
        />

        <div className="flex flex-col md:flex-row gap-3 mb-8 items-stretch md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3.5 py-1.5 text-sm rounded-full border transition-all ${
                  filter === f
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects…"
              className="pl-9 rounded-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((p) => (
            <article
              key={p.title}
              className="group rounded-3xl border border-border bg-surface/60 backdrop-blur overflow-hidden hover:border-brand/60 transition-all hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <div className="flex gap-1 flex-wrap justify-end">
                    {p.category.map((c) => (
                      <span key={c} className="text-[10px] uppercase tracking-wider text-brand bg-brand/10 px-2 py-0.5 rounded-full">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{p.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="text-xs text-muted-foreground grid grid-cols-2 gap-x-3 gap-y-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5">
                      <span className="size-1 rounded-full bg-brand" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {p.playStore && (
                    <Button asChild size="sm" className="rounded-full">
                      <a href={p.playStore} target="_blank" rel="noreferrer">
                        <Smartphone className="size-4" /> Play Store
                      </a>
                    </Button>
                  )}
                  {p.github && (
                    <Button asChild size="sm" variant="outline" className="rounded-full">
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github className="size-4" /> Code
                      </a>
                    </Button>
                  )}
                  {p.demo && (
                    <Button asChild size="sm" variant="ghost" className="rounded-full">
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="size-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-muted-foreground py-10">No projects match your search.</p>
        )}
      </div>
    </section>
  );
}