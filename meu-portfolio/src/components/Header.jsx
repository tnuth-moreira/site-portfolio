import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header class="header-home">
      <nav>
        <Link to="/">Início</Link> |<Link to="/sobre">Sobre</Link> |
        <Link to="/projetos">Projetos</Link> |{" "}
        <Link to="/curriculo">Currículo</Link> |{" "}
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
