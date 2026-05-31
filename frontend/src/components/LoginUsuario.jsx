import { useState } from "react";
import axios from "axios";

function CadastrarUsuario() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const resposta = await axios.post("http://localhost:3000/login", {
        email,
        senha,
      });

      const token = resposta.data.token;

      localStorage.setItem("token", token);

      alert("Login realizado!");
    } catch (error) {
      alert("Erro ao fazer login");
    }
  }

  return (
    <div className="grid col-span-5 w-full h-full bg-gray-900 p-20 grid-rows-6 pt-30">
      <h1 className="text-cyan-300 font-bold text-3xl row-span-1">LOGIN</h1>
      <div className="flex flex-col items-center row-span-5 h-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center bg-cyan-950 rounded border-t-3 border-t-lime-300 gap-5 text-white font-semibol h-2/3 w-1/3 font-semibold"
        >
          <label className="flex flex-col justify-center items-center">
            Email
            <input
              type="email"
              className="bg-white p-1 rounded text-gray-800"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col justify-center items-center">
            Senha
            <input
              type="text"
              className="bg-white p-1 rounded text-gray-800"
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
          <button
            className="bg-white w-auto p-2 cursor-pointer text-gray-900 rounded mt-15 hover:bg-gray-200"
            type="submit"
          >
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default CadastrarUsuario;
