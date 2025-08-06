export const Presentation = () => {
    return (
<section className="relative flex p-8 text-white bg-[url(https://stsci-opo.org/STScI-01G8H16R2HR90J3Q2HF4B6F4HN.png)] bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/60 before:z-0">
    <div className="relative z-10">
        <p className="flex font-bold pl-8">Olá meu nome é Luiz Gabriel</p>
        <h1 className="text-8xl font-bold text-center m-8">
            Full Stack
            <br />
            Developer
        </h1>
    </div>

    <aside className="relative z-10 m-10 [&_p]:mb-4">
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