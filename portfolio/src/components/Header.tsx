import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href={"/"} className="flex items-center gap-2">
        <h3 className="hidden sm:inline">@LuizBuarqueDev</h3>
      </Link>
      <nav>
        <ul className="flex gap-10 items-center [&_i]:text-2xl [&_li]:transition-transform [&_li]:hover:scale-110 [&_li]:hover:border-b-2 [&_li]:hover:border-white">
          <li>
            <a href="https://github.com/LuizBuarqueDev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <i className="fa-brands fa-github"></i>
              <span className="hidden sm:inline">Github</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/luiz-gabriel-buarque-vasconcelos-24074328b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <i className="fa-brands fa-linkedin"></i>
              <span className="hidden sm:inline">Linkedin</span>
            </a>
          </li>
          <li>
            <a href="mailto:luizgabrielbuarque@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <i className="fa-solid fa-envelope"></i>
              <span className="hidden sm:inline">E-mail</span>
            </a>
          </li>
          <li>
            <Link href="/certificates" className="flex items-center gap-2">
              <i className="fa-solid fa-certificate"></i>
              <span className="hidden sm:inline">Certificados</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
