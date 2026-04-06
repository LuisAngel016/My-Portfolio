import { Code, Palette, Smartphone } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const skillTech = [
    ['React', 'TypeScript', 'NestJS'],
    ['UX/UI', 'Design Systems', 'Branding'],
    ['Flutter', 'React Native', 'Mobile UX']
];

const SkillTechLogo = ({ tech }: { tech: string }) => {
    switch (tech) {
        case 'React':
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
                    <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#61DAFB" strokeWidth="1.6" />
                    <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 12 12)" />
                </svg>
            );
        case 'TypeScript':
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="4" fill="#3178C6" />
                    <text x="12" y="15.2" textAnchor="middle" fill="white" fontSize="8.2" fontWeight="700" fontFamily="Arial, sans-serif">TS</text>
                </svg>
            );
        case 'NestJS':
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                    <path d="M12 3L18.5 7.5L16.5 18L12 21L7.5 18L5.5 7.5L12 3Z" fill="#E0234E" />
                    <path d="M9 16V8L15 16V8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'Flutter':
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                    <path d="M6 14L12 8L15 11L9 17L6 14Z" fill="#47C5FB" />
                    <path d="M12 20L18 14L15 11L9 17L12 20Z" fill="#00569E" />
                    <path d="M9 17L12 14L15 17L12 20L9 17Z" fill="#00B5F8" />
                </svg>
            );
        case 'React Native':
            return (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
                    <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#61DAFB" strokeWidth="1.6" />
                    <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 12 12)" />
                </svg>
            );
        default:
            return <span className="h-2.5 w-2.5 rounded-full bg-[var(--main-color)]" />;
    }
};

export const Skills = () => {
    const { t } = useLanguage();

    const skills = [
        {
            icon: <Code size={70} />,
            ...t.skills.items[0]
        },
        {
            icon: <Palette size={70} />,
            ...t.skills.items[1]
        },
        {
            icon: <Smartphone size={70} />,
            ...t.skills.items[2]
        },
    ];

    return (
        <section className="skills pb-[12rem] md:pb-[16rem]" id="skills">
            <h2 className="heading">
                {t.skills.title} <span>{t.skills.titleHighlight}</span>
            </h2>

            <div className="flex justify-center items-center flex-wrap gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden flex-1 min-w-[30rem] bg-[var(--second-bg-color)] p-12 pt-12 pb-16 rounded-[2rem] text-center border-[0.2rem] border-[var(--bg-color)] transition-all duration-500 ease-in-out hover:border-[var(--main-color)] hover:scale-[1.02]"
                    >
                        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[rgba(14,255,255,0.08)] blur-3xl" />
                        <div className="text-[var(--main-color)] mb-6 flex justify-center items-center">
                            {skill.icon}
                        </div>
                        <h3 className="text-[2.6rem] font-semibold">{skill.title}</h3>
                        <p className="text-[1.45rem] my-4 mb-8 leading-relaxed text-white/85">{skill.description}</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skillTech[index].map((tech) => (
                                <span
                                    key={tech}
                                    className="inline-flex items-center gap-2 rounded-full border border-[var(--main-color)]/20 bg-[rgba(14,255,255,0.08)] px-4 py-2 text-[1.15rem] font-semibold uppercase tracking-[0.12rem] text-[var(--main-color)]"
                                >
                                    <SkillTechLogo tech={tech} />
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};
