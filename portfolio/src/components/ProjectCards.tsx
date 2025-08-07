export const ProjectCards = () => {
    return (
        <div className="justify-center gap-4 p-4 mt-10">
            <h2 className="text-center mb-10">
                Projetos
            </h2>

            <section className="flex justify-center items-center" >

                <div className="max-w-sm border border-gray-200 rounded-lg shadow-sm bg-[var(--color-2)] dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="/imgs/PrateleiraInteligente.png" alt="PrateleiraInteligente" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Prateleira Inteligente</h5>
                        </a>
                        <p className="mb-3 font-normal text-white">
                            O projeto foi criado com o objetivo de conectar leitores apaixonados. Aqui, você pode dar notas aos livros que leu, escrever comentários sinceros sobre sua experiência e conferir o que outras pessoas acharam da mesma leitura. É uma forma simples e colaborativa de descobrir novos títulos, trocar opiniões e enriquecer seu repertório literário. Cada avaliação ajuda a comunidade a encontrar boas histórias e evitar decepções!
                        </p>
                        <a
                            href="https://github.com/carlla15/PrateleiraInteligente"
                            target="_blank"
                            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 transition-colors duration-200"
                        >
                            View Code
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                        </a>

                    </div>
                </div>

            </section>
        </div>
    );
}