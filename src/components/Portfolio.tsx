import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

type Project = {
    id: number;
    title: string;
    url: string;
    description: string;
    images: string[];
    credentials?: string;
};

const PortfolioCard = ({ project }: { project: Project }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const hasMultipleImages = project.images.length > 1;

    useEffect(() => {
        if (!hasMultipleImages) return;

        const intervalId = window.setInterval(() => {
            setImageIndex((current) => (current + 1) % project.images.length);
        }, 2000);

        return () => window.clearInterval(intervalId);
    }, [hasMultipleImages, project.images.length]);

    return (
        <div className="relative rounded-[2rem] shadow-[0_0_1rem_var(--bg-color)] overflow-hidden flex group">
            <img
                src={project.images[imageIndex]}
                alt={project.title}
                className="w-full h-[350px] object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
            />

            {hasMultipleImages && (
                <div className="absolute top-5 right-5 flex gap-2 z-10">
                    {project.images.map((_, index) => (
                        <span
                            key={`${project.id}-${index}`}
                            className={`h-3 w-3 rounded-full transition-colors duration-300 ${index === imageIndex ? 'bg-white' : 'bg-white/40'}`}
                        />
                    ))}
                </div>
            )}

            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[var(--main-color)] to-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col text-center px-16 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                <h4 className="text-[3rem] font-bold text-white">{project.title}</h4>
                <p className="text-2xl my-1 mb-4 text-white">{project.description}</p>
                {project.credentials && (
                    <div>
                        <h2 className="text-lg text-white mb-4">{project.credentials}</h2>
                    </div>
                )}
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center w-20 h-20 bg-[var(--text-color)] rounded-full text-[var(--bg-color)] hover:bg-[var(--bg-color)] hover:text-[var(--text-color)] transition-colors duration-300"
                >
                    <ExternalLink size={20} />
                </a>
            </div>
        </div>
    );
};

export const Portfolio = () => {
    const projects: Project[] = [
        {
            id: 1,
            images: ['/images/teslo-shop.png'],
            title: 'TesloShop',
            url: 'https://teslo-shop-frontend-lb.netlify.app/#/',
            credentials: 'user: test1@google.com | pass: Abc123',
            description: 'Proyecto de tienda en linea desarrollado con React y NestJS.'
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
            description: 'E-commerce de belleza con una propuesta visual de marca enfocada en experiencia de compra y catalogo online.'
        },
        {
            id: 4,
            images: ['/images/appointler 2.png', '/images/appointler.png'],
            title: 'Appointler',
            url: 'https://appointler.netlify.app/',
            description: 'SaaS para gestion de citas con landing publica y panel administrativo que rota entre ambas vistas automaticamente.'
        }
    ];

    return (
        <section className="bg-[var(--second-bg-color)]" id="portfolio">
            <h2 className="heading">
                Proyectos <span>destacados</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
                {projects.map((project) => (
                    <PortfolioCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};
