import { Briefcase, ChartNoAxesCombined, Layers3 } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const icons = [
    <Briefcase key="briefcase" size={24} />,
    <Layers3 key="layers" size={24} />,
    <ChartNoAxesCombined key="chart" size={24} />
];

const techAccent: Record<string, string> = {
    React: 'bg-sky-400',
    TypeScript: 'bg-blue-500',
    NestJS: 'bg-rose-500',
    PostgreSQL: 'bg-indigo-400',
    Flutter: 'bg-cyan-400',
    'TanStack Query': 'bg-orange-400'
};

type ExperienceItemData = {
    period: string;
    badge: string;
    role: string;
    company: string;
    summary: string;
    stack: string[];
    achievements: string[];
};

const ExperienceItem = ({ item, index }: { item: ExperienceItemData; index: number }) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, rootMargin: '0px 0px -80px 0px' });

    return (
        <article
            ref={ref}
            className={`relative md:pl-28 transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
            <div className={`absolute left-0 top-4 hidden h-18 w-18 items-center justify-center rounded-full border border-[var(--main-color)]/35 bg-[rgba(14,255,255,0.1)] text-[var(--main-color)] shadow-[0_0_1.2rem_rgba(14,255,255,0.12)] md:flex transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
                {icons[index % icons.length]}
            </div>

            <div className={`absolute left-[3.5rem] top-[6.8rem] hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-[var(--bg-color)] bg-[var(--main-color)] shadow-[0_0_1rem_rgba(14,255,255,0.45)] md:block transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />

            <div className="relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(50,57,70,0.72),rgba(31,36,45,0.88))] p-8 shadow-[0_0_2rem_rgba(0,0,0,0.16)] backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1">
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[rgba(14,255,255,0.08)] blur-3xl" />

                <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                        <p className="text-[1.3rem] uppercase tracking-[0.28rem] text-[var(--main-color)]">{item.period}</p>
                        <h3 className="mt-3 text-[2.8rem] font-bold leading-tight">{item.role}</h3>
                        <p className="mt-2 text-[1.7rem] text-white/70">{item.company}</p>
                    </div>

                    <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[1.35rem] uppercase tracking-[0.16rem] text-white/65">
                        {item.badge}
                    </div>
                </div>

                <p className="mb-6 max-w-[88rem] text-[1.75rem] leading-relaxed text-white/82">
                    {item.summary}
                </p>

                <div className="mb-6 flex flex-wrap gap-3">
                    {item.stack.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center gap-3 rounded-full border border-[var(--main-color)]/20 bg-[rgba(14,255,255,0.08)] px-4 py-2 text-[1.25rem] font-semibold uppercase tracking-[0.12rem] text-[var(--main-color)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--main-color)]/40 hover:bg-[rgba(14,255,255,0.14)]"
                        >
                            <span className={`h-3 w-3 rounded-full ${techAccent[tech] ?? 'bg-[var(--main-color)]'}`} />
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {item.achievements.map((achievement) => (
                        <div
                            key={achievement}
                            className="rounded-[1.8rem] border border-white/8 bg-black/10 px-5 py-5 text-[1.55rem] leading-relaxed text-white/85"
                        >
                            {achievement}
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export const Experience = () => {
    const { t } = useLanguage();

    return (
        <section className="bg-[var(--bg-color)] py-[10rem]" id="experience">
            <h2 className="heading">
                {t.experience.title} <span>{t.experience.titleHighlight}</span>
            </h2>

            <p className="mx-auto mb-16 max-w-[95rem] text-center text-[1.9rem] leading-relaxed text-white/80">
                {t.experience.intro}
            </p>

            <div className="relative mx-auto max-w-[115rem]">
                <div className="absolute left-[2.3rem] top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(14,255,255,0.35),rgba(255,255,255,0.05))] md:block" />

                <div className="space-y-10">
                    {t.experience.items.map((item, index) => (
                        <ExperienceItem key={`${item.period}-${item.role}`} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
