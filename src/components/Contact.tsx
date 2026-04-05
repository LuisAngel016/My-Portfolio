export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="heading mb-12">
                Contacta <span>conmigo</span>
            </h2>

            <form
                action="https://formsubmit.co/7d398a27fd2eb3358e6de19bcf12e082"
                method="POST"
                className="max-w-[70rem] my-4 mx-auto text-center mb-12"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre completo"
                        required
                        className="w-full p-7 text-2xl text-[var(--text-color)] bg-[var(--second-bg-color)] rounded-md"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electronico"
                        required
                        className="w-full p-7 text-2xl text-[var(--text-color)] bg-[var(--second-bg-color)] rounded-md"
                    />
                    <input
                        type="number"
                        name="number"
                        placeholder="Telefono"
                        required
                        className="w-full p-7 text-2xl text-[var(--text-color)] bg-[var(--second-bg-color)] rounded-md"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Asunto"
                        className="w-full p-7 text-2xl text-[var(--text-color)] bg-[var(--second-bg-color)] rounded-md"
                    />
                </div>

                <textarea
                    name="comments"
                    cols={30}
                    rows={10}
                    placeholder="Tu mensaje"
                    className="w-full p-6 text-2xl text-[var(--text-color)] bg-[var(--second-bg-color)] rounded-md my-3 resize-none"
                />

                <input
                    type="submit"
                    value="Enviar mensaje"
                    className="btn mt-8 cursor-pointer"
                />

                {/* Hidden inputs para FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />
            </form>
        </section>
    );
};
