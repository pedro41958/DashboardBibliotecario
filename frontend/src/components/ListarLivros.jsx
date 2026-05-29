import { useEffect } from "react";
import { useState } from "react";

function ListarLivros() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/livros")
      .then((res) => res.json())
      .then((data) => setLivros(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="grid col-span-5 w-full h-full bg-gray-900 p-20 pt-30">
        <h1 className="text-cyan-300 font-bold text-3xl row-span-1">
          DASHBOARD DO BIBLIOTECÁRIO
        </h1>

        <div className="bg-cyan-950 p-5 rounded border-t-3 border-t-lime-300 h-fit">
          <div className="flex justify-between mb-5">
            <h2 className="text-white font-semibold">Acervo de Livros</h2>
            <h3 className="text-lime-300 font-semibold">
              {livros.length} Livros Cadastrados
            </h3>
          </div>

          <table className="w-full">
            <tr className="bg-gray-600 text-cyan-300 border-b-2 border-b-gray-800">
              <th>Título</th>
              <th>Autor</th>
              <th>Ano</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>

            {livros.map((livros) => (
              <tr className="text-gray-200 font-semibold text-center">
                <td>{livros.titulo}</td>
                <td>{livros.autor}</td>
                <td>{livros.ano}</td>
                <td
                  className={`${
                    livros.disponivel ? "text-cyan-400" : "text-pink-400"
                  }`}
                >
                  {livros.disponivel ? "Disponível" : "Emprestado"}
                </td>
              </tr>
            ))}
          </table>
        </div>

        <div className="flex justify-between items-center">
          <div className="bg-gray-950 p-5 rounded border-l-3 border-cyan-300">
            <h4 className="text-white font-semibold">Estética Tailwind:</h4>
            <p className="text-gray-400">
              Cores sóbrias (Cinza/Azul) para sistemas administrativos.
            </p>
          </div>
          <div className="bg-gray-950 p-5 rounded border-l-3 border-cyan-300">
            <h4 className="text-white font-semibold">Dados Estruturados</h4>
            <p className="text-gray-400">
              Foco em tabelas para manipulação eficiente de informações.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarLivros;
