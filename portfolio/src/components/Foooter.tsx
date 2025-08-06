export const Footer = () => {
    return (
        <footer className="flex justify-center items-center p-4 text-white bg-gray-800">
            <div className="container text-center mx-auto">
                <ul className="list-none flex justify-center mb-3">
                    <li className="mx-3">
                        <a href="#" target="_blank" rel="noopener" aria-label="Facebook">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="#" target="_blank" rel="noopener" aria-label="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="#" target="_blank" rel="noopener" aria-label="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="#" target="_blank" rel="noopener" aria-label="Linkedin">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                </ul>

                <div>
                    <div>
                        Email:{" "}
                        <a href="mailto:luizgabrielbuarque@gmail.com" className="text-blue-500 hover:underline">
                            luizgabrielbuarque@gmail.com
                        </a>
                    </div>
                    <div>
                        Telefone:{" "}
                        <a href="tel:+5581996346840" className="text-blue-500 hover:underline">
                            (81) 99634-6840
                        </a>
                    </div>
                    <div className="mt-2">&copy; 2026 Luiz Gabriel. Todos os direitos reservados.</div>
                </div>
            </div>
        </footer>
    );
}