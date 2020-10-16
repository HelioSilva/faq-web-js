import React from "react";
import QuestionBox from "../../components/itemQuestion/index";
import Header from "../../components/header/index";
import { Topo } from "./style";

const Home: React.FC = () => (
  <>
    <Topo>
      <Header />
    </Topo>
    <QuestionBox
      qtdAcessos="3"
      url="https:debian.org"
      titulos="Como gerar SPED FISCAL"
      qtdRespostas="8"
      qtdAcesso="214"
      autor="Helio Silva"
    />
    <br />
    <QuestionBox
      qtdAcessos="23"
      url="https:google.com"
      titulos="Erro: verifique parâmetro 99!"
      qtdRespostas="2"
      qtdAcesso="7"
      autor="Ronald Santos"
    />
  </>
);
export default Home;
