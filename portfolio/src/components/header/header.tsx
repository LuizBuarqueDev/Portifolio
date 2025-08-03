export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex gap-4 justify-between">
      <h1 className="text-2xl font-bold">@LuizBuarqueDev</h1>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i> Github
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i> Linkedin
            </a>
          </li>
          <li>
            <a href="mailto:seu@email.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-envelope"></i> E-mail
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}