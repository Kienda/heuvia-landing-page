export const siteConfig = {
  name: "Heuvia",
  tagline: "Learn • Progress • Transform",
  url: "https://heuvia.com",
  description:
    "Heuvia LMS is the elite learning management system for modern enterprises and high-achieving institutions.",
  links: {
    webApp: "https://app.heuvia.com",
    website: "https://heuvia.com",
    facebook: "https://www.facebook.com/profile.php?id=61590310546532",
    instagram: "https://www.instagram.com/heuvia_/",
    linkedin: "https://www.linkedin.com/company/heuvia",
    youtube: "https://www.youtube.com/@heuvia",
    supportEmail: "support@heuvia.com",
    supportMailto: "mailto:support@heuvia.com",
    android: "https://app.heuvia.com",
    ios: "https://app.heuvia.com",
  },
  nav: [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Mobile Apps", href: "#mobile-apps" },
    { label: "About", href: "#about" },
  ],
  features: [
    {
      title: "Immersive Courses",
      description:
        "Rich multimedia content, interactive modules, and progress tracking designed for deep focus.",
      icon: "courses",
      featured: true,
    },
    {
      title: "Smart Assignments",
      description: "Structured workflows that keep every submission on track.",
      icon: "assignments",
    },
    {
      title: "Dynamic Grading",
      description: "Fast feedback, clear rubrics, and visible academic progress.",
      icon: "grading",
    },
    {
      title: "Fluid Schedule",
      description: "Calendar views that make deadlines, lectures, and reviews easy.",
      icon: "schedule",
    },
    {
      title: "Instant Messaging",
      description: "Direct lines between peers and faculty.",
      icon: "messaging",
    },
    {
      title: "Real-time Alerts",
      description: "Relevant notifications when courses, grades, and work change.",
      icon: "alerts",
    },
  ],
  audiences: [
    {
      label: "For Students",
      title: "Learn at the Speed of Thought.",
      image: "/students-visual.png",
      tone: "primary",
      bullets: [
        {
          title: "Intuitive Progress Tracking",
          description:
            "Visual roadmaps that show exactly where you stand and what's next.",
        },
        {
          title: "Collaborative Study Groups",
          description:
            "Connect with classmates in dedicated channels for every course.",
        },
      ],
    },
    {
      label: "For Professors",
      title: "Teach Better, Manage Less.",
      image: "/professors-visual.png",
      tone: "secondary",
      reverse: true,
      bullets: [
        {
          title: "AI-Assisted Grading",
          description: "Spend time on feedback, not repetitive scoring tasks.",
        },
        {
          title: "Comprehensive Insight Dashboards",
          description:
            "Identify struggling students before they fall behind.",
        },
      ],
    },
    {
      label: "For Institutions",
      title: "Scalability Meets Security.",
      image: "/institutions-visual.png",
      tone: "tertiary",
      bullets: [
        {
          title: "Unified Cloud Infrastructure",
          description:
            "Deployment in minutes, uptime guaranteed for the whole campus.",
        },
        {
          title: "Bank-Grade Data Protection",
          description:
            "ISO certified security protocols to protect institution and student data.",
        },
      ],
    },
  ],
  stats: [
    { value: "99.9%", label: "Uptime Secured" },
    { value: "500+", label: "Universities" },
    { value: "2M+", label: "Daily Users" },
    { value: "24/7", label: "Cloud Ready" },
  ],
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61590310546532",
      icon: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/heuvia_/",
      icon: "instagram",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/heuvia",
      icon: "linkedin",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@heuvia",
      icon: "youtube",
    },
  ],
  footerGroups: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Mobile Apps", href: "#mobile-apps" },
        { label: "Web App", href: "https://app.heuvia.com" },
        { label: "Updates", href: "https://heuvia.com" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Website", href: "https://heuvia.com" },
        { label: "Solutions", href: "#solutions" },
        { label: "Contact", href: "mailto:support@heuvia.com" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "mailto:support@heuvia.com" },
        { label: "Community", href: "https://www.linkedin.com/company/heuvia" },
        {
          label: "Facebook",
          href: "https://www.facebook.com/profile.php?id=61590310546532",
        },
        { label: "YouTube", href: "https://www.youtube.com/@heuvia" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "https://heuvia.com" },
        { label: "Terms", href: "https://heuvia.com" },
        { label: "Support", href: "mailto:support@heuvia.com" },
      ],
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
