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
  { title: "Flutter Essential Training: Build for Multiple Platforms", org: "LinkedIn", date: "2026", href: "https://www.linkedin.com/learning/certificates/f02896ef354d9114d54ba63db60b723e481d9008d0a308a45f7c19d27aca0f7e?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Br3IwIDqQSJydIp4QxALXUA%3D%3D" },
  { title: "Prompt Engineering: How to Talk to the AIs", org: "LinkedIn", date: "2026", href: "https://www.linkedin.com/learning/certificates/95c57e2d4a4737976ab1a698368a3b984364c0aa8217d74e9f2520e698fa2393?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Br3IwIDqQSJydIp4QxALXUA%3D%3D" },
  { title: "Rapid Idea Generation Using AI", org: "LinkedIn", date: "2026", href: "https://www.linkedin.com/learning/certificates/fcdd4d300c461e841679cce75bb688c47f006e6168341b83cdc0a24e60c9d49c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Br3IwIDqQSJydIp4QxALXUA%3D%3D" },
  { title: "Building AI-Powered Android Apps with Gemini", org: "LinkedIn", date: "2026", href: "https://www.linkedin.com/learning/certificates/2b85960682220d4aa9308554f4bbaefbd6a59c34076e12a0a1cf25327c60646d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Br3IwIDqQSJydIp4QxALXUA%3D%3D" },
  { title: "CyberSavvy: Navigating Linux & Essential Cybersecurity", org: "UrduCourses", date: "2025", href: "https://cst.urducourses.pk/tutor-certificate/?cert_hash=4c757a1fcf193670" },
  { title: "Dart Programming", org: "Udemy", date: "2023", href: "https://www.udemy.com/certificate/UC-626e45ed-6e04-4590-b257-77c7e80f844c" },
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
    quote: "Imran delivered our Flutter app in record time without compromising on polish. A rare talent.",
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