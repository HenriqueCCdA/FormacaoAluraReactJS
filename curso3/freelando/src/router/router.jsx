import { createBrowserRouter } from "react-router-dom"
import Concluido from "../paginas/Cadastro/Concluido";
import DadosPessoais from "../paginas/Cadastro/DadosPessoais";
import Interesses from "../paginas/Cadastro/Interesses";
import LayoutBaseCadastro from "../paginas/Cadastro/LayoutBaseCadastro";
import SelecaoCliente from "../paginas/Cadastro/SelecaoCliente";
import LayoutBase from "../paginas/LayoutBase";
import Pagina404 from "../paginas/erros/Pagina404";
import Login from "../paginas/Login/Login";
import Perfil from "../paginas/Perfil/Perfil"
import PaginaInicial from "../paginas/PaginaInicial/PaginaInicial";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        ErrorBoundary: Pagina404,
        children: [
            {
                path: "",
                element: <PaginaInicial />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "area-logada",
                children: [
                    {
                        path: 'perfil',
                        element: <Perfil />
                    }
                ]
            },
            {
                path:'cadastro',
                element: <LayoutBaseCadastro />,
                children: [
                    {
                        path: '',
                        element: <SelecaoCliente />
                    },
                    {
                        path: 'interesses',
                        element: <Interesses />
                    },
                    {
                        path: 'dados-pessoais',
                        element: <DadosPessoais />
                    },
                    {
                        path: 'concluido',
                        element: <Concluido />
                    }
                ]
            }
        ],
    },
]);
