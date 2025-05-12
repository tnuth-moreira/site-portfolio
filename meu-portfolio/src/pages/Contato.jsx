import Layout from "../components/Layout";
import "../styles/contato.css";

function Contato() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada! Em breve entrarei em contato.");
  };

  return (
    <div className="contato-container">
      <Layout />
      <h2>Entre em contato</h2>
      <ul className="contato-lista">
        <li>
          📧 <strong>Email:</strong>{" "}
          <a
            href="mailto:tnuth.moreira@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            tnuth.moreira@gmail.com
          </a>
        </li>
        <li>
          📱 <strong>Telefone:</strong>{" "}
          <a
            href="tel:+5500000000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            (21) 98162-7900
          </a>
        </li>
        <li>
          💼 <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/thiago-nuth-moreira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/thiago-nuth-moreira/
          </a>
        </li>
        <li>
          🐙 <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/tnuth-moreira//"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/tnuth-moreira/
          </a>
        </li>
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu email" required />
        <textarea placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
