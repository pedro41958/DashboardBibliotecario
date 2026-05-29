function CadastrarUsuario() {
  return (
    <div className="grid col-span-5 w-full h-full bg-white ">
      <div className="flex flex-col justify-center items-center">
        <form
          action=""
          className="flex flex-col justify-center items-center border-2 bg-gray-500 p-5 rounded gap-5"
        >
          <label className="flex flex-col justify-center items-center">
            Nome
            <input type="text" className="bg-white" />
          </label>
          <label className="flex flex-col justify-center items-center">
            Email
            <input type="email" className="bg-white" />
          </label>
          <label className="flex flex-col justify-center items-center">
            Senha
            <input type="text" className="bg-white" />
          </label>
          <button className="bg-white w-20">Enviar!</button>
        </form>
      </div>
    </div>
  );
}

export default CadastrarUsuario;
