import { Briefcase, ChartNoAxesCombined, Layers3 } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const icons = [
    <Briefcase key="briefcase" size={24} />,
    <Layers3 key="layers" size={24} />,
    <ChartNoAxesCombined key="chart" size={24} />
];

export const Experience = () => {
    const { t } = useLanguage();

    return (
        <section className="bg-[var(--bg-color)]" id="experience">
            <h2 className="heading">
                {t.experience.title} <span>{t.experience.titleHighlight}</span>
            </h2>

            <p className="mx-auto mb-16 max-w-[95rem] text-center text-[1.9rem] leading-relaxed text-white/80">
                {t.experience.intro}
            </p>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {t.experience.items.map((item, index) => (
                    <article
                        key={`${item.period}-${item.role}`}
                        className="rounded-[2.4rem] border border-white/10 bg-[rgba(50,57,70,0.55)] p-8 shadow-[0_0_2rem_rgba(0,0,0,0.12)] backdrop-blur-sm"
                    >
                        <div className="mb-6 flex items-center gap-4">
                            <div className="inline-flex rounded-full border border-[var(--main-color)]/30 bg-[rgba(14,255,255,0.08)] p-4 text-[var(--main-color)]">
                                {icons[index % icons.length]}
                            </div>
                            <div>
                                <p className="text-[1.3rem] uppercase tracking-[0.25rem] text-[var(--main-color)]">{item.period}</p>
                                <h3 className="mt-2 text-[2.8rem] font-bold leading-tight">{item.role}</h3>
                                <p className="text-[1.7rem] text-white/70">{item.company}</p>
                            </div>
                        </div>

                        <p className="mb-6 text-[1.7rem] leading-relaxed text-white/80">
                            {item.summary}
                        </p>

                        <div className="space-y-4">
                            {item.achievements.map((achievement) => (
                                <div
                                    key={achievement}
                                    className="rounded-[1.6rem] border border-white/8 bg-black/10 px-5 py-4 text-[1.55rem] leading-relaxed text-white/85"
                                >
                                    {achievement}
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};
