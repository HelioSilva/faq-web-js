import { createContext, useContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import Router from "next/router";
import SignService, { RefreshCookie } from "../Services/serviceSign";

export interface dataContext {
  name: string;
  logged: boolean;
  email: string;
  urlImage: string;
  id: string;
  signIn(data: Object): Promise<dataUserLogged>;
  signOut(): void;
  RefreshCookie(email: string): Promise<void>;
}

export interface dataUserLogged {
  email: string;
  name: string;
  logged: boolean;
  urlImage: string;
  id: string;
}

const AuthContext = createContext<dataContext>({} as dataContext);

const ContextAuth = ({ children }) => {
  const functionLogout = async () => {
    const { ...resto } = data;
    resto.logged = false;
    setData(resto);
    Cookie.remove("@faqweb:user");
    Router.push("/login");
  };

  const functionAuth = async ({ ...params }) => {
    const respUserLogged = await SignService(params);
    if (respUserLogged.logged) {
      setData({
        logged: true,
        email: respUserLogged.email,
        name: respUserLogged.name,
        urlImage: respUserLogged.urlImage,
        id: respUserLogged.id,
        signIn: functionAuth,
        signOut: functionLogout,
        RefreshCookie: RefreshCookie,
      });
    }
    return respUserLogged;
  };

  const [data, setData] = useState<dataContext>(() => {
    const cookie = Cookie.get("@faqweb:user");

    if (cookie) {
      const cookieParsed: dataContext = JSON.parse(cookie);
      return {
        logged: cookieParsed.logged,
        name: cookieParsed.name,
        email: cookieParsed.email,
        id: cookieParsed.id,
        urlImage: cookieParsed.urlImage,
        signIn: functionAuth,
        signOut: functionLogout,
        RefreshCookie: RefreshCookie,
      };
    } else {
      return {
        logged: false,
        email: "",
        name: "",
        urlImage: "",
        id: "",
        signIn: functionAuth,
        signOut: functionLogout,
        RefreshCookie: RefreshCookie,
      };
    }
  });

  useEffect(() => {
    if (!data.logged) {
      Router.push("/login");
    }
  }, [data]);

  return (
    <AuthContext.Provider value={data as dataContext}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): dataContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth só pode ser usado com o ContextAuth por volta dos componentes"
    );
  }

  return context;
}

export { ContextAuth, AuthContext, useAuth };
