import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Stats } from "@/components/portfolio/Stats";
import { VideoSection } from "@/components/portfolio/VideoSection";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certificates } from "@/components/portfolio/Certificates";
import { Experience } from "@/components/portfolio/Experience";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imran khalid — Mobile App Developer (Android · Flutter · Kotlin)" },
      { name: "description", content: "Portfolio of Imran khalid — Mobile App Developer building fast, scalable, and user-friendly Android & Flutter applications." },
      { property: "og:title", content: "Imran khalid — Mobile App Developer" },
      { property: "og:description", content: "Android · Flutter · Kotlin. 500k+ downloads, 24 shipped apps, 6+ years of mobile craft." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Imran khalid",
          jobTitle: "Mobile App Developer",
          knowsAbout: ["Android", "Flutter", "Kotlin", "Dart", "Firebase"],
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <VideoSection />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
