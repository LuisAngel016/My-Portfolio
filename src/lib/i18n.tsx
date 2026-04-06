import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Language = 'es' | 'en';

type PortfolioProject = {
    id: number;
    title: string;
    url: string;
    description: string;
    images: string[];
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

const translations: Record<Language, TranslationSchema> = {
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
            description: 'Desarrollador de software con más de 3 años de experiencia diseñando y construyendo aplicaciones web, móviles y de escritorio.',
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
                { value: '+3', label: 'años de experiencia' },
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
                    period: '2022 - Actualidad',
                    badge: 'Impacto',
                    role: 'Desarrollador Full Stack',
                    company: 'Productos internos, dashboards y herramientas operativas',
                    summary: 'He desarrollado soluciones enfocadas en operación, control y visibilidad del negocio, combinando frontend, backend y diseño de flujos útiles para usuarios reales.',
                    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL'],
                    achievements: [
                        'Implementación de flujos de inventario y facturación para operaciones internas.',
                        'Construcción de dashboards comparativos y reportes PDF para apoyar la toma de decisiones.',
                        'Desarrollo de interfaces web y móviles con foco en escalabilidad, claridad y mantenibilidad.'
                    ]
                },
                {
                    period: 'Stack principal',
                    badge: 'Stack principal',
                    role: 'React, TypeScript, NestJS, Flutter',
                    company: 'Frontend, backend y móvil',
                    summary: 'Me desenvuelvo en productos end-to-end, conectando la capa visual con lógica de negocio, APIs y persistencia de datos.',
                    stack: ['React', 'TanStack Query', 'NestJS', 'Flutter'],
                    achievements: [
                        'Interfaces modernas y responsivas orientadas a conversión y productividad.',
                        'Integración de APIs, formularios, paneles de administración y módulos de negocio.',
                        'Optimización de experiencia de usuario, estructura de código y tiempos de entrega.'
                    ]
                }
            ]
        },
        portfolio: {
            title: 'Proyectos',
            titleHighlight: 'destacados',
            projects: [
                {
                    id: 1,
                    images: ['/images/teslo-shop.png'],
                    title: 'TesloShop',
                    url: 'https://teslo-shop-frontend-lb.netlify.app/#/',
                    credentials: 'user: test1@google.com | pass: Abc123',
                    description: 'E-commerce desarrollado con React y NestJS.'
                },
                {
                    id: 2,
                    images: ['/images/heroes.png'],
                    title: 'Heroes App',
                    url: 'https://heroes-app-universe.netlify.app/#/',
                    description: 'Aplicación de gestión de héroes desarrollada con React y NestJS.'
                },
                {
                    id: 3,
                    images: ['/images/enloslabiosrubi.png'],
                    title: 'En Los Labios Rubi',
                    url: 'https://enloslabiosrubi.com/',
                    description: 'E-commerce de belleza con foco en experiencia de compra, identidad visual y catálogo online.'
                },
                {
                    id: 4,
                    images: ['/images/appointler 2.png', '/images/appointler.png'],
                    title: 'Appointler',
                    url: 'https://appointler.netlify.app/',
                    description: 'SaaS para gestión de citas con landing pública y panel administrativo en una misma presentación.'
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
            copyright: 'Copyright © 2025 Luis Angel. Todos los derechos reservados.'
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
            description: 'Software developer with 3+ years of experience designing and building web, mobile, and desktop applications.',
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
                { value: '3+', label: 'years of experience' },
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
                    period: '2022 - Present',
                    badge: 'Impact',
                    role: 'Full Stack Developer',
                    company: 'Product and digital solution projects',
                    summary: 'I work on business-oriented applications with strong attention to architecture, user experience, and performance.',
                    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL'],
                    achievements: [
                        'Implemented inventory and billing workflows for internal operations.',
                        'Built comparative dashboards and PDF reports to support decision-making.',
                        'Delivered web and mobile interfaces with scalability and maintainability in mind.'
                    ]
                },
                {
                    period: 'Core stack',
                    badge: 'Core stack',
                    role: 'React, TypeScript, NestJS, Flutter',
                    company: 'Frontend, backend, and mobile',
                    summary: 'I am comfortable building end-to-end products, connecting the visual layer with business logic and data.',
                    stack: ['React', 'TanStack Query', 'NestJS', 'Flutter'],
                    achievements: [
                        'Modern responsive interfaces focused on conversion and productivity.',
                        'API integrations, forms, admin panels, and business modules.',
                        'Continuous optimization of user experience, code structure, and delivery speed.'
                    ]
                }
            ]
        },
        portfolio: {
            title: 'Featured',
            titleHighlight: 'projects',
            projects: [
                {
                    id: 1,
                    images: ['/images/teslo-shop.png'],
                    title: 'TesloShop',
                    url: 'https://teslo-shop-frontend-lb.netlify.app/#/',
                    credentials: 'user: test1@google.com | pass: Abc123',
                    description: 'E-commerce project built with React and NestJS.'
                },
                {
                    id: 2,
                    images: ['/images/heroes.png'],
                    title: 'Heroes App',
                    url: 'https://heroes-app-universe.netlify.app/#/',
                    description: 'Hero management application built with React and NestJS.'
                },
                {
                    id: 3,
                    images: ['/images/enloslabiosrubi.png'],
                    title: 'En Los Labios Rubi',
                    url: 'https://enloslabiosrubi.com/',
                    description: 'Beauty e-commerce focused on shopping experience, visual branding, and online catalog presentation.'
                },
                {
                    id: 4,
                    images: ['/images/appointler 2.png', '/images/appointler.png'],
                    title: 'Appointler',
                    url: 'https://appointler.netlify.app/',
                    description: 'Appointment management SaaS with a public landing page and admin dashboard showcased in a single card.'
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
            copyright: 'Copyright © 2025 Luis Angel. All rights reserved.'
        }
    }
};

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: TranslationSchema;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === 'undefined') {
            return 'es';
        }

        const savedLanguage = window.localStorage.getItem('portfolio-language');
        return savedLanguage === 'en' ? 'en' : 'es';
    });

    useEffect(() => {
        window.localStorage.setItem('portfolio-language', language);
        document.documentElement.lang = language;
        document.title = language === 'es'
            ? 'Luis Bustamante | Portfolio Full Stack'
            : 'Luis Bustamante | Full Stack Portfolio';
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }

    return context;
};
