export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <h3 className="text-2xl font-bold">@LuizBuarqueDev</h3>
      <nav>
        <ul className="flex gap-10 items-center [&_li]:transition-transform [&_li]:hover:scale-110 [&_li]:hover:border-b-2 [&_li]:hover:border-white">
          <li>
            <a href="https://github.com/LuizBuarqueDev" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i> Github
            </a>
          </li>
          <li>

            <a href="https://www.linkedin.com/in/luiz-gabriel-buarque-vasconcelos-24074328b/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i> Linkedin
            </a>
          </li>
          <li>
            <a href="mailto:luizgabrielbuarque@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope"></i> E-mail
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}