import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "./SectionHeader";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:hello@aarav.dev?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email app…");
      setSubmitting(false);
    }, 400);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something great"
          description="Open to freelance projects and full-time roles. Drop a line — I usually reply within a day."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-surface/60 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="size-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm">Available for new projects</span>
              </div>
              <a href="mailto:hello@aarav.dev" className="flex items-center gap-3 text-sm hover:text-brand transition-colors">
                <Mail className="size-4 text-muted-foreground" /> hello@aarav.dev
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="size-4" /> Bengaluru, India · Remote
              </div>
            </div>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-border bg-surface/60 p-5 hover:border-brand/60 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-emerald-500/15 text-emerald-500 grid place-items-center">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Click to chat instantly</div>
                </div>
              </div>
              <Send className="size-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex gap-2">
              {[
                { href: "https://github.com", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:hello@aarav.dev", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="size-11 rounded-xl border border-border bg-surface/60 grid place-items-center hover:border-brand/60 hover:text-brand transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-surface/60 backdrop-blur p-6 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" maxLength={100} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" maxLength={255} />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project…" rows={6} maxLength={1000} />
            </div>
            <Button type="submit" disabled={submitting} className="rounded-full bg-brand text-brand-foreground hover:bg-brand/90 w-full sm:w-auto">
              {submitting ? "Sending…" : "Send message"} <Send className="size-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}