import { Code, Palette, Smartphone } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

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
                        className="flex-1 min-w-[30rem] bg-[var(--second-bg-color)] p-12 pt-12 pb-16 rounded-[2rem] text-center border-[0.2rem] border-[var(--bg-color)] transition-all duration-500 ease-in-out hover:border-[var(--main-color)] hover:scale-105"
                    >
                        <div className="text-[var(--main-color)] mb-6 flex justify-center items-center">
                            {skill.icon}
                        </div>
                        <h3 className="text-[2.6rem] font-semibold">{skill.title}</h3>
                        <p className="text-[1.2rem] my-4 mb-8">{skill.description}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};
