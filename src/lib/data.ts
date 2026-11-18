import {
  Globe,
  Smartphone,
  Monitor,
  Bot,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

export type Plan = {
  name: string;
  tagline: string;
  price: string;
  popular?: boolean;
  /** Prefix line shown above features, e.g. "Everything in Basic, plus:" */
  includesHeader?: string;
  features: string[];
};

export type Service = {
  slug: string;
  name: string;
  title: string;
  headline: string;
  icon: LucideIcon;
  chips: string[];
  startingPrice: string;
  plans: Plan[];
  types: { title: string; items: { name: string; desc: string }[] };
  included: { title: string; items: { label: string; sub?: string }[] };
  addons: { title: string; items: { name: string; price: string }[] };
  whyChoose: string[];
  useCases?: { title: string; items: { name: string; desc: string }[] };
  cta: [string, string];
};

export const services: Service[] = [
  {
    slug: "websites",
    name: "Website Development",
    title: "Website Development Services",
    headline:
      "Professional, Fast, and Business-Focused Websites for Every Industry.",
    icon: Globe,
    chips: ["Business", "E-commerce", "Medical", "School", "Gym", "Portfolio"],
    startingPrice: "₹15,000",
    plans: [
      {
        name: "Basic Plan",
        tagline: "Essential Website for Startups & Small Businesses",
        price: "₹15,000",
        features: [
          "Custom & Responsive Website",
          "Up to 5 Pages",
          "Modern UI/UX Design",
          "Contact Form & WhatsApp",
          "Basic SEO Setup",
          "SSL Security (HTTPS)",
          "Performance CDN Integration",
          "Free Domain for 1 Year",
          "Free Frontend Hosting for 1 Year",
        ],
      },
      {
        name: "Medium Plan",
        tagline: "Professional Website for Growing Businesses",
        price: "₹30,000",
        popular: true,
        includesHeader: "Everything in Basic, plus:",
        features: [
          "Up to 10 – 15 Pages",
          "Premium UI/UX & Branding",
          "Admin Dashboard / CMS",
          "Blog / News Management",
          "Inquiry / Admission / Booking Forms",
          "Google Analytics Integration",
          "Advanced SEO Setup",
          "Enhanced Performance & Security",
          "Free Domain for 1 Year",
          "Free Frontend Hosting for 1 Year",
        ],
      },
      {
        name: "Advanced Plan",
        tagline: "Premium Website with Advanced Features",
        price: "₹45,000",
        includesHeader: "Everything in Medium, plus:",
        features: [
          "15 – 25+ Pages (Depending on Scope)",
          "Custom Backend Development",
          "User Authentication & Role Management",
          "Database Integration",
          "Payment Gateway Integration",
          "E-commerce / Order Management",
          "API Integrations & Custom Workflows",
          "Advanced SEO & Performance Optimization",
          "Free Domain for 1 Year",
          "Free Frontend Hosting for 1 Year",
        ],
      },
    ],
    types: {
      title: "Types of Websites We Build",
      items: [
        { name: "Business Websites", desc: "For companies, agencies & brands" },
        {
          name: "E-commerce Websites",
          desc: "Online stores, products & payments",
        },
        {
          name: "Medical / Healthcare Websites",
          desc: "Clinics, hospitals & appointment booking",
        },
        {
          name: "School / Institutional Websites",
          desc: "Schools, colleges & educational institutes",
        },
        {
          name: "Gym & Fitness Websites",
          desc: "Gyms, trainers & membership plans",
        },
        {
          name: "Gaming Websites",
          desc: "Gaming lounges, esports & communities",
        },
        {
          name: "Agricultural Websites",
          desc: "Agro businesses, farming & products",
        },
        {
          name: "Portfolio Websites",
          desc: "For professionals, developers & freelancers",
        },
        {
          name: "And More",
          desc: "Restaurants, hotels, real estate, events & any other business website",
        },
      ],
    },
    included: {
      title: "Included in All Plans",
      items: [
        { label: "Free Domain", sub: "1 Year" },
        { label: "Free Frontend Hosting", sub: "1 Year" },
        { label: "Performance CDN", sub: "Fast & Reliable" },
        { label: "SSL Security", sub: "HTTPS" },
        { label: "Responsive Design", sub: "All Devices" },
        { label: "SEO Foundation", sub: "Search Friendly" },
      ],
    },
    addons: {
      title: "Additional Services (Add-ons)",
      items: [
        { name: "Website Redesign / Revamp", price: "From ₹8,000" },
        { name: "Additional Website Page", price: "₹1,000 / page" },
        { name: "Admin Dashboard (Custom)", price: "From ₹8,000" },
        { name: "Payment Gateway Integration", price: "From ₹4,000" },
        { name: "Booking / Appointment System", price: "From ₹5,000" },
        { name: "Advanced SEO Services", price: "From ₹5,000" },
        { name: "Website Maintenance", price: "₹2,000 / month" },
        { name: "E-commerce Upgrades", price: "Custom Quote" },
      ],
    },
    whyChoose: [
      "Modern & Conversion-Focused Designs",
      "High Performance & Speed",
      "Secure and Scalable Solutions",
      "SEO-Friendly & Google Ready",
      "Industry-Specific Expertise",
      "Dedicated Support & Maintenance",
    ],
    cta: ["Let's Build Your", "Digital Presence."],
  },
  {
    slug: "mobile-apps",
    name: "Mobile App Development",
    title: "Mobile App Development Services",
    headline:
      "Android & iOS App Development for Startups, Businesses & Institutions.",
    icon: Smartphone,
    chips: ["Android App", "iOS App", "Build Once, Launch on Both Platforms"],
    startingPrice: "₹17,000",
    plans: [
      {
        name: "Basic Plan",
        tagline: "Get Your App Started",
        price: "₹17,000",
        features: [
          "Android + iOS (Cross-Platform)",
          "Up to 5 Core Screens",
          "Modern & Responsive UI/UX",
          "Basic App Functionality",
          "User Registration & Login",
          "Basic Admin Panel (Web)",
          "App Store & Play Store Setup",
          "3 Months Free Support",
        ],
      },
      {
        name: "Medium Plan",
        tagline: "Business-Ready App",
        price: "₹34,000",
        popular: true,
        includesHeader: "Everything in Basic, plus:",
        features: [
          "Up to 10–15 Screens",
          "Advanced UI/UX & Branding",
          "Full Backend Integration (API)",
          "Admin Dashboard (Web)",
          "Push Notifications",
          "Payment Gateway Integration",
          "Analytics & User Insights",
          "Role & User Management",
          "6 Months Free Support",
        ],
      },
      {
        name: "Advanced Plan",
        tagline: "Scalable & Feature-Rich App",
        price: "₹50,000",
        includesHeader: "Everything in Medium, plus:",
        features: [
          "15–25+ Screens (As per Scope)",
          "Advanced Features & Workflows",
          "Real-time Data & Synchronization",
          "In-App Purchases / Subscriptions",
          "Advanced Admin Panel & Controls",
          "Third-Party Integrations (APIs)",
          "High Performance & Security",
          "Deployment on Play Store & App Store",
          "12 Months Free Support & Maintenance",
        ],
      },
    ],
    types: {
      title: "Types of Mobile Apps We Build",
      items: [
        {
          name: "E-commerce Apps",
          desc: "Online shopping, orders & payments",
        },
        {
          name: "Medical / Healthcare Apps",
          desc: "Clinics, hospitals, appointment booking",
        },
        {
          name: "School / Institution Apps",
          desc: "Admissions, notices, student & parent portal",
        },
        {
          name: "Gym & Fitness Apps",
          desc: "Membership, workouts & class booking",
        },
        {
          name: "Gaming Apps",
          desc: "Gaming platforms, communities & events",
        },
        {
          name: "Agricultural Apps",
          desc: "Farming, crop management & market links",
        },
        {
          name: "Business Apps",
          desc: "Company, services & customer management",
        },
        {
          name: "Portfolio / Personal Apps",
          desc: "For professionals, creators & brands",
        },
        {
          name: "And More",
          desc: "Restaurant, booking, service, real estate, learning and custom apps",
        },
      ],
    },
    included: {
      title: "Included in All Plans",
      items: [
        { label: "Android App", sub: "Play Store" },
        { label: "iOS App", sub: "App Store" },
        { label: "Clean & Scalable Code" },
        { label: "Secure & Reliable" },
        { label: "Optimized Performance" },
        { label: "Deployment & Setup" },
      ],
    },
    addons: {
      title: "Additional Services (Add-ons)",
      items: [
        { name: "Additional App Screen", price: "₹1,500 / screen" },
        { name: "Custom Feature Development", price: "From ₹5,000" },
        { name: "Admin Panel (Advanced)", price: "From ₹8,000" },
        { name: "Payment Gateway Integration", price: "From ₹4,000" },
        { name: "Push Notifications Setup", price: "From ₹2,000" },
        { name: "App Maintenance & Support", price: "From ₹3,000 / month" },
        { name: "App Store / Play Store Assistance", price: "₹2,000" },
        { name: "App Redesign / UI Revamp", price: "From ₹7,000" },
      ],
    },
    whyChoose: [
      "Android & iOS App Development (Both Platforms)",
      "Modern, Intuitive & User-Centric Design",
      "Secure, Scalable & High-Performance Apps",
      "End-to-End Development (Design to Deployment)",
      "Industry-Specific Expertise",
      "Dedicated Support & Long-Term Maintenance",
    ],
    cta: ["Let's Build Your", "Mobile App Today."],
  },
  {
    slug: "desktop-software",
    name: "Desktop Application Development",
    title: "Desktop Application Development Services",
    headline:
      "Custom, High-Performance & Scalable Desktop Software for Your Business.",
    icon: Monitor,
    chips: ["Windows", "macOS", "Linux", "Cross-Platform Solutions"],
    startingPrice: "₹20,000",
    plans: [
      {
        name: "Basic Plan",
        tagline: "Essential Desktop Software",
        price: "₹20,000",
        features: [
          "Custom Desktop Application",
          "Core Features (as per scope)",
          "Modern & Clean UI/UX",
          "Local Data Storage (SQLite)",
          "Single-User Usage",
          "Windows App (Primary)",
          "Installer / Setup File (EXE)",
          "3 Months Free Support",
        ],
      },
      {
        name: "Medium Plan",
        tagline: "Professional Desktop Software",
        price: "₹40,000",
        popular: true,
        includesHeader: "Everything in Basic, plus:",
        features: [
          "Advanced & Custom Features",
          "Multi-User / Role Management",
          "Database Integration (SQLite / PostgreSQL / MySQL)",
          "Reports & Analytics",
          "Data Import / Export (Excel, CSV)",
          "Settings & Configuration Panel",
          "Cross-Platform Support (Windows + macOS / Linux)",
          "6 Months Free Support",
        ],
      },
      {
        name: "Advanced Plan",
        tagline: "Enterprise Desktop Software",
        price: "₹60,000",
        includesHeader: "Everything in Medium, plus:",
        features: [
          "Full-Featured Custom Software",
          "Advanced Workflows & Automation",
          "User Roles, Permissions & Access Control",
          "Cloud / Server Synchronization",
          "Real-time Data & Notifications",
          "Integrations (APIs, Devices, 3rd Party)",
          "High Performance & Security",
          "Custom Installer & Auto-Updates",
          "12 Months Free Support & Maintenance",
        ],
      },
    ],
    types: {
      title: "Types of Desktop Applications We Build",
      items: [
        {
          name: "Business Management Software",
          desc: "ERP, CRM, HRM, Inventory & Billing",
        },
        {
          name: "Retail / POS Software",
          desc: "Sales, billing, inventory & reports",
        },
        {
          name: "Healthcare Software",
          desc: "Clinic, hospital & patient management",
        },
        {
          name: "Education Software",
          desc: "School/college management, attendance, exams & results",
        },
        {
          name: "Gym & Membership Software",
          desc: "Member management, plans & billing",
        },
        {
          name: "Gaming & Utility Software",
          desc: "Game tools, launchers & custom utilities",
        },
        {
          name: "Agricultural Software",
          desc: "Farm, crop, stock & supply management",
        },
        {
          name: "Custom Business Software",
          desc: "Industry-specific desktop solutions",
        },
        {
          name: "And More",
          desc: "Accounting, hotel, pharmacy, real estate, logistics and other custom software",
        },
      ],
    },
    included: {
      title: "Included in All Plans",
      items: [
        { label: "Windows Support" },
        { label: "macOS Support", sub: "As per Plan" },
        { label: "Linux Support", sub: "As per Plan" },
        { label: "Setup & Installation" },
        { label: "Performance Optimization" },
        { label: "Basic Security" },
        { label: "Documentation & User Guide" },
      ],
    },
    addons: {
      title: "Additional Services (Add-ons)",
      items: [
        { name: "Additional Features / Modules", price: "From ₹5,000" },
        { name: "Additional User License", price: "From ₹2,000 / user" },
        { name: "Database Setup & Migration", price: "From ₹5,000" },
        { name: "Cloud Sync / Online Integration", price: "From ₹8,000" },
        { name: "Auto-Update System", price: "From ₹4,000" },
        { name: "UI/UX Redesign / Modernization", price: "From ₹6,000" },
        { name: "AMC / Maintenance & Support", price: "From ₹3,000 / month" },
      ],
    },
    whyChoose: [
      "Custom & Industry-Specific Solutions",
      "Modern, Intuitive & Easy-to-Use UI",
      "Secure, Reliable & High-Performance",
      "Scalable & Maintainable Architecture",
      "Cross-Platform Development (Windows, macOS, Linux)",
      "Dedicated Support & Long-Term Maintenance",
    ],
    cta: ["Let's Build Your", "Desktop Software."],
  },
  {
    slug: "bots-servers",
    name: "Bots & Server Solutions",
    title: "Bots & Server Solutions",
    headline:
      "Telegram Bots · Discord Servers · Minecraft Servers & More Automation Services.",
    icon: Bot,
    chips: [
      "Telegram Bots",
      "Discord Servers",
      "Minecraft Servers",
      "& Custom Automations",
    ],
    startingPrice: "₹10,000",
    plans: [
      {
        name: "Basic Plan",
        tagline: "Get Started With Automation",
        price: "₹10,000",
        features: [
          "Telegram Bot / Discord Setup",
          "Basic Bot Features (as per need)",
          "Up to 10 Commands",
          "Basic Automations & Workflows",
          "Basic Discord Server Setup (Roles, Channels, Permissions)",
          "Or Minecraft Server Setup (Vanilla / Paper / Fabric)",
          "Deployment & Configuration",
          "1 Month Free Support",
        ],
      },
      {
        name: "Medium Plan",
        tagline: "Advanced & Feature-Rich",
        price: "₹15,000",
        popular: true,
        includesHeader: "Everything in Basic, plus:",
        features: [
          "Advanced Bot with Custom Features",
          "Up to 25 Commands",
          "Database Integration (e.g. MongoDB)",
          "Discord Server (Advanced Setup): Roles, Bots, Automations, Logs",
          "Minecraft Server (Enhanced): Plugins, Mods, Economy, Ranks",
          "Admin Panel / Web Dashboard (Basic)",
          "Integrations (APIs, Webhooks, etc.)",
          "3 Months Free Support",
        ],
      },
      {
        name: "Advanced Plan",
        tagline: "Enterprise & Fully Custom",
        price: "₹20,000",
        includesHeader: "Everything in Medium, plus:",
        features: [
          "Fully Custom Bot / Multi-Bot System",
          "Unlimited / Advanced Commands",
          "Custom Backend & Dashboard (Web Panel + Analytics)",
          "Discord Server (Professional): Custom Bots, Moderation, Events, etc.",
          "Minecraft Server (Pro Setup): Custom Plugins, Minigames, Economy, Ranks, Anti-Cheat, Backups",
          "Scalable, Secure & Optimized Setup",
          "Priority Support for 6 Months",
        ],
      },
    ],
    types: {
      title: "Our Services",
      items: [
        {
          name: "Telegram Bots",
          desc: "Automation, communities, payments & more",
        },
        {
          name: "Discord Servers",
          desc: "Setup, moderation, bots, roles & branding",
        },
        {
          name: "Minecraft Servers",
          desc: "SMP, Survival, Skyblock, Minigames, Modded",
        },
        {
          name: "Custom Bots",
          desc: "AI, utility, moderation, trading, alerts & more",
        },
        {
          name: "Server Setup & Management",
          desc: "Deployment, optimization, security & backups",
        },
        {
          name: "API & Integration Services",
          desc: "Telegram/Discord APIs, Webhooks, 3rd-party",
        },
        {
          name: "Automation Solutions",
          desc: "Task automation, notifications, workflows",
        },
        {
          name: "Gaming Community Setup",
          desc: "Complete server, bots, events & branding",
        },
        {
          name: "And More",
          desc: "Tailored bot, server, and automation solutions as per your requirements",
        },
      ],
    },
    included: {
      title: "Included in All Plans",
      items: [
        { label: "Setup & Configuration" },
        { label: "Security & Anti-Abuse" },
        { label: "Performance Optimization" },
        { label: "Deployment & Hosting", sub: "if Needed" },
        { label: "Support & Guidance" },
        { label: "Documentation", sub: "Basic" },
      ],
    },
    addons: {
      title: "Additional Services (Add-ons)",
      items: [
        {
          name: "Database Integration (MongoDB / PostgreSQL)",
          price: "₹3,000",
        },
        { name: "Custom Web Dashboard / Admin Panel", price: "From ₹5,000" },
        { name: "Third-Party API Integration", price: "From ₹2,000" },
        {
          name: "Advanced Security (Anti-Spam, Anti-Bot, etc.)",
          price: "₹3,000",
        },
        {
          name: "Server Maintenance & Management",
          price: "From ₹2,000 / month",
        },
        { name: "Cloud Hosting (Bot / Server)", price: "From ₹1,500 / month" },
        {
          name: "Custom Plugin / Mod Development (Minecraft & Others)",
          price: "From ₹5,000",
        },
        {
          name: "Server Branding (Logo, Banners, Setup, etc.)",
          price: "₹2,000",
        },
      ],
    },
    whyChoose: [
      "Custom, Reliable & Scalable Solutions",
      "Secure & High-Performance Setup",
      "Experienced in Bots & Servers & Automation",
      "Gaming & Community-Focused Expertise",
      "Clean, Organized & Professional Setup",
      "Dedicated Support & Long-Term Assistance",
    ],
    cta: ["Let's Build Your", "Bot or Server Today."],
  },
  {
    slug: "ai-automation",
    name: "AI Agents & Automation",
    title: "AI Agents & Automation Development Services",
    headline:
      "Custom AI Agents, Agentic Workflows, and End-to-End AI Systems to Automate, Analyze, and Grow Your Business.",
    icon: BrainCircuit,
    chips: [
      "LLMs",
      "RAG",
      "AI Agents",
      "Workflows",
      "Automation",
      "Custom AI Systems",
    ],
    startingPrice: "₹20,000",
    plans: [
      {
        name: "Basic Plan",
        tagline: "Get Started with AI Automation",
        price: "₹20,000",
        features: [
          "Custom AI Agent (Single Use-Case)",
          "Basic Agentic Workflow",
          "Integration with 1–2 Tools (e.g. Gmail, Sheets, Notion, etc.)",
          "Use of Leading LLMs (OpenAI, Gemini, Claude, etc.)",
          "Simple RAG (Your Own Data)",
          "Web Dashboard / Interface (Basic)",
          "Deployment & Setup",
          "1 Month Free Support",
        ],
      },
      {
        name: "Medium Plan",
        tagline: "Business-Ready AI Systems",
        price: "₹40,000",
        popular: true,
        includesHeader: "Everything in Basic, plus:",
        features: [
          "Multi-Agent System (2–5 Agents)",
          "Advanced Agentic Workflows",
          "RAG with Your Business Knowledge (Documents, Websites, Databases)",
          "Integrations with Multiple Tools (Slack, Notion, Drive, CRM, etc.)",
          "Custom UI / Web Application",
          "Workflow Orchestration (LangGraph / n8n / etc.)",
          "Analytics & Usage Tracking",
          "3 Months Free Support",
        ],
      },
      {
        name: "Advanced Plan",
        tagline: "Enterprise AI Solution",
        price: "₹70,000",
        includesHeader: "Everything in Medium, plus:",
        features: [
          "Enterprise-Grade Multi-Agent System (Advanced & Autonomous)",
          "Complex Agentic Workflows (Planning, Reasoning, Tool Use, Memory)",
          "Advanced RAG (Multi-Source + Vector DB)",
          "Custom AI Models / Fine-Tuning (Optional)",
          "Full Integration with Your Systems (CRM, ERP, Databases, APIs, etc.)",
          "Scalable, Production-Ready Deployment (Cloud / On-Premise)",
          "Monitoring, Logs & Performance Insights",
          "6 Months Free Support & Maintenance",
        ],
      },
    ],
    types: {
      title: "AI Services We Offer",
      items: [
        {
          name: "Custom AI Agents",
          desc: "Personal, business & domain-specific agents",
        },
        {
          name: "Agentic Workflows",
          desc: "Multi-step, tool-using autonomous workflows",
        },
        {
          name: "RAG Systems",
          desc: "Chat with your own data (PDFs, docs, website, etc.)",
        },
        {
          name: "Business Automation",
          desc: "Automate emails, reports, leads, tasks & more",
        },
        {
          name: "AI Integrations",
          desc: "Connect with your existing tools & software",
        },
        {
          name: "AI Analytics & Insights",
          desc: "Turn your data into actionable intelligence",
        },
        {
          name: "Custom AI Systems",
          desc: "AI-based platforms, copilots & internal tools",
        },
        {
          name: "LLM Solutions",
          desc: "Integration, orchestration & deployment (OpenAI, Gemini, Claude, etc.)",
        },
        {
          name: "And More",
          desc: "AI consulting, PoCs, fine-tuning, optimization & ongoing support",
        },
      ],
    },
    included: {
      title: "Included in All Plans",
      items: [
        { label: "AI Setup & Configuration" },
        { label: "Tool & API Integrations" },
        { label: "Secure & Reliable" },
        { label: "Deployment", sub: "Cloud / VPS" },
        { label: "Testing & Optimization" },
        { label: "Documentation & Guidance" },
      ],
    },
    addons: {
      title: "Use Cases & Solutions",
      items: [
        { name: "Customer Support AI", price: "24/7 AI assistant for your business" },
        { name: "Content & Marketing AI", price: "Generate content, posts & campaigns" },
        { name: "Lead Generation AI", price: "Find, qualify & manage leads automatically" },
        { name: "Business Operations AI", price: "Automate repetitive business tasks" },
        { name: "Document & Data Assistant", price: "Chat with your PDFs, reports & internal docs" },
        { name: "Internal Team Assistant", price: "Help your team with data, notes & workflows" },
        { name: "Research & Analysis Agent", price: "Automate research, summaries & insights" },
        { name: "Custom Industry Solutions", price: "Healthcare, Education, E-commerce & more" },
      ],
    },
    whyChoose: [
      "Expertise in AI Agents & Agentic Systems",
      "Custom, Industry-Focused Solutions",
      "Secure, Scalable & Production-Ready",
      "Integration with Your Existing Tools",
      "Modern Stack (LangChain, LangGraph, OpenAI, etc.)",
      "Dedicated Support & Long-Term Maintenance",
    ],
    cta: ["Build Your", "AI-Powered Business with Us."],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);

export const contact = {
  email: "ryuksaidso@gmail.com",
  phone: "+91 9149522458",
  phoneHref: "tel:+919149522458",
  site: "ryuksaidso.online",
  siteHref: "https://ryuksaidso.online",
  socials: [
    { name: "Instagram", href: "https://www.instagram.com/ryuksaidso" },
    { name: "Facebook", href: "https://www.facebook.com/ryuksaidso" },
    { name: "X", href: "https://x.com/ryuksaidso" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/ryuksaidso" },
  ],
};

export const whyChooseAll = [
  "Modern & Conversion-Focused Designs",
  "High Performance & Speed",
  "Secure and Scalable Solutions",
  "SEO-Friendly & Google Ready",
  "Industry-Specific Expertise",
  "Dedicated Support & Maintenance",
];

export const process = [
  {
    step: "01",
    title: "Scope",
    desc: "A short call to map the goal, the systems involved and the outcome we will measure.",
  },
  {
    step: "02",
    title: "Design & Build",
    desc: "You get a working increment early and often — no six-month black box.",
  },
  {
    step: "03",
    title: "Launch",
    desc: "We ship to production: infrastructure, monitoring, domains and handover docs included.",
  },
  {
    step: "04",
    title: "Improve",
    desc: "After launch we measure, tune and extend — the same discipline we run our own products with.",
  },
];
