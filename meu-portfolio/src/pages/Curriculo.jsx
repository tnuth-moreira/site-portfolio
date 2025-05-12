import Header from "../components/Header";

function Curriculo() {
  return (
    <div>
      <Header />
      <h2>Currículo</h2>
      <p>Você pode baixar meu currículo em PDF clicando no botão abaixo:</p>
      <a href="/meu-curriculo.pdf" download>
        <button>📄 Baixar Currículo</button>
      </a>
    </div>
  );
}

export default Curriculo;
