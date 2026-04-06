import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

export const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const handleNavClick = (section: string) => {
        setActiveSection(section);
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');

            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id') || '';
                }
            });

            setActiveSection(current);
            setIsSticky(window.scrollY > 100);
            setMenuOpen(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full px-[2.5%] lg:px-[9%] py-10.5 bg-[var(--bg-color)] flex justify-between items-center z-[100] ${isSticky ? 'border-b border-black/20' : ''}`}
        >
            <a href="#" className="text-4xl text-[var(--main-color)] font-semibold cursor-default">
                Luis Angel
            </a>

            <div
                className="text-6xl text-[var(--text-color)] block md:hidden cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <X size={36} /> : <Menu size={36} />}
            </div>

            <div className={`${menuOpen ? 'block' : 'hidden'} md:flex md:items-center md:gap-8 absolute md:relative top-full md:top-0 left-0 md:left-auto w-full md:w-auto px-[3%] md:px-0 py-4 md:py-0 bg-[var(--bg-color)] md:bg-transparent border-t md:border-t-0 border-black/20 shadow-md md:shadow-none`}>
                <nav>
                    <a
                        href="#home"
                        className={`block md:inline text-2xl text-center md:text-left ml-0 md:ml-16 my-12 md:my-0 transition-colors duration-300 ease-in-out hover:text-[var(--main-color)] ${activeSection === 'home' ? '!text-[var(--main-color)]' : 'text-[var(--text-color)]'}`}
                        onClick={() => handleNavClick('home')}
                    >
                        {t.nav.home}
                    </a>
                    <a
                        href="#about"
                        className={`block md:inline text-2xl text-center md:text-left ml-0 md:ml-16 my-12 md:my-0 transition-colors duration-300 ease-in-out hover:text-[var(--main-color)] ${activeSection === 'about' ? '!text-[var(--main-color)]' : 'text-[var(--text-color)]'}`}
                        onClick={() => handleNavClick('about')}
                    >
                        {t.nav.about}
                    </a>
                    <a
                        href="#skills"
                        className={`block md:inline text-2xl text-center md:text-left ml-0 md:ml-16 my-12 md:my-0 transition-colors duration-300 ease-in-out hover:text-[var(--main-color)] ${activeSection === 'skills' ? '!text-[var(--main-color)]' : 'text-[var(--text-color)]'}`}
                        onClick={() => handleNavClick('skills')}
                    >
                        {t.nav.skills}
                    </a>
                    <a
                        href="#portfolio"
                        className={`block md:inline text-2xl text-center md:text-left ml-0 md:ml-16 my-12 md:my-0 transition-colors duration-300 ease-in-out hover:text-[var(--main-color)] ${activeSection === 'portfolio' ? '!text-[var(--main-color)]' : 'text-[var(--text-color)]'}`}
                        onClick={() => handleNavClick('portfolio')}
                    >
                        {t.nav.portfolio}
                    </a>
                    <a
                        href="#contact"
                        className={`block md:inline text-2xl text-center md:text-left ml-0 md:ml-16 my-12 md:my-0 transition-colors duration-300 ease-in-out hover:text-[var(--main-color)] ${activeSection === 'contact' ? '!text-[var(--main-color)]' : 'text-[var(--text-color)]'}`}
                        onClick={() => handleNavClick('contact')}
                    >
                        {t.nav.contact}
                    </a>
                </nav>

                <div className="mt-6 md:mt-0 flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 p-2">
                    <span className="text-[1.2rem] uppercase tracking-[0.18rem] text-white/60 px-3">{t.language.label}</span>
                    <button
                        type="button"
                        onClick={() => setLanguage('es')}
                        className={`rounded-full px-5 py-2 text-[1.4rem] font-semibold transition-colors duration-300 ${language === 'es' ? 'bg-[var(--main-color)] text-[var(--second-bg-color)]' : 'text-white/70 hover:bg-white/10'}`}
                    >
                        {t.language.spanish}
                    </button>
                    <button
                        type="button"
                        onClick={() => setLanguage('en')}
                        className={`rounded-full px-5 py-2 text-[1.4rem] font-semibold transition-colors duration-300 ${language === 'en' ? 'bg-[var(--main-color)] text-[var(--second-bg-color)]' : 'text-white/70 hover:bg-white/10'}`}
                    >
                        {t.language.english}
                    </button>
                </div>
            </div>
        </header>
    );
};
