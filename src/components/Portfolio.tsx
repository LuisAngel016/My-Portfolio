import { useEffect, useState } from 'react';
import { useLanguage } from '../lib/i18n';

type Project = {
    id: number;
    title: string;
    url: string;
    description: string;
    images: string[];
    category: string;
    stack: string[];
    credentials?: string;
};

const PortfolioCard = ({ project }: { project: Project }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const hasMultipleImages = project.images.length > 1;

    useEffect(() => {
        setImageIndex(0);
    }, [project.images]);

    useEffect(() => {
        if (!hasMultipleImages) return;

        const intervalId = window.setInterval(() => {
            setImageIndex((current) => (current + 1) % project.images.length);
        }, 2000);

        return () => window.clearInterval(intervalId);
    }, [hasMultipleImages, project.images.length]);

    return (
        <div
            className="group relative flex cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(31,36,45,0.55)] shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[rgba(14,255,255,0.35)] hover:shadow-[0_18px_48px_rgba(0,0,0,0.42)]"
            onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
        >
            <img
                src={project.images[imageIndex]}
                alt={project.title}
                className="h-[350px] w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:brightness-[0.95]"
            />

            <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5">
                <span className="rounded-full border border-white/20 bg-[rgba(12,15,22,0.58)] px-4 py-2 text-[1.1rem] font-semibold uppercase tracking-[0.16rem] text-white/95 backdrop-blur-sm transition-colors duration-300 group-hover:border-white/35 group-hover:bg-[rgba(12,15,22,0.72)] group-hover:text-white">
                    {project.category}
                </span>

                {hasMultipleImages && (
                    <div className="flex gap-2">
                        {project.images.map((_, index) => (
                            <span
                                key={`${project.id}-${index}`}
                                className={`h-3 w-3 rounded-full transition-colors duration-300 ${index === imageIndex ? 'bg-white' : 'bg-white/40'}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_65%_22%,rgba(255,255,255,0.12),rgba(255,255,255,0)_46%),linear-gradient(120deg,rgba(8,10,15,0.18),rgba(8,10,15,0.42))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute inset-x-0 bottom-0 z-10 bg-[linear-gradient(180deg,rgba(8,10,15,0),rgba(8,10,15,0.82)_42%,rgba(8,10,15,0.94))] p-6 pt-16">
                <h4 className="text-[2.6rem] font-bold text-white">{project.title}</h4>
                <p className="mt-2 text-[1.45rem] leading-relaxed text-white/82">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <span
                            key={`${project.id}-${tech}`}
                            className="rounded-full border border-white/20 bg-[rgba(10,12,17,0.62)] px-3 py-2 text-[1.05rem] font-semibold uppercase tracking-[0.12rem] text-white/92 backdrop-blur-sm transition-colors duration-300 group-hover:border-white/35 group-hover:bg-[rgba(10,12,17,0.78)]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-5 right-5 z-20 flex items-center gap-3">
                {project.credentials && (
                    <span className="hidden rounded-full border border-white/20 bg-[rgba(10,12,17,0.66)] px-4 py-2 text-[1rem] font-medium text-white/88 backdrop-blur-sm lg:inline-block">
                        {project.credentials}
                    </span>
                )}
            </div>
        </div>
    );
};

export const Portfolio = () => {
    const { t } = useLanguage();
    const projects: Project[] = t.portfolio.projects;

    return (
        <section className="bg-[var(--second-bg-color)] pt-[12rem]" id="portfolio">
            <h2 className="heading">
                {t.portfolio.title} <span>{t.portfolio.titleHighlight}</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
                {projects.map((project) => (
                    <PortfolioCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};
