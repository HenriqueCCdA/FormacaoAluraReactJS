import { createContext, useContext } from "react";
import http from "../http";


const SessaoUsuarioContext = createContext({
  usuarioEstaLogado: false,
  login: (email, senha) => null,
  logout: () => null,
  perfil: {},
});

export const useSessaoUsuarioContext = () => {
  return useContext(SessaoUsuarioContext);
}

export const SessaoUsuarioProvider = ({children}) => {

  const login = (email, senha) => {
    http.post('auth/login', {
      email,
      senha
    })
      .then(resposta => console.log(resposta))
      .catch(error => console.error(error))
  }

  const value = {
    login
  }
  return (<SessaoUsuarioContext.Provider value={value}>
    {children}
  </SessaoUsuarioContext.Provider>)
}
