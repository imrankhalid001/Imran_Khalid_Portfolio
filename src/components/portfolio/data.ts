import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

export type Category = "Android" | "Flutter" | "Open Source" | "UI/UX";

export const projects: {
  title: string;
  description: string;
  image: string;
  stack: string[];
  features: string[];
  category: Category[];
  playStore?: string;
  github?: string;
  demo?: string;
}[] = [
  {
    title: "FitTrack Pro",
    description: "Workout & nutrition tracker with offline-first sync, 50k+ downloads on Play Store.",
    image: p1,
    stack: ["Kotlin", "Jetpack Compose", "Room", "Firebase"],
    features: ["Offline sync", "Custom charts", "Apple Health import", "Dark mode"],
    category: ["Android"],
    playStore: "#",
    github: "#",
  },
  {
    title: "Bento Eats",
    description: "Cross-platform food delivery app with live order tracking and Stripe payments.",
    image: p2,
    stack: ["Flutter", "Dart", "Riverpod", "Stripe"],
    features: ["Live tracking", "Push notifications", "12 languages", "A/B testing"],
    category: ["Flutter"],
    playStore: "#",
    demo: "#",
  },
  {
    title: "Lumen Finance",
    description: "Personal finance dashboard with AI-powered budget insights and bank sync.",
    image: p3,
    stack: ["Kotlin", "Hilt", "Coroutines", "MVVM"],
    features: ["Plaid integration", "Biometric auth", "Widgets", "WearOS companion"],
    category: ["Android", "UI/UX"],
    github: "#",
    playStore: "#",
  },
  {
    title: "Stillness",
    description: "Meditation & breathwork app with ambient soundscapes and daily streaks.",
    image: p4,
    stack: ["Flutter", "Dart", "Firebase", "Lottie"],
    features: ["Background audio", "Streak engine", "Family plans", "Apple/Google Pay"],
    category: ["Flutter", "UI/UX", "Open Source"],
    github: "#",
    demo: "#",
  },
];

export const skills = [
  { name: "Kotlin", level: 95 },
  { name: "Java", level: 85 },
  { name: "Flutter", level: 92 },
  { name: "Dart", level: 90 },
  { name: "Firebase", level: 88 },
  { name: "REST API Integration", level: 95 },
  { name: "Mobile UI/UX", level: 87 },
  { name: "Git & GitHub", level: 93 },
  { name: "Performance Optimization", level: 88 },
  { name: "Play Store Deployment", level: 96 },
];

export const certificates = [
  { title: "Associate Android Developer", org: "Google", date: "2024", href: "#" },
  { title: "Flutter Development Bootcamp", org: "Udemy", date: "2023", href: "#" },
  { title: "Kotlin for Java Developers", org: "Coursera", date: "2023", href: "#" },
  { title: "Firebase in a Weekend", org: "Google", date: "2022", href: "#" },
  { title: "Material Design 3 Specialist", org: "Google", date: "2024", href: "#" },
  { title: "Clean Architecture in Android", org: "Coursera", date: "2024", href: "#" },
];

export const experience = [
  {
    role: "Senior Mobile Engineer",
    company: "Northwind Labs",
    period: "2023 — Present",
    points: [
      "Led Android rewrite to Jetpack Compose, cutting cold-start by 42%.",
      "Shipped Flutter web companion reaching 120k MAU.",
      "Mentored a team of 4 engineers on Clean Architecture.",
    ],
  },
  {
    role: "Mobile Developer (Freelance)",
    company: "Independent",
    period: "2021 — 2023",
    points: [
      "Delivered 14 production apps across fintech, health and e-commerce.",
      "Aggregate downloads exceeded 500k on Play Store.",
      "Average store rating 4.7★.",
    ],
  },
  {
    role: "Android Developer",
    company: "Pixel & Co.",
    period: "2019 — 2021",
    points: [
      "Migrated legacy Java codebase to Kotlin + Coroutines.",
      "Introduced CI/CD with Fastlane, halving release cycle.",
    ],
  },
];

export const stats = [
  { label: "Apps Published", value: 24 },
  { label: "Total Downloads", value: 580000 },
  { label: "Years Experience", value: 6 },
  { label: "Avg. Rating", value: 4.8 },
];

export const testimonials = [
  {
    quote: "Aarav delivered our Flutter app in record time without compromising on polish. A rare talent.",
    name: "Priya Mehta",
    role: "CTO, Bento Eats",
  },
  {
    quote: "The Compose migration he led made our app feel completely new. Engineering quality is top-tier.",
    name: "Daniel Cho",
    role: "Head of Mobile, Northwind",
  },
  {
    quote: "Communicates clearly, ships on time, and cares about the details. Hire him.",
    name: "Sofia Alvarez",
    role: "Founder, Stillness",
  },
];