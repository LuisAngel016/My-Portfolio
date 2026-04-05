import { BriefcaseBusiness, MonitorSmartphone, Rocket, ScanSearch } from 'lucide-react';

const highlights = [
    'Experiencia construyendo soluciones web, moviles y de escritorio.',
    'Participacion en sistemas de inventario, facturacion, reportes PDF y dashboards.',
    'Enfoque en rendimiento, calidad de codigo y experiencia de usuario.'
];

const stats = [
    {
        value: '+3',
        label: 'anos de experiencia',
        icon: <BriefcaseBusiness size={22} />
    },
    {
        value: 'Full Stack',
        label: 'desarrollo end to end',
        icon: <MonitorSmartphone size={22} />
    },
    {
        value: 'Impacto real',
        label: 'productos y procesos',
        icon: <Rocket size={22} />
    },
    {
        value: 'Mejora continua',
        label: 'optimizacion y aprendizaje',
        icon: <ScanSearch size={22} />
    }
];

export const About = () => {
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
                            <p className="text-[1.4rem] uppercase tracking-[0.25rem] text-[var(--main-color)]">Perfil profesional</p>
                            <h3 className="mt-3 text-[2.4rem] font-semibold">Desarrollador Full Stack</h3>
                            <p className="mt-3 text-[1.5rem] leading-relaxed text-white/80">
                                Construyo productos digitales enfocados en negocio, rendimiento y experiencia de usuario.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-[62%]">
                <p className="text-[1.5rem] uppercase tracking-[0.35rem] text-[var(--main-color)] mb-4">Acerca de mi</p>

                <h2 className="text-[4.8rem] md:text-[6rem] font-bold leading-[1.1] text-left">
                    Desarrollo soluciones que se ven bien y tambien <span>resuelven problemas reales</span>
                </h2>

                <p className="text-[1.9rem] md:text-[2rem] my-8 text-white/85 leading-relaxed max-w-[80rem]">
                    Soy Luis Bustamante, desarrollador de software con experiencia en aplicaciones web, moviles y de escritorio.
                    He trabajado en productos que optimizan procesos de negocio, automatizan flujos y mejoran la toma de
                    decisiones con interfaces claras, arquitectura solida y foco en escalabilidad.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
                    {highlights.map((highlight) => (
                        <div
                            key={highlight}
                            className="rounded-[2rem] border border-white/10 bg-[rgba(31,36,45,0.7)] p-6 text-[1.6rem] leading-relaxed text-white/85 shadow-[0_0_1.2rem_rgba(0,0,0,0.15)]"
                        >
                            {highlight}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-[2rem] border border-[var(--main-color)]/20 bg-[rgba(14,255,255,0.05)] p-6 shadow-[0_0_1rem_rgba(14,255,255,0.06)]"
                        >
                            <div className="mb-4 inline-flex rounded-full border border-[var(--main-color)]/30 p-3 text-[var(--main-color)]">
                                {stat.icon}
                            </div>
                            <h3 className="text-[2.2rem] font-bold text-white">{stat.value}</h3>
                            <p className="mt-2 text-[1.4rem] uppercase tracking-[0.12rem] text-white/65">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                    <a href="#portfolio" className="btn text-center">
                        Ver proyectos
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1Jogra6jz__lh4w9tSg83w590c12waToj/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-[4rem] border-2 border-[var(--main-color)] px-[2.8rem] py-4 text-2xl font-semibold text-[var(--main-color)] transition-all duration-300 hover:bg-[var(--main-color)] hover:text-[var(--second-bg-color)]"
                    >
                        Ver CV
                    </a>
                </div>
            </div>
        </section>
    );
};
