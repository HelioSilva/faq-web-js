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
      autor="Ronald Santos"
    />
  </>
);
export default Home;
