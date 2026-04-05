export const About = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 bg-[var(--second-bg-color)]" id="about">
            <div className="order-1 md:order-1">
                <img
                    src="/images/me.png"
                    alt="About Luis Bustamante"
                    className="w-[70vw] md:w-[22vw] lg:w-[70vw] rounded-2xl mt-16 md:mt-0"
                />
            </div>

            <div className="order-2 md:order-2">
                <h2 className="text-7xl font-bold leading-[1.2] md:text-left">
                    About <span>Me</span>
                </h2>
                <h3 className="text-[2.6rem] font-semibold">FullStack Developer!</h3>
                <p className="text-2xl my-8 mb-12">
                    {/* Mi nombre es Luis Angel Bustamante Herazo, Ingeniero de Sistemas y Desarrollador Web.
                    Me especializo en la creación de experiencias digitales a través del desarrollo web.
                    Como ingeniero de sistemas, me apasiona la construcción de sitios web y aplicaciones,
                    empleando tecnologías como HTML, CSS, JavaScript y React. Mi compromiso radica en
                    desarrollar soluciones web que no solo cumplan con los requisitos, sino que también
                    destaquen por su innovación y calidad. Además, poseo habilidades en el nivel B1 de inglés,
                    lo que me permite comunicarme efectivamente en un entorno profesional y estar abierto
                    a colaboraciones internacionales. */}
                    Desarrollador de software con +3 años de experiencia en el diseño y desarrollo de aplicaciones web, móviles y de escritorio. He
                    trabajado y aportado en proyectos clave como flujos de inventario, sistemas de facturación, generación de reportes en PDF,
                    dashboards comparativos y aplicaciones híbridas con Flutter. Me caracterizo por la calidad del código, la optimización del
                    rendimiento y la búsqueda constante de nuevas tecnologías para aportar valor a cada proyecto
                </p>
                {/* <a href="#" className="btn">
                    Read More
                </a> */}
            </div>
        </section>
    );
};