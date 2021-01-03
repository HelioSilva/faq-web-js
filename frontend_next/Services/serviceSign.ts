import Cookie from "js-cookie";
import { dataUserLogged } from "../context/AuthContext";
import api from "../Services/api";

const SignService = async ({ ...dados }) => {
  Cookie.remove("@faqweb:user");
  const resp = await api.post("/users/login", {
    email: dados.email,
    password: dados.password,
  });

  if (resp.data.acesso) {
    const { ...infoUser } = resp.data.userLogged;
    const resposta: dataUserLogged = {
      email: infoUser.email,
      name: infoUser.name,
      urlImage: infoUser.url_image,
      logged: true,
      id: infoUser.id,
    };

    Cookie.set("@faqweb:user", JSON.stringify(resposta), {
      expires: 2,
    });

    return resposta;
  } else {
    const resposta: dataUserLogged = {
      email: "",
      name: "",
      urlImage: "",
      logged: false,
      id: "",
    };

    return resposta;
  }
};

export const RefreshCookie = async (email: string) => {
  const resp = await (await api.get(`/users/${email}`)).data;

  if (resp.status === 200) {
    const resposta: dataUserLogged = {
      email: resp.email,
      name: resp.name,
      urlImage: resp.url_image,
      logged: true,
      id: resp.id,
    };

    Cookie.set("@faqweb:user", JSON.stringify(resposta), {
      expires: 2,
    });
  }
};

export default SignService;
