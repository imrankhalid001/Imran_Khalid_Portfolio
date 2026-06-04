import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Search, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeader } from "./SectionHeader";
import { projects, type Category } from "./data";

const filters: ("All" | Category)[] = ["All", "Android", "Flutter", "Open Source", "UI/UX"];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [q, setQ] = useState("");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const visible = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = filter === "All" || p.category.includes(filter);
      const haystack = (p.title + p.description + p.stack.join(" ")).toLowerCase();
      const matchesQ = !q.trim() || haystack.includes(q.toLowerCase());
      return matchesFilter && matchesQ;
    });
  }, [filter, q]);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanPrev(scrollLeft > 8);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 8);
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    const center = scrollLeft + clientWidth / 2;
    let bestIdx = 0;
    let bestDist = Infinity;
    cards.forEach((c, i) => {
      const mid = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(mid - center);
      if (d < bestDist) { bestDist = d; bestIdx = i; }
    });
    setActiveIdx(bestIdx);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [visible.length]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const scrollToIdx = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    const target = cards[i];
    if (!target) return;
    el.scrollTo({ left: target.offsetLeft - 24, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
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
                onClick={() => { setFilter(f); scrollerRef.current?.scrollTo({ left: 0, behavior: "smooth" }); }}
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

        <div className="relative">
          {/* Edge fades */}
          <div className={`pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent transition-opacity ${canPrev ? "opacity-100" : "opacity-0"}`} />
          <div className={`pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent transition-opacity ${canNext ? "opacity-100" : "opacity-0"}`} />

          {/* Arrows */}
          <button
            aria-label="Previous project"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 size-11 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur shadow-lg hover:border-brand/60 hover:text-brand transition-all disabled:opacity-0"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            aria-label="Next project"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 size-11 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur shadow-lg hover:border-brand/60 hover:text-brand transition-all disabled:opacity-0"
          >
            <ChevronRight className="size-5" />
          </button>

          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-5 sm:-mx-8 px-5 sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
          {visible.map((p, i) => (
            <article
              key={p.title}
              data-card
              className={`group snap-center shrink-0 w-[85%] sm:w-[60%] md:w-[46%] lg:w-[38%] rounded-3xl border border-border bg-surface/60 backdrop-blur overflow-hidden hover:border-brand/60 transition-all hover:-translate-y-1 ${i === activeIdx ? "ring-1 ring-brand/40 shadow-xl shadow-brand/10" : ""}`}
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
                <p className="text-sm text-muted-foreground line-clamp-4">{p.description}</p>

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
        </div>

        {/* Dot indicators + progress */}
        {visible.length > 1 && (
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              {visible.map((p, i) => (
                <button
                  key={p.title}
                  aria-label={`Go to project ${i + 1}`}
                  onClick={() => scrollToIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${i === activeIdx ? "w-8 bg-brand" : "w-1.5 bg-border hover:bg-foreground/40"}`}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="hidden md:inline">Drag, scroll, or use arrows</span>
              <span className="md:hidden">Swipe</span> · {activeIdx + 1} / {visible.length}
            </p>
          </div>
        )}

        {visible.length === 0 && (
          <p className="text-center text-muted-foreground py-10">No projects match your search.</p>
        )}
      </div>
    </section>
  );
}