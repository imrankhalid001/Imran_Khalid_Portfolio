import { ArrowRight, Github, Linkedin, Mail, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/avatar.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 -left-32 size-[420px] rounded-full bg-brand/30 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -right-32 size-[420px] rounded-full bg-[oklch(0.7_0.15_200)]/25 blur-3xl animate-blob" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-border/80 bg-surface/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to freelance & full-time roles
          </span>

          <h1 className="font-display font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Hi, I'm Imran <br />
            <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Mobile App Developer
              </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
            Android · Flutter · Kotlin. I build fast, scalable and user-friendly
            mobile applications loved by half a million users worldwide.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" className="rounded-full glow-brand bg-brand text-brand-foreground hover:bg-brand/90">
              <a href="#projects">
                View Projects <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex items-center gap-1 pt-4 text-muted-foreground">
            {[
              { href: "https://github.com/imrankhalid001", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/imrankhalid001", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:imrankhalid696@gmail.com", icon: Mail, label: "Email" },
              { href: "https://wa.me/923036785454", icon: Smartphone, label: "Phone" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="size-10 rounded-full grid place-items-center hover:bg-secondary hover:text-foreground transition-colors"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto">
          <div className="absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-br from-brand/40 to-[oklch(0.7_0.15_200)]/30 blur-2xl" />
          <div className="relative rounded-[2rem] p-1 bg-gradient-to-br from-brand/60 to-transparent">
            <img
              src={avatar}
              alt="Imran khalid, Mobile App Developer"
              width={420}
              height={420}
              className="size-[260px] sm:size-[340px] lg:size-[380px] rounded-[1.85rem] object-cover bg-surface animate-float"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}