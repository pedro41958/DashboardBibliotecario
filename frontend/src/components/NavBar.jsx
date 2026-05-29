import {
  House,
  BookCopy,
  BookPlus,
  Settings,
  UserPlus,
  UserCheck,
} from "lucide-react";

function NavBar({ mudarPagina }) {
  const menu = [
    { id: "inicio", icon: <House size={20} />, label: "Início" },
    {
      id: "listarLivros",
      icon: <BookCopy size={20} />,
      label: "Listar Livros",
    },
    { id: "novoLivro", icon: <BookPlus size={20} />, label: "Novo Livro" },
    { id: "ajustes", icon: <Settings size={20} />, label: "Ajustes" },
    {
      id: "cadastrarUsuario",
      icon: <UserPlus size={20} />,
      label: "Cadastro de Usuário",
    },
    {
      id: "loginUsuario",
      icon: <UserCheck size={20} />,
      label: "Login de Usuário",
    },
  ];

  return (
    <>
      <div className="bg-sky-950 w-full min-w-1/6 h-full col-span-1 p-8 border-r-3 border-sky-900">
        <h1 className="text-cyan-300 font-semibold text-3xl mt-2 mb-20">
          LibManager
        </h1>

        <div className="grid grid-rows-4 gap-8 text-gray-300 font-semibold text-[20px]">
          {menu.map((item) => (
            <div
              key={item.id}
              className="flex items-center hover:text-lime-300 cursor-pointer"
              onClick={() => mudarPagina(item.id)}
            >
              <div className="min-w-6">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavBar;
