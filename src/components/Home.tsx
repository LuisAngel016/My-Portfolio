import { Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { ReactTyped } from 'react-typed';
import { useLanguage } from '../lib/i18n';

export const Home = () => {
    const { language, t } = useLanguage();

    return (
        <section className="min-h-screen flex flex-col md:flex-row justify-center items-center" id="home">
            <div className="order-1 md:order-1">
                <h3 className="fade-up text-[2.6rem] lg:text-[3.2rem] font-bold">{t.home.greeting}</h3>
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
                    className="text-[5rem] md:text-[5.6rem] font-bold leading-[1.3]"
                >
                    Luis Bustamante
                </motion.h1>
                <h3 className="fade-up delay-2 text-[2.6rem] lg:text-[3.2rem] font-bold mb-8">
                    {t.home.rolePrefix}{' '}
                    <span className="text-[var(--main-color)]">
                        <ReactTyped
                            key={language}
                            strings={t.home.roles}
                            typeSpeed={100}
                            backSpeed={100}
                            backDelay={1000}
                            loop
                        />
                    </span>
                </h3>
                <p className="fade-up delay-3 text-2xl">
                    {t.home.description}
                </p>

                <div className="fade-up delay-3 flex">
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
                    download="Curriculum.pdf"
                    className="fade-up delay-3 btn mb-12 md:mb-0 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t.home.cvButton}
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
