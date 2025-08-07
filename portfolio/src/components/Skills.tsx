export const Skills = () => {
    return (
        <div className="justify-center p-8 text-white m-10">
            <h2 className="text-center">
                Skills
            </h2>

            <section className="[&_i]:text-7xl [&_i]:mb-3 w-full flex flex-wrap justify-center">
                <div className="border-2 border-white rounded-lg m-4 text-center p-8 w-60">
                    <i className="fa-brands fa-html5"></i>
                    <h5>HTML</h5>
                    <p>HTML é a linguagem fundamental para a construção de páginas web, permitindo estruturar conteúdos e criar interfaces.</p>
                </div>

                <div className="border-2 border-white rounded-lg m-4 text-center p-8 w-60">
                    <i className="fa-brands fa-css3-alt"></i>
                    <h5>CSS</h5>
                    <p>CSS é a linguagem usada para estilizar páginas web, controlando cores, layouts e animações.</p>
                </div>

                <div className="border-2 border-white rounded-lg m-4 text-center p-8 w-60">
                    <i className="fa-brands fa-js"></i>
                    <h5>JavaScript</h5>
                    <p>JavaScript é uma linguagem de programação essencial para adicionar interatividade e dinamismo às páginas web.</p>
                </div>

                <div className="border-2 border-white rounded-lg m-4 text-center p-8 w-60">
                    <i className="fa-brands fa-react"></i>
                    <h5>React</h5>
                    <p>React é uma biblioteca JavaScript para construir interfaces de usuário, facilitando a criação de componentes reutilizáveis.</p>
                </div>

                <div className="border-2 border-white rounded-lg m-4 text-center p-8 w-60">
                    <i className="fa-brands fa-vuejs"></i>
                    <h5>VueJS</h5>
                    <p>Vue.js é um framework JavaScript progressivo focado na criação de interfaces web dinâmicas e reativas com uma sintaxe simples e intuitiva</p>
                </div>




            </section>

        </div>
    );
}