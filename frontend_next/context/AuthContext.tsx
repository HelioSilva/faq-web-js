import { createContext, useContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import api from "../Services/api";
// import { Router } from "next/router";
import Router from "next/router";

interface dadosAuth {
  name: string;
  urlImagem?: string;
  signIn(data: Object): Promise<boolean>;
}

const AuthContext = createContext<dadosAuth>({} as dadosAuth);

const ContextAuth = ({ children }) => {
  const teste = async ({ ...dados }) => {
    const resp = await api.post("/users/login", {
      email: dados.email,
      password: dados.password,
    });

    if (resp.data.acesso) {
      const { ...resto } = data;
      resto.name = "Login OK";
      setData(resto);
      return true;
    } else {
      const { ...resto } = data;
      resto.name = "Login fail";
      setData(resto);
      return false;
    }
  };

  const [data, setData] = useState<dadosAuth>({
    name: "Anonimo",
    urlImagem: "/user.png",
    signIn: teste,
  });

  useEffect(() => {
    console.log("asa");
    const cookie = Cookie.get("@faqweb:user");
    if (cookie) {
      const meuOBJ = JSON.parse(cookie);
      const { ...resto }: dadosAuth = data;
      resto.name = meuOBJ.name;
      setData(resto as dadosAuth);
      console.log(resto);
    } else {
      Router.push("/login");
    }
  }, []);

  useEffect(() => {
    Cookie.set("@faqweb:user", JSON.stringify(data), {
      expires: 7,
    });
  }, [data]);

  return (
    <AuthContext.Provider value={data as dadosAuth}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): dadosAuth {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth só pode ser usado com o ContextAuth por volta dos componentes"
    );
  }

  return context;
}

export { ContextAuth, AuthContext, useAuth };
