import { useState } from "react";
import NavBar from "./components/NavBar";
import ListarLivros from "./components/ListarLivros";
import CadastrarUsuario from "./components/CadastrarUsuario";
import LoginUsuario from "./components/LoginUsuario";

function App() {
  const [paginaAtiva, setPaginaAtiva] = useState("listarLivros");

  function mudarPagina() {
    if (paginaAtiva === "listarLivros") {
      return <ListarLivros />;
    } else if (paginaAtiva === "cadastrarUsuario") {
      return <CadastrarUsuario />;
    } else if (paginaAtiva === "loginUsuario") {
      return <LoginUsuario />;
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
