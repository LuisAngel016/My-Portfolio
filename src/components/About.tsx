import { BriefcaseBusiness, MonitorSmartphone, Rocket, ScanSearch } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

const statIcons = [
    <BriefcaseBusiness key="briefcase" size={22} />,
    <MonitorSmartphone key="monitor" size={22} />,
    <Rocket key="rocket" size={22} />,
    <ScanSearch key="search" size={22} />
];

export const About = () => {
    const { t } = useLanguage();

    return (
        <section className="flex flex-col lg:flex-row justify-center items-center gap-16 bg-[var(--second-bg-color)]" id="about">
            <div className="w-full lg:w-[38%] flex justify-center">
                <div className="relative w-full max-w-[40rem]">
                    <div className="absolute -inset-3 rounded-[3rem] bg-[linear-gradient(135deg,rgba(14,255,255,0.28),rgba(14,255,255,0.03))] blur-xl" />

                    <div className="relative rounded-[3rem] border border-white/10 bg-[rgba(31,36,45,0.7)] p-6 shadow-[0_0_2rem_rgba(14,255,255,0.08)] backdrop-blur-sm">
                        <img
                            src="/images/me.png"
                            alt="Luis Bustamante"
                            className="w-full rounded-[2.4rem] object-cover"
                        />

                        <div className="mt-6 rounded-[2rem] border border-[var(--main-color)]/30 bg-[rgba(14,255,255,0.08)] p-6">
                            <p className="text-[1.4rem] uppercase tracking-[0.25rem] text-[var(--main-color)]">{t.about.profileLabel}</p>
                            <h3 className="mt-3 text-[2.4rem] font-semibold">{t.about.profileTitle}</h3>
                            <p className="mt-3 text-[1.5rem] leading-relaxed text-white/80">
                                {t.about.profileDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-[62%]">
                <p className="text-[1.5rem] uppercase tracking-[0.35rem] text-[var(--main-color)] mb-4">{t.about.eyebrow}</p>

                <h2 className="text-[4.8rem] md:text-[6rem] font-bold leading-[1.1] text-left">
                    {t.about.title} <span>{t.about.titleHighlight}</span>
                </h2>

                <p className="text-[1.9rem] md:text-[2rem] my-8 text-white/85 leading-relaxed max-w-[80rem]">
                    {t.about.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
                    {t.about.highlights.map((highlight) => (
                        <div
                            key={highlight}
                            className="rounded-[2rem] border border-white/10 bg-[rgba(31,36,45,0.7)] p-6 text-[1.6rem] leading-relaxed text-white/85 shadow-[0_0_1.2rem_rgba(0,0,0,0.15)]"
                        >
                            {highlight}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
                    {t.about.stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="rounded-[2rem] border border-[var(--main-color)]/20 bg-[rgba(14,255,255,0.05)] p-6 shadow-[0_0_1rem_rgba(14,255,255,0.06)]"
                        >
                            <div className="mb-4 inline-flex rounded-full border border-[var(--main-color)]/30 p-3 text-[var(--main-color)]">
                                {statIcons[index]}
                            </div>
                            <h3 className="text-[2.2rem] font-bold text-white">{stat.value}</h3>
                            <p className="mt-2 text-[1.4rem] uppercase tracking-[0.12rem] text-white/65">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                    <a href="#portfolio" className="btn text-center">
                        {t.about.projectsButton}
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1Jogra6jz__lh4w9tSg83w590c12waToj/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-[4rem] border-2 border-[var(--main-color)] px-[2.8rem] py-4 text-2xl font-semibold text-[var(--main-color)] transition-all duration-300 hover:bg-[var(--main-color)] hover:text-[var(--second-bg-color)]"
                    >
                        {t.about.cvButton}
                    </a>
                </div>
            </div>
        </section>
    );
};
