import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Server, 
  Database, 
  Cpu, 
  Globe,
  Zap,
  Activity,
  LucideIcon,
  RectangleEllipsisIcon
} from 'lucide-react';

// ============================================
// TYPES & INTERFACES
// ============================================

export interface PersonalInfo {
  resumeUrl: string;
  email: string;
  gitHubUrl: string;
  linkedInUrl: string;
  location: string;
  profileImage: string;
  name: string;
  title: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

export interface AboutHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  icon?: string;
  customIcon?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  icon: LucideIcon;
  github: string;
  live: string;
}

export interface SystemStatusItem {
  icon: LucideIcon;
  label: string;
  status: 'online' | 'offline' | 'warning';
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

// ============================================
// PERSONAL INFORMATION
// ============================================

export const getPersonalInfo = (): PersonalInfo => ({
  name: 'Arbaz Pathan',
  title: 'Fullstack Software Engineer',
  resumeUrl: 'https://amzn-arbaz-docs.s3.ap-southeast-1.amazonaws.com/CV_Arbaz_Pathan_15_Dec_2025.pdf',
  email: 'parbaz313@gmail.com',
  gitHubUrl: 'https://github.com/Arbaz8652',
  linkedInUrl: 'https://www.linkedin.com/in/arbaz-pathan-sde/',
  location: 'Mumbai, Maharashtra, India',
  profileImage: 'https://amzn-arbaz-docs.s3.ap-southeast-1.amazonaws.com/profile.png'
});

// ============================================
// HERO SECTION
// ============================================

export const getHeroContent = () => ({
  badge: 'Fullstack Software Engineer',
  title: 'Building # for Fintech',
  titleGredient:'Scalable Systems',
  description: `Passionate about designing robust backend architectures with expertise in Node.js, PostgreSQL, Microservices, React.js, and System Reliability. Focused on performance optimization and building APIs that handle millions of requests.`,
  techHighlights: ['Node.js', 'PostgreSQL', 'Microservices', 'React.js', 'System Reliability']
});

// ============================================
// ABOUT SECTION
// ============================================

export const getAboutContent = () => ({
  paragraphs: [
    `I'm a Fullstack Software Engineer with over 3+ years of experience building scalable, reliable systems in the fintech industry. My passion lies in designing elegant solutions to complex problems—whether that's architecting a microservices ecosystem or optimizing database queries for sub-millisecond response times.`,
    `Currently, I focus on building payment infrastructure and financial APIs that process millions of transactions daily. I believe in writing clean, maintainable code and building systems that are not just functional, but resilient and observable.`,
    `When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring new technologies that push the boundaries of what's possible in backend development.`
  ]
});

export const getAboutHighlights = (): AboutHighlight[] => [
  {
    icon: Server,
    title: 'API Design',
    description: 'RESTful & GraphQL APIs handling millions of requests'
  },
  {
    icon: RectangleEllipsisIcon,
    title: 'React Web Development',
    description: 'Builds scalable, high-performance user interfaces with React'
  },
  {
    icon: Database,
    title: 'Database Architecture',
    description: 'PostgreSQL optimization, indexing, and schema design'
  },
  {
    icon: Cpu,
    title: 'System Design',
    description: 'Distributed systems, microservices, and event-driven architecture'
  },
  {
    icon: Globe,
    title: 'Performance',
    description: 'Caching strategies, async processing, and load balancing'
  }
];

// ============================================
// SKILLS SECTION
// ============================================

export const getSkillCategories = (): SkillCategory[] => [
  {
    title: 'Languages & Runtimes',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Elasticsearch', icon: 'https://cdn.simpleicons.org/elasticsearch/00BFB3' },
    ]
  },
  {
    title: 'Message Queues & Streaming',
    skills: [
      { name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
      { name: 'RabbitMQ', icon: 'https://cdn.simpleicons.org/rabbitmq/FF6600' },
      { name: 'AWS SQS',  customIcon: true  },
    ]
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg' },
      { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
      { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
    ]
  },
  {
    title: 'System Design',
    skills: [
      { name: 'Microservices', customIcon: true },
      { name: 'Event-Driven', customIcon: true },
      { name: 'API Design', customIcon: true },
      { name: 'Distributed Systems', customIcon: true },
    ]
  },
   {
    title: 'Frameworks',
    skills: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg' },
    ]
  },
];

// ============================================
// EXPERIENCE SECTION
// ============================================

export const getExperiences = (): Experience[] => [
  {
    title: "Software Engineer",
    company: "Credilio Finantial Technologies Provate Limited.",
    period: "Apr-2024 - Present",
    description: "Credilio aims to issue five million Novio cards over the next three years, building on the 50,000 cards already issued during its beta phase.",
    achievements: [
      "Designed and implemented a microservices-based payment gateway reducing latency by 40%",
      "Built async processing pipeline using Kafka handling 10K+ events/second",
      "Built and maintained microservices architecture for fintech workflows.",
      "Designed and developed a centralized Bureau microservice, reducing service redundancy by 40%",
      "Integrated third-party banking and financial APIs securely.",
      "Implemented application monitoring using New Relic, improving system observability and reliability."
    ]
  },
  {
    title: "Software Engineer",
    company: "Mountbleu Technologies Private Limited",
    period: "Nov-2022 - Mar-2024",
    description: "Software Engineer – Mounble | Optimized Product Performance & User Experience",
    achievements: [
      "Developed RESTful APIs serving 100+ enterprise clients",
      "Integrated 15+ payment providers and banking partners",
      "Implemented rate limiting and caching reducing DB load by 60%"
    ]
  },
  // {
  //   title: "Software Engineer",
  //   company: "TechStartup Inc",
  //   period: "2018 - 2020",
  //   description: "Full-stack development with focus on backend systems and database optimization.",
  //   achievements: [
  //     "Built real-time notification system using WebSockets and Redis",
  //     "Optimized PostgreSQL queries achieving 10x performance improvement",
  //     "Integrated third-party banking APIs (XML and JSON) with custom encryption and decryption logic to enable secure customer onboarding, credit validation, and real-time financial data exchange."
  //   ]
  // }
];

// ============================================
// PROJECTS SECTION
// ============================================

export const getProjects = (): Project[] => [
  {
    title: 'Payment Gateway Service',
    description: 'High-throughput payment processing system handling multi-currency transactions with 99.99% uptime.',
    problem: 'Legacy payment system couldn\'t scale beyond 1000 TPS with frequent timeouts during peak hours.',
    solution: 'Built event-driven architecture with Kafka, implemented circuit breakers, and horizontal scaling.',
    result: 'Achieved 10,000+ TPS with 40ms average latency and zero payment failures in 6 months.',
    tech: ['Node.js', 'PostgreSQL', 'Kafka', 'Redis', 'Docker'],
    icon: Zap,
    github: '#',
    live: '#'
  },
  {
    title: 'Real-time Analytics Pipeline',
    description: 'Distributed data pipeline processing millions of events daily for business intelligence.',
    problem: 'Analytics queries taking 30+ seconds, blocking critical business decisions.',
    solution: 'Implemented stream processing with materialized views and time-series optimizations.',
    result: 'Reduced query time to <100ms, enabling real-time dashboards for 500+ users.',
    tech: ['Node.js', 'TimescaleDB', 'Redis', 'WebSocket', 'Grafana'],
    icon: Database,
    github: '#',
    live: '#'
  },
  {
    title: 'Microservices Platform',
    description: 'Cloud-native platform with service mesh, automated scaling, and comprehensive observability.',
    problem: 'Monolithic architecture causing 2-week deployment cycles and cascading failures.',
    solution: 'Decomposed into 20+ microservices with API gateway, distributed tracing, and blue-green deployments.',
    result: 'Enabled daily deployments, 60% faster feature delivery, and isolated failure domains.',
    tech: ['Node.js', 'gRPC', 'Kubernetes', 'Istio', 'Prometheus'],
    icon: Server,
    github: '#',
    live: '#'
  }
];

// ============================================
// CONTACT SECTION
// ============================================

export const getContactInfo = (): ContactInfo[] => {
  const personalInfo = getPersonalInfo();
  
  return [
    { 
      icon: Mail, 
      label: 'Email', 
      value: personalInfo.email, 
      href: `mailto:${personalInfo.email}` 
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: 'github.com/Arbaz8652', 
      href: personalInfo.gitHubUrl 
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/arbaz-pathan-sde', 
      href: personalInfo.linkedInUrl 
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: personalInfo.location, 
      href: '#' 
    },
  ];
};

export const getContactContent = () => ({
  description: `I'm always interested in hearing about new opportunities, challenging projects, or just connecting with fellow engineers. Feel free to reach out!`
});

// ============================================
// SYSTEM STATUS
// ============================================

export const getSystemStatus = (): SystemStatusItem[] => [
  {
    icon: Server,
    label: 'APIs',
    status: 'online' as const
  },
  {
    icon: Database,
    label: 'DB',
    status: 'online' as const
  },
  {
    icon: Activity,
    label: '99.9%',
    status: 'online' as const
  }
];

// ============================================
// LEGACY COMPATIBILITY
// ============================================

/**
 * @deprecated Use getPersonalInfo() instead
 */
export function getResumeUrl() {
  const personalInfo = getPersonalInfo();
  const aboutContent = getAboutContent();
  const contactContent = getContactContent();
  
  return {
    personalInfo: {
      resumeUrl: personalInfo.resumeUrl,
      email: personalInfo.email,
      gitHubUrl: personalInfo.gitHubUrl,
      linkedInUrl: personalInfo.linkedInUrl,
      location: personalInfo.location,
    },
    getTinTouchText: contactContent.description,
    aboutMe: {
      line1: aboutContent.paragraphs[0],
      line2: aboutContent.paragraphs[1],
      line3: aboutContent.paragraphs[2],
      apiDesignText: 'RESTful & GraphQL APIs handling millions of requests',
      dbaText: 'PostgreSQL optimization, indexing, and schema design',
      systemDesignText: 'Distributed systems, microservices, and event-driven architecture',
      performanceText: 'Caching strategies, async processing, and load balancing'
    },
    projects: getProjects().map(p => ({
      title: p.title,
      description: p.description,
      techStack: p.tech,
      problem: p.problem,
      solution: p.solution,
      result: p.result
    })),
    technicalSkills: {
      langAndRuntime: ['JavaScript', 'TypeScript', 'Node.js', 'Python'],
      frameworks: ['Express', 'NestJS', 'Fastify', 'React'],
      databases: ['PostgreSQL', 'Redis', 'MongoDB', 'TimescaleDB'],
      toolsAndPlatforms: ['Docker', 'Kubernetes', 'AWS', 'Git', 'Jenkins']
    }
  };
}
