import { useEffect, useRef, useState } from "react";
import { stats } from "./data";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setSeen(true),
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [seen]);
  return { ref, seen };
}

function Counter({ value }: { value: number }) {
  const { ref, seen } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const isFloat = !Number.isInteger(value);
    const start = performance.now();
    const dur = 1500;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(isFloat ? +(value * eased).toFixed(1) : Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value]);
  const formatted = n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k+` : n.toString();
  return <span ref={ref}>{formatted}</span>;
}

export function Stats() {
  return (
    <section className="py-16 border-y border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient-brand">
              <Counter value={s.value} />
            </div>
            <div className="mt-1 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}