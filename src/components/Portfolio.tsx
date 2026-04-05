import { ExternalLink } from 'lucide-react';

export const Portfolio = () => {
    const projects = [
        {
            id: 1,
            image: '/images/teslo-shop.png',
            title: 'TesloShop',
            url: 'https://teslo-shop-frontend-lb.netlify.app/#/',
            credentials: 'user: test1@google.com | pass: Abc123',
            description: 'Proyecto de tienda en línea desarrollado con React y NestJs.'
        },
        {
            id: 2,
            image: '/images/heroes.png',
            title: 'Heroes App',
            url: 'https://heroes-app-universe.netlify.app/#/',
            description: 'Aplicación de gestión de héroes desarrollada con React y NestJs.'
        },
        // {
        //     id: 3,
        //     image: '/images/portfolio3.svg',
        //     title: 'Web Design',
        //     url: 'https://teslo-shop-frontend-lb.netlify.app/#/',
        //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, dolores.'
        // },
        // {
        //     id: 4,
        //     image: '/images/portfolio4.svg',
        //     title: 'Web Design',
        //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, dolores.'
        // },
        // {
        //     id: 5,
        //     image: '/images/portfolio5.svg',
        //     title: 'Web Design',
        //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, dolores.'
        // },
        // {
        //     id: 6,
        //     image: '/images/portfolio6.svg',
        //     title: 'Web Design',
        //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, dolores.'
        // }
    ];

    return (
        <section className="bg-[var(--second-bg-color)]" id="portfolio">
            <h2 className="heading">
                Proyectos <span>destacados</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
                {projects.map((project) => (
                    <div key={project.id} className="relative rounded-[2rem] shadow-[0_0_1rem_var(--bg-color)] overflow-hidden flex group">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[350px] object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[var(--main-color)] to-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col text-center px-16 transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                            <h4 className="text-[3rem] font-bold text-white">{project.title}</h4>
                            <p className="text-2xl my-1 mb-4 text-white">{project.description}</p>
                            {
                                project.credentials && (
                                    <div>
                                        <h2 className='text-lg text-white mb-4'>{project.credentials}</h2>
                                    </div>
                                )
                            }
                            <a
                                href={project.url}
                                target="_blank"
                                className="inline-flex justify-center items-center w-20 h-20 bg-[var(--text-color)] rounded-full text-[var(--bg-color)] hover:bg-[var(--bg-color)] hover:text-[var(--text-color)] transition-colors duration-300"
                            >
                                <ExternalLink size={20} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
