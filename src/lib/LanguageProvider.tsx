import { useEffect, useState, type ReactNode } from 'react';
import { LanguageContext, translations, type Language } from './i18n';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === 'undefined') {
            return 'es';
        }

        const savedLanguage = window.localStorage.getItem('portfolio-language');
        return savedLanguage === 'en' ? 'en' : 'es';
    });

    useEffect(() => {
        window.localStorage.setItem('portfolio-language', language);
        document.documentElement.lang = language;
        document.title = language === 'es'
            ? 'Luis Bustamante | Portfolio Full Stack'
            : 'Luis Bustamante | Full Stack Portfolio';
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};
