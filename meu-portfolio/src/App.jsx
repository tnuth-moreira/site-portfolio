import { Route, Routes } from "react-router-dom";
import Contato from "./pages/Contato";
import Curriculo from "./pages/Curriculo";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/curriculo" element={<Curriculo />} />
      </Routes>
    </>
  );
}

export default App;
