export const Footer = () => {
    return (
        <footer className="flex justify-center items-center p-4 bg-[var(--color-2)] w-auto">
            <div className="text-center mx-auto">
                <ul className="list-none flex justify-center mb-4 mt-4 [&_li]:transition-transform [&_li]:hover:scale-110">
                    <li className="mx-3">
                        <a href="#" target="_blank" rel="noopener" aria-label="Facebook">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="https://www.instagram.com/luiz_gabr1el/" target="_blank" rel="noopener" aria-label="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="https://github.com/LuizBuarqueDev" target="_blank" rel="noopener" aria-label="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="https://www.linkedin.com/in/luiz-gabriel-buarque-vasconcelos-24074328b/" target="_blank" rel="noopener" aria-label="Linkedin">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                </ul>

                <div className="[&_div]:mb-6">
                    <div>
                        Email:{" "}
                        <a href="mailto:luizgabrielbuarque@gmail.com">
                            luizgabrielbuarque@gmail.com
                        </a>
                    </div>
                    <div>
                        Telefone:{" "}
                        <a href="tel:+5581996346840">
                            (81) 99634-6840
                        </a>
                    </div>
                    <div className="mt-2">&copy; 2026 Luiz Gabriel. Todos os direitos reservados.</div>
                </div>
            </div>
        </footer>
    );
}