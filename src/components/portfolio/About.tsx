import { Code2, Layers, Smartphone, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const tech = [
  "Kotlin", "Java", "Flutter", "Dart", "Jetpack Compose",
  "Firebase", "REST APIs", "Room", "Realtime Communication", "SQLite", "MVVM", "Clean Architecture", "CI/CD",
];

const pillars = [
  { icon: Smartphone, title: "Native Android", text: "Production apps in Kotlin & Java with Compose and Material 3." },
  { icon: Layers, title: "Cross-platform", text: "Flutter apps that ship to iOS, Android & web from a single codebase." },
  { icon: Code2, title: "Architecture", text: "MVVM, Clean Architecture, modularization and scalable patterns." },
  { icon: Sparkles, title: "UX & Performance", text: "Smooth 60fps experiences, deep performance & memory tuning." },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="About"
          title="Mobile-first engineer with a designer's eye"
          description="6+ years of building polished mobile products end-to-end — from architecture and APIs to delightful UI and Play Store launches."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a mobile engineer with 6+ years of experience building high-performance Android and cross-platform 
              applications that feel instantaneous and look beautiful. I focus on clean architecture, scalable codebases,
              and strong collaboration between design and engineering teams.
            </p>
            <p>
             I have led and contributed to multiple production apps across different domains, with one of my applications
              surpassing 100K+ downloads and significantly improving production stability by reducing crash rates to under 1%. 
              My work spans enterprise-level Android systems including device owner solutions with advanced device management 
              features such as remote lock and data control.
            </p>

            <p>
             I also have experience building smart home applications with real-time communication systems, along with integrating
              payment gateways like Stripe, HyperPay, Tabby, and Tamara for GCC-based platforms. My apps are used globally with 
              strong multilingual support and localization strategies.
            </p>


            <div className="flex flex-wrap gap-2 pt-4">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full border border-border bg-surface text-xs text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-surface/60 backdrop-blur p-5 hover:border-brand/50 transition-colors"
              >
                <div className="size-10 rounded-xl bg-brand/10 text-brand grid place-items-center mb-3">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}