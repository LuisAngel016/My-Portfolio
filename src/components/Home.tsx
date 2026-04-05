import { Linkedin, Github } from 'lucide-react';
import { ReactTyped } from 'react-typed';

export const Home = () => {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center" id="home">
            <div className="order-1 md:order-1">
                <h3 className="text-[2.6rem] lg:text-[3.2rem] font-bold">Hola, soy</h3>
                <h1 className="text-[5rem] md:text-[5.6rem] font-bold leading-[1.3]">Luis Bustamante</h1>
                <h3 className="text-[2.6rem] lg:text-[3.2rem] font-bold mb-8">
                    Soy{' '}
                    <span className="text-[var(--main-color)]">
                        <ReactTyped
                            strings={['Desarrollador Full Stack']}
                            typeSpeed={100}
                            backSpeed={100}
                            backDelay={1000}
                            loop
                        />
                    </span>
                </h3>
                <p className="text-2xl">
                    Desarrollador de software con +3 años de experiencia en el diseño y desarrollo de aplicaciones web, móviles y de escritorio.
                </p>

                <div className="flex">
                    <a
                        href="https://www.linkedin.com/in/luis-angel-bustamante-herazo-30882a258/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://github.com/LuisAngel016"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <Github size={20} />
                    </a>
                </div>

                <a
                    href="https://drive.google.com/file/d/1Jogra6jz__lh4w9tSg83w590c12waToj/view?usp=sharing"
                    download="Currículum.pdf"
                    className="btn mb-12 md:mb-0 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Descargar CV
                </a>
            </div>

            <div className="order-2 md:order-2">
                <img
                    src="/images/me.png"
                    alt="Luis Bustamante"
                    className="w-[70vw] md:w-[22vw] sm:w-[70vw] rounded-[10px] animate-[floatImage_4s_ease-in-out_infinite]"
                />
            </div>
        </section>
    );
};
