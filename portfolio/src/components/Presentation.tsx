export const Presentation = () => {
    return (
        <section className="relative flex p-8 text-white">
            <div>
                <p className="flex text-3xl font-bold pl-8">Olá meu nome é Luiz Gabriel</p>
                <h1 className="text-8xl font-bold text-center m-8">
                    Full Stack
                    <br />
                    Developer
                    <span className="ml-2 blink">|</span>
                </h1>

                <ul className="flex ml-8 text-3xl mb-3 [&_li]:transition-transform [&_li]:hover:scale-110">
                    <li className="mx-3">
                        <a href="https://www.instagram.com/luiz_gabr1el/" target="_blank" rel="noopener" aria-label="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="LuizBuarqueDev" target="_blank" rel="noopener" aria-label="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="https://www.linkedin.com/in/luiz-gabriel-buarque-vasconcelos-24074328b/" target="_blank" rel="noopener" aria-label="Linkedin">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <aside className="m-10 [&_p]:mb-4">
                <p>
                    Olá, meu nome é Luiz Gabriel, tenho 21 anos e este é meu repositório pessoal. Sou um desenvolvedor apaixonado
                    por tecnologia, com foco em desenvolvimento full stack, embora tenha uma forte preferência e maior experiência
                    na área de backend.
                </p>
                <p>
                    Atualmente, estou em busca de oportunidades para aplicar e expandir minhas habilidades técnicas, colaborar em
                    projetos desafiadores e contribuir para o crescimento de equipes inovadoras. Tenho conhecimentos sólidos em
                    diversas tecnologias e sou dedicado ao aprendizado contínuo, visando sempre a entrega de soluções eficientes e
                    escaláveis.
                </p>
                <p>
                    Se você procura um profissional proativo, comprometido e apaixonado pelo desenvolvimento de software, estou à
                    disposição para agregar valor ao seu time.
                </p>
            </aside>
        </section>
    );
}