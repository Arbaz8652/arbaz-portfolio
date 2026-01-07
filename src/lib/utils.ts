import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getResumeUrl() {
  return {
        personalInfo: {
            resumeUrl: 'https://amzn-arbaz-docs.s3.ap-southeast-1.amazonaws.com/CV_Arbaz_Pathan_2026.pdf',
            email: 'parbaz313@gmail.com',
            gitHubUrl: 'https://github.com/Arbaz8652',
            linkedInUrl: 'https://www.linkedin.com/in/arbaz-pathan-sde/',
            location: 'Mumbai, Maharashtra, India',
        },
        getTinTouchText: 'I\'m always interested in hearing about new opportunities, challenging projects, or just connecting with fellow engineers. Feel free to reach out!',
        aboutMe:{
            line1: 'I\'m a Backend Software Engineer with over 3+ years of experience building scalable, reliable systems in the fintech industry. My passion lies in designing elegant solutions to complex problems—whether that\'s architecting a microservices ecosystem or optimizing database queries for sub-millisecond response times.',
            line2: 'Currently, I focus on building payment infrastructure and financial APIs that process millions of transactions daily. I believe in writing clean, maintainable code and building systems that are not just functional, but resilient and observable.',
            line3: 'When I\'m not coding, you\'ll find me contributing to open-source projects, writing technical articles, or exploring new technologies that push the boundaries of what\'s possible in backend development.',
            apiDesignText: 'RESTful & GraphQL APIs handling millions of requests',
            dbaText: 'PostgreSQL optimization, indexing, and schema design',
            systemDesignText: 'Distributed systems, microservices, and event-driven architecture',
            performanceText: 'Caching strategies, async processing, and load balancing'
        },
        projects: [
            {
                title: 'Scalable Payment Gateway',
                description: 'Developed a payment gateway handling over 1 million transactions daily with 99.99% uptime using microservices architecture.',
                techStack: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'Kubernetes'],
                problem: 'Legacy payment system couldn\'t scale beyond 1000 TPS with frequent timeouts during peak hours.',
                solution: 'Built event-driven architecture with Kafka, implemented circuit breakers, and horizontal scaling.',
                result: 'Achieved 10,000+ TPS with 40ms average latency and zero payment failures in 6 months.'
            },
            {
                title: 'Real-time Analytics Pipeline',
                description: 'Created a distributed data pipeline processing millions of events daily for business intelligence dashboards.',
                techStack: ['Node.js', 'TimescaleDB', 'Redis', 'WebSocket', 'Grafana'],
                problem: 'Analytics queries taking 30+ seconds, blocking critical business decisions.',
                solution: 'Implemented stream processing with materialized views and time-series optimizations.',
                result: 'Reduced query time to <100ms, enabling real-time dashboards for 500+ users.'
            },
            {
                title: 'Microservices Platform',
                description: 'Engineered a cloud-native platform with service mesh, automated scaling, and comprehensive observability.',
                techStack: ['Node.js', 'gRPC', 'Kubernetes', 'Istio', 'Prometheus'],
                problem: 'Monolithic architecture causing 2-week deployment cycles and cascading failures.',
                solution: 'Decomposed into 20+ microservices with API gateway, distributed tracing, and blue-green deployments.',
                result: 'Enabled daily deployments, 60% faster feature delivery, and isolated failure domains.'
            }
        ],
        technicalSkills: {
            langAndRuntime: ['JavaScript', 'TypeScript', 'Node.js', 'Python'],
            frameworks: ['Express', 'NestJS', 'Fastify', 'React'],
            databases: ['PostgreSQL', 'Redis', 'MongoDB', 'TimescaleDB'],
            toolsAndPlatforms: ['Docker', 'Kubernetes', 'AWS', 'Git', 'Jenkins']
        }
    };
}