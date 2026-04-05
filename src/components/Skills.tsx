import { Code, Palette, Smartphone } from 'lucide-react';

export const Skills = () => {
    const skills = [
        {
            icon: <Code size={70} />,
            title: 'Web Development',
            description: 'Especializado en desarrollo fullStack con React, TypeScript, TanStack Query, Nest y tecnologías modernas. Creación de interfaces de usuario responsivas y experiencias web optimizadas. Desarrollo de soluciones escalables y seguras para la web.'
        },
        {
            icon: <Palette size={70} />,
            title: 'Graphic Design',
            description: 'Diseño de interfaces atractivas y funcionales con enfoque en UX/UI, creación de identidades visuales consistentes y recursos gráficos personalizados que mejoran la comunicación visual y la experiencia del usuario.',
        },
        {
            icon: <Smartphone size={70} />,
            title: 'Mobile Development',
            description: 'Especializado en desarrollo de aplicaciones móviles utilizando Flutter y React Native. Creación de apps multiplataforma con interfaces modernas, alto rendimiento y experiencia de usuario optimizada. Implementación de soluciones móviles innovadoras y seguras.'
        },
    ];

    return (
        <section className="skills" id="skills">
            <h2 className="heading">
                My <span>Skills</span>
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
                        {/* <a href="#" className="btn">
                            Read More
                        </a> */}
                    </div>
                ))}
            </div>

        </section>
    );
};