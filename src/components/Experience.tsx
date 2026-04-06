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

            <div className="relative mx-auto max-w-[115rem]">
                <div className="absolute left-[2.3rem] top-0 hidden h-full w-px bg-[linear-gradient(180deg,rgba(14,255,255,0.35),rgba(255,255,255,0.05))] md:block" />

                <div className="space-y-10">
                    {t.experience.items.map((item, index) => (
                        <article
                            key={`${item.period}-${item.role}`}
                            className="relative md:pl-28"
                        >
                            <div className="absolute left-0 top-4 hidden md:flex h-18 w-18 items-center justify-center rounded-full border border-[var(--main-color)]/35 bg-[rgba(14,255,255,0.1)] text-[var(--main-color)] shadow-[0_0_1.2rem_rgba(14,255,255,0.12)]">
                                {icons[index % icons.length]}
                            </div>

                            <div className="rounded-[2.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(50,57,70,0.72),rgba(31,36,45,0.88))] p-8 shadow-[0_0_2rem_rgba(0,0,0,0.16)] backdrop-blur-sm">
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
                    ))}
                </div>
            </div>
        </section>
    );
};
