import type { Project, ProcessStep, StatCounter, SkillCardData, BenefitCard, TimelineItem, Testimonial } from '../types';


export const DOMAINS = [
  { name: 'Healthcare & Diagnostics', icon: '🩺', tag: 'Medical Tech' },
  { name: 'EdTech & Learning', icon: '📚', tag: 'Interactive Education' },
  { name: 'Fintech & Payments', icon: '💳', tag: 'Digital Banking' },
  { name: 'E-commerce & Retail', icon: '🛍️', tag: 'Shopping Experience' },
  { name: 'SaaS & Enterprise', icon: '⚡', tag: 'Cloud Platforms' },
  { name: 'Wearables & IoT', icon: '⌚', tag: 'Smart Devices' },
  { name: 'Smart Transit', icon: '🚌', tag: 'Urban Mobility' },
  { name: 'AI Workflows', icon: '🪄', tag: 'Generative UX' },
];

export const PROJECTS: Project[] = [
  {
    id: 'dr-lab',
    title: 'Dr. Lab',
    category: 'Healthcare • Mobile & Web App',
    subtitle: 'Medical and Diagnostic Appointments',
    description: 'Streamlining diagnostic lab bookings, home sample collection, and instant AI-assisted medical report analysis for patients and diagnostic labs.',
    badge: 'Featured Case Study',
    coverBg: 'from-rose-100/80 via-pink-50 to-orange-50',
    darkCoverBg: 'from-rose-950/40 via-slate-900 to-pink-950/30',
    accentColor: '#FF5A79',
    behanceUrl: 'https://behance.net',
    caseStudy: {
      overview: 'Dr. Lab is a comprehensive diagnostic appointment ecosystem designed to reduce friction in scheduling lab tests, tracking home phlebotomist visits, and interpreting medical test results. Built ground-up after extensive interviews with patients and lab technicians.',
      role: 'Lead UI/UX Designer (Solo Project)',
      timeline: '8 Weeks (Research to Hi-Fi Prototype)',
      tools: ['Figma', 'FigJam', 'Miro', 'Maze', 'AI Prompting'],
      problem: 'Patients in urban centers face confusing diagnostic packages, lack of transparent pricing, cumbersome 9-step booking forms, and hard-to-read medical PDF reports filled with dense clinical jargon.',
      solution: 'Designed a 3-step streamlined booking wizard, real-time sample collector live tracking, and an interactive "Smart Report Reader" that translates lab parameters into visual color-coded health indicators with AI summaries.',
      researchInsights: [
        { title: 'Booking Friction', desc: '78% of users abandoned diagnostic bookings when required to input long medical history before seeing available time slots.' },
        { title: 'Report Anxiety', desc: '84% of patients reported anxiety reading raw blood test PDF values without quick visual reference ranges.' },
        { title: 'Home Collection Uncertainty', desc: 'Users wanted Uber-style live status updates for phlebotomist arrival to plan their fasts and schedules.' }
      ],
      userPersonas: [
        { name: 'Ramesh K., 48', role: 'Managing Chronic Diabetes', quote: 'I just want to book my quarterly HbA1c test in under a minute without getting lost in 50 lab packages.', painPoint: 'Overwhelmed by complex medical menus and lack of clear home collection slots.' },
        { name: 'Priya S., 29', role: 'Working Professional & Caregiver', quote: 'I manage health checkups for my elderly parents. I need clear tracking so I know when the phlebotomist arrives.', painPoint: 'Needs multi-patient profile switching and transparent report sharing with doctors.' }
      ],
      userFlowSteps: [
        'Select Diagnostic Test / Package',
        'Choose Home Collection or Walk-in Lab',
        'Pick Preferred Time Slot & Patient Profile',
        'Instant Confirmation & Phlebotomist Tracking',
        'Interactive AI Smart Report Delivery'
      ],
      keyFeatures: [
        { title: '3-Tap Test Booking', desc: 'Search tests by symptoms, body parts, or prescription upload with automated test matching.' },
        { title: 'Live Phlebotomist Radar', desc: 'Real-time GPS tracking and phone verification for home sample collection agents.' },
        { title: 'Smart AI Report Visualizer', desc: 'Color-coded parameter sliders (Normal, Elevated, High) with plain-language explanations.' },
        { title: 'Family Health Vault', desc: 'Unified historical trend graphs tracking health metrics across multiple family members.' }
      ],
      outcomes: [
        { metric: '65%', label: 'Reduction in Booking Time' },
        { metric: '4.8/5', label: 'Usability Score in Maze Tests' },
        { metric: '92%', label: 'Task Completion Rate' },
        { metric: 'WCAG AA', label: 'Contrast & Screen Reader Compliant' }
      ],
      screens: [
        { title: 'Home & Diagnostic Search', desc: 'Vibrant search dashboard with quick test filters, popular packages, and instant prescription scanner.', tag: 'Mobile Screen 1' },
        { title: 'Interactive Slot Selection', desc: 'Clean calendar drawer showing morning fast requirements and phlebotomist availability.', tag: 'Mobile Screen 2' },
        { title: 'Smart Report Summary', desc: 'Visual health indicators highlighting key biomarkers with downloadable summary cards.', tag: 'Mobile Screen 3' },
        { title: 'Lab Technician Dashboard', desc: 'Web platform for diagnostic labs to manage sample collection queues and report dispatch.', tag: 'Web Dashboard' }
      ]
    }
  },
  {
    id: 'sky-vault',
    title: 'Sky Vault',
    category: 'SaaS • Enterprise Cloud',
    subtitle: 'Cloud Storage Web App',
    description: 'An intuitive cloud storage web platform designed for seamless creative team collaboration, automated AI file tagging, and enterprise encryption.',
    badge: 'SaaS Platform',
    coverBg: 'from-sky-100/80 via-blue-50 to-indigo-50',
    darkCoverBg: 'from-sky-950/40 via-slate-900 to-indigo-950/30',
    accentColor: '#0EA5E9',
    behanceUrl: 'https://behance.net',
    caseStudy: {
      overview: 'Sky Vault is a next-generation cloud storage desktop & web experience tailored for creative agencies and tech teams who deal with large media assets, version chaos, and complex file permissions.',
      role: 'UI/UX & Product Designer',
      timeline: '6 Weeks',
      tools: ['Figma', 'Framer', 'Illustrator', 'Design Systems'],
      problem: 'Existing cloud storage interfaces clutter screen space with nested directory trees, making it difficult to preview heavy video/design files and manage multi-user access permissions.',
      solution: 'Created a spatial folder-less workspace with smart visual tags, quick press-and-hold media previews, and a drag-and-drop security vault for sensitive client deliverables.',
      researchInsights: [
        { title: 'Deep Hierarchy Fatigue', desc: 'Users spent up to 12 minutes daily searching through deeply nested subfolders.' },
        { title: 'Asset Preview Delays', desc: 'Designers needed fast file previews without waiting for full download buffers.' }
      ],
      userPersonas: [
        { name: 'Ananya V., 32', role: 'Creative Director', quote: 'I need to review 50 design renders without opening each file individually.', painPoint: 'Slow loading previews and confusing folder sharing links.' }
      ],
      userFlowSteps: [
        'Drag & Drop Files into Vault',
        'Automatic AI Categorization & Smart Tags',
        'Set Granular Expiry & Access Rights',
        'Real-time Team Workspace Collaboration'
      ],
      keyFeatures: [
        { title: 'Spatial Workspace Grid', desc: 'Fluid media cards with hover scrub video previews and high-res image zoom.' },
        { title: 'AI Automated Tagging', desc: 'Auto-detects file content, color palettes, and document text for instant search.' },
        { title: 'Granular Link Controls', desc: 'One-click password protection, view-only modes, and self-destructing share links.' }
      ],
      outcomes: [
        { metric: '40%', label: 'Faster File Retrieval' },
        { metric: '88%', label: 'User Satisfaction Score' },
        { metric: 'Zero', label: 'Navigation Friction' }
      ],
      screens: [
        { title: 'Main Cloud Dashboard', desc: 'Clean sidebar layout with storage allocation meter, recent team activity, and quick dropzone.', tag: 'Web Interface' },
        { title: 'Smart Search & Filter Drawer', desc: 'Faceted search filtering by file type, color palette, client project, and AI tag.', tag: 'Search View' },
        { title: 'Vault Security Matrix', desc: 'Visual permission matrix for controlling workspace role access.', tag: 'Admin Panel' }
      ]
    }
  },
  {
    id: 'whatsapp-email',
    title: 'WhatsApp with Email',
    category: 'Concept • Productivity & Messaging',
    subtitle: 'Unified Communication Concept',
    description: 'Reimagining messaging and email integration inside WhatsApp for unified personal and workplace productivity without app-switching fatigue.',
    badge: 'UX Concept',
    coverBg: 'from-emerald-100/80 via-teal-50 to-green-50',
    darkCoverBg: 'from-emerald-950/40 via-slate-900 to-teal-950/30',
    accentColor: '#10B981',
    behanceUrl: 'https://behance.net',
    caseStudy: {
      overview: 'A high-impact UX concept exploring how WhatsApp can integrate email threads directly into its familiar chat interface, allowing freelancers and small business owners in India to handle clients seamlessly.',
      role: 'UX Researcher & Conceptual Designer',
      timeline: '4 Weeks',
      tools: ['Figma', 'User Interviews', 'Prototyping'],
      problem: 'Small business owners continuously switch between WhatsApp for fast client chats and Gmail/Outlook for formal invoices and contracts, causing dropped context and missed emails.',
      solution: 'Introduced a dual-mode tab switcher ("Chats" vs "Workmail") directly into WhatsApp, with email threads formatted into readable, chat-like speech bubbles with quick action chips.',
      researchInsights: [
        { title: 'Context Fragmentation', desc: '91% of Indian micro-entrepreneurs use WhatsApp for business but struggle to track formal email agreements.' }
      ],
      userPersonas: [
        { name: 'Karthik M., 31', role: 'Freelance Architect', quote: 'Clients send quick updates on WhatsApp but send blueprints over email. Switching between them is exhausting.', painPoint: 'Losing track of client approvals across two separate platforms.' }
      ],
      userFlowSteps: [
        'Toggle Workmail Tab inside WhatsApp',
        'Compose Email with WhatsApp Contacts',
        'Convert Chat Message to Formal Email Draft',
        'Receive PDF Invoices directly in Chat View'
      ],
      keyFeatures: [
        { title: 'Dual-Tab Navigation', desc: 'Seamlessly switch between personal WhatsApp chats and synced work email accounts.' },
        { title: 'Chat-to-Email Converter', desc: 'Turn key chat agreements into formal email threads with one tap.' },
        { title: 'Attachment Preview Cards', desc: 'Inline PDF & document reader with quick signature tools.' }
      ],
      outcomes: [
        { metric: '3x', label: 'Faster Email Response Rate' },
        { metric: '95%', label: 'Positive Feedback from Usability Tests' },
        { metric: '100%', label: 'Familiar WhatsApp Ergonomics' }
      ],
      screens: [
        { title: 'Unified Chat & Email Inbox', desc: 'WhatsApp header updated with Workmail toggle badge and unread email counters.', tag: 'Concept Screen 1' },
        { title: 'Email Thread Chat View', desc: 'Formal email thread displayed in speech bubbles with CC/BCC chips and formal signature footer.', tag: 'Concept Screen 2' }
      ]
    }
  },
  {
    id: 'bus-snap',
    title: 'Bus Snap',
    category: 'Wearables • Smart Transit',
    subtitle: 'Smartwatch Ticket Booking',
    description: 'NFC & QR-based smart ticketing application tailored specifically for smartwatch displays and rapid hands-free urban transit in Chennai.',
    badge: 'Wearable UX',
    coverBg: 'from-amber-100/80 via-orange-50 to-yellow-50',
    darkCoverBg: 'from-amber-950/40 via-slate-900 to-orange-950/30',
    accentColor: '#F59E0B',
    behanceUrl: 'https://behance.net',
    caseStudy: {
      overview: 'Bus Snap solves the friction of crowded bus commuting in metropolitan cities by bringing sub-second NFC tap-and-ride bus ticketing directly to smartwatches.',
      role: 'UI/UX & Wearable Specialist',
      timeline: '3 Weeks',
      tools: ['Figma', 'Wearable Guidelines', 'Framer'],
      problem: 'Commuters struggling to hold bus handles while pulling out smartphones or cash to buy tickets in packed city buses during peak rush hours.',
      solution: 'Designed a micro-UI smartwatch experience featuring 1-tap favorite route booking, high-contrast QR tickets for conductors, and wrist haptic alerts upon approaching destination bus stops.',
      researchInsights: [
        { title: 'Single-Hand Ergonomics', desc: 'Wearable interfaces must require minimal glance time (< 2 seconds) and zero multi-finger gestures.' }
      ],
      userPersonas: [
        { name: 'Sanjay V., 24', role: 'Daily Metro Bus Commuter', quote: 'In a crowded Chennai bus, pulling my phone out is risky. A quick tap on my watch would save my day.', painPoint: 'Fumbling with cash/phone while balancing in a moving bus.' }
      ],
      userFlowSteps: [
        'Raise Wrist to Activate Bus Snap',
        'Select Saved Commute Route (e.g. Guindy → T. Nagar)',
        'Tap Watch to NFC Terminal or Show QR',
        'Wrist Haptic Alert at Destination Stop'
      ],
      keyFeatures: [
        { title: 'Glanceable High-Contrast UI', desc: 'Ultra-large text and vibrant neon indicators optimized for small OLED watch screens under bright sunlight.' },
        { title: 'Haptic Bus Stop Alarms', desc: 'Vibrates on your wrist 500 meters before your destination stop.' },
        { title: 'Offline QR Ticketing', desc: 'Generates encrypted offline ticket codes when underground or in low signal zones.' }
      ],
      outcomes: [
        { metric: '1.2s', label: 'Average Ticket Display Time' },
        { metric: '98%', label: 'Task Success Rate on Wearables' },
        { metric: 'Zero', label: 'Phone Pulling Needed' }
      ],
      screens: [
        { title: 'Watch Quick Ticket Face', desc: 'Micro circular UI showing active bus ticket, live route progress arc, and QR code button.', tag: 'Wearable Screen 1' },
        { title: 'NFC Tap Confirmation', desc: 'Haptic celebration ring confirming bus conductor validation.', tag: 'Wearable Screen 2' }
      ]
    }
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & User Research',
    description: 'Uncovering core user motivations, domain constraints, business goals, and competitive landscapes through qualitative interviews and audits.',
    tag: 'Research → Insights',
    color: '#FF5A79',
    bgTint: 'bg-pink-50 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800/40'
  },
  {
    number: '02',
    title: 'Synthesizing Architecture',
    description: 'Mapping user journeys, sitemaps, information architecture, and core task flows to eliminate navigation friction from ground up.',
    tag: 'Insights → IA',
    color: '#6366F1',
    bgTint: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/40'
  },
  {
    number: '03',
    title: 'Rapid Wireframing & AI Ideation',
    description: 'Translating structured IA into low-fidelity wireframes while using generative AI to brainstorm alternative layout variants rapidly.',
    tag: 'IA → Wireframes',
    color: '#10B981',
    bgTint: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40'
  },
  {
    number: '04',
    title: 'High-Fidelity Design Systems',
    description: 'Crafting pixel-perfect components, design tokens, responsive typography, micro-interactions, and visual polishing in Figma.',
    tag: 'Wireframes → Prototype',
    color: '#0EA5E9',
    bgTint: 'bg-sky-50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800/40'
  },
  {
    number: '05',
    title: 'Usability Testing & Dev Hand-off',
    description: 'Validating hi-fi prototypes with real users on Maze, fine-tuning edge cases, and exporting complete Figma developer specs.',
    tag: 'Prototype → Validated Design',
    color: '#8B5CF6',
    bgTint: 'bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800/40'
  }
];

export const STAT_COUNTERS: StatCounter[] = [
  {
    id: 'steps',
    value: 65,
    suffix: '%',
    prefix: '',
    label: 'Fewer steps to book',
    description: 'Streamlined diagnostic booking workflow from 9 complex steps down to 3 intuitive taps.'
  },
  {
    id: 'reports',
    value: 12400,
    suffix: '+',
    prefix: '',
    label: 'Reports analyzed',
    description: 'Patient lab report parameters parsed into smart color-coded visual health indicators.'
  },
  {
    id: 'accessibility',
    value: 100,
    suffix: '%',
    prefix: '',
    label: 'Accessible by design',
    description: 'Strict adherence to WCAG 2.1 AA contrast standards, keyboard focus, and screen reader labels.'
  }
];

export const SKILLS_DATA: SkillCardData[] = [
  {
    title: 'UX Methods & AI-Driven Design',
    subtitle: 'Methodical human research paired with cutting-edge AI acceleration',
    iconName: 'Sparkles',
    badge: 'Strategy & AI',
    skills: [
      { name: 'User Research & Personas', highlight: true, tag: 'Core' },
      { name: 'Information Architecture (IA)', highlight: true, tag: 'Core' },
      { name: 'Wireframing & Prototyping', highlight: true, tag: 'Core' },
      { name: 'Usability Testing (Maze)', highlight: false },
      { name: 'AI Prompt Engineering for UX', highlight: true, tag: 'AI Superpower' },
      { name: 'Vibe Coding & Rapid Prototyping', highlight: true, tag: 'AI Superpower' },
      { name: 'AI-Powered Design Systems', highlight: true, tag: 'AI Superpower' },
      { name: 'Accessibility Auditing (WCAG 2.1)', highlight: false },
      { name: 'Micro-Interactions & Animation', highlight: false },
      { name: 'Competitive Audits & Benchmarking', highlight: false }
    ]
  },
  {
    title: 'Design Systems & Tools',
    subtitle: 'Industry-standard production software and design system tooling',
    iconName: 'Layers',
    badge: 'Software & Code',
    skills: [
      { name: 'Figma (Variables & Auto-Layout)', highlight: true, tag: 'Primary Tool' },
      { name: 'FigJam', highlight: false },
      { name: 'Adobe XD', highlight: false },
      { name: 'Framer', highlight: true, tag: 'Interactive' },
      { name: 'Adobe Illustrator', highlight: false },
      { name: 'Adobe Photoshop', highlight: false },
      { name: 'Adobe After Effects', highlight: false },
      { name: 'Miro & Whimsical', highlight: false },
      { name: 'Maze & UserTesting', highlight: false },
      { name: 'HTML5 / CSS3 / Tailwind Basics', highlight: true, tag: 'Front-end' },
      { name: 'Git & Developer Hand-off', highlight: false }
    ]
  }
];

export const BENEFIT_CARDS: BenefitCard[] = [
  {
    icon: 'Cpu',
    title: 'Detail-Oriented Precision',
    subtitle: 'Engineering Mindset',
    description: 'Grounded in my B.E. Electronics background in SMD component design, I bring meticulous sub-pixel precision and structured logic to complex UI design systems.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: 'Users',
    title: 'Collaborative & Agile',
    subtitle: 'Cross-Functional Team Player',
    description: 'Experienced in working side-by-side with frontend developers, product managers, and business stakeholders in fast-paced Agile sprint cycles.',
    color: 'from-indigo-500 to-violet-500'
  },
  {
    icon: 'GraduationCap',
    title: 'Always Learning',
    subtitle: '6 Months of Training',
    description: 'Certified Aspira Design Institute graduate with 6 months of intensive practical design training, design audits, and real-world project portfolios.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: 'ShieldCheck',
    title: 'Accessible by Default',
    subtitle: 'WCAG 2.1 AA Standard',
    description: 'Deeply committed to inclusive digital design, ensuring high contrast ratios, touch target accessibility, and screen-reader friendly DOM hierarchies.',
    color: 'from-amber-500 to-orange-500'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    period: '2024 — Present',
    title: 'UI/UX & Product Designer',
    organization: 'GMIndia',
    location: 'Chennai, Tamil Nadu, India',
    type: 'Full-time',
    description: 'Designing end-to-end user interfaces, diagnostic dashboards, component design systems, and AI-assisted prototype workflows for enterprise digital products.',
    highlight: true
  },
  {
    period: '2023 — 2024',
    title: 'UI/UX Master Certification',
    organization: 'Aspira Design Institute',
    location: 'Chennai, India',
    type: '6 Months Intensive',
    description: 'Mastered user research methodologies, information architecture, wireframing, high-fidelity Figma prototyping, micro-interactions, and design systems.',
    highlight: true
  },
  {
    period: '2022 — 2023',
    title: 'Electronics Engineer',
    organization: 'Coromandel Electronics',
    location: 'Chennai, India',
    type: 'Full-time',
    description: 'Designed surface-mount device (SMD) hardware components and analytical circuit layouts, developing deep discipline in precision, specs, and systemic thinking.',
    highlight: false
  },
  {
    period: '2018 — 2022',
    title: 'B.E. Electronics & Instrumentation',
    organization: 'Anna University Affiliated',
    location: 'Chennai, India',
    type: 'Bachelor of Engineering',
    description: 'Graduated with strong analytical foundation, control systems engineering, signals & instrumentation, and human-computer interaction principles.',
    highlight: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: '[Placeholder Review: Replace with real client feedback] Unesh delivered exceptional Figma prototypes for our medical diagnostic workflow. His ability to turn complex clinical requirements into clean 3-step mobile screens saved our development team weeks of rework!',
    author: 'S. Rajagopalan',
    role: 'Senior Product Manager',
    organization: 'HealthTech Solutions',
    rating: 5,
    avatarInitials: 'SR',
    avatarBg: 'bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-300'
  },
  {
    id: 't2',
    quote: '[Placeholder Review: Replace with real client feedback] Working with Unesh on Sky Vault was a delight. He brought fresh AI-assisted design techniques, structured our entire design token library, and maintained 100% WCAG accessibility throughout.',
    author: 'Kavitha N.',
    role: 'Lead Frontend Architect',
    organization: 'CloudScale SaaS',
    rating: 5,
    avatarInitials: 'KN',
    avatarBg: 'bg-sky-100 text-sky-600 dark:bg-sky-900/40 dark:text-sky-300'
  },
  {
    id: 't3',
    quote: '[Placeholder Review: Replace with real client feedback] Unesh possesses rare hybrid strengths — an engineer’s analytical rigor combined with a human-centered UI aesthetic. His Aspira portfolio work stood out for its clarity and user research depth.',
    author: 'M. Anand',
    role: 'Design Mentor',
    organization: 'Aspira Design Institute',
    rating: 5,
    avatarInitials: 'MA',
    avatarBg: 'bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300'
  }
];

export const MARQUEE_TAGLINES = [
  'Clear Flows',
  'Accessible Interfaces',
  'Faster Iterations',
  'AI-Accelerated UX',
  'Human-Centered Design',
  'Pixel Perfection',
  'Design Systems',
  'Figma Wizardry',
  'Chennai, India'
];
