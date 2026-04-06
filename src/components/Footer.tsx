import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../lib/i18n';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="flex justify-between items-center flex-wrap px-[2.5%] lg:px-[9%] py-8.5 bg-[var(--second-bg-color)]">
            <div className="footer-text">
                <p className="text-2xl">{t.footer.copyright}</p>
            </div>

            <div className="footer-iconTop">
                <a
                    href="#home"
                    className="inline-flex text-black justify-center items-center p-3 bg-[var(--main-color)] rounded-lg transition-all duration-500 ease-in-out hover:shadow-[0_0_1rem_var(--main-color)]"
                >
                    <ArrowUp size={24} />
                </a>
            </div>
        </footer>
    );
};
