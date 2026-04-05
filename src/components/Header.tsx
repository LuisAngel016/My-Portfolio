import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

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

            // Cerrar menú móvil al hacer scroll
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

            <nav className={`${menuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full md:top-0 left-0 md:left-auto w-full md:w-auto px-[3%] md:px-0 py-4 md:py-0 bg-[var(--bg-color)] md:bg-transparent border-t md:border-t-0 border-black/20 shadow-md md:shadow-none`}>
                <a
                    href="#home"
                    className={`block md:inline text-2xl text-center md:text-left ml-0 md:ml-16 my-12 md:my-0 transition-colors duration-300 ease-in-out hover:text-[var(--main-color)] ${activeSection === 'home' ? '!text-[var(--main-color)]' : 'text-[var(--text-color)]'}`}
                    onClick={() => handleNavClick('home')}
                >
                    Inicio
                </a>
                <a
                    href="#about"
                    className={`block md:inline text-2xl text-center md:text-left ml-0 md:ml-16 my-12 md:my-0 transition-colors duration-300 ease-in-out hover:text-[var(--main-color)] ${activeSection === 'about' ? '!text-[var(--main-color)]' : 'text-[var(--text-color)]'}`}
                    onClick={() => handleNavClick('about')}
                >
                    Sobre mi
                </a>
                <a
                    href="#skills"
                    className={`block md:inline text-2xl text-center md:text-left ml-0 md:ml-16 my-12 md:my-0 transition-colors duration-300 ease-in-out hover:text-[var(--main-color)] ${activeSection === 'skills' ? '!text-[var(--main-color)]' : 'text-[var(--text-color)]'}`}
                    onClick={() => handleNavClick('skills')}
                >
                    Habilidades
                </a>
                <a
                    href="#portfolio"
                    className={`block md:inline text-2xl text-center md:text-left ml-0 md:ml-16 my-12 md:my-0 transition-colors duration-300 ease-in-out hover:text-[var(--main-color)] ${activeSection === 'portfolio' ? '!text-[var(--main-color)]' : 'text-[var(--text-color)]'}`}
                    onClick={() => handleNavClick('portfolio')}
                >
                    Proyectos
                </a>
                <a
                    href="#contact"
                    className={`block md:inline text-2xl text-center md:text-left ml-0 md:ml-16 my-12 md:my-0 transition-colors duration-300 ease-in-out hover:text-[var(--main-color)] ${activeSection === 'contact' ? '!text-[var(--main-color)]' : 'text-[var(--text-color)]'}`}
                    onClick={() => handleNavClick('contact')}
                >
                    Contacto
                </a>
            </nav>
        </header>
    );
};
