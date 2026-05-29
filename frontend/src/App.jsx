import NavBar from "./components/NavBar";
import ListarLivros from "./components/ListarLivros";
import { useState } from "react";
import CadastrarUsuario from "./components/CadastrarUsuario";

function App() {
  const [paginaAtiva, setPaginaAtiva] = useState("listarLivros");

  function mudarPagina() {
    if (paginaAtiva === "listarLivros") {
      return <ListarLivros />;
    } else if (paginaAtiva === "cadastrarUsuario") {
      return <CadastrarUsuario />;
    }
  }

  return (
    <>
      <div className="grid bg-black w-screen h-screen grid-cols-6">
        <NavBar mudarPagina={setPaginaAtiva} />
        {mudarPagina()}
      </div>
    </>
  );
}

export default App;
