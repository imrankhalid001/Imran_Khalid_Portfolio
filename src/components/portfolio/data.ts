import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.png";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.png";
import p6 from "@/assets/project-6.png";
import p7 from "@/assets/project-7.png";

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
    title: "Key Car Rental App",
    description: "Key Car Rental App is a comprehensive mobile application designed to provide users with a seamless car rental experience. The app allows users to browse available vehicles, compare prices, and book rentals directly from their smartphones. With a user-friendly interface and real-time availability updates, it ensures a smooth and efficient rental process for both individuals and businesses.",
    image: p5,
    stack: ["Kotlin", "Hilt", "Coroutines", "MVVM", "Firebase", "Room Database"],
    features: ["Real-time vehicle availability", "Secure payment processing", "User-friendly interface", "Booking management"],
    category: ["Android", "UI/UX",],
    playStore: "https://play.google.com/store/apps/details?id=comcom.key",
  },




   {
    title: "Weat Local Market",
    description: "Weat Local is a multi-vendor marketplace that empowers sellers to list items easily with API integration, Room Database, and Firebase Analytics. Developed with MVVM architecture and Kotlin, it offers features like secure payments through Stripe, authentication, and app push notifications for a modern and efficient shopping experience.",
    image: p7,
    stack: ["Kotlin", "Hilt", "Coroutines", "MVVM", "Firebase", "Room Database"],
    features: ["User Authentication:", "Multi-vendor Support", "Product Listings", "Categories", "Cart Management"],
   category: ["Android"],
    playStore: "https://play.google.com/store/apps/details?id=com.weat_local.weatbuyerside",
  },


    {
    title: "PDF Converter: Image to PDF",
    description: "PDF Converter is a simple and efficient Android app that allows users to convert images into high-quality PDF files within seconds. Designed for quick and smooth performance, it supports multiple image selections, PDF customization, and offline conversion. Perfect for students, professionals, and everyday users who need a fast and reliable image-to-PDF solution.",
    image: p3,
    stack: ["Kotlin", "Hilt", "Coroutines", "MVVM", "Firebase", "Room Database"],
    features: ["Convert Images to PDF", "Smart Sorting Options", "Compress PDF File Size", " Work 100% Offline", "Share PDFs Instantly", "View PDFs Within the App"],
    category: ["Android"],
    playStore: "https://play.google.com/store/apps/details?id=com.imidroid.imagetopdf",
  },



  {
    title: "Kinetic Fitness App",
    description: "Kinetic Fitness App (Flutter): Coaching, Workouts, Nutrition, Progress Tracking Designed and delivered a full-scale fitness and wellness mobile app built with Flutter, combining personal coaching, structured workouts, nutrition planning, body tracking, and visual progress tools into a single, high-performance platform.",
    image: p2,
    stack: ["Flutter", "Dart", "Stacked Management", "Social feed"],
    features: ["Personalized workout plans", "Assign a personal coach", "Diet tracking & recipe search", "Log, weight, goals & body fat", "Chat with coaches for guidance"],
    category: ["Flutter" , "UI/UX"],
    demo: "https://www.youtube.com/shorts/jbNbnxHEzng",
  },



 {
  title: "Reset Android App",
  description: "Built a powerful Android Enterprise Kiosk & Mobile Device Management (MDM) solution for organizations to remotely secure, monitor, and control Android devices. Implemented Device Owner provisioning via QR code and ADB commands, remote factory reset, complete data wipe, worker profile removal, real-time GPS tracking, kiosk lockdown, app whitelisting/blacklisting, WiFi & Bluetooth management, USB debugging protection, theft detection using gyroscope sensors, and automated security actions. Designed for Samsung Knox and Android Enterprise deployments with advanced remote administration capabilities.",
  image: p6,
  stack: ["Kotlin", "Android Enterprise", "Samsung Knox", "Firebase", "Room", "REST APIs"],
  features: [
    "Remote Factory Reset & Data Wipe",
    "GPS Location Tracking",
    "Device Owner Provisioning",
    "QR Enrollment",
    "Single & Multi App Kiosk Mode",
    "App Whitelist & Blacklist",
    "WiFi & Bluetooth Management",
    "Disable Navigation & Settings",
    "USB Detection Security Wipe",
    "Theft Detection & Auto Wipe",
    "Worker Profile Removal",
    "Samsung Knox Support"
  ],
  category: ["Android"],
  playStore: ""
},

  {
    title: "QR Code Scanner & Generator",
    description: "Built an all-in-one QR Code Scanner & Generator app that enables fast scanning, creation, and customization of QR codes with support for colors, logos, styles, and multiple formats. Implemented offline local storage for saving and managing generated QR codes with instant sharing capabilities. Designed for both personal and business use with a clean UI and high-performance real-time scanning experience.",
    image: p1,
    stack: ["Kotlin", "Jetpack Compose", "Room", "Firebase"],
    features: ["Offline sync", "Custom charts", "Apple Health import", "Dark mode"],
    category: ["Android"],
    playStore: "https://play.google.com/store/apps/details?id=com.imidroid.barcodescanner",

  },
  {
    title: "ExecArray",
    description: "ExecArray is a Flutter-based event management app that simplifies the purchase or rental of event essentials like chairs, tables, tents, and more. It uses multiple APIs to provide a seamless user experience, helping users efficiently manage event logistics.",
    image: p4,
    stack: ["Flutter", "Dart", "Firebase", "Lottie", "provider", "carousel_slider", "http"    ],
    features: ["User Authentication:", "Product Listings", "Categories", "Cart Management"],
    category: ["Flutter", "UI/UX", "Open Source"],
    github: "https://github.com/imrankhalid001/ExecArray",
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
    company: "Exario Digital",
    period: "2024 — Present",
    points: [
      "Led development of scalable Android applications using Kotlin, MVVM, Clean Architecture, Room, Retrofit, and Jetpack components.",
      "Implemented offline-first architecture, reducing data-fetch latency by 30% in low-connectivity environments.",
      "Implemented enterprise Android (Device Owner) functionality for advanced device management and security.",
      "Built real-time communication, smart home, and fintech integrations serving thousands of active users."
    ],
  },
  {
    role: "Android Developer",
    company: "Astute Solutions",
    period: "2021 — 2024",
    points: [
      "Delivered multilingual Android solutions across GCC markets with integrated payment ecosystems.",
      "Reduced production crash rates by over 70% through Firebase Crashlytics monitoring, performance optimization, and proactive debugging.",
      "Contributed to applications surpassing 100K+ downloads while maintaining strong stability metrics.",
    ],
  },
  {
    role: "Android Developer",
    company: "DevSaar",
    period: "2010 — 2021",
    points: [
      "Migrated legacy Java codebase to Kotlin + Coroutines and MVVM architecture",
      "Modernized legacy codebases and improved maintainability through architectural migrations.",
      "Reduced crashes and ANRs through systematic debugging and performance optimization."
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
    quote:
      "The Compose migration significantly improved our app architecture and performance. The engineering quality and attention to detail were consistently strong throughout the project.",
    name: "Adnan Q.",
    role: "CEO, Tech Company (Client Feedback)",
  },
  {
    quote:
      "Clear communication, reliable delivery, and strong ownership of tasks. The work was completed on time with excellent quality throughout.",
    name: "Junaid S.",
    role: "Founder, Digital Agency (Client Feedback)",
  },
  {
    quote:
      "Delivered our Flutter application faster than expected while maintaining a high level of polish and stability. Demonstrates strong mobile development expertise.",
    name: "Mohammed K.",
    role: "CEO, Logistics Startup (Client Feedback)",
  },
  {
    quote:
      "Clear communication, reliable delivery, and strong ownership of tasks. Consistently maintained quality and met deadlines.",
    name: "Junaid S.",
    role: "Founder, Digital Agency (Client Feedback)",
  },
  {
    quote:
      "Delivered our Flutter application faster than expected while maintaining a high level of polish and stability. Strong execution under tight timelines.",
    name: "Mohammed K.",
    role: "CEO, Logistics Startup (Client Feedback)",
  },
];