import { jsx, jsxs } from "react/jsx-runtime";
import { Toaster as Toaster$1, toast } from "sonner";
import * as React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { Sun, Moon, Download, X, Menu, ArrowRight, Github, Linkedin, Mail, Smartphone, Youtube, Play, Layers, Code2, Sparkles, Search, ChevronLeft, ChevronRight, ExternalLink, Award, Quote, MapPin, MessageCircle, Send } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import * as LabelPrimitive from "@radix-ui/react-label";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function useTheme() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("theme");
    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { theme, toggle: () => setTheme((t) => t === "dark" ? "light" : "dark") };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const links$1 = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/60" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("a", { href: "#home", className: "font-bold tracking-tight text-lg", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent", children: "Imran" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: ".dev" })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "hidden md:flex items-center gap-7 text-sm text-muted-foreground", children: links$1.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: l.href, className: "hover:text-foreground transition-colors", children: l.label }) }, l.href)) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "icon",
                onClick: toggle,
                "aria-label": "Toggle theme",
                className: "rounded-full",
                children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "size-4" }) : /* @__PURE__ */ jsx(Moon, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", className: "hidden sm:inline-flex rounded-full", children: /* @__PURE__ */ jsxs("a", { href: "https://drive.google.com/file/d/14fRhYQ9O6AeGBO8TC2c_yrxqbyxqAmTh/view?usp=sharing", download: true, children: [
              /* @__PURE__ */ jsx(Download, { className: "size-4" }),
              " Resume"
            ] }) }),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "icon",
                className: "md:hidden rounded-full",
                onClick: () => setOpen((v) => !v),
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsx(X, { className: "size-5" }) : /* @__PURE__ */ jsx(Menu, { className: "size-5" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-border bg-background/95 backdrop-blur-xl", children: /* @__PURE__ */ jsx("ul", { className: "px-5 py-4 flex flex-col gap-3", children: links$1.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: l.href,
            className: "block py-2 text-sm text-foreground",
            onClick: () => setOpen(false),
            children: l.label
          }
        ) }, l.href)) }) })
      ]
    }
  );
}
const avatar = "/assets/avatar-C1Q2S_Or.png";
function Hero() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "home",
      className: "relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-32 -left-32 size-[420px] rounded-full bg-brand/30 blur-3xl animate-blob" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -right-32 size-[420px] rounded-full bg-[oklch(0.7_0.15_200)]/25 blur-3xl animate-blob" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 self-start rounded-full border border-border/80 bg-surface/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-emerald-500 animate-pulse" }),
              "Open to freelance & full-time roles"
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "font-display font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05]", children: [
              "Hi, I'm Imran ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent", children: "Mobile App Developer" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-muted-foreground max-w-xl", children: "Android · Flutter · Kotlin. I build fast, scalable and user-friendly mobile applications loved by half a million users worldwide." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 pt-2", children: [
              /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "rounded-full glow-brand bg-brand text-brand-foreground hover:bg-brand/90", children: /* @__PURE__ */ jsxs("a", { href: "#projects", children: [
                "View Projects ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })
              ] }) }),
              /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "rounded-full", children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Contact Me" }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 pt-4 text-muted-foreground", children: [
              { href: "https://github.com/imrankhalid001", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/imrankhalid001", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:imrankhalid696@gmail.com", icon: Mail, label: "Email" },
              { href: "https://wa.me/923036785454", icon: Smartphone, label: "Phone" }
            ].map(({ href, icon: Icon, label }) => /* @__PURE__ */ jsx(
              "a",
              {
                href,
                "aria-label": label,
                target: "_blank",
                rel: "noreferrer",
                className: "size-10 rounded-full grid place-items-center hover:bg-secondary hover:text-foreground transition-colors",
                children: /* @__PURE__ */ jsx(Icon, { className: "size-[18px]" })
              },
              label
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative mx-auto", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-br from-brand/40 to-[oklch(0.7_0.15_200)]/30 blur-2xl" }),
            /* @__PURE__ */ jsx("div", { className: "relative rounded-[2rem] p-1 bg-gradient-to-br from-brand/60 to-transparent", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: avatar,
                alt: "Imran khalid, Mobile App Developer",
                width: 420,
                height: 420,
                className: "size-[260px] sm:size-[340px] lg:size-[380px] rounded-[1.85rem] object-cover bg-surface animate-float",
                fetchPriority: "high"
              }
            ) })
          ] })
        ] })
      ]
    }
  );
}
const p1 = "/assets/project-1-BevV4Y8-.png";
const p2 = "/assets/project-2-CH5zZQxa.png";
const p3 = "/assets/project-3-D1cXxuDW.png";
const p4 = "/assets/project-4-CrewXEXd.jpg";
const projects = [
  {
    title: "QR Code Scanner & Generator",
    description: "Built an all-in-one QR Code Scanner & Generator app that enables fast scanning, creation, and customization of QR codes with support for colors, logos, styles, and multiple formats. Implemented offline local storage for saving and managing generated QR codes with instant sharing capabilities. Designed for both personal and business use with a clean UI and high-performance real-time scanning experience.",
    image: p1,
    stack: ["Kotlin", "Jetpack Compose", "Room", "Firebase"],
    features: ["Offline sync", "Custom charts", "Apple Health import", "Dark mode"],
    category: ["Android"],
    playStore: "https://play.google.com/store/apps/details?id=com.imidroid.barcodescanner"
  },
  {
    title: "Kinetic Fitness App",
    description: "Kinetic Fitness App (Flutter): Coaching, Workouts, Nutrition, Progress Tracking Designed and delivered a full-scale fitness and wellness mobile app built with Flutter, combining personal coaching, structured workouts, nutrition planning, body tracking, and visual progress tools into a single, high-performance platform.",
    image: p2,
    stack: ["Flutter", "Dart", "Stacked Management", "Social feed"],
    features: ["Personalized workout plans", "Assign a personal coach", "Diet tracking & recipe search", "Log, weight, goals & body fat", "Chat with coaches for guidance"],
    category: ["Flutter", "UI/UX"],
    demo: "https://www.youtube.com/shorts/jbNbnxHEzng"
  },
  {
    title: "PDF Converter: Image to PDF",
    description: "PDF Converter is a simple and efficient Android app that allows users to convert images into high-quality PDF files within seconds. Designed for quick and smooth performance, it supports multiple image selections, PDF customization, and offline conversion. Perfect for students, professionals, and everyday users who need a fast and reliable image-to-PDF solution.",
    image: p3,
    stack: ["Kotlin", "Hilt", "Coroutines", "MVVM", "Firebase", "Room Database"],
    features: ["Convert Images to PDF", "Smart Sorting Options", "Compress PDF File Size", " Work 100% Offline", "Share PDFs Instantly", "View PDFs Within the App"],
    category: ["Android"],
    playStore: "https://play.google.com/store/apps/details?id=com.imidroid.imagetopdf"
  },
  {
    title: "ExecArray",
    description: "ExecArray is a Flutter-based event management app that simplifies the purchase or rental of event essentials like chairs, tables, tents, and more. It uses multiple APIs to provide a seamless user experience, helping users efficiently manage event logistics.",
    image: p4,
    stack: ["Flutter", "Dart", "Firebase", "Lottie", "provider", "carousel_slider", "http"],
    features: ["User Authentication:", "Product Listings", "Categories", "Cart Management"],
    category: ["Flutter", "UI/UX", "Open Source"],
    github: "https://github.com/imrankhalid001/ExecArray"
  },
  {
    title: "Weat Local Market",
    description: "Weat Local is a multi-vendor marketplace that empowers sellers to list items easily with API integration, Room Database, and Firebase Analytics. Developed with MVVM architecture and Kotlin, it offers features like secure payments through Stripe, authentication, and app push notifications for a modern and efficient shopping experience.",
    image: "",
    stack: ["Kotlin", "Hilt", "Coroutines", "MVVM", "Firebase", "Room Database"],
    features: ["User Authentication:", "Multi-vendor Support", "Product Listings", "Categories", "Cart Management"],
    category: ["Android"],
    github: "https://play.google.com/store/apps/details?id=com.weat_local.weatbuyerside"
  }
];
const skills = [
  { name: "Kotlin", level: 95 },
  { name: "Java", level: 85 },
  { name: "Flutter", level: 92 },
  { name: "Dart", level: 90 },
  { name: "Firebase", level: 88 },
  { name: "REST API Integration", level: 95 },
  { name: "Mobile UI/UX", level: 87 },
  { name: "Git & GitHub", level: 93 },
  { name: "Performance Optimization", level: 88 },
  { name: "Play Store Deployment", level: 96 }
];
const certificates = [
  { title: "Flutter Essential Training: Build for Multiple Platforms", org: "LinkedIn", date: "2026", href: "https://www.linkedin.com/learning/certificates/f02896ef354d9114d54ba63db60b723e481d9008d0a308a45f7c19d27aca0f7e?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Br3IwIDqQSJydIp4QxALXUA%3D%3D" },
  { title: "Prompt Engineering: How to Talk to the AIs", org: "LinkedIn", date: "2026", href: "https://www.linkedin.com/learning/certificates/95c57e2d4a4737976ab1a698368a3b984364c0aa8217d74e9f2520e698fa2393?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Br3IwIDqQSJydIp4QxALXUA%3D%3D" },
  { title: "Rapid Idea Generation Using AI", org: "LinkedIn", date: "2026", href: "https://www.linkedin.com/learning/certificates/fcdd4d300c461e841679cce75bb688c47f006e6168341b83cdc0a24e60c9d49c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Br3IwIDqQSJydIp4QxALXUA%3D%3D" },
  { title: "Building AI-Powered Android Apps with Gemini", org: "LinkedIn", date: "2026", href: "https://www.linkedin.com/learning/certificates/2b85960682220d4aa9308554f4bbaefbd6a59c34076e12a0a1cf25327c60646d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Br3IwIDqQSJydIp4QxALXUA%3D%3D" },
  { title: "CyberSavvy: Navigating Linux & Essential Cybersecurity", org: "UrduCourses", date: "2025", href: "https://cst.urducourses.pk/tutor-certificate/?cert_hash=4c757a1fcf193670" },
  { title: "Dart Programming", org: "Udemy", date: "2023", href: "https://www.udemy.com/certificate/UC-626e45ed-6e04-4590-b257-77c7e80f844c" }
];
const experience = [
  {
    role: "Senior Mobile Engineer",
    company: "Exario Digital",
    period: "2024 — Present",
    points: [
      "Led development of scalable Android applications using Kotlin, MVVM, Clean Architecture, Room, Retrofit, and Jetpack components.",
      "Implemented offline-first architecture, reducing data-fetch latency by 30% in low-connectivity environments.",
      "Implemented enterprise Android (Device Owner) functionality for advanced device management and security.",
      "Built real-time communication, smart home, and fintech integrations serving thousands of active users."
    ]
  },
  {
    role: "Android Developer",
    company: "Astute Solutions",
    period: "2021 — 2024",
    points: [
      "Delivered multilingual Android solutions across GCC markets with integrated payment ecosystems.",
      "Reduced production crash rates by over 70% through Firebase Crashlytics monitoring, performance optimization, and proactive debugging.",
      "Contributed to applications surpassing 100K+ downloads while maintaining strong stability metrics."
    ]
  },
  {
    role: "Android Developer",
    company: "DevSaar",
    period: "2010 — 2021",
    points: [
      "Migrated legacy Java codebase to Kotlin + Coroutines and MVVM architecture",
      "Modernized legacy codebases and improved maintainability through architectural migrations.",
      "Reduced crashes and ANRs through systematic debugging and performance optimization."
    ]
  }
];
const stats = [
  { label: "Apps Published", value: 24 },
  { label: "Total Downloads", value: 58e4 },
  { label: "Years Experience", value: 6 },
  { label: "Avg. Rating", value: 4.8 }
];
const testimonials = [
  {
    quote: "The Compose migration he led made our app feel completely new. Engineering quality is top-tier.",
    name: "Adnan Qamar",
    role: "CEO, Technixhub"
  },
  {
    quote: "Communicates clearly, ships on time, and cares about the details. Hire him.",
    name: "Junaid Saeed",
    role: "Founder, Exario Digital"
  },
  {
    quote: "Imran delivered our Flutter app in record time without compromising on polish. A rare talent.",
    name: "Mohammed",
    role: "CEO, Supply on Demand"
  },
  {
    quote: "Communicates clearly, ships on time, and cares about the details. Hire him.",
    name: "Junaid Saeed",
    role: "Founder, Exario Digital"
  },
  {
    quote: "Imran delivered our Flutter app in record time without compromising on polish. A rare talent.",
    name: "Mohammed",
    role: "CEO, Supply on Demand"
  }
];
function useInView() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setSeen(true),
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [seen]);
  return { ref, seen };
}
function Counter({ value }) {
  const { ref, seen } = useInView();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const isFloat = !Number.isInteger(value);
    const start = performance.now();
    const dur = 1500;
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(isFloat ? +(value * eased).toFixed(1) : Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value]);
  const formatted = n >= 1e3 ? `${(n / 1e3).toFixed(n >= 1e4 ? 0 : 1)}k+` : n.toString();
  return /* @__PURE__ */ jsx("span", { ref, children: formatted });
}
function Stats() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 border-y border-border/60 bg-surface/40", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent", children: /* @__PURE__ */ jsx(Counter, { value: s.value }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs sm:text-sm text-muted-foreground uppercase tracking-wider", children: s.label })
  ] }, s.label)) }) });
}
function SectionHeader({
  eyebrow,
  title,
  description
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center gap-3 mb-12", children: [
    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-[0.18em] text-brand", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "font-display font-bold tracking-tight text-3xl sm:text-4xl", children: title }),
    description && /* @__PURE__ */ jsx("p", { className: "max-w-2xl text-muted-foreground", children: description })
  ] });
}
function VideoSection() {
  return /* @__PURE__ */ jsx("section", { id: "video", className: "py-24 sm:py-32 border-t border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Video Introduction",
        title: "About Me (Video Introduction)",
        description: "Watch this short video to learn more about my experience, skills, and journey as a mobile app developer."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative rounded-2xl overflow-hidden border border-border bg-surface shadow-2xl", children: /* @__PURE__ */ jsx("div", { className: "aspect-video w-full", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        className: "w-full h-full",
        src: "https://www.youtube.com/embed/YLeg1NLWDH0?rel=0",
        title: "About Me — Video Introduction",
        loading: "lazy",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col sm:flex-row items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "rounded-full", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://youtube.com",
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsx(Youtube, { className: "size-4" }),
            "Watch on YouTube"
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "ghost", className: "rounded-full", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://www.loom.com/share/8f46da6364ff4265b5c0987c638a63c2",
          target: "_blank",
          rel: "noreferrer",
          className: "inline-flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsx(Play, { className: "size-4" }),
            " Watch on Loom"
          ]
        }
      ) })
    ] })
  ] }) });
}
const tech = [
  "Kotlin",
  "Java",
  "Flutter",
  "Dart",
  "Jetpack Compose",
  "Firebase",
  "REST APIs",
  "Room",
  "SQLite",
  "MVVM",
  "Clean Architecture",
  "CI/CD"
];
const pillars = [
  { icon: Smartphone, title: "Native Android", text: "Production apps in Kotlin & Java with Compose and Material 3." },
  { icon: Layers, title: "Cross-platform", text: "Flutter apps that ship to iOS, Android & web from a single codebase." },
  { icon: Code2, title: "Architecture", text: "MVVM, Clean Architecture, modularization and scalable patterns." },
  { icon: Sparkles, title: "UX & Performance", text: "Smooth 60fps experiences, deep performance & memory tuning." }
];
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "About",
        title: "Mobile-first engineer with a designer's eye",
        description: "6+ years of building polished mobile products end-to-end — from architecture and APIs to delightful UI and Play Store launches."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "I'm a mobile engineer with 6+ years of experience building high-performance Android and cross-platform applications that feel instantaneous and look beautiful. I focus on clean architecture, scalable codebases, and strong collaboration between design and engineering teams." }),
        /* @__PURE__ */ jsx("p", { children: "I have led and contributed to multiple production apps across different domains, with one of my applications surpassing 100K+ downloads and significantly improving production stability by reducing crash rates to under 1%. My work spans enterprise-level Android systems including device owner solutions with advanced device management features such as remote lock and data control." }),
        /* @__PURE__ */ jsx("p", { children: "I also have experience building smart home applications with real-time communication systems, along with integrating payment gateways like Stripe, HyperPay, Tabby, and Tamara for GCC-based platforms. My apps are used globally with strong multilingual support and localization strategies." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pt-4", children: tech.map((t) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "px-3 py-1 rounded-full border border-border bg-surface text-xs text-foreground/80",
            children: t
          },
          t
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: pillars.map(({ icon: Icon, title, text }) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-2xl border border-border bg-surface/60 backdrop-blur p-5 hover:border-brand/50 transition-colors",
          children: [
            /* @__PURE__ */ jsx("div", { className: "size-10 rounded-xl bg-brand/10 text-brand grid place-items-center mb-3", children: /* @__PURE__ */ jsx(Icon, { className: "size-5" }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-1", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: text })
          ]
        },
        title
      )) })
    ] })
  ] }) });
}
function Skills() {
  return /* @__PURE__ */ jsx("section", { id: "skills", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Skills",
        title: "Tools I use every day",
        description: "Years of focused craft across the mobile stack."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-x-10 gap-y-5", children: skills.map((s) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1.5", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: s.name }),
        /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
          s.level,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-1.5 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full rounded-full bg-gradient-to-r from-brand to-[oklch(0.75_0.15_200)] transition-[width] duration-1000",
          style: { width: `${s.level}%` }
        }
      ) })
    ] }, s.name)) })
  ] }) });
}
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const filters = ["All", "Android", "Flutter", "Open Source", "UI/UX"];
function Projects() {
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");
  const scrollerRef = useRef(null);
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
    const cards = el.querySelectorAll("[data-card]");
    const center = scrollLeft + clientWidth / 2;
    let bestIdx = 0;
    let bestDist = Infinity;
    cards.forEach((c, i) => {
      const mid = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(mid - center);
      if (d < bestDist) {
        bestDist = d;
        bestIdx = i;
      }
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
  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };
  const scrollToIdx = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll("[data-card]");
    const target = cards[i];
    if (!target) return;
    el.scrollTo({ left: target.offsetLeft - 24, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx("section", { id: "projects", className: "py-24 sm:py-32 border-t border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Projects",
        title: "Selected work",
        description: "A few apps I've designed, built and shipped to real users."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-3 mb-8 items-stretch md:items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: filters.map((f) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setFilter(f);
            scrollerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
          },
          className: `px-3.5 py-1.5 text-sm rounded-full border transition-all ${filter === f ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/50"}`,
          children: f
        },
        f
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "relative md:w-72", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            value: q,
            onChange: (e) => setQ(e.target.value),
            placeholder: "Search projects…",
            className: "pl-9 rounded-full"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: `pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent transition-opacity ${canPrev ? "opacity-100" : "opacity-0"}` }),
      /* @__PURE__ */ jsx("div", { className: `pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent transition-opacity ${canNext ? "opacity-100" : "opacity-0"}` }),
      /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": "Previous project",
          onClick: () => scrollByCard(-1),
          disabled: !canPrev,
          className: "hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 size-11 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur shadow-lg hover:border-brand/60 hover:text-brand transition-all disabled:opacity-0",
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "size-5" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": "Next project",
          onClick: () => scrollByCard(1),
          disabled: !canNext,
          className: "hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 size-11 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur shadow-lg hover:border-brand/60 hover:text-brand transition-all disabled:opacity-0",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "size-5" })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: scrollerRef,
          className: "flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-5 sm:-mx-8 px-5 sm:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          children: visible.map((p, i) => /* @__PURE__ */ jsxs(
            "article",
            {
              "data-card": true,
              className: `group snap-center shrink-0 w-[85%] sm:w-[60%] md:w-[46%] lg:w-[38%] rounded-3xl border border-border bg-surface/60 backdrop-blur overflow-hidden hover:border-brand/60 transition-all hover:-translate-y-1 ${i === activeIdx ? "ring-1 ring-brand/40 shadow-xl shadow-brand/10" : ""}`,
              children: [
                /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden bg-secondary", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: p.image,
                    alt: p.title,
                    loading: "lazy",
                    width: 1024,
                    height: 768,
                    className: "size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: p.title }),
                    /* @__PURE__ */ jsx("div", { className: "flex gap-1 flex-wrap justify-end", children: p.category.map((c) => /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-wider text-brand bg-brand/10 px-2 py-0.5 rounded-full", children: c }, c)) })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground line-clamp-4", children: p.description }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: p.stack.map((s) => /* @__PURE__ */ jsx("span", { className: "text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground", children: s }, s)) }),
                  /* @__PURE__ */ jsx("ul", { className: "text-xs text-muted-foreground grid grid-cols-2 gap-x-3 gap-y-1", children: p.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsx("span", { className: "size-1 rounded-full bg-brand" }),
                    " ",
                    f
                  ] }, f)) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 pt-2", children: [
                    p.playStore && /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", className: "rounded-full", children: /* @__PURE__ */ jsxs("a", { href: p.playStore, target: "_blank", rel: "noreferrer", children: [
                      /* @__PURE__ */ jsx(Smartphone, { className: "size-4" }),
                      " Play Store"
                    ] }) }),
                    p.github && /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "rounded-full", children: /* @__PURE__ */ jsxs("a", { href: p.github, target: "_blank", rel: "noreferrer", children: [
                      /* @__PURE__ */ jsx(Github, { className: "size-4" }),
                      " Code"
                    ] }) }),
                    p.demo && /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "ghost", className: "rounded-full", children: /* @__PURE__ */ jsxs("a", { href: p.demo, target: "_blank", rel: "noreferrer", children: [
                      /* @__PURE__ */ jsx(ExternalLink, { className: "size-4" }),
                      " Live Demo"
                    ] }) })
                  ] })
                ] })
              ]
            },
            p.title
          ))
        }
      )
    ] }),
    visible.length > 1 && /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: visible.map((p, i) => /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": `Go to project ${i + 1}`,
          onClick: () => scrollToIdx(i),
          className: `h-1.5 rounded-full transition-all ${i === activeIdx ? "w-8 bg-brand" : "w-1.5 bg-border hover:bg-foreground/40"}`
        },
        p.title
      )) }),
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Drag, scroll, or use arrows" }),
        /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Swipe" }),
        " · ",
        activeIdx + 1,
        " / ",
        visible.length
      ] })
    ] }),
    visible.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground py-10", children: "No projects match your search." })
  ] }) });
}
function Certificates() {
  return /* @__PURE__ */ jsx("section", { id: "certificates", className: "py-24 sm:py-32 bg-surface/40 border-y border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Certificates",
        title: "Continuous learning",
        description: "Specializations and certifications that keep my craft sharp."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: certificates.map((c) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: c.href,
        target: "_blank",
        rel: "noreferrer",
        className: "group rounded-2xl border border-border bg-background p-5 hover:border-brand/60 transition-all",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
            /* @__PURE__ */ jsx("div", { className: "size-10 rounded-xl bg-brand/10 text-brand grid place-items-center", children: /* @__PURE__ */ jsx(Award, { className: "size-5" }) }),
            /* @__PURE__ */ jsx(ExternalLink, { className: "size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold leading-tight", children: c.title }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
            c.org,
            " · ",
            c.date
          ] })
        ]
      },
      c.title
    )) })
  ] }) });
}
function Experience() {
  return /* @__PURE__ */ jsx("section", { id: "experience", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Experience",
        title: "Where I've shipped"
      }
    ),
    /* @__PURE__ */ jsx("ol", { className: "relative border-l border-border ml-3 space-y-10", children: experience.map((e) => /* @__PURE__ */ jsxs("li", { className: "pl-8 relative", children: [
      /* @__PURE__ */ jsx("span", { className: "absolute -left-[7px] top-2 size-3 rounded-full bg-brand ring-4 ring-background" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
        /* @__PURE__ */ jsxs("h3", { className: "font-semibold text-lg", children: [
          e.role,
          " ",
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground font-normal", children: [
            "· ",
            e.company
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: e.period })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-1.5 text-sm text-muted-foreground", children: e.points.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-brand mt-1.5", children: "▸" }),
        /* @__PURE__ */ jsx("span", { children: p })
      ] }, p)) })
    ] }, e.role + e.company)) })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 sm:py-32 bg-surface/40 border-y border-border/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsx(SectionHeader, { eyebrow: "Testimonials", title: "Kind words from teams I've worked with" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-5", children: testimonials.map((t) => /* @__PURE__ */ jsxs(
      "figure",
      {
        className: "rounded-2xl border border-border bg-background p-6 flex flex-col gap-4",
        children: [
          /* @__PURE__ */ jsx(Quote, { className: "size-6 text-brand" }),
          /* @__PURE__ */ jsxs("blockquote", { className: "text-sm leading-relaxed text-foreground/90", children: [
            '"',
            t.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("figcaption", { className: "text-sm", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: t.name }),
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: t.role })
          ] })
        ]
      },
      t.name
    )) })
  ] }) });
}
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1e3)
});
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}

— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:imrankhalid696@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email app…");
      setSubmitting(false);
    }, 400);
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Contact",
        title: "Let's build something great",
        description: "Open to freelance projects and full-time roles. Drop a line — I usually reply within a day."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1.2fr] gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-surface/60 p-6 space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-emerald-500 animate-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Available for new projects" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "mailto:imrankhalid696@gmail.com", className: "flex items-center gap-3 text-sm hover:text-brand transition-colors", children: [
            /* @__PURE__ */ jsx(Mail, { className: "size-4 text-muted-foreground" }),
            " imrankhalid696@gmail.com"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "size-4" }),
            " Lahore, Pakistan · Remote"
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/923036785454",
            target: "_blank",
            rel: "noreferrer",
            className: "flex items-center justify-between rounded-2xl border border-border bg-surface/60 p-5 hover:border-brand/60 transition-colors group",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "size-10 rounded-xl bg-emerald-500/15 text-emerald-500 grid place-items-center", children: /* @__PURE__ */ jsx(MessageCircle, { className: "size-5" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium", children: "WhatsApp" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Click to chat instantly" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(Send, { className: "size-4 text-muted-foreground group-hover:translate-x-1 transition-transform" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: [
          { href: "https://github.com/imrankhalid001", icon: Github, label: "GitHub" },
          { href: "https://www.linkedin.com/in/imrankhalid001", icon: Linkedin, label: "LinkedIn" },
          { href: "mailto:imrankhalid696@gmail.com", icon: Mail, label: "Email" }
        ].map(({ href, icon: Icon, label }) => /* @__PURE__ */ jsx(
          "a",
          {
            href,
            "aria-label": label,
            className: "size-11 rounded-xl border border-border bg-surface/60 grid place-items-center hover:border-brand/60 hover:text-brand transition-colors",
            children: /* @__PURE__ */ jsx(Icon, { className: "size-4" })
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit,
          className: "rounded-2xl border border-border bg-surface/60 backdrop-blur p-6 space-y-4",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
                /* @__PURE__ */ jsx(Input, { id: "name", value: form.name, onChange: (e) => setForm({ ...form, name: e.target.value }), placeholder: "Your name", maxLength: 100 })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
                /* @__PURE__ */ jsx(Input, { id: "email", type: "email", value: form.email, onChange: (e) => setForm({ ...form, email: e.target.value }), placeholder: "you@company.com", maxLength: 255 })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "message", children: "Message" }),
              /* @__PURE__ */ jsx(Textarea, { id: "message", value: form.message, onChange: (e) => setForm({ ...form, message: e.target.value }), placeholder: "Tell me about your project…", rows: 6, maxLength: 1e3 })
            ] }),
            /* @__PURE__ */ jsxs(Button, { type: "submit", disabled: submitting, className: "rounded-full bg-brand text-brand-foreground hover:bg-brand/90 w-full sm:w-auto", children: [
              submitting ? "Sending…" : "Send message",
              " ",
              /* @__PURE__ */ jsx(Send, { className: "size-4" })
            ] })
          ]
        }
      )
    ] })
  ] }) });
}
const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-border bg-surface/40", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8 py-12 grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "font-bold text-lg", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent", children: "Imran" }),
          /* @__PURE__ */ jsx("span", { children: ".dev" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2 max-w-xs", children: "Building fast, scalable and user-friendly mobile applications." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold mb-3", children: "Quick links" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm text-muted-foreground", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: l.href, className: "hover:text-foreground transition-colors", children: l.label }) }, l.href)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold mb-3", children: "Connect" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: [
          { href: "https://github.com/imrankhalid001", icon: Github, label: "GitHub" },
          { href: "https://www.linkedin.com/in/imrankhalid001/", icon: Linkedin, label: "LinkedIn" },
          { href: "mailto:imrankhalid696@gmail.com", icon: Mail, label: "Email" },
          { href: "https://play.google.com", icon: Smartphone, label: "Play Store" }
        ].map(({ href, icon: Icon, label }) => /* @__PURE__ */ jsx("a", { href, "aria-label": label, className: "size-10 rounded-xl border border-border grid place-items-center hover:border-brand/60 hover:text-brand transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "size-4" }) }, label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Imran khalid. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Crafted with care, Kotlin & Flutter." })
    ] }) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Stats, {}),
      /* @__PURE__ */ jsx(VideoSection, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Skills, {}),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx(Certificates, {}),
      /* @__PURE__ */ jsx(Experience, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(Toaster, { richColors: true, position: "bottom-right" })
  ] });
}
export {
  Index as component
};
