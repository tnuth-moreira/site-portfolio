import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        background: "#1C1C1C",
        color: "#FDFDFD",
        padding: "5rem 2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Thiago Moreira
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Desenvolvedor Full Stack em formação
      </p>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <a href="#sobre">Sobre</a> | <a href="#projetos">Projetos</a> |{" "}
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
