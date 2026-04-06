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
            about: 'Sobre mi',
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
            description: 'Desarrollador de software con +3 anos de experiencia en el diseno y desarrollo de aplicaciones web, moviles y de escritorio.',
            cvButton: 'Descargar CV'
        },
        about: {
            profileLabel: 'Perfil profesional',
            profileTitle: 'Desarrollador Full Stack',
            profileDescription: 'Construyo productos digitales enfocados en negocio, rendimiento y experiencia de usuario.',
            eyebrow: 'Acerca de mi',
            title: 'Desarrollo soluciones que se ven bien y tambien',
            titleHighlight: 'resuelven problemas reales',
            description: 'Soy Luis Bustamante, desarrollador de software con experiencia en aplicaciones web, moviles y de escritorio. He trabajado en productos que optimizan procesos de negocio, automatizan flujos y mejoran la toma de decisiones con interfaces claras, arquitectura solida y foco en escalabilidad.',
            highlights: [
                'Experiencia construyendo soluciones web, moviles y de escritorio.',
                'Participacion en sistemas de inventario, facturacion, reportes PDF y dashboards.',
                'Enfoque en rendimiento, calidad de codigo y experiencia de usuario.'
            ],
            stats: [
                { value: '+3', label: 'anos de experiencia' },
                { value: 'Full Stack', label: 'desarrollo end to end' },
                { value: 'Impacto real', label: 'productos y procesos' },
                { value: 'Mejora continua', label: 'optimizacion y aprendizaje' }
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
                    description: 'Especializado en desarrollo full stack con React, TypeScript, TanStack Query, Nest y tecnologias modernas. Creo interfaces responsivas y soluciones escalables para productos web.'
                },
                {
                    title: 'Diseno de interfaces',
                    description: 'Diseno experiencias atractivas y funcionales con foco en UX/UI, consistencia visual y claridad en cada flujo del producto.'
                },
                {
                    title: 'Desarrollo movil',
                    description: 'Construyo aplicaciones moviles con Flutter y React Native, priorizando rendimiento, mantenibilidad y una experiencia solida para el usuario final.'
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
                    description: 'Aplicacion de gestion de heroes desarrollada con React y NestJS.'
                },
                {
                    id: 3,
                    images: ['/images/enloslabiosrubi.png'],
                    title: 'En Los Labios Rubi',
                    url: 'https://enloslabiosrubi.com/',
                    description: 'E-commerce de belleza con foco en experiencia de compra, identidad visual y catalogo online.'
                },
                {
                    id: 4,
                    images: ['/images/appointler 2.png', '/images/appointler.png'],
                    title: 'Appointler',
                    url: 'https://appointler.netlify.app/',
                    description: 'SaaS para gestion de citas con landing publica y panel administrativo en una misma presentacion.'
                }
            ]
        },
        contact: {
            title: 'Contacta',
            titleHighlight: 'conmigo',
            name: 'Nombre completo',
            email: 'Correo electronico',
            phone: 'Telefono',
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
            title: 'I build solutions that look great and also',
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
