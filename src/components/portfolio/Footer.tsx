import { Github, Linkedin, Mail, Smartphone } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-bold text-lg">
            <span className="text-gradient-brand">aarav</span>
            <span>.dev</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            Building fast, scalable and user-friendly mobile applications.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Quick links</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Connect</div>
          <div className="flex gap-2">
            {[
              { href: "https://github.com", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:hello@aarav.dev", icon: Mail, label: "Email" },
              { href: "https://play.google.com", icon: Smartphone, label: "Play Store" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} aria-label={label} className="size-10 rounded-xl border border-border grid place-items-center hover:border-brand/60 hover:text-brand transition-colors">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Aarav Sharma. All rights reserved.</span>
          <span>Crafted with care, Kotlin & Flutter.</span>
        </div>
      </div>
    </footer>
  );
}