import { createContext, useContext } from 'react';

export type Language = 'es' | 'en';

type PortfolioProject = {
    id: number;
    title: string;
    url: string;
    description: string;
    images: string[];
    category: string;
    stack: string[];
    credentials?: string;
};

type TranslationSchema = {
    nav: {
        home: string;
        about: string;
        experience: string;
        skills: string;
        portfolio: string;
        contact: string;
    };
    language: {
        label: string;
        spanish: string;
        english: string;
    };
    home: {
        greeting: string;
        rolePrefix: string;
        roles: string[];
        description: string;
        cvButton: string;
    };
    about: {
        profileLabel: string;
        profileTitle: string;
        profileDescription: string;
        eyebrow: string;
        title: string;
        titleHighlight: string;
        description: string;
        highlights: string[];
        stats: Array<{
            value: string;
            label: string;
        }>;
        projectsButton: string;
        cvButton: string;
    };
    skills: {
        title: string;
        titleHighlight: string;
        items: Array<{
            title: string;
            description: string;
        }>;
    };
    experience: {
        title: string;
        titleHighlight: string;
        intro: string;
        items: Array<{
            period: string;
            badge: string;
            role: string;
            company: string;
            summary: string;
            stack: string[];
            achievements: string[];
        }>;
    };
    portfolio: {
        title: string;
        titleHighlight: string;
        projects: PortfolioProject[];
    };
    contact: {
        title: string;
        titleHighlight: string;
        name: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
        submit: string;
    };
    footer: {
        copyright: string;
    };
};

export const translations: Record<Language, TranslationSchema> = {
    es: {
        nav: {
            home: 'Inicio',
            about: 'Sobre mí',
            experience: 'Experiencia',
            skills: 'Habilidades',
            portfolio: 'Proyectos',
            contact: 'Contacto'
        },
        language: {
            label: 'Idioma',
            spanish: 'ES',
            english: 'EN'
        },
        home: {
            greeting: 'Hola, soy',
            rolePrefix: 'Soy',
            roles: ['Desarrollador Full Stack'],
            description: 'Desarrollador de software con más de 5 años de experiencia diseñando y construyendo aplicaciones web, móviles y de escritorio.',
            cvButton: 'Descargar CV'
        },
        about: {
            profileLabel: 'Perfil profesional',
            profileTitle: 'Desarrollador Full Stack',
            profileDescription: 'Construyo productos digitales enfocados en negocio, rendimiento y experiencia de usuario.',
            eyebrow: 'Acerca de mí',
            title: 'Desarrollo experiencias intuitivas que también',
            titleHighlight: 'resuelven problemas reales',
            description: 'Soy Luis Bustamante, desarrollador de software con experiencia en aplicaciones web, móviles y de escritorio. He trabajado en productos que optimizan procesos de negocio, automatizan flujos y mejoran la toma de decisiones con interfaces claras, arquitectura sólida y foco en escalabilidad.',
            highlights: [
                'Experiencia construyendo soluciones web, móviles y de escritorio.',
                'Participación en sistemas de inventario, facturación, reportes PDF y dashboards.',
                'Enfoque en rendimiento, calidad de código y experiencia de usuario.'
            ],
            stats: [
                { value: '+5', label: 'años de experiencia' },
                { value: 'Full Stack', label: 'desarrollo end to end' },
                { value: 'Impacto real', label: 'productos y procesos' },
                { value: 'Mejora continua', label: 'optimización y aprendizaje' }
            ],
            projectsButton: 'Ver proyectos',
            cvButton: 'Ver CV'
        },
        skills: {
            title: 'Mis',
            titleHighlight: 'habilidades',
            items: [
                {
                    title: 'Desarrollo web',
                    description: 'Especializado en desarrollo full stack con React, TypeScript, TanStack Query, Nest y tecnologías modernas. Creo interfaces responsivas y soluciones escalables para productos web.'
                },
                {
                    title: 'Diseño de interfaces',
                    description: 'Diseño experiencias atractivas y funcionales con foco en UX/UI, consistencia visual y claridad en cada flujo del producto.'
                },
                {
                    title: 'Desarrollo móvil',
                    description: 'Construyo aplicaciones móviles con Flutter y React Native, priorizando rendimiento, mantenibilidad y una experiencia sólida para el usuario final.'
                }
            ]
        },
        experience: {
            title: 'Mi',
            titleHighlight: 'experiencia',
            intro: 'He trabajado en productos donde el software no era solo una interfaz, sino una herramienta para mejorar operaciones, automatizar procesos y dar soporte real a decisiones de negocio.',
            items: [
                {
                    period: 'Abril 2026 – Actualidad',
                    badge: 'Actual',
                    role: 'Desarrollador Full Stack',
                    company: 'Flowy · SaaS de inventario (producto propio)',
                    summary: 'Diseñé y desarrollo una plataforma SaaS multi-tenant de inventario y ventas para PYMEs, con POS, kardex, lotes, compras, flujo de caja y reportes PDF.',
                    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'TanStack Query'],
                    achievements: [
                        'Arquitectura multi-tenant con aislamiento por schema en PostgreSQL y más de 30 módulos de negocio.',
                        'POS completo con arqueos de caja, código de barras, devoluciones y facturación en PDF.',
                        'CI/CD con GitHub Actions, pruebas E2E (Jest y Playwright) e integraciones con Wompi, Cloudflare R2 y Resend.'
                    ]
                },
                {
                    period: 'Marzo 2024 – Marzo 2026',
                    badge: 'Tiempo completo',
                    role: 'Desarrollador Full Stack',
                    company: 'KPISOFT · Sincelejo, Colombia',
                    summary: 'Modernicé una plataforma empresarial migrando de PHP a React + NestJS y desarrollé una app de escritorio en Flutter con operación offline y sincronización en tiempo real para el área de almacén.',
                    stack: ['React', 'TypeScript', 'NestJS', 'Flutter', 'PostgreSQL'],
                    achievements: [
                        'Flujo de almacén (RQ, inventario y entregas) con dashboard comparativo de despachos para la toma de decisiones.',
                        'Migración de plataforma PHP a React + NestJS, mejorando escalabilidad, rendimiento y experiencia de usuario.',
                        'App de escritorio en Flutter con modo offline y sincronización en tiempo real mediante WebSockets.'
                    ]
                }
            ]
        },
        portfolio: {
            title: 'Proyectos',
            titleHighlight: 'destacados',
            projects: [
                {
                    id: 6,
                    images: ['/images/flowy-dashboard.png', '/images/flowy-pos.png', '/images/flowy-ventas.png'],
                    title: 'Flowy',
                    url: 'https://app.flowystock.com',
                    category: 'SaaS · Inventario',
                    stack: ['React', 'NestJS', 'PostgreSQL', 'TypeScript'],
                    description: 'Plataforma SaaS multi-tenant de inventario y ventas para PYMEs: POS con caja registradora, kardex, lotes, compras, flujo de caja y reportes PDF.'
                },
                {
                    id: 1,
                    images: ['/images/teslo-shop.png'],
                    title: 'TesloShop',
                    url: 'https://teslo-shop-frontend-lb.netlify.app/#/',
                    category: 'E-commerce',
                    stack: ['React', 'NestJS', 'TypeScript'],
                    credentials: 'user: test1@google.com | pass: Abc123',
                    description: 'E-commerce desarrollado con React y NestJS.'
                },
                {
                    id: 2,
                    images: ['/images/heroes.png'],
                    title: 'Heroes App',
                    url: 'https://heroes-app-universe.netlify.app/#/',
                    category: 'Dashboard app',
                    stack: ['React', 'NestJS', 'TypeScript'],
                    description: 'Aplicación de gestión de héroes desarrollada con React y NestJS.'
                },
                {
                    id: 3,
                    images: ['/images/enloslabiosrubi.png'],
                    title: 'En Los Labios Rubi',
                    url: 'https://enloslabiosrubi.com/',
                    category: 'Beauty store',
                    stack: ['React', 'TypeScript', 'E-commerce'],
                    description: 'E-commerce de belleza con foco en experiencia de compra, identidad visual y catálogo online.'
                },
                {
                    id: 4,
                    images: ['/images/appointler 2.png', '/images/appointler.png'],
                    title: 'Appointler',
                    url: 'https://appointler.netlify.app/',
                    category: 'SaaS',
                    stack: ['React', 'TypeScript', 'NestJS'],
                    description: 'SaaS para gestión de citas con landing pública y panel administrativo en una misma presentación.'
                },
                {
                    id: 5,
                    images: ['/images/maisonblanche.png'],
                    title: 'Maison Blanche',
                    url: 'https://maison-blanche-stays.vercel.app/es',
                    category: 'Hotel boutique',
                    stack: ['Astro', 'Tailwind', 'TypeScript'],
                    description: 'Landing premium para hotel boutique con una propuesta visual elegante, foco en reservas y secciones de suites, spa, restaurante y galería.'
                },
                {
                    id: 7,
                    images: ['/images/cinemapedia-cover.svg'],
                    title: 'Cinemapedia',
                    url: 'https://github.com/LuisAngel016/flutter-cinemapedia',
                    category: 'App de películas',
                    stack: ['Flutter', 'Riverpod', 'Clean Architecture'],
                    description: 'App de películas desarrollada en Flutter durante el curso de DevTalles: arquitectura limpia por capas, estado con Riverpod, go_router y consumo de The MovieDB API.'
                }
            ]
        },
        contact: {
            title: 'Contacta',
            titleHighlight: 'conmigo',
            name: 'Nombre completo',
            email: 'Correo electrónico',
            phone: 'Teléfono',
            subject: 'Asunto',
            message: 'Tu mensaje',
            submit: 'Enviar mensaje'
        },
        footer: {
            copyright: 'Copyright © 2026 Luis Angel. Todos los derechos reservados.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            portfolio: 'Projects',
            contact: 'Contact'
        },
        language: {
            label: 'Language',
            spanish: 'ES',
            english: 'EN'
        },
        home: {
            greeting: 'Hi, I am',
            rolePrefix: 'I am a',
            roles: ['Full Stack Developer'],
            description: 'Software developer with 5+ years of experience designing and building web, mobile, and desktop applications.',
            cvButton: 'Download CV'
        },
        about: {
            profileLabel: 'Professional profile',
            profileTitle: 'Full Stack Developer',
            profileDescription: 'I build digital products focused on business impact, performance, and user experience.',
            eyebrow: 'About me',
            title: 'I build intuitive experiences that also',
            titleHighlight: 'solve real problems',
            description: 'I am Luis Bustamante, a software developer with experience in web, mobile, and desktop applications. I have worked on products that optimize business processes, automate workflows, and improve decision-making through clear interfaces, solid architecture, and scalable solutions.',
            highlights: [
                'Experience building web, mobile, and desktop solutions.',
                'Hands-on work in inventory flows, billing systems, PDF reports, and dashboards.',
                'Strong focus on performance, code quality, and user experience.'
            ],
            stats: [
                { value: '5+', label: 'years of experience' },
                { value: 'Full Stack', label: 'end-to-end delivery' },
                { value: 'Real impact', label: 'products and processes' },
                { value: 'Continuous growth', label: 'optimization and learning' }
            ],
            projectsButton: 'View projects',
            cvButton: 'View CV'
        },
        skills: {
            title: 'My',
            titleHighlight: 'skills',
            items: [
                {
                    title: 'Web development',
                    description: 'Focused on full stack development with React, TypeScript, TanStack Query, Nest, and modern tooling. I build responsive interfaces and scalable web solutions.'
                },
                {
                    title: 'Interface design',
                    description: 'I design attractive and functional product experiences with a strong focus on UX/UI, visual consistency, and clear user flows.'
                },
                {
                    title: 'Mobile development',
                    description: 'I build mobile apps with Flutter and React Native, prioritizing performance, maintainability, and a polished user experience.'
                }
            ]
        },
        experience: {
            title: 'My',
            titleHighlight: 'experience',
            intro: 'I have contributed to projects where software is not just an interface, but a tool to improve operations, automate workflows, and generate measurable business outcomes.',
            items: [
                {
                    period: 'April 2026 – Present',
                    badge: 'Current',
                    role: 'Full Stack Developer',
                    company: 'Flowy · Inventory SaaS (own product)',
                    summary: 'I designed and built a multi-tenant inventory and sales SaaS platform for SMBs, with POS, stock ledger, batches, purchases, cash flow, and PDF reports.',
                    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'TanStack Query'],
                    achievements: [
                        'Multi-tenant architecture with schema isolation in PostgreSQL and 30+ business modules.',
                        'Full POS: cash register sessions, barcode scanning, returns, and PDF invoicing.',
                        'CI/CD with GitHub Actions, E2E tests (Jest and Playwright), and Wompi, Cloudflare R2, and Resend integrations.'
                    ]
                },
                {
                    period: 'March 2024 – March 2026',
                    badge: 'Full-time',
                    role: 'Full Stack Developer',
                    company: 'KPISOFT · Sincelejo, Colombia',
                    summary: 'I modernized an enterprise platform migrating from PHP to React + NestJS, and built a Flutter desktop app with offline operation and real-time sync for the warehouse area.',
                    stack: ['React', 'TypeScript', 'NestJS', 'Flutter', 'PostgreSQL'],
                    achievements: [
                        'Warehouse flow (requests, inventory, deliveries) with a comparative dispatch dashboard for decision-making.',
                        'Platform migration from PHP to React + NestJS, improving scalability, performance, and user experience.',
                        'Flutter desktop app with offline mode and real-time synchronization over WebSockets.'
                    ]
                }
            ]
        },
        portfolio: {
            title: 'Featured',
            titleHighlight: 'projects',
            projects: [
                {
                    id: 6,
                    images: ['/images/flowy-dashboard.png', '/images/flowy-pos.png', '/images/flowy-ventas.png'],
                    title: 'Flowy',
                    url: 'https://app.flowystock.com',
                    category: 'SaaS · Inventory',
                    stack: ['React', 'NestJS', 'PostgreSQL', 'TypeScript'],
                    description: 'Multi-tenant inventory and sales SaaS platform for SMBs: POS with cash register, stock ledger, batches, purchases, cash flow, and PDF reports.'
                },
                {
                    id: 1,
                    images: ['/images/teslo-shop.png'],
                    title: 'TesloShop',
                    url: 'https://teslo-shop-frontend-lb.netlify.app/#/',
                    category: 'E-commerce',
                    stack: ['React', 'NestJS', 'TypeScript'],
                    credentials: 'user: test1@google.com | pass: Abc123',
                    description: 'E-commerce project built with React and NestJS.'
                },
                {
                    id: 2,
                    images: ['/images/heroes.png'],
                    title: 'Heroes App',
                    url: 'https://heroes-app-universe.netlify.app/#/',
                    category: 'Dashboard app',
                    stack: ['React', 'NestJS', 'TypeScript'],
                    description: 'Hero management application built with React and NestJS.'
                },
                {
                    id: 3,
                    images: ['/images/enloslabiosrubi.png'],
                    title: 'En Los Labios Rubi',
                    url: 'https://enloslabiosrubi.com/',
                    category: 'Beauty store',
                    stack: ['React', 'TypeScript', 'E-commerce'],
                    description: 'Beauty e-commerce focused on shopping experience, visual branding, and online catalog presentation.'
                },
                {
                    id: 4,
                    images: ['/images/appointler 2.png', '/images/appointler.png'],
                    title: 'Appointler',
                    url: 'https://appointler.netlify.app/',
                    category: 'SaaS',
                    stack: ['React', 'TypeScript', 'NestJS'],
                    description: 'Appointment management SaaS with a public landing page and admin dashboard showcased in a single card.'
                },
                {
                    id: 5,
                    images: ['/images/maisonblanche.png'],
                    title: 'Maison Blanche',
                    url: 'https://maison-blanche-stays.vercel.app/es',
                    category: 'Boutique hotel',
                    stack: ['Astro', 'Tailwind', 'TypeScript'],
                    description: 'Premium landing page for a boutique hotel with an elegant visual system, booking-focused flows, and sections for suites, spa, restaurant, and gallery.'
                },
                {
                    id: 7,
                    images: ['/images/cinemapedia-cover.svg'],
                    title: 'Cinemapedia',
                    url: 'https://github.com/LuisAngel016/flutter-cinemapedia',
                    category: 'Movie app',
                    stack: ['Flutter', 'Riverpod', 'Clean Architecture'],
                    description: 'Movie app built with Flutter during the DevTalles course: layered clean architecture, Riverpod state management, go_router, and The MovieDB API.'
                }
            ]
        },
        contact: {
            title: 'Get in',
            titleHighlight: 'touch',
            name: 'Full name',
            email: 'Email address',
            phone: 'Phone number',
            subject: 'Subject',
            message: 'Your message',
            submit: 'Send message'
        },
        footer: {
            copyright: 'Copyright © 2026 Luis Angel. All rights reserved.'
        }
    }
};

export type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: TranslationSchema;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }

    return context;
};
